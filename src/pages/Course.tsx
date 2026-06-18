import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Users, BookOpen, Award, ArrowRight, Building, GraduationCap, Mail, FileText } from 'lucide-react';
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
      'Preparação para Exames Internacionais (TOEFL, IELTS, DELE…)',
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
                  <Clock className={`w-4 h-4 ${course.iconColor}`} /> Carga Horária Flexível
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-700">
                  <Users className={`w-4 h-4 ${course.iconColor}`} /> Aulas Individuais, Duplas ou Grupos Reduzidos
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-700">
                  <Award className={`w-4 h-4 ${course.iconColor}`} /> Certificado Incluso
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
                <BookOpen className={`w-8 h-8 ${course.iconColor}`} /> Aqui Você Encontra
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

      {/* English Pricing Section */}
      {id === 'ingles' && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-wider bg-en-light text-en-primary px-4 py-1.5 rounded-full"
              >
                Investimento
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-extrabold text-slate-900 mt-4 mb-6"
              >
                Planos e Valores
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 font-inter"
              >
                Escolha a modalidade que melhor se adapta às suas necessidades e objetivos.
              </motion.p>
            </div>

            <div className="space-y-12">
              {/* 1. Aulas Customizadas */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-en-secondary bg-red-50 px-3 py-1 rounded-full">
                      Flexível & Personalizado
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">
                      Aulas Customizadas <span className="text-slate-500 text-lg block font-normal">(Individuais, Duplas ou Trios)</span>
                    </h3>
                    <p className="text-slate-600 font-inter leading-relaxed mb-6">
                      Foco total nas necessidades do aluno (viagem, negócios, exames internacionais, etc.). Customizadas por nível, interesse e disponibilidade.
                    </p>
                    <Link to="/contato">
                      <button className="w-full bg-en-primary hover:bg-en-secondary text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                        Consultar Horários
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                  <div className="lg:col-span-2 overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="py-4 px-4 font-bold text-slate-800">Valores Hora/Aula</th>
                          <th className="py-4 px-4 font-bold text-en-primary bg-blue-50/50 rounded-t-xl text-center">Valor Hora/Aula (On-line)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">Individual</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900 bg-blue-50/30">R$ 100,00</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">Em Dupla</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900 bg-blue-50/30">R$ 80,00*</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">Em Trio</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900 bg-blue-50/30">R$ 65,00*</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-xs text-slate-500 mt-4 font-inter text-right">
                      *Valor por aluno
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 2. Business English (In Company) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-en-primary mb-6">
                      <Building className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-en-primary bg-blue-50 px-3 py-1 rounded-full">
                      Business English
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">In Company</h3>
                    <p className="text-slate-600 font-inter leading-relaxed mb-6">
                      Inglês para o ambiente corporativo e de negócios, adaptado à sua empresa.
                    </p>
                    <ul className="space-y-3 mb-8 text-sm text-slate-700 font-inter">
                      <li className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-en-primary shrink-0" />
                        <span>Carga horária: <strong>30 horas</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-en-primary shrink-0" />
                        <span>Níveis: <strong>Básico ao Avançado</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-en-primary shrink-0" />
                        <span>Regra: <strong>Mínimo de 4 alunos por turma</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-en-primary shrink-0" />
                        <span>Período: <strong>Flexível (à escolha da empresa)</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-en-primary shrink-0" />
                        <span>Material sugerido: <strong>Market Leader (R$ 285,00)</strong></span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="border-t border-slate-100 pt-6 mb-6">
                      <div className="text-xs text-slate-500 mb-1">Investimento por pessoa</div>
                      <div className="text-3xl font-extrabold text-slate-900">R$ 1.750,00</div>
                      <div className="text-sm text-slate-600 mt-1">Ou em 5x de R$ 350,00</div>
                      <div className="mt-3 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-lg inline-block">
                        10% de desconto à vista: R$ 1.575,00
                      </div>
                    </div>
                    <Link to="/contato">
                      <button className="w-full bg-slate-900 hover:bg-en-primary text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
                        Solicitar Proposta
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>

                {/* 3. Preparatório para Proficiência */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-en-secondary mb-6">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-en-secondary bg-red-50 px-3 py-1 rounded-full">
                      Mestrado & Doutorado
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">Proficiência em Leitura</h3>
                    <p className="text-slate-600 font-inter leading-relaxed mb-6">
                      Focado em leitura intensiva de textos acadêmicos e científicos em curto espaço de tempo.
                    </p>
                    <ul className="space-y-3 mb-8 text-sm text-slate-700 font-inter">
                      <li className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-en-secondary shrink-0" />
                        <span>Carga horária média: <strong>20 horas</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-en-secondary shrink-0" />
                        <span>Formato: <strong>Aulas Individuais</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-en-secondary shrink-0" />
                        <span>Material didático: <strong>100% GRATUITO ("Reading for Proficiency")</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-en-secondary shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600">Não precisa de conhecimento prévio. Aulas ministradas em português apoiadas em: estratégias de leitura, estrutura gramatical relevante e vocabulário acadêmico.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="border-t border-slate-100 pt-6 mb-6">
                      <div className="text-xs text-slate-500 mb-1">Investimento</div>
                      <div className="text-3xl font-extrabold text-slate-900">R$ 1.600,00 <span className="text-xs text-slate-500 font-normal">base</span></div>
                      <div className="text-xs text-slate-600 mt-1">5% desc. parcelado: 3x R$ 507,00 (PIX/cartão)</div>
                      <div className="mt-3 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-lg inline-block">
                        20% de desconto à vista via PIX: R$ 1.280,00
                      </div>
                    </div>
                    <Link to="/contato">
                      <button className="w-full bg-slate-900 hover:bg-en-secondary text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
                        Iniciar Preparatório
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>

                {/* 4. Traduções & Versões */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-6">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      Traduções & Versões
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">Serviços Ágeis</h3>
                    <p className="text-slate-600 font-inter leading-relaxed mb-6">
                      Traduções (inglês-português) e versões (português-inglês) eficientes.
                    </p>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/50 mb-8">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Aplicações</h4>
                      <ul className="space-y-2 text-sm text-slate-700 font-inter">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>Resumos (abstracts) e artigos científicos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>Sites e documentação variada</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>Correspondências oficiais/comerciais</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <a href="mailto:blueskyidiomas@gmail.com" className="block w-full">
                      <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
                        <Mail className="w-4 h-4" />
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Spanish Pricing Section */}
      {id === 'espanhol' && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-wider bg-es-light text-es-primary px-4 py-1.5 rounded-full"
              >
                Inversión
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-extrabold text-slate-900 mt-4 mb-6"
              >
                Planos e Valores
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 font-inter"
              >
                Escolha a modalidade de espanhol que melhor atende aos seus objetivos pessoais ou corporativos.
              </motion.p>
            </div>

            <div className="space-y-12">
              {/* 1. Aulas Customizadas */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-es-primary bg-red-50 px-3 py-1 rounded-full">
                      Flexível & Personalizado
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">
                      Aulas Customizadas <span className="text-slate-500 text-lg block font-normal">(Individuais, Duplas ou Trios)</span>
                    </h3>
                    <p className="text-slate-600 font-inter leading-relaxed mb-6">
                      Foco total nas necessidades do aluno (viagem, negócios, exames internacionais, etc.). Customizadas por nível, interesse e disponibilidade.
                    </p>
                    <Link to="/contato">
                      <button className="w-full bg-es-primary hover:bg-es-secondary text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                        Consultar Horários
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                  <div className="lg:col-span-2 overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="py-4 px-4 font-bold text-slate-800">Valores Hora/Aula</th>
                          <th className="py-4 px-4 font-bold text-es-primary bg-red-50/50 rounded-t-xl text-center">Valor Hora/Aula (On-line)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">Individual</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900 bg-red-50/30">R$ 100,00</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">Em Dupla</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900 bg-red-50/30">R$ 80,00*</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">Em Trio</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900 bg-red-50/30">R$ 65,00*</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-xs text-slate-500 mt-4 font-inter text-right">
                      *Valor por aluno
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 2. Espanhol para Negócios (In Company) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-es-primary mb-6">
                      <Building className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-es-primary bg-red-50 px-3 py-1 rounded-full">
                      Espanhol para Negócios
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">In Company</h3>
                    <p className="text-slate-600 font-inter leading-relaxed mb-6">
                      Espanhol voltado para o ambiente corporativo e de negócios da sua empresa.
                    </p>
                    <ul className="space-y-3 mb-8 text-sm text-slate-700 font-inter">
                      <li className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-es-primary shrink-0" />
                        <span>Carga horária: <strong>40 horas</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-es-primary shrink-0" />
                        <span>Níveis: <strong>Do Básico ao Avançado</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-es-primary shrink-0" />
                        <span>Regra: <strong>Mínimo de 4 alunos por turma</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-es-primary shrink-0" />
                        <span>Período: <strong>Flexível (à escolha da empresa)</strong></span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="border-t border-slate-100 pt-6 mb-6">
                      <div className="text-xs text-slate-500 mb-1">Investimento por pessoa</div>
                      <div className="text-3xl font-extrabold text-slate-900">R$ 1.750,00</div>
                      <div className="text-sm text-slate-600 mt-1">Ou em 5x de R$ 350,00</div>
                      <div className="mt-3 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-lg inline-block">
                        10% de desconto à vista: R$ 1.575,00
                      </div>
                    </div>
                    <Link to="/contato">
                      <button className="w-full bg-slate-900 hover:bg-es-primary text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
                        Solicitar Proposta
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>

                {/* 3. Preparatório para Provas de Proficiência em Leitura */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-es-secondary mb-6">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-es-secondary bg-yellow-50 px-3 py-1 rounded-full">
                      Mestrado & Doutorado
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">Proficiência em Leitura</h3>
                    <p className="text-slate-600 font-inter leading-relaxed mb-6">
                      Focado em leitura intensiva de textos acadêmicos e científicos em curto espaço de tempo.
                    </p>
                    <ul className="space-y-3 mb-8 text-sm text-slate-700 font-inter">
                      <li className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-es-secondary shrink-0" />
                        <span>Carga horária média: <strong>20 horas</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-es-secondary shrink-0" />
                        <span>Formato: <strong>Aulas Individuais</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-es-secondary shrink-0" />
                        <span>Material didático: <strong>100% GRATUITO ("Preparatório para el Examen de Proficiencia")</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-es-secondary shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600">Não precisa de conhecimento prévio. Aulas ministradas em português apoiadas em: desenvolvimento de estratégias de leitura, conhecimento estrutural relevante para a compreensão de textos e aquisição de vocabulário acadêmico/científico.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="border-t border-slate-100 pt-6 mb-6">
                      <div className="text-xs text-slate-500 mb-1">Investimento</div>
                      <div className="text-3xl font-extrabold text-slate-900">R$ 1.700,00 <span className="text-xs text-slate-500 font-normal">base</span></div>
                      <div className="text-xs text-slate-600 mt-1">5% desc. parcelado: 3x R$ 540,00 (PIX/cartão)</div>
                      <div className="mt-3 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-lg inline-block">
                        20% de desconto à vista via PIX: R$ 1.360,00
                      </div>
                    </div>
                    <Link to="/contato">
                      <button className="w-full bg-slate-900 hover:bg-es-secondary text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
                        Iniciar Preparatório
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>

                {/* 4. Traduções & Versões */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-6">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      Traduções & Versões
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">Serviços Ágeis</h3>
                    <p className="text-slate-600 font-inter leading-relaxed mb-6">
                      Traduções (espanhol-português) e versões (português-espanhol) eficientes.
                    </p>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/50 mb-8">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Aplicações</h4>
                      <ul className="space-y-2 text-sm text-slate-700 font-inter">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>Resumos (abstracts) e artigos científicos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>Sites e documentação variada</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>Correspondências oficiais/comerciais</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <a href="mailto:blueskyidiomas@gmail.com" className="block w-full">
                      <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
                        <Mail className="w-4 h-4" />
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mandarim Pricing Section */}
      {id === 'mandarim' && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-wider bg-zh-light text-zh-primary px-4 py-1.5 rounded-full"
              >
                Inversão
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-extrabold text-slate-900 mt-4 mb-6"
              >
                Planos e Valores
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 font-inter"
              >
                Escolha a melhor modalidade de mandarim para impulsionar sua carreira ou seus estudos.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* 1. Aulas Customizadas */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 lg:col-span-7 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zh-secondary bg-amber-50 px-3 py-1 rounded-full">
                    Online Flexível
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">
                    Aulas Customizadas <span className="text-slate-500 text-lg block font-normal">(Individuais, Duplas ou Trios)</span>
                  </h3>
                  <p className="text-slate-600 font-inter leading-relaxed mb-6">
                    Foco total nas necessidades do aluno (viagem, negócios, exames internacionais, etc.). Customizadas por nível, interesse e disponibilidade de estudo.
                  </p>
                  
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="py-4 px-4 font-bold text-slate-800">Formato (por pessoa)</th>
                          <th className="py-4 px-4 font-bold text-zh-primary bg-red-50/50 rounded-t-xl text-center">Valor Hora/Aula (On-line)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">Individual</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900 bg-red-50/30">R$ 110,00</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">Em Dupla</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900 bg-red-50/30">R$ 90,00</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-5 px-4 font-semibold text-slate-800">Em Trio</td>
                          <td className="py-5 px-4 text-center font-bold text-slate-900 bg-red-50/30">R$ 75,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <Link to="/contato">
                  <button className="w-full bg-zh-primary hover:bg-zh-secondary text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                    Consultar Horários
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>

              {/* 2. Mandarim para Negócios */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 lg:col-span-5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-zh-primary mb-6">
                    <Building className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zh-primary bg-red-50 px-3 py-1 rounded-full">
                    Mandarim Corporativo
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">In Company</h3>
                  <p className="text-slate-600 font-inter leading-relaxed mb-6">
                    Mandarim voltado para o mercado corporativo e de negócios da sua empresa.
                  </p>
                  
                  <ul className="space-y-3 mb-8 text-sm text-slate-700 font-inter">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-zh-primary shrink-0" />
                      <span>Carga horária: <strong>40 horas</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-zh-primary shrink-0" />
                      <span>Níveis: <strong>Intro, Básico e Intermediário</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-zh-primary shrink-0" />
                      <span>Mínimo por turma: <strong>4 alunos</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-zh-primary shrink-0" />
                      <span>Período: <strong>Flexível (à escolha da empresa)</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-zh-primary shrink-0" />
                      <span>Material: <strong>Livro Chinês Básico + Dicionário (R$ 165,00)</strong></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="border-t border-slate-100 pt-6 mb-6">
                    <div className="text-xs text-slate-500 mb-1">Investimento por pessoa</div>
                    <div className="text-3xl font-extrabold text-slate-900">R$ 1.450,00</div>
                    <div className="text-sm text-slate-600 mt-1">5x R$ 290,00 OU 6x R$ 242,00 por pessoa</div>
                    <div className="mt-3 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-lg inline-block">
                      10% de desconto à vista: R$ 1.305,00
                    </div>
                  </div>

                  <Link to="/contato">
                    <button className="w-full bg-slate-900 hover:bg-zh-primary text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
                      Solicitar Proposta
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Alemão Pricing Section */}
      {id === 'alemao' && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-wider bg-de-light text-de-primary border border-slate-200 px-4 py-1.5 rounded-full"
              >
                Investimento
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-extrabold text-slate-900 mt-4 mb-6"
              >
                Planos e Valores
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 font-inter"
              >
                Aulas totalmente customizadas de acordo com o nível de conhecimento, interesse e disponibilidade de estudo.
              </motion.p>
            </div>

            {/* 1. Aulas Customizadas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-de-secondary bg-yellow-50 px-3 py-1 rounded-full">
                    Exclusivamente On-line
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">
                    Aulas Customizadas <span className="text-slate-500 text-lg block font-normal">(Individuais, Duplas ou Trios)</span>
                  </h3>
                  <p className="text-slate-600 font-inter leading-relaxed mb-6 text-sm">
                    Foco total nas necessidades específicas de cada aluno (viagem, negócios, exames internacionais, etc.).
                  </p>
                  
                  <Link to="/contato">
                    <button className="w-full bg-de-primary hover:bg-de-secondary text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                      Iniciar Imediatamente
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
                
                <div className="md:col-span-7 overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="py-4 px-4 font-bold text-slate-800">Formato (por pessoa)</th>
                        <th className="py-4 px-4 font-bold text-de-secondary bg-yellow-50/50 rounded-t-xl text-center">Valor Hora/Aula</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-5 px-4 font-semibold text-slate-800">Individual</td>
                        <td className="py-5 px-4 text-center font-bold text-slate-900 bg-yellow-50/20">R$ 110,00</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-5 px-4 font-semibold text-slate-800">Em Dupla</td>
                        <td className="py-5 px-4 text-center font-bold text-slate-900 bg-yellow-50/20">R$ 90,00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-5 px-4 font-semibold text-slate-800">Em Trio</td>
                        <td className="py-5 px-4 text-center font-bold text-slate-900 bg-yellow-50/20">R$ 75,00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Francês Pricing Section */}
      {id === 'frances' && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-wider bg-fr-light text-fr-primary px-4 py-1.5 rounded-full"
              >
                Investissement
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-extrabold text-slate-900 mt-4 mb-6"
              >
                Planos e Valores
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 font-inter"
              >
                Aulas personalizadas de acordo com o nível de conhecimento, interesse e disponibilidade de estudo.
              </motion.p>
            </div>

            {/* 1. Aulas Customizadas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-fr-secondary bg-red-50 px-3 py-1 rounded-full">
                    Modalidade On-line
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-4">
                    Aulas Customizadas <span className="text-slate-500 text-lg block font-normal">(Individuais, Duplas ou Trios)</span>
                  </h3>
                  <p className="text-slate-600 font-inter leading-relaxed mb-6 text-sm">
                    Foco total nas necessidades específicas de cada aluno (viagem, negócios, exames internacionais, etc.).
                  </p>
                  
                  <Link to="/contato">
                    <button className="w-full bg-fr-primary hover:bg-fr-secondary text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                      Agendar Aula
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
                
                <div className="md:col-span-7 overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="py-4 px-4 font-bold text-slate-800">Formato (por pessoa)</th>
                        <th className="py-4 px-4 font-bold text-fr-primary bg-blue-50/50 rounded-t-xl text-center">Valor Hora/Aula</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-5 px-4 font-semibold text-slate-800">Individual</td>
                        <td className="py-5 px-4 text-center font-bold text-slate-900 bg-blue-50/20">R$ 110,00</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-5 px-4 font-semibold text-slate-800">Em Dupla</td>
                        <td className="py-5 px-4 text-center font-bold text-slate-900 bg-blue-50/20">R$ 90,00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-5 px-4 font-semibold text-slate-800">Em Trio</td>
                        <td className="py-5 px-4 text-center font-bold text-slate-900 bg-blue-50/20">R$ 75,00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
