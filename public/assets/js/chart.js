$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "/data-tank",
        dataType: "json",
        success: function (response) {

            let nama = [];
            response.data.forEach(function (i) {
                nama.push(i.nama);
            });

            let volume = [];
            response.data.forEach(function (i) {
                volume.push(i.volume);
            })

            var ctx = $("#chart-bars");
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: nama,
                    datasets: [{
                        label: "Volume",
                        tension: 0.4,
                        borderWidth: 0,
                        borderRadius: 4,
                        borderSkipped: false,
                        backgroundColor: "rgba(255, 255, 255, .8)",
                        data: volume,
                        maxBarThickness: 8
                    },],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    scales: {
                        y: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 500,
                                beginAtZero: true,
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                                color: "#fff"
                            },
                        },
                        x: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                    },
                },
            });
        }
    });



    $.ajax({
        type: "get",
        url: "/data-tank",
        dataType: "json",
        success: function (response) {

            let temperature = [];
            response.data.forEach(function (i) {
                temperature.push(i.temperature);
            });

            let nama = [];
            response.data.forEach(function (i) {
                nama.push(i.nama);
            });

            var ctx2 = $("#chart-line");

            new Chart(ctx2, {
                type: "line",
                data: {
                    labels: nama,
                    datasets: [{
                        label: "Temperature",
                        tension: 0,
                        borderWidth: 0,
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(255, 255, 255, .8)",
                        pointBorderColor: "transparent",
                        borderColor: "rgba(255, 255, 255, .8)",
                        borderColor: "rgba(255, 255, 255, .8)",
                        borderWidth: 4,
                        backgroundColor: "transparent",
                        fill: true,
                        data: temperature,
                        maxBarThickness: 6

                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    scales: {
                        y: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                        x: {
                            grid: {
                                drawBorder: false,
                                display: false,
                                drawOnChartArea: false,
                                drawTicks: false,
                                borderDash: [5, 5]
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                    },
                },
            });
        }
    });

    $.ajax({
        type: "get",
        url: "/data-tank",
        dataType: "json",
        success: function (response) {

            let kapasitas_maksimum = [];
            response.data.forEach(function (i) {
                kapasitas_maksimum.push(i.kapasitas_maksimum);
            });

            let nama = [];
            response.data.forEach(function (i) {
                nama.push(i.nama);
            });

            var ctx3 = $("#chart-line-tasks");

            new Chart(ctx3, {
                type: "line",
                data: {
                    labels: nama,
                    datasets: [{
                        label: "Kapasitas Maksimum",
                        tension: 0,
                        borderWidth: 0,
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(255, 255, 255, .8)",
                        pointBorderColor: "transparent",
                        borderColor: "rgba(255, 255, 255, .8)",
                        borderWidth: 4,
                        backgroundColor: "transparent",
                        fill: true,
                        data: kapasitas_maksimum,
                        maxBarThickness: 6

                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    scales: {
                        y: {
                            grid: {
                                drawBorder: false,
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                borderDash: [5, 5],
                                color: 'rgba(255, 255, 255, .2)'
                            },
                            ticks: {
                                display: true,
                                padding: 10,
                                color: '#f8f9fa',
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                        x: {
                            grid: {
                                drawBorder: false,
                                display: false,
                                drawOnChartArea: false,
                                drawTicks: false,
                                borderDash: [5, 5]
                            },
                            ticks: {
                                display: true,
                                color: '#f8f9fa',
                                padding: 10,
                                font: {
                                    size: 14,
                                    weight: 300,
                                    family: "Roboto",
                                    style: 'normal',
                                    lineHeight: 2
                                },
                            }
                        },
                    },
                },
            });
        }
    });

    $.ajax({
        type: "get",
        url: "/data-tank",
        dataType: "json",
        success: function (response) {
            
            function formatDate(value){
                if(value){
                    Number.prototype.padLeft = function(base,chr){
                        var  len = (String(base || 10).length - String(this).length)+1;
                        return len > 0? new Array(len).join(chr || '0')+this : this;
                    }
                var d = new Date(value),
                dformat = [ (d.getMonth()+1).padLeft(),
                            d.getDate().padLeft(),
                            d.getFullYear()].join('/');
                 return dformat;
                }
            }
            
            let date = [];
            response.data.forEach(function (i) {
                date.push(i.created_at);
            });

            $('#tanggal-volume').text(formatDate(date[0]));
            $('#tanggal-temperature').text(formatDate(date[0]));
            $('#tanggal-kapasitas-maksimum').text(formatDate(date[0]));
        }
    });

    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
        var options = {
            damping: '0.5'
        }
        Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
});