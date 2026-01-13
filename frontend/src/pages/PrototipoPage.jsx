import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { solumTerraPrototype } from '../data/mock';
import { Phone, Mail, Instagram, Facebook, ArrowLeft, Menu, X } from 'lucide-react';

const PrototipoPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { branding, projects, team, clients, contact, philosophy } = solumTerraPrototype;

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      {/* Back to Proposal Link */}
      <Link 
        to="/" 
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver a Propuesta
      </Link>

      {/* Prototype Badge */}
      <div className="fixed top-4 right-4 z-50 px-4 py-2 bg-orange-500/90 backdrop-blur-sm rounded-full text-sm font-medium">
        PROTOTIPO
      </div>

      {/* Header */}
      <header className="fixed top-16 left-0 right-0 z-40 bg-[#111111]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-light tracking-wider">{branding.name}</h1>
            <span className="text-xs tracking-[0.3em] text-white/50">{branding.subtitle}</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">Inicio</a>
            <a href="#proyectos" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">Proyectos</a>
            <a href="#equipo" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">Equipo</a>
            <a href="#contacto" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">Contacto</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden px-6 pb-6 space-y-4">
            <a href="#inicio" className="block text-white/60 hover:text-white transition-colors text-sm tracking-wide">Inicio</a>
            <a href="#proyectos" className="block text-white/60 hover:text-white transition-colors text-sm tracking-wide">Proyectos</a>
            <a href="#equipo" className="block text-white/60 hover:text-white transition-colors text-sm tracking-wide">Equipo</a>
            <a href="#contacto" className="block text-white/60 hover:text-white transition-colors text-sm tracking-wide">Contacto</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-40 pb-20 px-6 relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111] z-10" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <div className="max-w-3xl">
            <p className="text-orange-400 text-sm tracking-[0.3em] mb-6">{branding.tagline}</p>
            <h2 className="text-5xl md:text-7xl font-extralight leading-tight mb-8">
              Transformamos
              <span className="block font-normal">espacios en</span>
              <span className="block text-orange-400">experiencias.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Arquitectura que inspira, diseño que perdura.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-3 h-3 rounded-full bg-orange-400" />
            <h2 className="text-4xl font-light tracking-wide">Nuestros Proyectos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-orange-400 text-xs tracking-[0.2em] mb-2">{project.category}</p>
                  <h3 className="text-xl font-light tracking-wide">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800" 
                alt="Interior Design"
                className="rounded-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400/20 rounded-lg -z-10" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-orange-400" />
                <h2 className="text-4xl font-light tracking-wide">+ Diseños</h2>
              </div>
              <p className="text-white/60 text-lg leading-relaxed">
                {philosophy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-3 h-3 rounded-full bg-orange-400" />
            <h2 className="text-4xl font-light tracking-wide">Nuestro Equipo</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-orange-400 text-xs tracking-[0.15em]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-3 h-3 rounded-full bg-orange-400" />
            <h2 className="text-4xl font-light tracking-wide">Clientes</h2>
          </div>

          <div className="flex items-center justify-center gap-16 flex-wrap">
            {clients.map((client, idx) => (
              <div key={idx} className="text-3xl font-bold text-white/20 hover:text-white/40 transition-colors tracking-wider">
                {client.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                ¿Tienes preguntas?
                <span className="block text-orange-400">Contáctanos.</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">Teléfono</p>
                    <p className="text-white">{contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">Email</p>
                    <p className="text-white">{contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Instagram className="w-5 h-5 text-white/60" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Facebook className="w-5 h-5 text-white/60" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" 
                alt="Meeting Room"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-light tracking-wider">{branding.name}</h3>
            <span className="text-xs tracking-[0.2em] text-white/40">{branding.subtitle}</span>
          </div>
          <p className="text-white/30 text-sm">
            © 2025 {branding.name}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrototipoPage;