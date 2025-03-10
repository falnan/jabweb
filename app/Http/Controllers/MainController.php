<?php

namespace App\Http\Controllers;

use App\Exports\DataExport;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class MainController extends Controller
{
    public function login()
    {
        return Inertia::render('Login');
    }

    public function auth(Request $request)
    {

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);


        if (Auth::attempt($credentials)) {

            $request->session()->regenerate();
            return Inertia::render('InputData');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    }

    public function export(Request $request)
    {
        $startDate = $request->query('startDate');
        $endDate = $request->query('endDate');


        $request->validate([
            'startDate' => 'required|date',
            'endDate' => 'required|date',
        ]);

        return Excel::download(new DataExport($startDate, $endDate), 'tes.xlsx');
    }
}
