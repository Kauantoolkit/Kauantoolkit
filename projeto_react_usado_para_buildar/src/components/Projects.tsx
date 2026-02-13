import React from 'react';
import { Calendar } from 'lucide-react';

interface Project {
  title: string;
  youtubeId: string;
  id: number;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
        <iframe
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title={project.title}
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
            Projeto {project.id}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white leading-snug group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  projects: Project[];
}

export function ProjectSection({ title, projects }: SectionProps) {
  return (
    <section className="mb-32 last:mb-0">
      <div className="flex items-center gap-6 mb-12">
        <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400">
          <Calendar size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">{title}</h2>
          <p className="text-zinc-500 font-medium">Cronologia de aprendizado e entrega</p>
        </div>
        <div className="flex-1 h-px bg-zinc-900 hidden md:block" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.youtubeId} project={project} />
        ))}
      </div>
    </section>
  );
}
