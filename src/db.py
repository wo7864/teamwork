from pymongo import MongoClient

def db_manager():
    client = MongoClient('mongodb://localhost:27017')
    db = client.teamwork
    return db
