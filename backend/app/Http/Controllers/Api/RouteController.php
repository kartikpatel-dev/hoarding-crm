<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RouteMaster;
use Illuminate\Http\Request;

class RouteController extends Controller
{
    public function index()
    {
        return RouteMaster::latest()->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'route_name' => 'required',
            'start_city' => 'required',
            'end_city' => 'required'
        ]);

        return RouteMaster::create($request->all());
    }

    public function show(RouteMaster $route)
    {
        return $route;
    }

    public function update(Request $request, RouteMaster $route)
    {
        $route->update($request->all());

        return $route;
    }

    public function destroy(RouteMaster $route)
    {
        $route->delete();

        return response()->json([
            'message' => 'Deleted'
        ]);
    }
}