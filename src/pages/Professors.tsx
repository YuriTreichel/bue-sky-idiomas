import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Star, GraduationCap } from 'lucide-react';
import { CTA } from './Home';

const professors = [
  {
    name: 'Daline Schramm Adamy',
    role: 'Diretora e Professora de Inglês',
    image: `${import.meta.env.BASE_URL}images/professores/daline.jpeg`,
    bio: 'Especialista em Ensino de Língua Inglesa com mais de 25 anos de experiência. Tradutora, intérprete e palestrante sobre Estilos de Aprendizagem.',
    language: 'Inglês',
    flag: 'https://flagcdn.com/us.svg',
  },
  {
    name: 'Charles Teilor Rodrigues',
    role: 'Professor de Inglês',
    image: `${import.meta.env.BASE_URL}images/professores/charles.jpeg`,
    bio: 'Graduado e Mestre pela UFRGS. Realizou diversos intercâmbios nos EUA (Missouri State, Nebraska Omaha e St. Johns University).',
    language: 'Inglês',
    flag: 'https://flagcdn.com/us.svg',
  },
  {
    name: 'Maria Luciana S. Bensley',
    role: 'Professora de Inglês',
    image: `${import.meta.env.BASE_URL}images/professores/luciana.jpeg`,
    bio: 'Especialista em exames (TOEFL, TOEIC, IELTS). Vivência no Egito (British Council) e Austrália, trazendo visão multicultural ao aprendizado.',
    language: 'Inglês',
    flag: 'https://flagcdn.com/us.svg',
  },
  {
    name: 'Ju Miao',
    role: 'Professora de Mandarim',
    image: 'https://www.blueskyidiomas.com.br/wp-content/uploads/sites/218/2021/08/e49d60a2-81f9-4117-9289-d2ca6b5b13a6-300x300.jpg',
    bio: 'Natural de Taiwan. Graduada em Administração, possui mais de 15 anos de experiência no ensino de Mandarim e tradução.',
    language: 'Mandarim',
    flag: 'https://flagcdn.com/cn.svg',
  },
  {
    name: 'Walter Fuentes Robella',
    role: 'Professor de Espanhol',
    image: `${import.meta.env.BASE_URL}images/professores/walter.jpeg`,
    bio: 'Natural de Montevideo, Uruguai. Engenheiro de Sistemas com ampla experiência internacional e no ensino de espanhol.',
    language: 'Espanhol',
    flag: 'https://flagcdn.com/es.svg',
  },
  {
    name: 'Helena Mello',
    role: 'Professora de Francês',
    image: 'https://www.blueskyidiomas.com.br/wp-content/uploads/sites/218/2018/06/32e726f8-1cbb-4f79-b84f-cdd938e452c8-300x300.jpg',
    bio: 'Mestra em Artes Cênicas e Jornalista. Tradutora francês-português com forte vínculo cultural e gastronômico com a França.',
    language: 'Francês',
    flag: 'https://flagcdn.com/fr.svg',
  },
  {
    name: 'Rouã Liscano',
    role: 'Professor de Inglês',
    image: `${import.meta.env.BASE_URL}images/professores/roua.jpeg`,
    bio: 'Especialista no ensino da Língua Inglesa, formado como Tradutor & Intérprete de Inglês/Português. Residiu no exterior por 3 anos e meio, onde adquiriu certificação pela Cambridge English Language Assessment.',
    language: 'Inglês',
    flag: 'https://flagcdn.com/us.svg',
  },
];

export default function Professors() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-zh-light opacity-90 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/40 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-zh-primary/10 rounded-full blur-[100px] z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            <GraduationCap className="w-4 h-4" />
            Corpo Docente de Elite
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
          >
            Aprenda com quem <br/>
            <span className="text-primary-600">domina o idioma.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-inter max-w-2xl mx-auto"
          >
            Nossos professores são selecionados rigorosamente, com vivência internacional e paixão pelo ensino.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professors.map((prof, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group flex flex-col h-full"
              >
                <div className="relative h-80 overflow-hidden shrink-0">
                  <img 
                    src={prof.image} 
                    alt={prof.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{prof.name}</h3>
                    <p className="text-sm font-medium text-primary-600">{prof.role}</p>
                  </div>
                  <p className="text-slate-600 text-sm font-inter mb-6 leading-relaxed flex-grow">
                    {prof.bio}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center mt-auto">
                    <div className="flex items-center gap-2">
                      <img src={prof.flag} alt={prof.language} className="w-5 h-5 rounded-full object-cover shadow-sm border border-slate-200" />
                      <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">{prof.language}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <Award className="w-12 h-12 text-primary-600 mb-6" />
              <h4 className="text-xl font-bold text-slate-900 mb-4">Certificação Constante</h4>
              <p className="text-slate-600 font-inter">Nossa equipe passa por treinamentos periódicos sobre as mais novas metodologias de ensino global.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <BookOpen className="w-12 h-12 text-primary-600 mb-6" />
              <h4 className="text-xl font-bold text-slate-900 mb-4">Metodologia Própria</h4>
              <p className="text-slate-600 font-inter">Professores treinados para aplicar o método Blue Sky, focando 100% no aluno e na conversação.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <Star className="w-12 h-12 text-primary-600 mb-6" />
              <h4 className="text-xl font-bold text-slate-900 mb-4">Suporte Personalizado</h4>
              <p className="text-slate-600 font-inter">Além das aulas, você tem contato direto com os professores para tirar dúvidas e acelerar o aprendizado.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
