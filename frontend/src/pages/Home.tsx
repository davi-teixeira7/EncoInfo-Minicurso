import { useEffect, useState } from "react"
import { fetchLojas } from "../api/client"
import type { Loja } from "../api/models/Loja"
import LojaCard from "../components/LojaCard"

export default function Home() {
  const [lojas, setLojas] = useState<Loja[]>([])

  useEffect(() => {
    fetchLojas().then(setLojas)
  }, [])

  return (
    <main className="w-full flex flex-col justify-center p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Home</h1>
        <p>Confira as lojas cadastradas abaixo.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {lojas.map((loja) => (
          <LojaCard key={loja.id} loja={loja} />
        ))}
      </div>
    </main>
  )
}
