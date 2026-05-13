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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/50 via-slate-50 to-slate-50 -z-10"></div>
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-accent-300 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span>
              Matrículas abertas para 2026
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              O mundo fala. <br/>
              <span className="text-primary-600">
                Você responde.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 font-inter leading-relaxed max-w-lg">
              Há mais de 25 anos transformando vidas em Porto Alegre através do ensino de idiomas personalizado e de alta qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  Agendar aula experimental
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/metodologia">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  <PlayCircle className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
                  Conheça a metodologia
                </motion.button>
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium"
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
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Alunos estudando" 
              className="rounded-3xl shadow-2xl object-cover h-full w-full"
              referrerPolicy="no-referrer"
            />
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
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
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
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
  return (
    <section className="py-10 border-y border-slate-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
          Empresas que confiam na Blue Sky para treinar suas equipes
        </p>
        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            className="flex gap-16 md:gap-24 opacity-50 grayscale whitespace-nowrap items-center group-hover:grayscale-0 transition-all duration-500"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-xl font-bold font-inter flex items-center gap-2 hover:text-primary-600 transition-colors"><Briefcase className="w-6 h-6"/> Acme Corp</span>
                <span className="text-xl font-bold font-inter flex items-center gap-2 hover:text-primary-600 transition-colors"><Building2 className="w-6 h-6"/> GlobalTech</span>
                <span className="text-xl font-bold font-inter flex items-center gap-2 hover:text-primary-600 transition-colors"><Globe2 className="w-6 h-6"/> Nexus</span>
                <span className="text-xl font-bold font-inter flex items-center gap-2 hover:text-primary-600 transition-colors"><Target className="w-6 h-6"/> Stark Ind.</span>
                <span className="text-xl font-bold font-inter flex items-center gap-2 hover:text-primary-600 transition-colors"><Award className="w-6 h-6"/> Wayne Ent.</span>
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
    { id: 'ingles', name: 'Inglês', desc: 'O idioma global dos negócios e viagens.', flag: 'https://flagcdn.com/us.svg', color: 'bg-blue-100', border: 'group-hover:border-blue-200' },
    { id: 'espanhol', name: 'Espanhol', desc: 'Conecte-se com toda a América Latina.', flag: 'https://flagcdn.com/es.svg', color: 'bg-orange-100', border: 'group-hover:border-orange-200' },
    { id: 'mandarim', name: 'Mandarim', desc: 'O idioma do futuro e da inovação.', flag: 'https://flagcdn.com/cn.svg', color: 'bg-red-100', border: 'group-hover:border-red-200' },
    { id: 'alemao', name: 'Alemão', desc: 'Abra portas na engenharia e tecnologia.', flag: 'https://flagcdn.com/de.svg', color: 'bg-yellow-100', border: 'group-hover:border-yellow-200' },
    { id: 'frances', name: 'Francês', desc: 'Cultura, diplomacia e elegância.', flag: 'https://flagcdn.com/fr.svg', color: 'bg-purple-100', border: 'group-hover:border-purple-200' },
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
                className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full ${lang.border}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${lang.color}`}>
                  <img src={lang.flag} alt={`Bandeira ${lang.name}`} className="w-10 h-10 object-cover rounded-full shadow-sm border-2 border-white/60" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{lang.name}</h3>
                <p className="text-slate-600 font-inter mb-6">{lang.desc}</p>
                <div className="flex items-center text-primary-600 font-medium text-sm mt-auto">
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
              Metodologia voltada para as <span className="text-primary-600">suas necessidades</span>
            </h2>
            <p className="text-lg text-slate-600 font-inter mb-8">
              Não acreditamos em fórmulas prontas. Na Blue Sky, seu aprendizado é moldado pelos seus objetivos, seja para uma viagem, uma promoção no trabalho ou desenvolvimento pessoal.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Target className="w-6 h-6 text-primary-600" />, title: 'Foco em Conversação', desc: 'Fale desde a primeira aula. Destravamos seu medo de errar.' },
                { icon: <Users className="w-6 h-6 text-primary-600" />, title: 'Turmas Reduzidas', desc: 'Máximo de 6 alunos por turma para garantir atenção individualizada.' },
                { icon: <BookOpen className="w-6 h-6 text-primary-600" />, title: 'Material Atualizado', desc: 'Conteúdos baseados em situações reais do dia a dia e do mundo corporativo.' }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 group-hover:scale-110 transition-all">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">{feature.title}</h4>
                    <p className="text-slate-600 font-inter">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link to="/metodologia" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Conheça nossa metodologia completa <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="overflow-hidden rounded-3xl"
              >
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Aula" className="object-cover h-64 w-full hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-slate-900 p-6 rounded-3xl text-white shadow-xl"
              >
                <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">25+</div>
                <div className="text-slate-300 text-sm font-inter">Anos de experiência no mercado porto-alegrense transformando carreiras.</div>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-primary-50 p-6 rounded-3xl border border-primary-100 shadow-lg shadow-primary-100/50"
              >
                <GraduationCap className="w-10 h-10 text-primary-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Certificações Internacionais</h4>
                <p className="text-sm text-slate-600 font-inter">Preparatório focado nos principais exames (TOEFL, IELTS, DELE).</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="overflow-hidden rounded-3xl"
              >
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Estudos" className="object-cover h-64 w-full hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contato">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Falar com consultor agora
                </motion.button>
              </Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-800 text-white hover:bg-primary-900 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 border border-primary-500/30 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
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
