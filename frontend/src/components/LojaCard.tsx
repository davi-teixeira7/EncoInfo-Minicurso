import { Link } from "react-router-dom"
import type { Loja } from "../api/models/Loja"

export default function LojaCard({ loja }: { loja: Loja }) {
  return (
    <Link
      to={`/loja/${loja.id}`}
      className="group block w-64 rounded-lg bg-white border border-gray-200 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 hover:border-gray-300"
    >
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 shadow-inner">
        <img
          src={loja.icone}
          alt={`Icone da loja ${loja.nome}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-gray-900 transition">
          {loja.nome}
        </h2>
      </div>
    </Link>
  )
}
