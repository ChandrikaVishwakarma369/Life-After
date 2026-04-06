from flask import Flask, request, jsonify
from flask_cors import CORS  
from ai_engine import get_friend_response

app = Flask(__name__)
CORS(app)  

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_query = data.get('query')
    mode = data.get('mode', 'friend')
    
    
    ai_reply = get_friend_response(user_query, mode)
    
    return jsonify({"reply": ai_reply})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
