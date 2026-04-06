'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2, X, Save } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  tech_stack: string[];
  image_url: string;
};

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({});
  const [techInput, setTechInput] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (data) setProjects(data);
    if (error) console.error(error);
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentProject.id) {
      await supabase.from('projects').update(currentProject as Project).eq('id', currentProject.id);
    } else {
      await supabase.from('projects').insert([currentProject as Project]);
    }
    setIsEditing(false);
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if(confirm("Are you sure you want to delete this project?")) {
      await supabase.from('projects').delete().eq('id', id);
      fetchProjects();
    }
  };

  const openEditor = (project?: Project) => {
    if (project) {
      setCurrentProject(project);
    } else {
      setCurrentProject({ title: '', category: '', challenge: '', solution: '', result: '', tech_stack: [], image_url: '' });
    }
    setIsEditing(true);
  };

  const addTech = () => {
    if (techInput.trim()) {
      setCurrentProject({ ...currentProject, tech_stack: [...(currentProject.tech_stack || []), techInput.trim()] });
      setTechInput('');
    }
  };

  const removeTech = (index: number) => {
    const updatedTech = [...(currentProject.tech_stack || [])];
    updatedTech.splice(index, 1);
    setCurrentProject({ ...currentProject, tech_stack: updatedTech });
  };

  if (isEditing) {
    return (
      <div className="p-10 text-white font-outfit max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-black">{currentProject.id ? 'Edit Project' : 'New Project'}</h1>
          <button onClick={() => setIsEditing(false)} className="p-2 glass rounded-full hover:bg-white/10 transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSave} className="space-y-6 glass border border-white/10 p-8 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Project Title</label>
              <input required type="text" value={currentProject.title || ''} onChange={e => setCurrentProject({...currentProject, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Category</label>
              <input required type="text" value={currentProject.category || ''} onChange={e => setCurrentProject({...currentProject, category: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium" placeholder="E.g. Custom Software" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Main Image URL</label>
            <input type="text" value={currentProject.image_url || ''} onChange={e => setCurrentProject({...currentProject, image_url: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium text-xs" placeholder="https://..." />
            {currentProject.image_url && <img src={currentProject.image_url} alt="Preview" className="w-full h-40 object-cover mt-2 rounded-xl border border-white/10" />}
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">The Challenge</label>
            <textarea required rows={3} value={currentProject.challenge || ''} onChange={e => setCurrentProject({...currentProject, challenge: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Zentrix Solution</label>
            <textarea required rows={3} value={currentProject.solution || ''} onChange={e => setCurrentProject({...currentProject, solution: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Business Result / Impact</label>
            <textarea required rows={3} value={currentProject.result || ''} onChange={e => setCurrentProject({...currentProject, result: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none font-medium" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Tech Stack</label>
            <div className="flex gap-2 mb-2">
              <input type="text" value={techInput} onChange={e => setTechInput(e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:border-accent outline-none font-medium" placeholder="E.g. Next.js" />
              <button type="button" onClick={addTech} className="px-6 py-2 bg-white/10 rounded-xl font-bold hover:bg-white/20">Add</button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {currentProject.tech_stack?.map((tech, idx) => (
                <div key={idx} className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-lg text-sm flex items-center gap-2">
                  {tech} <button type="button" onClick={() => removeTech(idx)} className="text-white/60 hover:text-white"><X className="w-3 h-3" /></button>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-accent rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,128,255,0.4)] transition-all flex justify-center items-center gap-2">
            <Save className="w-5 h-5" /> Save Project
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-10 text-white font-outfit max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-black mb-2">Portfolio Projects</h1>
          <p className="text-white/40 uppercase tracking-widest text-sm font-bold">Manage your high-end case studies</p>
        </div>
        <button onClick={() => openEditor()} className="px-6 py-3 bg-accent rounded-xl hover:shadow-[0_0_30px_rgba(0,128,255,0.4)] transition-colors text-sm font-bold flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      {loading ? (
        <p className="text-white/40">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map(proj => (
            <div key={proj.id} className="glass border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-full h-48 bg-white/5 rounded-xl border border-white/10 mb-6 overflow-hidden">
                   {proj.image_url ? <img src={proj.image_url} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-white/20">No Image</div>}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold">{proj.title}</h3>
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-accent">{proj.category}</span>
                </div>
                <p className="text-white/60 text-sm line-clamp-2 mt-4">{proj.challenge}</p>
              </div>
              <div className="mt-8 flex gap-3 pt-6 border-t border-white/10">
                <button onClick={() => openEditor(proj)} className="flex-1 py-3 bg-white/10 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                  <Edit2 className="w-4 h-4" /> Edit
                </button>
                <button onClick={() => handleDelete(proj.id)} className="w-14 py-3 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500/20 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
