from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.get_lojas import router as get_lojas_router
from routes.get_loja import router as get_loja_router
from routes.put_loja import router as put_loja_router
from routes.put_produto import router as put_produto_router

app = FastAPI(title="Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"mensagem": "Hello world!"}

app.include_router(get_lojas_router)
app.include_router(get_loja_router)
app.include_router(put_loja_router)
app.include_router(put_produto_router)