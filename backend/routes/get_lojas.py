from fastapi import APIRouter
from sqlmodel import Session, select

from database import engine
from models.loja import Loja

router = APIRouter()


@router.get("/lojas")
def get_lojas():
    with Session(engine) as session:
        lojas = session.exec(select(Loja)).all()
        return [loja.model_dump() for loja in lojas]
