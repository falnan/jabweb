<?php

namespace App\Http\Controllers;

use App\Models\Data;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DataController extends Controller
{
    public function index(Request $request)
    {

        $paramSearch = $request->search ?? "";
        $paramStartDate = $request->startDate ? Carbon::parse($request->startDate)->format("Y-m-H") : Carbon::now()->format("Y-m-H");
        $paramEndDate = $request->endDate ? Carbon::parse($request->endDate)->format("Y-m-H") : Carbon::now()->format("Y-m-H");

        $data = Data::where(function ($query) use ($paramSearch) {
            $query->where('resi', 'like', '%' . $paramSearch . '%')
                ->orWhere('customer', 'like', '%' . $paramSearch . '%');
        })
            // ->whereBetween('created_at', [$paramStartDate, $paramEndDate])
            ->paginate(10);

        return Inertia::render('Data')
            ->with('data', $data)
            ->with('searchValue', $paramSearch)
            ->with('startDateValue', $paramStartDate)
            ->with('endDateValue', $paramEndDate);
    }

    public function add()
    {
        return Inertia::render('InputData');
    }

    public function store(Request $request)
    {
        $request->validate([
            'resi' => 'required',
            'courier' => 'required',
            'customer' => 'required',
            'note' => 'nullable',
        ]);

        Data::create([
            'resi' => $request->resi,
            'courier' => $request->courier,
            'customer' => $request->customer,
            'note' => $request->note,
        ]);
    }

    public function edit(String $id)
    {
        $data = Data::find($id);
        return Inertia::render('EditData', compact('data'));
    }

    public function update(Request $request, String $id)
    {
        $request->validate([
            'resi' => 'required',
            'courier' => 'required',
            'customer' => 'required',
            'note' => 'nullable',
        ]);

        Data::find($id)->update([
            'resi' => $request->resi,
            'courier' => $request->courier,
            'customer' => $request->customer,
            'note' => $request->note,
        ]);

        return redirect('/');
    }

    public function delete(String $id)
    {
        Data::find($id)->delete();
    }
}
