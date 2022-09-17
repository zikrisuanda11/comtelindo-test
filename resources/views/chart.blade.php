@extends('layouts.tank')

@section('content')
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <!-- Navbar -->
        <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
            data-scroll="true">
            <div class="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                        <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Chart</li>
                    </ol>
                    <h6 class="font-weight-bolder mb-0">Chart</h6>
                </nav>
            </div>
        </nav>
        <!-- End Navbar -->
        <div class="container-fluid py-4">
        
            <div class="row mt-4">
                <div class="col-lg-max col-md-6 mt-3 mb-5">
                    <div class="card z-index-2 ">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                            <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                <div class="chart">
                                    <canvas id="chart-bars" class="chart-canvas" height="400"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="mb-0 ">Volume</h6>
                            <p class="text-sm ">Satuan Volume dalam Liter</p>
                            <hr class="dark horizontal">
                            <div class="d-flex ">
                                {{-- buat get tanggal dari created_at --}}
                                <i class="material-icons text-sm my-auto me-1">schedule</i>
                                <p class="mb-0 text-sm" id="tanggal-volume"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-max col-md-6 mt-3 mb-5">
                    <div class="card z-index-2  ">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                            <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                                <div class="chart">
                                    <canvas id="chart-line" class="chart-canvas" height="400"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="mb-0 ">Temperature </h6>
                            <p class="text-sm ">Satuan Temperature: Derajat `&#176;` </p>
                            <hr class="dark horizontal">
                            <div class="d-flex ">
                                <i class="material-icons text-sm my-auto me-1">schedule</i>
                                <p class="mb-0 text-sm" id="tanggal-temperature"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-max mt-4 mb-3">
                <div class="card z-index-2 ">
                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                        <div class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                            <div class="chart">
                                <canvas id="chart-line-tasks" class="chart-canvas" height="250"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h6 class="mb-0 ">Kapasitas Maksimum</h6>
                        <p class="text-sm ">Satuan Kapasitas Maksimum dalam Liter</p>
                        <hr class="dark horizontal">
                        <div class="d-flex ">
                            <i class="material-icons text-sm my-auto me-1">schedule</i>
                            <p class="mb-0 text-sm" id="tanggal-kapasitas-maksimum"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection

@push('chart-tank')
    <script src="{{url('/assets/js/chart.js')}}"></script>
@endpush
