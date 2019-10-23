<?php

namespace App\Models;

use App\Traits\WithPdfConverter;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use WithPdfConverter;

    protected $fillable = [
        'name', 'path', 'pdfPath', 'type', 'user_id'
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }
}
