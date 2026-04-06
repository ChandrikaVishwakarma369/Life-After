from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)


basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'behavior.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)

class BehaviorLog(db.Model):
    __tablename__ = 'behavior_logs'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    activity = db.Column(db.String(255), nullable=False)
    mood = db.Column(db.String(50))
    context_notes = db.Column(db.Text)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
       
        if not User.query.filter_by(name="Priya").first():
            test_user = User(name="Priya")
            db.session.add(test_user)
            db.session.commit()
            
            log = BehaviorLog(user_id=test_user.id, activity="school", mood="happy", context_notes="First day of project!")
            db.session.add(log)
            db.session.commit()
            
        print("SUCCESS! SQLite Database 'behavior.db' ban gaya hai.")
        print("Ab password ka koi tension nahi!")