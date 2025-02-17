<?php

namespace App\Http\Controllers;

use App\Models\Data;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DataController extends Controller
{
    public function index()
    {
        $data=Data::paginate(4);
        return Inertia::render('Data')->with('data', $data);
    }

    public function add()
    {
        return Inertia::render('InputData');
    }

    public function store(Request $request)
    {
        $request->validate([
            'resi'=>'required',
            'courier'=>'required',
            'customer'=>'required',
            'note'=>'nullable',
        ]);

        Data::create([
            'resi'=>$request->resi,
            'courier'=>$request->courier,
            'customer'=>$request->customer,
            'note'=>$request->note,
        ]);
    }

    public function edit(String $id)
    {
        $data=Data::find($id);
        return Inertia::render('EditData', compact('data'));
    }

    public function update(Request $request, String $id)
    {
        $request->validate([
            'resi'=>'required',
            'courier'=>'required',
            'customer'=>'required',
            'note'=>'nullable',
        ]);

        Data::find($id)->update([
            'resi'=>$request->resi,
            'courier'=>$request->courier,
            'customer'=>$request->customer,
            'note'=>$request->note,
        ]);

        return redirect('/');
    }

    public function delete(String $id)
    {
        Data::find($id)->delete();
    }
}
