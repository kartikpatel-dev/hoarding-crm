<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return response()->json([

            'total_hoardings' => 0,

            'available_hoardings' => 0,

            'active_campaigns' => 0,

            'monthly_income' => 0,

            'pending_payments' => 0,

            'expenses' => 0

        ]);
    }
}
