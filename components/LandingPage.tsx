
import React, { useEffect, useRef } from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';
import { Check, MessageCircle, Instagram, MapPin, Play, Star, ChevronRight } from 'lucide-react';
import Gallery from './Gallery';
import Marquee from './Marquee';

const LandingPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative animate-in fade-in duration-1000">
      
      {/* Top Ticker Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 py-3">
        <Marquee onSelect={scrollToSection} />
      </div>

      <main className="pt-16">
        {/* HERO SECTION */}
        <section id="inicio" className="relative min-h-[90dvh] flex flex-col justify-end p-6 md:p-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src={IMAGES.hero} alt="Ingrid Belly" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif italic leading-tight">
              Eu sou <span className="text-emerald-500 not-italic">Ingrid Belly</span>, e transformo sua pele em arte.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
              Especialista em Fine Line e Realismo. Técnica, sensibilidade e o propósito de realçar sua beleza unique.
            </p>
            <div className="space-y-3">
              <a 
                href={EXPERT_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 px-8 rounded-full shadow-2xl transform transition active:scale-95 text-lg w-full md:w-auto"
              >
                <MessageCircle size={24} />
                CLIQUE AQUI PARA SABER MAIS
              </a>
              <p className="text-center md:text-left text-xs text-gray-500 tracking-widest uppercase">Consulta inicial sem compromisso</p>
            </div>
          </div>
        </section>

        {/* INTRO VIDEO SECTION - CUSTOMIZED PER REQUEST */}
        <section className="bg-zinc-950 py-20 px-6 border-b border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 relative group">
                    <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden border border-emerald-500/30 bg-black shadow-2xl shadow-emerald-500/10">
                         <video 
                            src={EXPERT_DATA.procedureVideo} 
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={IMAGES.authority2}
                         />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-emerald-500/10 rounded-3xl"></div>
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                    <div className="space-y-4">
                        <span className="text-emerald-500 uppercase tracking-widest text-xs font-bold">Procedimento Exclusivo</span>
                        <h2 className="text-3xl md:text-5xl font-serif italic leading-tight">Transformação em Movimento</h2>
                    </div>
                    <p className="text-gray-200 text-xl font-light leading-relaxed italic border-l-2 border-emerald-500/50 pl-6">
                        Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito.
                        Resultado naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial.
                    </p>
                </div>
            </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="sobre" className="py-24 px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
                <div className="relative">
                    <div className="absolute -inset-4 border border-emerald-500/30 rounded-3xl translate-x-4 translate-y-4"></div>
                    <img src={IMAGES.authority1} alt="Ingrid Belly Authority" className="relative rounded-2xl w-full grayscale-[20%]" />
                </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-4">
                    <span className="text-emerald-500 tracking-[0.2em] uppercase text-sm font-bold">Autoridade & Propósito</span>
                    <h2 className="text-4xl md:text-5xl font-serif">Experiência que vai além do traço.</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                    Meu trabalho é focado na exclusividade de cada cliente. Não faço apenas tatuagens, 
                    crio marcos eternos que elevam a autoestima através do Realismo e do Fine Line delicado.
                </p>
                <ul className="space-y-4">
                    {[
                        "Avaliação honesta e personalizada",
                        "Materiais de altíssima qualidade",
                        "Especialista em traços finos e realismo",
                        "Atendimento exclusivo e humano"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <div className="bg-emerald-950 p-1 rounded-full">
                                <Check size={18} className="text-emerald-500" />
                            </div>
                            <span className="text-gray-200">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </section>

        {/* RESULTS GALLERY - SLIDER VERSION */}
        <section id="galeria" className="py-24 bg-black overflow-hidden border-b border-white/5">
          <div className="px-6 mb-12 text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif">Resultados Reais</h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto italic">
              Deslize para ver a delicadeza do Fine Line e o impacto do Realismo.
            </p>
          </div>
          
          <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x no-scrollbar cursor-grab active:cursor-grabbing">
            {IMAGES.results.map((img, i) => (
              <div key={i} className="min-w-[80vw] md:min-w-[400px] snap-center aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 group relative">
                <img 
                  src={img} 
                  alt={`Resultado ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
            <div className="min-w-[100px] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-500 animate-pulse">
                    <ChevronRight size={32} />
                </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-600 mt-4 uppercase tracking-widest">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </section>

        {/* WHY TRUST CARDS */}
        <section className="py-24 px-6 bg-zinc-900/50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { title: "Avaliação Honesta", desc: "Apenas o que valoriza sua anatomia.", icon: <Check /> },
              { title: "Atendimento VIP", desc: "Sessões calmas, sem pressa, foco total em você.", icon: <Star /> },
              { title: "Segurança Máxima", desc: "Protocolos rigorosos de higiene e cuidado.", icon: <Check /> },
              { title: "Traço de Elite", desc: "Técnica apurada para cicatrização perfeita.", icon: <Star /> },
              { title: "Arte Exclusiva", desc: "Desenhos criados do zero para sua história.", icon: <Check /> },
              { title: "Suporte Pós-Tattoo", desc: "Acompanhamento completo até a cicatrização.", icon: <Star /> }
            ].map((card, i) => (
              <div key={i} className="glass p-8 rounded-3xl space-y-4 hover:border-emerald-500/40 transition">
                <div className="text-emerald-500">{card.icon}</div>
                <h3 className="text-xl font-serif">{card.title}</h3>
                <p className="text-gray-400 font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERMEDIATE CTA */}
        <section className="py-20 px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif">Sua história merece um traço à altura.</h2>
                <a 
                    href={EXPERT_DATA.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 px-10 rounded-full shadow-2xl transform transition active:scale-95 text-xl"
                >
                    <MessageCircle size={24} />
                    FALAR COM A DRA. INGRID
                </a>
            </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="py-24 px-6 bg-black border-y border-white/5">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl font-serif">Como funciona?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { step: "01", title: "Primeiro Contato", desc: "Clica no botão e me conta sua ideia pelo WhatsApp." },
                        { step: "02", title: "Agendamento", desc: "Escolhemos o melhor dia e horário para sua sessão exclusiva." },
                        { step: "03", title: "A Transformação", desc: "Sua arte ganha vida com técnica e segurança impecáveis." }
                    ].map((step, i) => (
                        <div key={i} className="relative text-center space-y-4">
                            <span className="text-7xl font-serif text-emerald-500/10 absolute -top-10 left-1/2 -translate-x-1/2 font-bold">{step.step}</span>
                            <h3 className="text-2xl font-serif relative z-10">{step.title}</h3>
                            <p className="text-gray-400 font-light relative z-10">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* TESTIMONIALS / COMMENTS */}
        <section id="feedback" className="py-24 bg-zinc-900/30">
            <div className="px-6 mb-12 text-center">
                <h2 className="text-4xl font-serif">Feedback das Clientes</h2>
            </div>
            <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x no-scrollbar">
                {IMAGES.comments.map((img, i) => (
                    <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center">
                        <img src={img} alt={`Feedback ${i}`} className="w-full rounded-3xl border border-white/5 shadow-xl" />
                    </div>
                ))}
            </div>
        </section>

        {/* MORE PROOF / BASTIDORES - SLIDER VERSION */}
        <section id="harmonizacao" className="py-24 bg-black overflow-hidden">
             <div className="px-6 mb-12 text-center space-y-4">
                <h2 className="text-4xl font-serif italic text-emerald-400">Harmonização de Arte & Alma</h2>
                <p className="text-gray-400 font-light">Os bastidores da criação e os detalhes que fazem a diferença.</p>
            </div>
            
            <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x no-scrollbar cursor-grab active:cursor-grabbing">
              {IMAGES.extra.map((img, i) => (
                <div key={i} className="min-w-[70vw] md:min-w-[350px] snap-center aspect-square rounded-3xl overflow-hidden border border-white/10 group relative">
                  <img 
                    src={img} 
                    alt={`Bastidores ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500"></div>
                </div>
              ))}
              <div className="min-w-[100px] flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-pulse">
                    <ChevronRight size={24} />
                </div>
              </div>
            </div>
        </section>

        {/* FINAL CTA */}
        <section id="contato" className="py-32 px-6 bg-gradient-to-b from-black to-emerald-950/20 text-center">
            <div className="max-w-4xl mx-auto space-y-10">
                <h2 className="text-5xl md:text-7xl font-serif leading-tight">Vamos desenhar o seu próximo capítulo?</h2>
                <div className="space-y-6">
                    <a 
                        href={EXPERT_DATA.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-6 px-12 rounded-full shadow-2xl shadow-emerald-600/20 transform transition active:scale-95 text-2xl w-full md:w-auto"
                    >
                        <MessageCircle size={28} />
                        FALAR COM A DRA. INGRID
                    </a>
                    <p className="text-gray-400 flex items-center justify-center gap-2">
                        <Check size={16} className="text-emerald-500" />
                        Vagas limitadas para atendimento exclusivo
                    </p>
                </div>
            </div>
        </section>

        {/* MAP SECTION */}
        <section id="local" className="w-full h-[400px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-700">
            <iframe 
                src={EXPERT_DATA.addressEmbed} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
            ></iframe>
        </section>

        {/* FOOTER */}
        <footer className="py-20 px-6 border-t border-white/5 text-center space-y-12">
            <div className="space-y-4">
                <h2 className="text-6xl font-signature text-emerald-500">{EXPERT_DATA.name}</h2>
                <p className="text-gray-500 uppercase tracking-widest text-sm">{EXPERT_DATA.profession}</p>
            </div>
            
            <div className="flex justify-center gap-8">
                <a href={EXPERT_DATA.instagram} target="_blank" className="text-gray-400 hover:text-white transition">
                    <Instagram size={28} />
                </a>
                <a href={EXPERT_DATA.whatsapp} target="_blank" className="text-gray-400 hover:text-white transition">
                    <MessageCircle size={28} />
                </a>
                <a href="#local" className="text-gray-400 hover:text-white transition">
                    <MapPin size={28} />
                </a>
            </div>

            <div className="space-y-2 text-xs text-gray-600">
                <p>© {new Date().getFullYear()} Ingrid Belly Studio. Todos os direitos reservados.</p>
                <p>Criado com propósito para realçar sua essência.</p>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
