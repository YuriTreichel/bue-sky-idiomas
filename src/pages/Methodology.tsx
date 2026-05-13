import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, BookOpen, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA } from './Home';

export default function Methodology() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Há mais de 25 anos no mercado porto-alegrense, a Blue Sky Escola de Idiomas oferece um ensino de alta qualidade, adequado ao perfil, estilo e necessidades de cada aluno.
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Blue Sky Idiomas History" 
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
                  Ao longo dessas décadas, temos crescido e nos fortalecido, aprimorando constantemente nossas técnicas para propiciar uma aprendizagem duradoura. Atendemos desde jovens a adultos, estudantes e profissionais, respeitando sempre os objetivos individuais de cada um.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Online Individual', 'Em Duplas', 'Pequenos Grupos', 'In Company', 'Presencial a Domicílio'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
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
                {[
                  'Aulas de Conversação',
                  'Preparação TOEFL/IELTS',
                  'Mestrado e Doutorado',
                  'Cursos para Viagens',
                  'Traduções e Versões',
                  'Reforço Escolar'
                ].map((service) => (
                  <div key={service} className="flex items-center gap-3 p-4 bg-primary-50 rounded-2xl border border-primary-100/50">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                    <span className="font-bold text-slate-800 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Aulas Dinâmicas" 
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
