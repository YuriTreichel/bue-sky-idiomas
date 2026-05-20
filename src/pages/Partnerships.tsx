import React from 'react';
import { motion } from 'motion/react';
import { Building2, Handshake, Percent, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA } from './Home';

export default function Partnerships() {
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
              <Link to="/contato">
                <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center gap-2 shadow-xl shadow-primary-600/20">
                  Seja um parceiro <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
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

      <section className="py-24 bg-slate-50">
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
                <h3 className="text-2xl font-bold mb-6">Solicite o convênio</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Nome da empresa" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-primary-500 transition-colors" />
                  <input type="email" placeholder="E-mail corporativo" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-primary-500 transition-colors" />
                  <input type="tel" placeholder="Telefone" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-primary-500 transition-colors" />
                  <textarea placeholder="Mensagem (opcional)" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-primary-500 transition-colors h-32"></textarea>
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all">Enviar Solicitação</button>
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
