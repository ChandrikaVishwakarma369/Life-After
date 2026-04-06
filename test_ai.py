import requests

# Hum server ko request bhej rahe hain
url = "http://127.0.0.1:5000/chat"

# 1. TEST: Friend Mode
data_friend = {
    "query": "Yaar Priya, aaj ka din kaisa raha school mein?",
    "mode": "friend"
}

# 2. TEST: Professional Mode
data_prof = {
    "query": "Priya, can you summarize your current mood and activities?",
    "mode": "professional"
}

print("--- TESTING FRIEND MODE ---")
response1 = requests.post(url, json=data_friend)
print(response1.json()['reply'])

print("\n--- TESTING PROFESSIONAL MODE ---")
response2 = requests.post(url, json=data_prof)
print(response2.json()['reply'])