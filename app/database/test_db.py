from app.database.connection import database


try:
    database.command("ping")
    print("MongoDB Connected Successfully")

except Exception as e:
    print(e)