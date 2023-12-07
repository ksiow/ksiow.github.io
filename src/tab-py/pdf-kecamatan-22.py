import tabula
import json

df = tabula.read_pdf("idm-list/Ebook Peringkat IDM 2022.pdf", pages='2526') 
#last pages='262', '522-527','737-741', '1274-1287', '2582-2672', '2559-2582', '2672-2745', '2495-2558'

if isinstance(df, list):
    json_data = [table.to_dict(orient='records') for table in df]
    with open('output.json', 'w') as json_file:
        json.dump(json_data, json_file, indent=4)
else:
    json_data = df.to_dict(orient='records')
    with open('output.json', 'w') as json_file:
        json.dump(json_data, json_file, indent=4)
