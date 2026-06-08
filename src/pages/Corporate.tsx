import React from 'react';
import { motion } from 'motion/react';
import { Building2, TrendingUp, Users, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Corporate() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-es-light via-white to-primary-50 opacity-90 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-es-primary/10 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-200/30 rounded-full blur-[100px] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 border border-primary-200 text-sm font-medium mb-6"
            >
              B2B & Corporate
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
            >
              Capacite sua equipe para o <span className="text-primary-600">mercado global.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 font-inter mb-10"
            >
              Soluções in-company personalizadas para empresas que buscam excelência na comunicação internacional.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contato">
                <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center gap-2">
                  Solicitar proposta comercial <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Por que escolher a Blue Sky para sua empresa?</h2>
            <p className="text-lg text-slate-600 font-inter">
              Entendemos que o tempo da sua equipe é valioso. Nossos programas corporativos são desenhados para entregar resultados rápidos e aplicáveis ao dia a dia dos negócios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Building2 />, title: 'In-Company ou Online', desc: 'Aulas na sua empresa ou em plataforma virtual ao vivo, adaptando-se à rotina da equipe.' },
              { icon: <TrendingUp />, title: 'Foco no seu nicho', desc: 'Vocabulário específico para sua área de atuação (TI, Finanças, Vendas, etc).' },
              { icon: <Users />, title: 'Relatórios de Desempenho', desc: 'Acompanhamento periódico com métricas de evolução e frequência de cada colaborador.' },
              { icon: <Globe2 />, title: 'Preparação Executiva', desc: 'Treinamento focado em apresentações, negociações e reuniões internacionais.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 font-inter text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Pronto para treinar sua equipe?</h2>
              <p className="text-lg text-slate-600 font-inter mb-8">
                Deixe seus dados e um de nossos consultores corporativos entrará em contato para desenhar o plano ideal para a sua empresa.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Diagnóstico gratuito do nível da equipe</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Proposta customizada</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Aula demonstrativa</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-mail corporativo</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="email@suaempresa.com.br" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Nome da empresa" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Número estimado de alunos</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white">
                    <option>1 a 5 alunos</option>
                    <option>6 a 20 alunos</option>
                    <option>21 a 50 alunos</option>
                    <option>Mais de 50 alunos</option>
                  </select>
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors mt-4">
                  Solicitar Contato
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
