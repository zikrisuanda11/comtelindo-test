<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="apple-touch-icon" sizes="76x76" href="{{url('/assets/img/apple-icon.png')}}">
    <link rel="icon" type="image/png" href="{{url('/assets/img/favicon.png')}}">
    <title>Tank Monitor</title>
    @include('includes.style')
</head>

<body class="g-sidenav-show  bg-gray-100">
    @include('includes.sidebar')

    @yield('content')

    {{-- @include('includes.footer') --}}

    @include('includes.script')

</body>

</html>
