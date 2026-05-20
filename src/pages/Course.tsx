import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { CTA } from './Home';

const coursesData: Record<string, any> = {
  ingles: {
    name: 'Inglês',
    flag: 'https://flagcdn.com/us.svg',
    color: 'from-en-primary to-en-secondary',
    bg: 'bg-en-light',
    buttonColor: 'bg-en-primary hover:bg-en-secondary',
    iconColor: 'text-en-primary',
    tagBg: 'bg-en-light text-en-primary',
    desc: 'O idioma global dos negócios, viagens e tecnologia. Domine o inglês e abra portas em qualquer lugar do mundo.',
    levels: ['Iniciante (A1-A2)', 'Intermediário (B1-B2)', 'Avançado (C1-C2)', 'Business English'],
    features: [
      'Foco em conversação desde o primeiro dia',
      'Preparação para TOEFL e IELTS',
      'Material didático atualizado anualmente',
      'Professores com vivência internacional'
    ],
    cityImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    cityName: 'Nova York, EUA (Inglês)'
  },
  espanhol: {
    name: 'Espanhol',
    flag: 'https://flagcdn.com/es.svg',
    color: 'from-es-primary to-es-secondary',
    bg: 'bg-es-light',
    buttonColor: 'bg-es-primary hover:bg-es-secondary',
    iconColor: 'text-es-primary',
    tagBg: 'bg-es-light text-es-primary',
    desc: 'Conecte-se com toda a América Latina e Espanha. O segundo idioma mais falado no mundo como língua estrangeira.',
    levels: ['Básico (A1-A2)', 'Intermediário (B1-B2)', 'Avançado (C1-C2)', 'Espanhol para Negócios'],
    features: [
      'Imersão cultural hispânica',
      'Preparação para o exame DELE',
      'Foco nas variações regionais do idioma',
      'Aulas dinâmicas com música e literatura'
    ],
    cityImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    cityName: 'Sevilha, Espanha (Espanhol)'
  },
  mandarim: {
    name: 'Mandarim',
    flag: 'https://flagcdn.com/cn.svg',
    color: 'from-zh-primary to-zh-secondary',
    bg: 'bg-zh-light',
    buttonColor: 'bg-zh-primary hover:bg-zh-secondary',
    iconColor: 'text-zh-primary',
    tagBg: 'bg-zh-light text-zh-primary',
    desc: 'O idioma do futuro e da inovação. Destaque-se no mercado de trabalho com o idioma que mais cresce no mundo corporativo.',
    levels: ['Iniciante (HSK 1-2)', 'Intermediário (HSK 3-4)', 'Avançado (HSK 5-6)'],
    features: [
      'Metodologia simplificada para ocidentais',
      'Foco em Pinyin e tons',
      'Preparação oficial para exames HSK',
      'Cultura e etiqueta de negócios chinesa'
    ],
    cityImage: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    cityName: 'Pequim, China (Mandarim)'
  },
  alemao: {
    name: 'Alemão',
    flag: 'https://flagcdn.com/de.svg',
    color: 'from-de-primary to-de-secondary',
    bg: 'bg-de-light',
    buttonColor: 'bg-de-primary hover:bg-de-secondary',
    iconColor: 'text-de-primary',
    tagBg: 'bg-de-light text-de-primary',
    desc: 'Abra portas na engenharia, tecnologia e ciências. O idioma da maior economia da Europa.',
    levels: ['Iniciante (A1-A2)', 'Intermediário (B1-B2)', 'Avançado (C1-C2)'],
    features: [
      'Estrutura gramatical desmistificada',
      'Preparação para Goethe-Zertifikat',
      'Vocabulário técnico e acadêmico',
      'Apoio para intercâmbio na Alemanha'
    ],
    cityImage: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    cityName: 'Berlim, Alemanha (Alemão)'
  },
  frances: {
    name: 'Francês',
    flag: 'https://flagcdn.com/fr.svg',
    color: 'from-fr-primary to-fr-secondary',
    bg: 'bg-fr-light',
    buttonColor: 'bg-fr-primary hover:bg-fr-secondary',
    iconColor: 'text-fr-primary',
    tagBg: 'bg-fr-light text-fr-primary',
    desc: 'Cultura, diplomacia e elegância. Um idioma essencial para relações internacionais, gastronomia e artes.',
    levels: ['Iniciante (A1-A2)', 'Intermediário (B1-B2)', 'Avançado (C1-C2)'],
    features: [
      'Foco na pronúncia e fluidez',
      'Preparação para DELF/DALF',
      'Imersão na cultura francófona',
      'Francês para turismo e hotelaria'
    ],
    cityImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    cityName: 'Paris, França (Francês)'
  }
};

export default function Course() {
  const { id } = useParams<{ id: string }>();
  const course = id ? coursesData[id] : null;

  if (!course) {
    return (
      <div className="pt-48 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Curso não encontrado</h1>
        <p className="text-slate-600 mb-8">O idioma que você está procurando não está disponível no momento.</p>
        <Link to="/">
          <button className="bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors">
            Voltar para o início
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Course Hero */}
      <section className={`pt-32 pb-20 lg:pt-48 lg:pb-32 ${course.bg} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={course.flag} alt={`Bandeira ${course.name}`} className="w-16 h-16 object-cover rounded-full shadow-md border-4 border-white" />
                <h1 className={`text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${course.color}`}>
                  {course.name}
                </h1>
              </div>
              <p className="text-xl text-slate-700 mb-8 font-inter leading-relaxed max-w-lg">
                {course.desc}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-700">
                  <Clock className={`w-4 h-4 ${course.iconColor}`} /> 2h semanais
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-700">
                  <Users className={`w-4 h-4 ${course.iconColor}`} /> Aulas Individuais & em Grupo
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-700">
                  <Users className={`w-4 h-4 ${course.iconColor}`} /> Grupos Reduzidos (Máx. 6 alunos)
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-700">
                  <Award className={`w-4 h-4 ${course.iconColor}`} /> Certificado
                </div>
              </div>

              <Link to="/contato" className="inline-block">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${course.buttonColor} text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl flex items-center justify-center gap-2`}
                >
                  Matricule-se agora
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={course.cityImage} 
                alt={course.cityName} 
                className="rounded-3xl shadow-2xl object-cover h-[400px] w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <BookOpen className={`w-8 h-8 ${course.iconColor}`} /> O que você vai aprender
              </h2>
              <ul className="space-y-6">
                {course.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className={`w-6 h-6 ${course.iconColor} shrink-0 mt-0.5`} />
                    <span className="text-lg text-slate-700 font-inter">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Níveis oferecidos</h2>
              <div className="space-y-4">
                {course.levels.map((level: string, idx: number) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-slate-800">{level}</span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${course.tagBg}`}>Disponível</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
