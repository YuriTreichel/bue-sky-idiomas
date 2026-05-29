import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Handshake, 
  Percent, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  GraduationCap, 
  Briefcase, 
  School, 
  MapPin, 
  SearchX, 
  Tag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA } from './Home';

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'Sindicato' | 'Associação' | 'Órgão Público' | 'Empresa' | 'Estudantes';
  discount: string;
  description: string;
  info: string;
  languages: string[];
  location: 'Online' | 'Sede' | 'Online/Presencial';
}

export default function Partnerships() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [formCompany, setFormCompany] = useState('');
  const [formMessage, setFormMessage] = useState('');
  
  const formRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      title: 'Descontos Exclusivos',
      desc: 'Benefícios reais na mensalidade para colaboradores e dependentes.',
      icon: <Percent className="w-6 h-6" />,
    },
    {
      title: 'Faturamento Facilitado',
      desc: 'Opções flexíveis de pagamento direto pela empresa ou pelo aluno.',
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: 'Acompanhamento de RH',
      desc: 'Relatórios mensais de frequência e evolução dos colaboradores.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Nivelamento Gratuito',
      desc: 'Testes de nível sem custo para todos os interessados da empresa.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ];

  const partners: Partner[] = [
    {
      id: 'sinurgs',
      name: 'SINURGS',
      logo: '/images/convenios/sinurgs.png',
      category: 'Sindicato',
      discount: '25% à vista ou 10% parcelado',
      description: 'A Blue Sky oferece aos associados da SINURGS e seus dependentes descontos de 25% para pagamentos à vista e 10% para pagamento parcelado.',
      info: 'Aulas individuais on-line totalmente customizadas para sua necessidade.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online',
    },
    {
      id: 'arbs',
      name: 'ARBS (Grupo RBS)',
      logo: '/images/convenios/arbs.png',
      category: 'Associação',
      discount: '25% à vista ou 10% parcelado',
      description: 'A Blue Sky Idiomas oferece aos associados do Grupo RBS (ARBS) e seus dependentes descontos de 25% para pagamentos à vista e 10% para pagamento parcelado.',
      info: 'Válido para aulas particulares. Aulas individuais on-line totalmente customizadas.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online',
    },
    {
      id: 'sergs',
      name: 'SERGS',
      logo: '/images/convenios/sergs.png',
      category: 'Sindicato',
      discount: '25% à vista ou 10% parcelado',
      description: 'A Blue Sky oferece aos associados do SERGS e seus dependentes descontos de 25% para pagamentos à vista e 10% para pagamento parcelado.',
      info: 'Aulas individuais on-line totalmente customizadas para sua necessidade.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online',
    },
    {
      id: 'asofbm',
      name: 'ASOFBM',
      logo: '/images/convenios/asofbm.png',
      category: 'Associação',
      discount: '25% à vista ou 10% parcelado',
      description: 'A Blue Sky oferece aos associados da ASOFBM e seus dependentes descontos de 25% para pagamentos à vista e 10% para pagamento parcelado.',
      info: 'Aulas individuais on-line totalmente customizadas para sua necessidade.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online',
    },
    {
      id: 'sindha',
      name: 'Sindha',
      logo: '/images/convenios/sindha.png',
      category: 'Sindicato',
      discount: '30% em grupo ou 20% individual',
      description: 'A Blue Sky oferece aos associados do Sindha e seus dependentes descontos de 30% para cursos em grupos fechados (3 a 10 alunos) e 20% para aulas individuais.',
      info: 'Aulas on-line totalmente customizadas para sua necessidade.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online',
    },
    {
      id: 'sinca_rs',
      name: 'Sinca RS',
      logo: '/images/convenios/sinca-rs.svg',
      category: 'Sindicato',
      discount: '25% à vista ou 10% parcelado',
      description: 'A Blue Sky oferece aos associados do Sinca RS e seus dependentes descontos de 25% para pagamentos à vista e 10% para pagamento parcelado.',
      info: 'Aulas individuais on-line totalmente customizadas para sua necessidade.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online',
    },
    {
      id: 'porto_alegre',
      name: 'Prefeitura de Porto Alegre',
      logo: '/images/convenios/prefeitura-poa.png',
      category: 'Órgão Público',
      discount: '25% à vista ou 10% parcelado',
      description: 'A Blue Sky oferece aos servidores da Prefeitura de Porto Alegre e seus dependentes descontos de 25% para pagamentos à vista e 10% para pagamento parcelado.',
      info: 'Aulas individuais on-line totalmente customizadas para sua necessidade.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online',
    },
    {
      id: 'agepes',
      name: 'AGEPES',
      logo: '/images/convenios/agepes.png',
      category: 'Associação',
      discount: '25% à vista ou 10% parcelado',
      description: 'A Blue Sky oferece aos associados da AGEPES e seus dependentes descontos de 25% para pagamentos à vista e 10% para pagamento parcelado.',
      info: 'Aulas individuais on-line totalmente customizadas para sua necessidade.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online',
    },
    {
      id: 'sinpaptep_rs',
      name: 'SINPAPTEP-RS',
      logo: '/images/convenios/sinpaptep-rs.jpg',
      category: 'Sindicato',
      discount: '25% à vista ou 10% parcelado',
      description: 'A Blue Sky oferece aos associados do SINPAPTEP-RS e seus dependentes descontos de 25% para pagamentos à vista e 10% para pagamento parcelado.',
      info: 'Aulas individuais on-line totalmente customizadas para sua necessidade.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online',
    },
    {
      id: 'macro',
      name: 'Macro Plataforma',
      logo: '/images/convenios/macro.jpg',
      category: 'Empresa',
      discount: '20% à vista ou 10% parcelado',
      description: 'Através da Macro Plataforma oferecemos descontos de 20% no valor do curso escolhido para pagamento à vista ou 10% de desconto para pagamento parcelado.',
      info: 'Parceria recente. Informe seu vínculo para usufruir do desconto.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Online/Presencial',
    },
    {
      id: 'mix_use',
      name: 'Mix Use Profissional',
      logo: '/images/convenios/mix-use.png',
      category: 'Empresa',
      discount: 'Desconto especial de 30%',
      description: 'Desconto especial de 30% para colaboradores da Mix Use e da Casa da Escova. Cursos presenciais em grupo.',
      info: 'Aulas em grupo na sede da escola. É só se identificar e usufruir do desconto.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Sede',
    },
    {
      id: 'dce_pucrs',
      name: 'DCE PUC RS',
      logo: '/images/convenios/pucrs.png',
      category: 'Estudantes',
      discount: '15% à vista ou 5% parcelado',
      description: 'Oferecemos descontos especiais para alunos da PUC-RS estudarem na sede da Blue Sky Idiomas.',
      info: 'Aulas em grupo ou individuais. Necessário comprovar vínculo estudantil.',
      languages: ['Inglês', 'Espanhol', 'Mandarim', 'Alemão', 'Francês'],
      location: 'Sede',
    },
  ];

  const categories = ['Todos', 'Sindicato', 'Associação', 'Empresa', 'Estudantes', 'Órgão Público'];

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.info.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === 'Todos' || partner.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSelectPartner = (partnerName: string) => {
    setFormCompany(partnerName);
    setFormMessage(`Olá! Gostaria de obter mais informações sobre o convênio da Blue Sky com o(a) ${partnerName} e como posso aplicar o meu desconto.`);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Sindicato': return <Users className="w-4 h-4" />;
      case 'Associação': return <Handshake className="w-4 h-4" />;
      case 'Empresa': return <Briefcase className="w-4 h-4" />;
      case 'Estudantes': return <GraduationCap className="w-4 h-4" />;
      case 'Órgão Público': return <Building2 className="w-4 h-4" />;
      default: return <Tag className="w-4 h-4" />;
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-es-light opacity-90 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-300/20 rounded-full blur-[120px] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 border border-primary-200 text-sm font-medium mb-6 backdrop-blur-md"
              >
                <Handshake className="w-4 h-4" />
                Programa de Convênios Blue Sky
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Fortaleça sua equipe com <span className="text-primary-600">benefícios de ensino.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-inter mb-10 max-w-lg">
                Oferecemos condições especiais para empresas, associações e sindicatos que desejam investir no futuro de seus membros.
              </p>
              <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center gap-2 shadow-xl shadow-primary-600/20"
              >
                Seja um parceiro <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Nova York, EUA (Inglês) - Parcerias de Negócios" 
                className="rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Convênios Ativos Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Convênios Ativos
            </h2>
            <p className="text-lg text-slate-600 font-inter">
              Verifique se a sua instituição é conveniada e aproveite descontos especiais de até 30% em nossos cursos de idiomas.
            </p>
          </div>

          {/* Search and Filters Controls */}
          <div className="mb-12 space-y-6">
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busque pelo nome da instituição, sindicato ou empresa..."
                className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm transition-all text-base font-inter"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm text-slate-400 hover:text-slate-600 font-inter"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {categories.map((category) => {
                const count = category === 'Todos' 
                  ? partners.length 
                  : partners.filter(p => p.category === category).length;
                
                // Don't show category button if it has 0 items
                if (count === 0 && category !== 'Todos') return null;

                const isSelected = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isSelected
                        ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {category !== 'Todos' && getCategoryIcon(category)}
                    <span>{category}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-primary-500 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Partners */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPartners.map((partner) => (
                <motion.div
                  key={partner.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Top card logo presentation */}
                  <div className="p-8 bg-slate-50/50 border-b border-slate-100 flex items-center justify-center h-44 relative group-hover:bg-white transition-colors duration-300">
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/60 text-slate-700 text-xs font-semibold uppercase tracking-wider font-inter">
                      {getCategoryIcon(partner.category)}
                      {partner.category}
                    </span>

                    <img
                      src={`${import.meta.env.BASE_URL}${partner.logo.startsWith('/') ? partner.logo.slice(1) : partner.logo}`}
                      alt={`Logo da ${partner.name}`}
                      className="max-h-24 max-w-[80%] object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback in case of image error (just render styling text logo)
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'text-2xl font-black text-slate-400 uppercase tracking-widest';
                          fallback.innerText = partner.name.slice(0, 3);
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>

                  {/* Body info */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Discount */}
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {partner.name}
                      </h3>
                      
                      {/* Discount highlights badge */}
                      <div className="inline-flex items-center gap-1.5 text-primary-600 bg-primary-50 rounded-xl px-3.5 py-1.5 text-sm font-extrabold mb-4 border border-primary-100">
                        <Percent className="w-4 h-4" />
                        {partner.discount}
                      </div>

                      {/* Description texts */}
                      <p className="text-slate-600 font-inter text-sm leading-relaxed mb-4">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Empty state when no partners found */}
            {filteredPartners.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 bg-white rounded-3xl border border-slate-100 text-center flex flex-col items-center justify-center p-8"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                  <SearchX className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Nenhum convênio encontrado
                </h3>
                <p className="text-slate-500 font-inter text-sm max-w-md mb-6">
                  Não encontramos nenhum convênio ativo correspondente à busca "{searchQuery}". Experimente usar outro termo ou limpar os filtros.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Todos');
                  }}
                  className="bg-primary-600 hover:bg-primary-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
                >
                  Limpar Busca e Filtros
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Benefícios para sua organização</h2>
            <p className="text-lg text-slate-600 font-inter">
              Um convênio com a Blue Sky Idiomas não tem custo para a sua empresa e agrega valor imediato ao seu pacote de benefícios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-primary-600 hover:border-primary-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">{benefit.title}</h3>
                <p className="text-slate-600 font-inter text-sm leading-relaxed group-hover:text-primary-100 transition-colors">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works & Solicitation Form */}
      <section className="py-24 bg-slate-50" ref={formRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona?</h2>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Contato Inicial', desc: 'Preencha o formulário ou entre em contato direto com nossa equipe comercial.' },
                  { step: '02', title: 'Formalização', desc: 'Assinamos um termo de convênio simples, sem burocracia e sem custo mensal.' },
                  { step: '03', title: 'Divulgação', desc: 'Fornecemos material digital para que você possa anunciar o novo benefício aos colaboradores.' },
                  { step: '04', title: 'Matrícula', desc: 'O aluno se identifica como membro da empresa conveniada e recebe o desconto na hora.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-3xl font-black text-primary-200">{item.step}</span>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 font-inter">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-2">Solicite o convênio</h3>
                <p className="text-slate-400 font-inter text-sm mb-6">
                  Preencha os dados e receba uma proposta personalizada para a sua empresa ou solicite ativação do seu convênio.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5 font-inter">
                      Nome da Empresa / Instituição
                    </label>
                    <input 
                      type="text" 
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="Ex: Grupo RBS, SINURGS, etc." 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-primary-500 transition-colors text-white" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5 font-inter">
                      E-mail corporativo / de contato
                    </label>
                    <input 
                      type="email" 
                      placeholder="seu.nome@empresa.com.br" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-primary-500 transition-colors text-white" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5 font-inter">
                      Telefone
                    </label>
                    <input 
                      type="tel" 
                      placeholder="(51) 99999-9999" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-primary-500 transition-colors text-white" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5 font-inter">
                      Mensagem
                    </label>
                    <textarea 
                      id="mensagem-input"
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Olá, gostaria de saber mais sobre o programa..." 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-primary-500 transition-colors h-32 text-white"
                    ></textarea>
                  </div>
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-600/30">
                    Enviar Solicitação
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

