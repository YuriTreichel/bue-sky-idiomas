import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Users, BookOpen, MessageCircle, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA } from './Home';

const services = [
  {
    title: 'Aulas de Conversação',
    description: 'Aprimore sua fluência e confiança com discussões dinâmicas sobre temas atuais, simulações do cotidiano e correções personalizadas de pronúncia e vocabulário.'
  },
  {
    title: 'Preparação TOEFL/IELTS',
    description: 'Treinamento focado nas quatro seções do exame (Reading, Listening, Speaking e Writing) com simulados reais, estratégias de tempo e feedback detalhado.'
  },
  {
    title: 'Mestrado e Doutorado',
    description: 'Preparação específica para exames de proficiência exigidos por programas acadêmicos de pós-graduação, com foco em leitura instrumental e interpretação de textos acadêmicos.'
  },
  {
    title: 'Cursos para Viagens',
    description: 'Vocabulário prático e situações cotidianas de viagem (aeroporto, hotel, restaurantes, compras e direções) para que você se comunique com autonomia no exterior.'
  },
  {
    title: 'Traduções e Versões',
    description: 'Serviços profissionais de tradução de documentos, artigos científicos e materiais corporativos, garantindo precisão terminológica e adequação cultural.'
  },
  {
    title: 'Reforço Escolar',
    description: 'Acompanhamento personalizado para estudantes do ensino fundamental e médio, auxiliando na compreensão da gramática, realização de tarefas e preparação para provas escolares.'
  }
];

export default function Methodology() {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-90 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/40 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-200/30 rounded-full blur-[100px] z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              Desde 1998
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
            >
              Tradição e <span className="text-primary-600">Excelência</span> no Ensino.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 font-inter leading-relaxed"
            >
              Há mais de 25 anos no mercado, a Blue Sky Escola de Idiomas oferece um ensino de alta qualidade. Atendemos desde crianças a adultos, estudantes e profissionais, respeitando sempre os objetivos individuais de cada um.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sobre a Escola */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full blur-2xl -z-10 opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Aluno estudando online com notebook e fones de ouvido" 
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Escola</h2>
              <div className="space-y-6 text-slate-600 font-inter text-lg leading-relaxed">
                <p>
                  Organizada em 1998 pelas professoras <strong className="text-slate-900">Daline Schramm Adamy e Renata C. S. Bonotto</strong>, a Blue Sky nasceu com a proposta de oferecer um ensino personalizado e eficaz.
                </p>
                <p>
                  Ao longo dessas décadas, temos crescido e nos fortalecido, aprimorando constantemente nossas técnicas para propiciar uma aprendizagem duradoura.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest sm:w-24 shrink-0">On-line</span>
                    <div className="flex flex-wrap gap-2">
                      {['Individual', 'Duplas', 'Pequenos Grupos'].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-primary-50/60 border border-primary-100/50 rounded-full text-sm font-medium text-primary-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest sm:w-24 shrink-0">Presencial</span>
                    <div className="flex flex-wrap gap-2">
                      {['In Company'].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm font-medium text-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <hr className="border-slate-100 mb-24" />

          {/* Metodologia Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Metodologia Diversificada</h2>
              <p className="text-lg text-slate-600 font-inter mb-8 leading-relaxed">
                Adotamos uma abordagem definida a partir do perfil do aluno. Integramos as quatro habilidades — produção oral, compreensão auditiva, leitura e escrita — de modo prático e direcionado.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => {
                  const isOpen = openService === service.title;
                  return (
                    <div 
                      key={service.title} 
                      onClick={() => setOpenService(isOpen ? null : service.title)}
                      className="flex flex-col p-4 bg-primary-50 rounded-2xl border border-primary-100/50 cursor-pointer select-none hover:bg-primary-100/30 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                          <span className="font-bold text-slate-800 text-sm">{service.title}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-600' : ''}`} />
                      </div>
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0,
                          marginTop: isOpen ? 8 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-slate-600 leading-relaxed font-inter font-normal pl-8">
                          {service.description}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Estudante escrevendo anotações ao lado de um notebook" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8 text-primary-600" />, title: 'Foco no Aluno', desc: 'Mantemos um contato estreito para conhecer suas necessidades e melhor auxiliá-lo.' },
              { icon: <Target className="w-8 h-8 text-primary-600" />, title: 'Personalização', desc: 'Aulas organizadas por níveis de conhecimento, ênfase, faixa etária e objetivos.' },
              { icon: <BookOpen className="w-8 h-8 text-primary-600" />, title: 'Aprendizagem Eficaz', desc: 'Técnicas aprimoradas continuamente para garantir um aprendizado duradouro.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 font-inter leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
