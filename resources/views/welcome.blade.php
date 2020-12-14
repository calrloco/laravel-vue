<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <script src="{{asset('js/app.js')}}" defer></script>
    </head>
    <body>
       <div id="app">
        {{-- // componente speciale di vue per fare il render --}}
       <index></index>
       </div>
     
    </body>
</html>
