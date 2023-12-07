import requests
import json

url = 'https://wilayah.id/api/provinces.json'


response = requests.get(url)

if response.status_code == 200:
    data = response.json()

    # Save data as a JSON file
    with open('provinsi_data.json', 'w') as file:
        json.dump(data, file, indent=4)
    print('JSON file created successfully.')
else:
    print('Failed to fetch data from the API.')
