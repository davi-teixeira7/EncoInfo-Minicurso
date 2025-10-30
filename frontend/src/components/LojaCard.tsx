import { Link } from "react-router-dom";
import type { Loja } from "../api/models/Loja";

export default function LojaCard({ loja }: { loja: Loja }) {
  return (
    <div className="w-48 h-48 border border-gray-700 flex flex-col items-center justify-center gap-2 p-4 rounded">
      <div className="w-20 h-20 flex items-center justify-center overflow-hidden bg-gray-100 rounded">
        {loja.icone ? (
          <img
            src={loja.icone}
            alt={`Ícone da loja ${loja.nome}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-sm text-gray-500">Sem ícone</span>
        )}
      </div>
      <h2 className="text-lg font-semibold">{loja.nome}</h2>
      <Link
        to={`/loja/${loja.id}`}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Ir para a loja
      </Link>
    </div>
  )
}
