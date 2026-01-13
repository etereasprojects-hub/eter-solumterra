import React from 'react';
import { Link } from 'react-router-dom';
import { eterBranding, clientInfo, packages, additionalInfo, summary } from '../data/mock';
import { Globe, Server, Brain, Check, Sparkles, Zap, Shield, Users, MessageSquare, Calendar, LayoutGrid, FileText, DollarSign, Building2, Mail, ChevronRight, ExternalLink, Info, MonitorSmartphone, Phone, Eye } from 'lucide-react';

const PackageIcon = ({ id }) => {
  const iconClass = "w-8 h-8";
  switch(id) {
    case 'A':
      return <Globe className={iconClass} />;
    case 'B':
      return <Server className={iconClass} />;
    case 'C':
      return <Brain className={iconClass} />;
    default:
      return <Sparkles className={iconClass} />;
  }
};

const FeatureIcon = ({ title }) => {
  const iconClass = "w-5 h-5";
  if (title.toLowerCase().includes('formulario') || title.toLowerCase().includes('contacto')) return <MessageSquare className={iconClass} />;
  if (title.toLowerCase().includes('cita')) return <Calendar className={iconClass} />;
  if (title.toLowerCase().includes('portfolio') || title.toLowerCase().includes('galería')) return <LayoutGrid className={iconClass} />;
  if (title.toLowerCase().includes('política') || title.toLowerCase().includes('privacidad')) return <FileText className={iconClass} />;
  if (title.toLowerCase().includes('cobranza') || title.toLowerCase().includes('tributación')) return <DollarSign className={iconClass} />;
  if (title.toLowerCase().includes('cliente')) return <Users className={iconClass} />;
  if (title.toLowerCase().includes('mensaje')) return <Mail className={iconClass} />;
  if (title.toLowerCase().includes('ia') || title.toLowerCase().includes('comprensión') || title.toLowerCase().includes('comunicación')) return <Brain className={iconClass} />;
  if (title.toLowerCase().includes('servicio') || title.toLowerCase().includes('conocimiento')) return <Building2 className={iconClass} />;
  if (title.toLowerCase().includes('gestión')) return <Server className={iconClass} />;
  return <Check className={iconClass} />;
};

const PropuestaPage = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src={eterBranding.logo} 
            alt="Éter Logo" 
            className="h-10 object-contain"
          />
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Propuesta</Link>
            <Link to="/prototipo" className="text-white/70 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
              Ver Prototipo <ExternalLink className="w-3 h-3" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Propuesta de Desarrollo Web</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {clientInfo.name}
            </span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-3xl mb-4">
            Propuesta para el desarrollo de una <span className="text-cyan-400 font-medium">{clientInfo.projectType}</span>
          </p>
          
          <p className="text-lg text-white/50 max-w-3xl">
            Estilo: <span className="text-white/70">{clientInfo.style}</span>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10">
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Muchas gracias por el interés y por compartir la referencia visual del sitio que tienen en mente.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Por lo que pude analizar, se trata de una <span className="text-white font-medium">web empresarial tipo portfolio</span>, orientada a presentar la identidad del estudio, sus proyectos y su propuesta de valor, con un <span className="text-cyan-400">estilo artístico, minimalista y en tonos grises</span>.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Puedo replicar fielmente el sitio de referencia, incorporando <span className="text-white font-medium">mejoras artísticas, técnicas y de experiencia de usuario</span>, siempre respetando el lenguaje visual original.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paquetes Disponibles</h2>
            <p className="text-white/50 text-lg">Distintos niveles de funcionalidad según sus objetivos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                  pkg.highlighted 
                    ? 'bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 border-blue-500/30' 
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs font-semibold">
                    Recomendado
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${
                    pkg.id === 'A' ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400' :
                    pkg.id === 'B' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400' :
                    'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400'
                  }`}>
                    <PackageIcon id={pkg.id} />
                  </div>
                  <div>
                    <span className="text-white/40 text-sm">Paquete {pkg.id}</span>
                    <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-white/40 text-sm">/ {pkg.paymentType}</span>
                  </div>
                </div>

                <p className="text-white/50 text-sm mb-6">{pkg.description}</p>

                <div className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="mt-0.5 p-1.5 rounded-lg bg-white/5 text-white/40 group-hover:text-cyan-400 transition-colors">
                        <FeatureIcon title={feature.title} />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm font-medium">{feature.title}</p>
                        <p className="text-white/40 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {pkg.note && (
                  <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/5">
                    <p className="text-white/50 text-xs italic">{pkg.note}</p>
                  </div>
                )}

                {pkg.includesGoogleActivation && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg border border-emerald-500/20">
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                      <Zap className="w-4 h-4" />
                      Incluye Activación en Google
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Activation Info */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-yellow-500/10 rounded-2xl p-8 border border-orange-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/20">
                <Info className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{additionalInfo.googleActivation.title}</h3>
                <p className="text-white/60 mb-4">{additionalInfo.googleActivation.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/40 text-sm mb-1">Incluido en {additionalInfo.googleActivation.includedIn}</p>
                    <p className="text-emerald-400 font-medium">Sin costo adicional</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/40 text-sm mb-1">Sin Paquete C</p>
                    <p className="text-white font-medium">{additionalInfo.googleActivation.separateCost}</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm mt-4">Tiempo estimado de activación: {additionalInfo.googleActivation.timeEstimate}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{summary.title}</h2>
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10">
            <div className="space-y-4">
              {summary.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                    <span className="text-white/80">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-semibold">{item.price}</span>
                    <span className="text-white/40 text-sm ml-2">({item.type})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Info */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/20">
                <MonitorSmartphone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{additionalInfo.hosting.title}</h3>
                <p className="text-white/60 mb-2">{additionalInfo.hosting.description}</p>
                <p className="text-white/50 text-sm">{additionalInfo.hosting.domainNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 bg-[#0a0d12]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Quedo a disposición para ajustar esta propuesta, ampliar funcionalidades o adaptar el alcance según sus objetivos.
          </p>
          <p className="text-white/50 mb-8">
            Será un gusto acompañarlos en el desarrollo de una presencia digital que refleje la identidad y el nivel profesional de <span className="text-white font-medium">{clientInfo.name}</span>.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <img 
              src={eterBranding.logo} 
              alt="Éter Logo" 
              className="h-12 object-contain opacity-80"
            />
            <p className="text-white/40 text-sm">{eterBranding.tagline}</p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <Link 
              to="/prototipo" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Ver Prototipo del Proyecto <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropuestaPage;