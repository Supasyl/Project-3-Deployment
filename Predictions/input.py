import requests

def run_request():
    url = 'http://127.0.0.1:5000/survey'
    
    # how to collect the information from the field? Similar to Javascript?
    # can this be done in jupyter and exported to .py? I need to convert the information to the correct value from the input.
    
    
    
    body = {
        "petal_length": 2,
        "sepal_length": 2,
        "petal_width": 0.5,
        "sepal_width": 3
    }
    response = requests.post(url, data=body)
    return response.json()