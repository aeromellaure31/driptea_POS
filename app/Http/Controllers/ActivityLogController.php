<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ActivityLog;

class ActivityLogController extends Controller
{
    public function getActivityLog(){
        $activityLog = ActivityLog::with('getCashier')->get();
        return response()->json(compact('activityLog'));
    }
}
