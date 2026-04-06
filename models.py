from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
  
    logs = db.relationship('BehaviorLog', backref='owner', lazy=True)

class BehaviorLog(db.Model):
    __tablename__ = 'behavior_logs'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    activity = db.Column(db.String(255), nullable=False) 
    mood = db.Column(db.String(50))                     
    context_notes = db.Column(db.Text)                  
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)