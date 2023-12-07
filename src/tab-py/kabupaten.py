import requests
import json
import time

PROVINCE_CODES = ["11", "12", "13", "14", "15", "16", "17", "18", "19", 
                  "21", "31", "32", "33", "34", "35", "36", "51", "52", 
                  "53", "61", "62", "63", "64", "65", "71", "72", "73", 
                  "74", "75", "76", "81", "82", "91", "92", "93", "94", "95"]


def fetch_data(province_code):
    url = f"https://wilayah.id/api/regencies/{province_code}.json"
    try:
        response = requests.get(url)
        response.raise_for_status()  
        
        
        data = response.json().get("data", [])
        extracted_data = [{"code": item["code"], "name": item["name"]} for item in data]
        
        return extracted_data
    except requests.HTTPError as e:
        print(f"HTTP error occurred for province code {province_code}: {e}")
        return None
    except Exception as e:
        print(f"An error occurred for province code {province_code}: {e}")
        return None


all_data = {}
for code in PROVINCE_CODES:
    data = fetch_data(code)
    if data:
        all_data[code] = data
        time.sleep(1)


with open('kabupaten_data.json', 'w') as file:
    json.dump(all_data, file, indent=4)

print('Extracted data saved in kabupaten_data.json')
