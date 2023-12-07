
//provinsi
$(document).ready( function () {
    $('#datatables-provinsi').DataTable(
        {
            'ajax': '/src/tab-json/provinsi_data.json',
            'columns': [
                { 'data': 'id', 'searchable': true }, 
                { 'data': 'provinsi', 'searchable': true }, 
                { 'data': 'skor_2023', 'searchable': true},
                { 'data': 'skor_2022', 'searchable': true},
                { 'data': 'status', 'searchable': true },
                { 'data': 'rank'}
            ],
            responsive: true
        });
} );

//kabupaten
$(document).ready(function() {
    $('#datatables-kabupaten').DataTable({
        'ajax': {
            'url': '/src/tab-json/kabupaten_data.json',
            'dataSrc': function(data) {
                let processedData = [];

                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        processedData = processedData.concat(data[key]);
                    }
                }

                return processedData;
            },
            'error': function(xhr, error, thrown) {
                console.error('Error fetching data:', error);
            }
        },
        'columns': [
            {'data': 'id', 'searchable': true},
            {'data': 'provinsi', 'searchable': true},
            {'data': 'kabupaten', 'searchable': true},
            {'data': 'skor_2023', 'searchable': true},
            {'data': 'skor_2022', 'searchable': true},
            {'data': 'status', 'searchable': true},
            {'data': 'rank'}
        ],
        responsive: true
    });
});

//kecamatan
$(document).ready( function () {
    $('#datatables-kecamatan').DataTable(
        {
            'ajax': '/src/tab-json/kecamatan_updated.json',
            'columns': [
                {'data': 'id', 'searchable': true},
                {'data': 'provinsi', 'searchable': true},
                {'data': 'kecamatan', 'searchable': true},
                {'data': 'skor_2023', 'searchable': true},
                {'data': 'status', 'searchable': true},
                {'data': 'rank'},
                {'data': 'kabupaten', 'searchable': true}
            ],
            responsive: true
        });
});

//desa
$(document).ready( function () {
    $('#datatables-desa').DataTable(
        {
            'ajax': '/src/tab-json/desa_data.json',
            'columns': [
                {'data': 'id', 'searchable': true},
                {'data': 'provinsi', 'searchable': true},
                {'data': 'desa', 'searchable': true},
                {'data': 'skor_2023', 'searchable': true},
                {'data': 'skor_2022', 'searchable': true},
                {'data': 'status', 'searchable': true},
                {'data': 'rank'},
                {'data': 'kabupaten', 'searchable': true},
                {'data': 'kecamatan', 'searchable': true}
            ],
            responsive: true 
        });
} );


