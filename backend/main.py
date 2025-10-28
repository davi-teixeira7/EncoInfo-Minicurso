from fastapi import FastAPI

app = FastAPI(title="EncoInfo API")

@app.get("/")
async def read_root():
    return {"message": "Hello from FastAPI!"}