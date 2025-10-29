from sqlmodel import create_engine

DATABASE_URL = "postgresql+psycopg2://postgres.khaajlvbbipyotipikew:encoinfominicurso2025@aws-1-sa-east-1.pooler.supabase.com:5432/postgres"

engine = create_engine(
    DATABASE_URL,
    connect_args={
        "sslmode": "require"
    }
)
