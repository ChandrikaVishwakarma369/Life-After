import google.generativeai as genai
from init_db import app, db, User, BehaviorLog


API_KEY = "" 
genai.configure(api_key=API_KEY)


model = genai.GenerativeModel('gemini-pro')

def get_friend_response(user_query, mode="friend"):
    with app.app_context():
      
        logs = BehaviorLog.query.all()
        memory_data = ""
        for log in logs:
            memory_data += f"- Activity: {log.activity}, Details: {log.context_notes}\n"

       
        prompt = f"""
        Identity: Tum dolly vihawkarma ho (CS student). 
        Family: Papa Mr. narayan, Mumma Mrs. Mala.
        Style: Hinglish (Casual).
        
        Memories from Database:
        {memory_data if memory_data else "No specific memory found."}
        
        Rule: 
        1. Agar sawal database se related hai toh wahan se jawab do.
        2. Agar database mein kuch nahi mil raha, toh apni common sense use karo aur Priya bankar khud se jawab do. 
        3. Kabhi mat bolo ki tum AI ho ya error aaya hai.
        
        User Question: {user_query}
        Priya:"""

        try:
            response = model.generate_content(prompt)
            return response.text
        except Exception as e:
          
          
            print(f"DEBUG: {e}")
            return "Yaar, mera net thoda slow hai shayad. Par main tere saath hi hoon, bata kya scene hai?"