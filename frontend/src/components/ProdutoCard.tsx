import type { Produto } from "../api/models/Produto"

export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <div className="group block w-64 rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
        <img
          src={produto.icone}
          alt={`Imagem do produto ${produto.nome}`}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="mt-4 text-2xl font-bold text-gray-900">{produto.nome}</h3>
    </div>
  )
}
