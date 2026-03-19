import React from 'react';
import { Hero, SkillOverview } from './components/Hero';
import { ProjectSection } from './components/Projects';
import { Github, Mail, MapPin, ExternalLink, PlayCircle, Code2, Layers, Rocket } from 'lucide-react';

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

        {/* Projetos Destacados */}
        <section className="mt-40">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 text-blue-500 mb-6">
              <Code2 size={28} />
              <h2 className="text-sm font-black uppercase tracking-[0.3em]">
                Projetos Destacados
              </h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              O que estou construindo
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Projetos individuais e em grupo — cada um explorando tecnologias e problemas diferentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TaskPlanner */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Layers size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-green-400 bg-green-400/10 px-2 py-1 rounded">
                  No Ar
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Task Planner
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Aplicação de planejamento de tarefas com interface moderna e funcionalidades de organização.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href="https://task-planner-jet.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors"
                >
                  <ExternalLink size={14} />
                  Ver Demo
                </a>
                <a
                  href="https://github.com/Kauantoolkit/TaskPlanner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors"
                >
                  <Github size={14} />
                </a>
              </div>
            </div>

            {/* GeradorDeDDDMultiplosAgentes */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Layers size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                  Em Desenvolvimento
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Gerador de DDD com Múltiplos Agentes
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Sistema que utiliza múltiplos agentes de IA para geração automática de código seguindo o Domain-Driven Design.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href="https://github.com/Kauantoolkit/GeradorDeDDDMultiplosAgentes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors"
                >
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

            {/* MetaProgrammer */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Rocket size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                  Em Desenvolvimento
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  MetaProgrammer
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Ferramenta de metaprogramação para automação e geração de código de forma inteligente.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href="https://github.com/Kauantoolkit/MetaProgrammer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors"
                >
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

            {/* back_spring_skeleton */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Layers size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                  Em Desenvolvimento
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Back Spring Skeleton
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Skeleton Spring Boot com API REST pronta — base reutilizável para acelerar o início de novos projetos Java.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="https://github.com/Kauantoolkit/back_spring_skeleton" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors">
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

            {/* sistemaAcademia */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Layers size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                  Em Desenvolvimento
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Sistema Academia
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Sistema de gerenciamento de academia desenvolvido em TypeScript.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="https://github.com/Kauantoolkit/sistemaAcademia" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors">
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

            {/* TodoListVue */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Rocket size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-green-400 bg-green-400/10 px-2 py-1 rounded">
                  Concluído
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Todo List Vue
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Lista de tarefas feita com Vue 3 — exploração do framework como alternativa ao React.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="https://github.com/Kauantoolkit/TodoListVue" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors">
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

            {/* compara-o-python-rust */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Code2 size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-green-400 bg-green-400/10 px-2 py-1 rounded">
                  Concluído
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Python vs Rust
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Comparação de performance entre Python e Rust com listas de crescimento exponencial — benchmarks reais.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="https://github.com/Kauantoolkit/compara-o-python-rust" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors">
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

            {/* previsor-atraso-frete */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Code2 size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-green-400 bg-green-400/10 px-2 py-1 rounded">
                  Concluído
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Previsor de Atraso de Frete
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Modelo em Python para prever atrasos em entregas de frete com base em dados históricos.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="https://github.com/Kauantoolkit/previsor-atraso-frete" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors">
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

            {/* Sereno-Kauan */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Rocket size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                  Grupo
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Sereno
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Aplicativo para o Biopark de análise psicopatológica — projeto em grupo desenvolvido em Flutter.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="https://github.com/Kauantoolkit/Sereno-Kauan" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors">
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

            {/* Administra-Kauan */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Layers size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                  Grupo
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Administra
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Refatoração de sistema legado — projeto em grupo com foco em qualidade de código e modernização.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="https://github.com/Kauantoolkit/Administra-Kauan" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors">
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

            {/* domus-front */}
            <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Rocket size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                  Grupo
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Domus
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Frontend de sistema de gerenciamento doméstico desenvolvido em grupo com Flutter/Dart.
                </p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="https://github.com/Kauantoolkit/domus-front" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-colors">
                  <Github size={14} />
                  Ver Repositório
                </a>
              </div>
            </div>

          </div>
        </section>

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
