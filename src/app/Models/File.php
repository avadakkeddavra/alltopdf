<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class File extends Model
{
    protected $fillable = [
        'name', 'path', 'pdfPath', 'type', 'user_id'
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function convert() {
        $source = Storage::disk('local')->url($this->path);
        $destination = Storage::disk('users')->url($this->user_id.'/'.explode('.', $this->name)[0].'.pdf');
        $response = shell_exec("unoconv -f pdf -o $destination  $source");
        if(!$response) {
            $this->pdfPath = $destination;
            $this->save();
            return $this;
        } else {
            throw new \Exception($response);
        }
    }
}
