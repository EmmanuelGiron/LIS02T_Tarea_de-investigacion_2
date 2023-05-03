<?php

namespace App\Http\Controllers;

use App\Models\Cupones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CuponesController extends Controller
{
        
    /**
     * Display the specified resource.
     */
    public function show(Cupones $cupones,$id)
    {
        $sentencia=DB::table('cupon')            
            ->join('estado_cupon','estado_cupon.ID_Estado_Cupon','=','cupon.ID_Estado_Cupon')     
            ->select('ID_Cupon','DUI','ID_Oferta','estado_cupon.Estado')
            ->where('ID_Cupon',$id)
            ->get();
            return $sentencia;
    }

    
    /**
     * Update the specified resource in storage.
     */
    public function update($id,$estado)
    {
        $sentencia = DB::table('cupon')
                        ->where('ID_Cupon', $id)                        
                        ->update(['ID_Estado_Cupon' => $estado]);
        return $sentencia;
        
    }
                    

}
