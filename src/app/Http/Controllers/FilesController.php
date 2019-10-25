<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function uploadFiles(Request $request) {
        $files = $request->file('files');
        $dataToResponse = [];
        foreach($files as $file) {
            $path = $file->store('/users/'.$request->user()->id);
            // TODO: Refactor it is bad
            $file = File::create([
                'name' => $file->getClientOriginalName(),
                'user_id' => $request->user()->id,
                'pdfPath' => null,
                'path' => $path,
                'type' => $file->getClientOriginalExtension(),
                'created_at' => date('Y-m-d'),
                'updated_at' => date('Y-m-d')
            ]);
            array_push($dataToResponse, $file);
        }

        return response()->json(['success' => true, 'data' => $dataToResponse]);
    }

    public function getUserFiles(Request $request) {
        $rowsPerPage = $request->rowsPerPage ? (int) $request->rowsPerPage : 5;
        $files = File::where('user_id', $request->user()->id)->orderBy('updated_at', "DESC")->paginate($rowsPerPage);
        return response()->json(['files' => $files]);
    }

    public function convertFileToPdf($id) {
        try {
            $file = File::find($id)->convert();

            return response()->json(['item' => $file]);
        } catch (\Exception $E) {
            return response()->json(['success' => false, 'error' => $E]);
        }
    }

}
