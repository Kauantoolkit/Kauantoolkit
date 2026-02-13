import React from 'react';
import { Hero, SkillOverview } from './components/Hero';
import { ProjectSection } from './components/Projects';
import { Github, Mail, MapPin, ExternalLink, PlayCircle } from 'lucide-react';

const semester1 = [
  { id: 1, title: "Site Feito na Segunda Aula de HTML", youtubeId: "mJ90eJ2mDGs" },
  { id: 2, title: "Aula 3 - Primeiro Semestre", youtubeId: "7RhSIv1RssM" },
  { id: 3, title: "Portfólio Estático Responsivo", youtubeId: "pe57v7UD2EQ" },
  { id: 4, title: "Como estava o portifólio ADS para entrega", youtubeId: "1AiAmsLN3DQ" },
  { id: 5, title: "Atividade Todo List", youtubeId: "lipAi-j-xAU" },
  { id: 6, title: "Atividade do Clube de Ciências", youtubeId: "K7Mvlcdzy68" },
  { id: 7, title: "CRUD C alocação estática", youtubeId: "FvmF9nPFqJY" },
];

const semester2 = [
  { id: 1, title: "CRUD Mínimo em Java (Sem Auto-Increment)", youtubeId: "3dFc0Bu6wrg" },
  { id: 2, title: "Calculadora que armazena estado no navegador", youtubeId: "qCiKjQRgkbI" },
  { id: 3, title: "Algoritmo Mochila em Java", youtubeId: "Q8flVIdRjRU" },
  { id: 4, title: "Protótipo Figma Anatonelly", youtubeId: "ABaJkEZaAd8" },
];

const semester3 = [
  { id: 1, title: "Projeto do Terceiro Semestre", youtubeId: "Fbpt3bOb43s" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-blue-500/30 font-sans">
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white italic">
              K
            </div>
            <span className="font-bold text-white tracking-tighter hidden sm:block">
              KAUAN CRISTIAN
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="#videos" 
              className="text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            >
              Demonstrações
            </a>
            <a 
              href="mailto:kauancristian.souza@hotmail.com" 
              className="text-xs font-black uppercase tracking-widest text-blue-500 hover:text-blue-400"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <SkillOverview />

      <main id="videos" className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 text-blue-500 mb-6">
            <PlayCircle size={28} />
            <h2 className="text-sm font-black uppercase tracking-[0.3em]">
              Portfólio de Vídeos
            </h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Veja meus desenvolvimentos como dev!
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed">
            Aqui estão reunidos os vídeos e demonstrações dos sistemas e exercícios públicos que desenvolvi. 
            Cada semestre representa um salto no conhecimento técnico e na complexidade das soluções.
          </p>
        </div>

        <div className="space-y-40">
          <ProjectSection title="Terceiro Semestre" projects={semester3} />
          <ProjectSection title="Segundo Semestre" projects={semester2} />
          <ProjectSection title="Primeiro Semestre" projects={semester1} />
        </div>

        {/* GitHub Shortcut */}
        <section className="mt-40 bg-zinc-900/30 border border-zinc-800 p-12 md:p-20 rounded-[3rem] text-center">
          <div className="w-20 h-20 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-10 shadow-2xl">
            <Github size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-black text-white mb-6 tracking-tight">
            Código e Repositórios
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-12">
            Além dos vídeos, você pode explorar o código fonte desses e outros projetos diretamente no meu GitHub. 
            Lá compartilho meus estudos em Laravel, Java e frameworks frontend.
          </p>
          <a 
            href="https://github.com/Kauantoolkit" 
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl shadow-white/5"
          >
            Acessar GitHub
            <ExternalLink size={20} />
          </a>
        </section>
      </main>

      {/* Footer minimalista e direto */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-black text-white italic">
                K
              </div>
              <span className="text-xl font-black text-white tracking-tighter uppercase">
                Kauan Cristian de Souza
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-zinc-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" /> Toledo-PR
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" /> kauancristian.souza@hotmail.com
              </div>
            </div>

            <div className="h-px w-20 bg-zinc-900" />
            
            <p className="text-xs font-bold text-zinc-700 uppercase tracking-widest">
              © 2026 • Graduação em ADS • Biopark
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
