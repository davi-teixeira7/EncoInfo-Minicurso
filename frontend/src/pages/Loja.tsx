import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchLoja } from "../api/client"
import type { Loja } from "../api/models/Loja"
import ProdutoCard from "../components/ProdutoCard"
import Banner from "../components/Banner"

export default function Loja() {
  const { lojaId } = useParams<{ lojaId: string }>()
  const [loja, setLoja] = useState<Loja | null>(null)

  useEffect(() => {
    if (lojaId) fetchLoja(lojaId).then(setLoja)
  }, [lojaId])

  if (!loja) return <p className="text-center mt-10">Carregando...</p>

  return (
    <main
      className="min-h-screen flex flex-col items-center text-black"
      style={{ backgroundColor: loja.cor_loja || "#ffffff" }}
    >
      <Banner src={loja.banner} alt={`Banner da loja ${loja.nome}`} />

      {/* Content */}
      <div className="w-full max-w-3xl p-6">
        <h1 className="text-2xl font-bold">{loja.nome}</h1>
        {loja.cor_loja && <p>Cor da loja: {loja.cor_loja}</p>}

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Produtos</h2>
          <div className="flex flex-wrap gap-2">
            {loja.produtos.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
