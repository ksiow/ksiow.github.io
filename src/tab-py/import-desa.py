import json

def capitalize_province_name(data):
    for key, value in data.items():
        for entry in value:
            # Ubah setiap awal kata dari provinsi menjadi huruf besar
            entry['provinsi'] = entry['provinsi'].title()
            entry['kabupaten'] = entry['kabupaten'].title()
            entry['kecamatan'] = entry['kecamatan'].title()
            entry['desa'] = entry['desa'].title()
            entry['status'] = entry['status'].title()


    return data

# Baca isi dari file JSON (contoh menggunakan kabupaten_data.json)
with open('src/tab-json/desa_data.json', 'r') as file:
    data = json.load(file)

# Panggil fungsi untuk mengubah data provinsi menjadi huruf besar pada file JSON
modified_data = capitalize_province_name(data)

# Simpan perubahan kembali ke file JSON
with open('desa_data.json', 'w') as file:
    json.dump(modified_data, file, indent=4)
