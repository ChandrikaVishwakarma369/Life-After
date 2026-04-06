from init_db import app, db, User, BehaviorLog

with app.app_context():
   
    user = User.query.filter_by(name="Priya").first()
    if not user:
        user = User(name="Priya")
        db.session.add(user)
        db.session.commit()
        print("User 'Priya' created!")

    bulk_data = [
        #Introduction
        {"act": "Identity", "mood": "Neutral", "note": "Mera naam Priya Sharma hai. Mere Papa Mr. Rajesh Sharma hain aur Mumma Mrs. Sunita Sharma."},
        {"act": "Hobbies", "mood": "Happy", "note": "Mujhe sketching karna aur K-Dramas dekhna bahut pasand hai."},
        {"act": "Strengths", "mood": "Confident", "note": "Meri strength meri creativity aur Software Architecture ki knowledge hai."},

        #Friend
        {"act": "Canteen with Friends", "mood": "Fun", "note": "Yaar aaj canteen mein bahut maza aaya, Momos party ki sabne!"},
        {"act": "Late Night Chat", "mood": "Sleepy", "note": "Ofo, ye assignments kabhi khatam kyun nahi hote? Chill maarne ka mann hai."},
        {"act": "College Fest", "mood": "Excited", "note": "Fest ka scene mast hai, dance performance ke liye ready hoon!"},

        #Family
        {"act": "Dinner with Parents", "mood": "Peaceful", "note": "Aaj ghar par sabne saath mein khana khaya, Papa result se khush the."},
        {"act": "Helping Mumma", "mood": "Helpful", "note": "Mumma ki kitchen mein help ki, unhone meri favorite dish banayi."},
        {"act": "Morning Prayer", "mood": "Calm", "note": "Dadi ke saath baith kar thoda waqt bitaya, sukoon mila."},

        #Proffessional
        {"act": "Software Exam", "mood": "Focused", "note": "Software Architecture ka paper achha gaya, saare technical questions solve kiye."},
        {"act": "Internship Work", "mood": "Serious", "note": "Currently working on a Python project. Documentation complete karni hai."},
        {"act": "Presentation", "mood": "Professional", "note": "Presented my AI Twin idea to HOD sir. Response positive tha."}
        
    ]

    print("Data loading shuru ho raha hai...")
    for d in bulk_data:
        new_log = BehaviorLog(
            user_id=user.id, 
            activity=d['act'], 
            mood=d['mood'], 
            context_notes=d['note']
        )
        db.session.add(new_log)
    
    db.session.commit()
    print(f"SUCCESS! {len(bulk_data)} entries database mein save ho gayi hain.")