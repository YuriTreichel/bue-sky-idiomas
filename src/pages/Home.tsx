import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  BookOpen, 
  Users, 
  Target, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  MessageCircle,
  PlayCircle,
  Briefcase,
  Building2,
  Award,
  Zap,
  GraduationCap
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Wrapper - z-0 to be visible over bg-white, pointer-events-none so it doesn't block clicks */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Vibrant Light Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-en-light/90 via-white to-es-light/90 opacity-90"></div>
        
        {/* Animated Floating Orbs representing the languages */}
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.75, 0.5], x: [0, 30, 0], y: [0, -35, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-[30rem] h-[30rem] bg-en-primary/25 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.65, 0.4], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-10 w-[35rem] h-[35rem] bg-accent-400/25 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4], x: [0, 45, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-zh-primary/15 rounded-full blur-[90px]"
        />
      </div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-1.5 mb-6"
            >
              {[
                { name: 'Inglês', class: 'bg-en-primary/10 text-en-primary border-en-primary/20 hover:bg-en-primary hover:text-white' },
                { name: 'Espanhol', class: 'bg-es-primary/10 text-es-primary border-es-primary/20 hover:bg-es-primary hover:text-white' },
                { name: 'Mandarim', class: 'bg-zh-primary/10 text-zh-primary border-zh-primary/20 hover:bg-zh-primary hover:text-white' },
                { name: 'Alemão', class: 'bg-de-primary/10 text-de-primary border-de-primary/20 hover:bg-de-primary hover:text-white' },
                { name: 'Francês', class: 'bg-fr-primary/10 text-fr-primary border-fr-primary/20 hover:bg-fr-primary hover:text-white' },
              ].map((lang) => (
                <span 
                  key={lang.name} 
                  className={`px-3 py-1.5 rounded-full border text-xs font-semibold cursor-default transition-all duration-300 ${lang.class}`}
                >
                  {lang.name}
                </span>
              ))}
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              O mundo fala. <br/>
              <span className="bg-gradient-to-r from-en-primary via-es-primary to-zh-primary bg-clip-text text-transparent">
                Você responde.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 font-inter leading-relaxed max-w-lg">
              Há mais de 25 anos transformando vidas no Brasil e no mundo através do ensino de idiomas personalizado e de alta qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato">
                <motion.button 
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center gap-2 group w-full sm:w-auto whitespace-nowrap"
                >
                  Bate-papo com o especialista
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/metodologia">
                <motion.button 
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 group w-full sm:w-auto whitespace-nowrap"
                >
                  <PlayCircle className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
                  Conheça a metodologia
                </motion.button>
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-500 font-inter">
              Agende uma consultoria gratuita e descubra o plano perfeito para alcançar o seu objetivo.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Aluno" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                ))}
              </div>
              <p>Junte-se a mais de <strong className="text-slate-900">5.000 alunos</strong> fluentes.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Ambient glows and decoration behind the main image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-300/30 rounded-full blur-2xl z-0 pointer-events-none"></div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-en-primary/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/50 to-transparent rounded-3xl transform rotate-3 scale-105 z-0"></div>
            
            <img 
              src={`${import.meta.env.BASE_URL}images/londres.jpg`} 
              alt="Londres, Reino Unido (Inglês)" 
              className="rounded-3xl shadow-2xl object-cover h-full w-full relative z-10"
              referrerPolicy="no-referrer"
            />
            
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Taxa de aprovação</p>
                <p className="text-xl font-bold text-slate-900">98% em exames</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-500">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">4.9/5.0</p>
                <p className="text-xs text-slate-500 font-medium">Avaliação dos alunos</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogoTicker = () => {
  const cities = [
    { name: 'Londres', flag: 'https://flagcdn.com/gb.svg' },
    { name: 'Nova York', flag: 'https://flagcdn.com/us.svg' },
    { name: 'Madri', flag: 'https://flagcdn.com/es.svg' },
    { name: 'Paris', flag: 'https://flagcdn.com/fr.svg' },
    { name: 'Berlim', flag: 'https://flagcdn.com/de.svg' },
    { name: 'Pequim', flag: 'https://flagcdn.com/cn.svg' },
    { name: 'Buenos Aires', flag: 'https://flagcdn.com/ar.svg' },
    { name: 'Toronto', flag: 'https://flagcdn.com/ca.svg' },
    { name: 'Munique', flag: 'https://flagcdn.com/de.svg' },
    { name: 'Xangai', flag: 'https://flagcdn.com/cn.svg' },
    { name: 'Sydney', flag: 'https://flagcdn.com/au.svg' },
    { name: 'Montreal', flag: 'https://flagcdn.com/ca.svg' }
  ];

  return (
    <section className="py-10 border-y border-slate-200 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          Conectando você às maiores capitais e culturas do mundo
        </p>
        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            className="flex gap-12 md:gap-16 whitespace-nowrap items-center transition-all duration-500"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {cities.map((city, idx) => (
                  <span 
                    key={idx} 
                    className="text-lg font-bold font-inter text-slate-700 flex items-center gap-3 hover:text-primary-600 transition-colors"
                  >
                    <img 
                      src={city.flag} 
                      alt={city.name} 
                      className="w-7 h-5 object-cover rounded-sm shadow-sm border border-slate-200" 
                      referrerPolicy="no-referrer"
                    />
                    {city.name}
                  </span>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Languages = () => {
  const langs = [
    { 
      id: 'ingles', 
      name: 'Inglês', 
      desc: 'O idioma global dos negócios e viagens.', 
      flag: 'https://flagcdn.com/us.svg', 
      gradient: 'bg-gradient-to-br from-blue-50/70 via-white to-red-50/30 group-hover:from-blue-100/50 group-hover:to-red-100/30', 
      iconBg: 'bg-blue-100/80 text-blue-800 border border-blue-200/50', 
      border: 'border-blue-100/70 group-hover:border-blue-400', 
      glow: 'shadow-lg shadow-blue-500/5 group-hover:shadow-blue-500/10', 
      textColor: 'text-blue-900 group-hover:text-blue-700',
      topColors: ['bg-[#0a3161]', 'bg-white', 'bg-[#b31942]']
    },
    { 
      id: 'espanhol', 
      name: 'Espanhol', 
      desc: 'Conecte-se com toda a América Latina.', 
      flag: 'https://flagcdn.com/es.svg', 
      gradient: 'bg-gradient-to-br from-red-50/40 via-white to-yellow-50/40 group-hover:from-red-100/40 group-hover:to-yellow-100/40', 
      iconBg: 'bg-yellow-100/80 text-red-600 border border-yellow-200/50', 
      border: 'border-yellow-200/60 group-hover:border-red-400', 
      glow: 'shadow-lg shadow-red-500/5 group-hover:shadow-red-500/10', 
      textColor: 'text-red-950 group-hover:text-red-600',
      topColors: ['bg-[#c60b1e]', 'bg-[#ffc400]', 'bg-[#c60b1e]']
    },
    { 
      id: 'mandarim', 
      name: 'Mandarim', 
      desc: 'O idioma do futuro e da inovação.', 
      flag: 'https://flagcdn.com/cn.svg', 
      gradient: 'bg-gradient-to-br from-red-50/40 via-white to-yellow-50/30 group-hover:from-red-100/40 group-hover:to-yellow-100/30', 
      iconBg: 'bg-red-100/80 text-red-600 border border-red-200/50', 
      border: 'border-red-100/70 group-hover:border-yellow-400', 
      glow: 'shadow-lg shadow-red-500/5 group-hover:shadow-red-500/10', 
      textColor: 'text-red-950 group-hover:text-red-600',
      topColors: ['bg-[#de2910]', 'bg-[#ffde00]', 'bg-[#de2910]']
    },
    { 
      id: 'alemao', 
      name: 'Alemão', 
      desc: 'Abra portas na engenharia e tecnologia.', 
      flag: 'https://flagcdn.com/de.svg', 
      gradient: 'bg-gradient-to-br from-slate-100/60 via-red-50/10 to-yellow-50/40 group-hover:from-slate-200/40 group-hover:to-yellow-100/30', 
      iconBg: 'bg-slate-200 text-slate-900 border border-slate-300', 
      border: 'border-slate-200 group-hover:border-slate-400', 
      glow: 'shadow-lg shadow-slate-900/5 group-hover:shadow-slate-900/10', 
      textColor: 'text-slate-900 group-hover:text-slate-700',
      topColors: ['bg-black', 'bg-[#dd0000]', 'bg-[#ffce00]']
    },
    { 
      id: 'frances', 
      name: 'Francês', 
      desc: 'Cultura, diplomacia e elegância.', 
      flag: 'https://flagcdn.com/fr.svg', 
      gradient: 'bg-gradient-to-br from-blue-50/60 via-white to-red-50/30 group-hover:from-blue-100/50 group-hover:to-red-100/30', 
      iconBg: 'bg-blue-100/80 text-blue-800 border border-blue-200/50', 
      border: 'border-blue-100/70 group-hover:border-red-400', 
      glow: 'shadow-lg shadow-blue-500/5 group-hover:shadow-blue-500/10', 
      textColor: 'text-blue-900 group-hover:text-blue-700',
      topColors: ['bg-[#0055a5]', 'bg-white', 'bg-[#ef4135]']
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Escolha seu próximo idioma
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-inter"
          >
            Oferecemos cursos completos para os idiomas mais demandados pelo mercado global.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {langs.map((lang, idx) => (
            <Link to={`/cursos/${lang.id}`} key={lang.name}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative overflow-hidden p-8 pt-10 rounded-3xl border shadow-sm transition-all duration-300 group cursor-pointer h-full ${lang.gradient} ${lang.border} ${lang.glow}`}
              >
                {/* Faixa tricolor da bandeira no topo */}
                <div className="absolute top-0 left-0 right-0 h-2 flex overflow-hidden">
                  {lang.topColors.map((colorClass, cIdx) => (
                    <div key={cIdx} className={`h-full flex-1 ${colorClass}`} />
                  ))}
                </div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${lang.iconBg}`}>
                  <img src={lang.flag} alt={`Bandeira ${lang.name}`} className="w-10 h-10 object-cover rounded-full shadow-sm border-2 border-white/60" referrerPolicy="no-referrer" />
                </div>
                <h3 className={`text-xl font-bold text-slate-900 mb-2 transition-colors ${lang.textColor}`}>{lang.name}</h3>
                <p className="text-slate-600 font-inter mb-4">{lang.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] px-2.5 py-1 bg-slate-100/80 border border-slate-200/60 rounded-full font-semibold text-slate-600 group-hover:bg-white/80 transition-colors">Aulas Individuais</span>
                  <span className="text-[11px] px-2.5 py-1 bg-slate-100/80 border border-slate-200/60 rounded-full font-semibold text-slate-600 group-hover:bg-white/80 transition-colors">Aulas em Grupo</span>
                </div>
                <div className={`flex items-center font-medium text-sm mt-auto transition-colors text-slate-500 ${lang.textColor}`}>
                  Ver detalhes do curso <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Metodologia voltada para as <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 font-extrabold">suas necessidades</span>
            </h2>
            <p className="text-lg text-slate-600 font-inter mb-8">
              Não acreditamos em fórmulas prontas. Na Blue Sky, seu aprendizado é moldado pelos seus objetivos, seja para uma viagem, uma promoção no trabalho ou desenvolvimento pessoal.
            </p>
            
            <div className="space-y-6">
              {[
                { 
                  icon: <Target className="w-6 h-6 text-red-600" />, 
                  title: 'Foco em Conversação', 
                  desc: 'Fale desde a primeira aula. Destravamos seu medo de errar.',
                  iconBg: 'bg-red-50 group-hover:bg-red-100',
                  hoverTitle: 'group-hover:text-red-600'
                },
                { 
                  icon: <Users className="w-6 h-6 text-blue-600" />, 
                  title: 'Turmas Reduzidas', 
                  desc: 'Máximo de 6 alunos por turma para garantir atenção individualizada.',
                  iconBg: 'bg-blue-50 group-hover:bg-blue-100',
                  hoverTitle: 'group-hover:text-blue-600'
                },
                { 
                  icon: <BookOpen className="w-6 h-6 text-accent-500" />, 
                  title: 'Material Atualizado', 
                  desc: 'Conteúdos baseados em situações reais do dia a dia e do mundo corporativo.',
                  iconBg: 'bg-accent-50/50 group-hover:bg-accent-100/50',
                  hoverTitle: 'group-hover:text-accent-600'
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all ${feature.iconBg}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold text-slate-900 mb-1 transition-colors ${feature.hoverTitle}`}>{feature.title}</h4>
                    <p className="text-slate-600 font-inter">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link to="/metodologia" className="text-primary-600 hover:text-primary-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Conheça nossa metodologia completa <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="overflow-hidden rounded-3xl shadow-lg border border-slate-100"
              >
                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Paris, França (Francês)" className="object-cover h-64 w-full hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-red-50 to-red-100/60 p-6 rounded-3xl border border-red-100/80 shadow-md shadow-red-500/5 text-slate-800"
              >
                <div className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">25+</div>
                <div className="text-slate-700 text-sm font-semibold font-inter">Anos de experiência no mercado transformando carreiras.</div>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-accent-50/60 to-amber-50/80 p-6 rounded-3xl border border-accent-100/80 shadow-md shadow-accent-500/5"
              >
                <GraduationCap className="w-10 h-10 text-accent-600 mb-4 animate-pulse" />
                <h4 className="font-bold text-slate-900 mb-2">Certificações Internacionais</h4>
                <p className="text-sm text-slate-600 font-inter">Preparatório focado nos principais exames (TOEFL, IELTS, DELE).</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="overflow-hidden rounded-3xl shadow-lg border border-slate-100"
              >
                <img src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Berlim, Alemanha (Alemão)" className="object-cover h-64 w-full hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-900/50 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Histórias de sucesso
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 font-inter"
          >
            Veja o que nossos alunos dizem sobre a experiência Blue Sky.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Mariana Silva', role: 'Gerente de Marketing', text: 'A metodologia focada em negócios me ajudou a conduzir reuniões em inglês com confiança em apenas 6 meses.' },
            { name: 'Carlos Eduardo', role: 'Desenvolvedor Senior', text: 'Sempre tive bloqueio com inglês. Os professores da Blue Sky foram essenciais para eu destravar e conseguir minha vaga no exterior.' },
            { name: 'Ana Paula', role: 'Estudante Universitária', text: 'O curso de Espanhol é incrível. Aulas dinâmicas, material excelente e muita conversação desde o primeiro dia.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 relative hover:border-primary-500/50 transition-colors group"
            >
              <div className="flex text-accent-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-300 font-inter mb-8 text-lg leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary-600 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-primary-600/20"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary-400 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-primary-800 rounded-full blur-3xl"
          ></motion.div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para dar o próximo passo?</h2>
            <p className="text-primary-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-inter">
              Agende uma consultoria gratuita e descubra o plano perfeito para o seu objetivo.
            </p>
            <div className="flex justify-center">
              <a href="https://wa.me/5551999474150" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chamar no WhatsApp
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Languages />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
