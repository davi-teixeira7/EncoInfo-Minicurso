import type { Produto } from "../api/models/Produto";


export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <div className="w-40 h-40 border border-gray-300 rounded flex flex-col items-center justify-center gap-2 p-3 bg-white">
      <div className="w-16 h-16 flex items-center justify-center overflow-hidden bg-gray-100 rounded">
        <img
            src={produto.icone}
            alt={`Imagem do produto ${produto.nome}`}
            className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-base font-semibold text-center">{produto.nome}</h3>
    </div>
  )
}
