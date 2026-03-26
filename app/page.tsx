'use client'; // Muito importante para a busca e os botões funcionarem

import { useState } from 'react';
import { dragonsData, Faction } from '../data/dragons';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Estados para a barra de busca e para os botões de facção
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<Faction | 'Todos'>('Todos');

  const filterOptions: (Faction | 'Todos')[] = ['Todos', 'Pretos', 'Verdes', 'Selvagens', 'Outros'];

  const renderFormattedText = (text: string) => {
    return text.split('**').map((part, index) => {
      return index % 2 === 1 ? (
        <strong key={index} className="text-white font-bold">
          {part}
        </strong>
      ) : (
        part
      );
    });
  };

  // Lógica de filtragem cruzada (Busca de texto + Facção)
  const filteredDragons = dragonsData.filter((dragon) => {
    const matchesSearch = dragon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dragon.rider.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFaction = activeFilter === 'Todos' || dragon.faction === activeFilter;

    return matchesSearch && matchesFaction;
  });

  return (
    // Aplicado o flex e flex-col na tag principal corretamente
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8 flex flex-col">
      <div className="max-w-7xl mx-auto w-full grow flex flex-col">

        <header className="text-center mb-12">
          <h1 className="text-5xl font-got font-normal text-red-600 mb-4 tracking-wider">
            DRAGOES TARGARYEN
          </h1>
          <p className="text-zinc-400 text-lg">
            Fogo e Sangue: Conheça as maiores feras de Valíria.
          </p>
        </header>

        {/* Área de Busca e Filtros */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Barra de Busca */}
          <input
            type="text"
            placeholder="Busque por dragão ou montador..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-4 text-zinc-100 focus:outline-none focus:border-red-600 transition-colors shadow-lg"
          />

          {/* Botões de Facção */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`px-6 py-2 rounded-full font-bold transition-all border ${activeFilter === option
                    ? 'bg-red-700 border-red-600 text-white shadow-[0_0_15px_rgba(185,28,28,0.4)]'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-red-600 hover:text-white'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDragons.map((dragon) => (
            <div
              key={dragon.id}
              className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-red-600 transition-all duration-300 flex flex-col shadow-lg hover:shadow-red-900/20"
            >
              {/* CORREÇÃO DO MOBILE: aspect-video no lugar de h-64 */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <Image
                  src={dragon.imageUrl}
                  alt={dragon.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Etiqueta Visual da Facção no Canto da Imagem */}
                {dragon.faction && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-md text-xs font-black uppercase tracking-tighter shadow-xl ${dragon.faction === 'Pretos' ? 'bg-black/80 text-red-500 border border-red-900 backdrop-blur-sm' :
                      dragon.faction === 'Verdes' ? 'bg-black/80 text-emerald-500 border border-emerald-900 backdrop-blur-sm' :
                        'bg-black/80 text-zinc-300 border border-zinc-600 backdrop-blur-sm'
                    }`}>
                    {dragon.faction}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col grow">
                <h2 className="text-3xl font-got font-normal text-white mb-4 tracking-wide">{dragon.name}</h2>

                <div className="space-y-1 mb-6 text-sm">
                  <p><span className="text-zinc-500 font-bold uppercase mr-2">Montador:</span> {dragon.rider}</p>
                  <p><span className="text-zinc-500 font-bold uppercase mr-2">Cor:</span> {dragon.color}</p>
                  <p><span className="text-zinc-500 font-bold uppercase mr-2">Morte:</span> {dragon.died}</p>
                </div>

                <p className="text-zinc-400 leading-relaxed line-clamp-3 mb-8">
                  {renderFormattedText(dragon.description)}
                </p>

                <Link
                  href={`/dragon/${dragon.id}`}
                  className="mt-auto block w-full bg-red-700 hover:bg-red-600 text-white text-center py-3 rounded-xl font-bold transition-colors uppercase tracking-widest text-sm"
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}

          {/* Fallback caso a busca não retorne nada */}
          {filteredDragons.length === 0 && (
            <div className="col-span-full text-center py-16 text-zinc-500 text-xl font-semibold">
              Nenhuma fera encontrada para essa busca ou facção.
            </div>
          )}
        </div>
        {/* O Rodapé posicionado corretamente no final da tela */}
        <footer className="mt-auto pt-16 pb-8 border-t border-zinc-800/50 text-center w-full">
          <p className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase mb-2">
            Projetado e codificado por
          </p>
          <h3 className="text-2xl font-got text-white hover:text-red-600 transition-all duration-500 cursor-default tracking-widest">
            OldWestDeveloper
          </h3>

          <div className="flex justify-center gap-8 mt-6">
            <a
              href="https://github.com/CodeWrangler-DevGui"
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-red-600 pb-1"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/guilherme-araujo-lacerda"
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-red-600 pb-1"
            >
              LinkedIn
            </a>
            <a
              href="https://devgui.com.br"
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-red-600 pb-1"
            >
              Portfólio
            </a>
          </div>

          <p className="text-zinc-700 text-[9px] mt-8 uppercase tracking-[0.5em]">
            © 2026 • House of the Dragon Fan Project
          </p>
        </footer>

      </div>
    </main>
  );
}
