import requests 

url = "http://127.0.0.1:5000/api/smoke_model"

data = {
    'AGE2': 8,
    'IRMARIT': 1,
    'HEALTH': 1,
    'MOVSINPYR2': 3,
    'SEXATRACT': 2,
    'SEXIDENT': 4,
    'DIFFTHINK': 2,
    'IREDUHIGHST2': 3,
    'WRKSTATWK2': 2,
    'WRKNUMJOB2': 2,
    'IRWRKSTAT': 2,
    'IRPINC3': 2,
    'CIG100LF': 2,
    'CIGTRY': 991,
    'ALCUS30D': 2
}


response = requests.post(url, json=data)
print(response.text)