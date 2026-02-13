import React from 'react';
import { Github, Mail, MapPin, Code, Laptop, GraduationCap, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <GraduationCap size={14} />
            Estudante de ADS @ Biopark
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
            Kauan Cristian <br />
            <span className="text-zinc-500">de Souza</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-2xl">
            Tenho 25 anos e sou apaixonado por transformar ideias em soluções reais. 
            Abaixo, você pode acompanhar minha evolução através das <strong>demonstrações em vídeo</strong> dos sistemas que desenvolvi durante minha graduação.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#videos" className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 transition-all flex items-center gap-2">
              <Play size={18} fill="currentColor" />
              Ver Demonstrações
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://github.com/Kauantoolkit" target="_blank" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:kauancristian.souza@hotmail.com" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillOverview() {
  const skills = [
    { icon: <Code size={20} />, label: "Backend", desc: "Laravel, PHP e Java (Spring Boot)" },
    { icon: <Laptop size={20} />, label: "Frontend", desc: "Vue.js (Quasar) e Flutter" },
    { icon: <MapPin size={20} />, label: "Local", desc: "Toledo-PR" },
  ];

  return (
    <div className="border-y border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500">
                {skill.icon}
              </div>
              <div>
                <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">{skill.label}</p>
                <p className="text-sm font-bold text-white">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
