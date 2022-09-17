$(document).ready(function () {
    $('#table-tank-unique').DataTable({
        processing: true,
        lengthMenu: [10, 50],
        ajax: '/data-tank',
        columns: [
            { mData: 'id' },
            { mData: 'nama' },
            {
                mData: 'status',
                render: function (data) {
                    if (data == 'normal')
                    {
                        return 'Normal'
                    }else if (data == 'refuelling')
                    {
                        return 'Refuelling'
                    }else if (data == 'kurang_dari_target')
                    {
                        return 'Kurang Dari Target'
                    }
                }
            },
            {
                mData: 'volume',
                render: function (data) {
                    return data + ' Liter'
                }
            },
            {
                mData: 'temperature',
                render: function (data) {
                    return data + '&#176;'
                }
            },
            {
                mData: 'kapasitas_maksimum',
                render: function (data) {
                    return data + ' Liter'
                }
            },
        ]
    });
});

var win = navigator.platform.indexOf('Win') > -1;
if (win && document.querySelector('#sidenav-scrollbar')) {
    var options = {
        damping: '0.5'
    }
    Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
}