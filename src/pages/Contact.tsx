import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative pt-32 pb-24 bg-white min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-en-light opacity-90 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/40 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-en-primary/10 rounded-full blur-[100px] z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Fale com a gente
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-inter"
          >
            Estamos prontos para tirar suas dúvidas e ajudar você a escolher o melhor caminho para a fluência.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-16 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 pt-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center relative"
          >
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center text-white shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-4">MATRIZ</h3>
            <a href="tel:+5551999474150" className="text-2xl md:text-3xl font-bold text-slate-800 hover:text-primary-600 transition-colors mb-4">(51) 99947.4150</a>
            <p className="text-slate-500 font-inter text-sm mb-1">Envie-nos um e-mail:</p>
            <a href="mailto:faleconosco@blueskyidiomas.com.br" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">faleconosco@blueskyidiomas.com.br</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 pt-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center relative"
          >
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center text-white shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-4">FILIAL</h3>
            <div className="flex flex-col gap-1 mb-4">
              <a href="tel:+555433581606" className="text-2xl md:text-3xl font-bold text-slate-800 hover:text-primary-600 transition-colors">(54) 3358.1606</a>
              <a href="tel:+5554999862061" className="text-2xl md:text-3xl font-bold text-slate-800 hover:text-primary-600 transition-colors">(54) 99986.2061</a>
            </div>
            <p className="text-slate-600 font-inter text-sm leading-relaxed">
              Rua Borges de Medeiros, 700<br />
              Bairro Centro – Lagoa Vermelha/RS
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Envie uma mensagem</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Telefone / WhatsApp</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Assunto</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white">
                    <option>Informações sobre cursos</option>
                    <option>Efetuar Matrícula</option>
                    <option>Dúvidas financeiras</option>
                    <option>Trabalhe conosco</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div className="bg-slate-900 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-[80px] opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Atendimento via WhatsApp</h3>
                <p className="text-slate-300 font-inter mb-8">
                  Prefere um atendimento mais rápido? Chame nossa equipe diretamente no WhatsApp.
                </p>
                <a href="https://wa.me/5551999474150" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-colors w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>

                <div className="mt-16 space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary-400 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Horário de Funcionamento</h4>
                      <p className="text-sm text-slate-400">Segunda a Sexta: 08:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
