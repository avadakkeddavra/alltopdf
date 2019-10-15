<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TasksController extends Controller
{
   public function __construct() {
       $this->middleware('auth:api');
   }

   public function getAll() {
       return Task::all();
   }

   public function getMy(Request $request) {
       return $request->user()->tasks;
   }
}
