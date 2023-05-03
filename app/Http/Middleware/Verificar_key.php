<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Verificar_key
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

    public function handle($request, Closure $next)
    {
        // Obtenemos el api-key que el usuario envia
        $key = $request->headers->get('api-key');
        // Si coincide con el valor almacenado en la aplicacion
        // la aplicacion se sigue ejecutando
        if (isset($key) == env('API_KEY')) {
            return $next($request);
        } else {
            // Si falla devolvemos el mensaje de error
            return response()->json(['error' => 'unauthorized' ], 401);
        }
    }
}
