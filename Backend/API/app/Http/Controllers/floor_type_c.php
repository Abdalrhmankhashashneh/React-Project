<?php

namespace App\Http\Controllers;
use App\Models\floor_type;
use App\Models\Tables;
use App\Models\reservation;
use Illuminate\Http\Request;


class floor_type_c extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $floor_types = floor_type::all();
        return response()->json($floor_types);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'date' => 'required|date|unique',
            'time' => 'required|time|unique',
        ]);
       $res =  reservation::create($validatedData);
        return response()->json($res , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tables = Tables::where('floor_type_id', $id)->get();
        if($tables->count() > 0){

            return response()->json($tables);
        }
         return response()->json(['message' => 'No tables found'], 404);
       }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
