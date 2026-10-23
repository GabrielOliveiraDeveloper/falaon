import React, { useState } from 'react';
import videoBg from '../assets/video falaon.mp4'; 
import logoImg from '../assets/logo.png'; 
import { User, Menu, X } from 'lucide-react'; // Adicionados os ícones de menu
import curva from '../assets/curva (1).png';
import linha from '../assets/linha (1).png';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between pl-6 pr-6 pt-0 pb-0 bg-white shadow-sm md:items-end md:pl-10 md:pr-12 relative z-50">
        <img src={logoImg} alt="Logo" className="h-20 md:h-36 w-auto cursor-pointer block -mb-2 md:-mb-4 pb-0 self-end" />
        
        <div className="flex items-center space-x-4 md:space-x-6 pb-0 mb-0">
          {/* Navegação Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-medium text-gray-600 font-['Montserrat'] uppercase tracking-wider text-sm mb-0 pb-0">
              <li><a href="#anunciar" className="hover:text-blue-500 transition-colors">Anunciar</a></li>
              <li><a href="#contratar" className="hover:text-blue-500 transition-colors">Contratar</a></li>
              <li><a href="#entrar" className="hover:text-blue-500 transition-colors">Entrar</a></li>
            </ul>
          </nav>

          {/* Área do Usuário e Botão Burger */}
          <div className="flex items-center space-x-4 border-l pl-4 md:pl-6 border-gray-200 mb-0 pb-0">
            <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors" title="Conta">
              <User size={24} className="text-gray-600" />
            </div>
            
            {/* Botão Menu Mobile */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="block md:hidden text-gray-600 focus:outline-none z-50"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Retrátil Mobile */}
        <div className={`fixed inset-0 bg-white z-40 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 font-['Montserrat'] text-xl uppercase font-semibold text-gray-700">
            <a href="#anunciar" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors">Anunciar</a>
            <a href="#contratar" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors">Contratar</a>
            <a href="#entrar" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors">Entrar</a>
          </div>
        </div>
      </header>

      {/* Seção do Vídeo */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-black">
        <video src={videoBg} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          Seu navegador não suporta vídeos.
        </video>
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute bottom-8 right-6 left-6 md:left-auto md:bottom-10 md:right-10 z-10 text-center md:text-right text-white animate-bounce-slow">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Marcellus'] leading-tight">
            Espaço das conexões<br className="hidden md:inline" />
            para divulgar e fechar negócios
          </h1>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Seção dos Cards de Cima */}
      <section className="bg-[#010020] px-6 py-16 md:px-16 md:pt-16 md:pb-28 flex flex-wrap justify-center gap-12 md:gap-8">
        {[
          { title: "EMPREGOS", text: "Anuncie uma vaga de emprego ou procure oportunidades de trabalhos" },
          { title: "SERVIÇOS", text: "Anuncie seus serviços ou procure um professional que esteja precisando" },
          { title: "CONSULTORIAS\ne MENTORIAS", text: "Consulte um especialista e tenha orientações nas questões que precisa" },
          { title: "CURSOS\ne AULAS", text: "Tenha uma aula recorrente ou avulsa para aprender algum assunto específico" }
        ].map((card, index) => (
          <div
            key={index}
            className="relative flex-1 min-w-[260px] max-w-[280px] h-[420px] bg-[#010f29] px-8 py-12 shadow-2xl border border-white/5 flex flex-col items-center text-center rounded-sm"
          >
            <h2 className="text-white text-3xl mb-8 uppercase font-['Marcellus'] leading-snug tracking-wide whitespace-pre-line">
              {card.title}
            </h2>
            <p className="text-white/85 font-['Marcellus'] leading-relaxed text-xl md:text-2xl">
              {card.text}
            </p>
            <button className="absolute bottom-0 translate-y-1/2 bg-[#f67225] text-white px-6 py-2 rounded-xl text-2xl font-bold tracking-wide hover:bg-[#d55e1d] transition-all hover:scale-105 shadow-lg whitespace-nowrap z-10 font-['Montserrat']">
              Conectar
            </button>
          </div>
        ))}
      </section>

      {/* Seção Quem Somos */}
      <section className="bg-[#010020] px-6 md:px-20 pt-24 pb-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-left font-['Marcellus']">Quem somos...</h1>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed font-['Arial_MT_Pro']">
            Nosso principal objetivo é contribuir com a divulgação e propiciar <br className="hidden md:inline"/> conexões profissionais para fechar negócios.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed font-['Arial_MT_Pro']">
            Aqui é um espaço para divulgar seu negócio, oportunidades de <br className="hidden md:inline"/> empregos, divulgar seus serviços e monetizar seus conhecimentos.
          </p>
          <p className="text-2xl md:text-3xl font-bold font-['Arial_MT_Pro'] pt-4">
            Anuncie, crie um perfil e conecte com seu público!
          </p>
          {/* Alterado: pt-8 modificado para pt-16 para empurrar o botão mais para baixo */}
          <div className="flex justify-center pt-16">
            <button className="bg-[#f67225] text-white px-6 py-2 rounded-xl text-2xl font-bold tracking-wide hover:bg-[#d55e1d] transition-all hover:scale-105 shadow-lg whitespace-nowrap font-['Montserrat']">
              Conectar
            </button>
          </div>
        </div>
      </section>

      {/* Container de Imagens Decorativas */}
      <div className="bg-[#010020] w-full min-h-[250px] md:min-h-[450px] flex items-end justify-end overflow-hidden relative">
        <img 
          src={linha} 
          alt="Decoração linha" 
          className="absolute left-0 bottom-0 h-[200px] md:h-[440px] transform translate-y-[-20px] md:translate-y-[-80px] object-contain pointer-events-none z-10" 
        />
        <img 
          src={curva} 
          alt="Decoração curva" 
          className="h-[300px] md:h-[650px] object-contain pointer-events-none" 
        />
      </div>

      {/* Seção Em Destaque */}
      <section className="bg-white">
        <div className="py-12">
          <div className="flex flex-col items-center">
            <a className="text-black text-2xl md:text-3xl font-bold uppercase relative pb-4 font-['Arial_MT_Pro']">
              EM DESTAQUE
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#f67225]"></span>
            </a>
          </div>
        </div>
        <div className="bg-[#010020] pt-20 pb-16 px-6 md:px-16 text-white">
          {/* Grid de Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="flex-1 min-w-[260px] max-w-[280px] min-h-[480px] bg-[#010f29] border border-white/10 shadow-xl flex flex-col items-center px-8 py-10 rounded-sm"
              >
                <div className="w-full h-28 bg-gray-300 mb-4 flex-shrink-0"></div>
                <h3 className="text-white font-bold text-2xl uppercase mb-3 font-['Montserrat']">Título</h3>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed font-['Arial_MT_Pro'] flex-grow">
                  Este é um texto descritivo mais robusto criado para preencher o espaço expandido do card. 
                  Com este parágrafo ligeiramente mais longo, garantimos que todas as informações se alinhem 
                  harmoniosamente ao layout visual do nosso site principal.{' '}
                  <span className="text-[#f67225] hover:underline cursor-pointer inline font-semibold whitespace-nowrap">Mais...</span>
                </p>
              </div>
            ))}
          </div>

          {/* Container para alinhar o Explorar Mais */}
          <div className="max-w-[1200px] mx-auto flex justify-center md:justify-end mt-10 px-2">
            <a 
              href="#explorar" 
              className="text-[#f67225] text-lg font-bold font-['Montserrat'] uppercase tracking-wider hover:text-[#d55e1d] hover:underline transition-colors"
            >
              Explorar mais...
            </a>
          </div>
        </div>
      </section>

      {/* Nova Seção: Procurando Oportunidades */}
      <section className="bg-[#010020] px-6 md:px-20 py-24 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-left font-['Marcellus'] ">Procurando oportunidades...</h1>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed font-['Arial_MT_Pro']">
            Procurando o próximo passo na carreira ou o especialista <br className="hidden md:inline"/> ideal para o seu projeto?
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed font-['Arial_MT_Pro']">
            Explore nossa vitrine e encontre oportunidades de emprego, <br className="hidden md:inline"/> consultorias e cursos em um só lugar.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold font-['Arial_MT_Pro'] pt-4">
            Facilitamos sua busca para que você foque no que importa, <br className="hidden md:inline"/> seu crescimento e resultados!
          </p>
          <div className="flex justify-center pt-8">
            <button className="bg-[#f67225] text-white px-6 py-2 rounded-xl font-bold text-2xl uppercase tracking-tighter hover:bg-[#d55e1d] transition-all hover:scale-105 shadow-lg font-['Montserrat']">
              Conectar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010020] text-white py-12 px-6 md:px-20 border-t border-white/10 flex flex-wrap justify-between items-center md:items-start gap-10">
        <div className="flex flex-col w-full md:w-auto items-center md:items-start gap-4">
            <div className="flex w-full max-w-sm">
                <input type="email" placeholder='Seu e-mail' className="w-full bg-white/10 border border-white/20 px-4 py-2 rounded-l-md focus:outline-none text-white"/>
                <button className="bg-[#f67225] px-4 py-2 rounded-r-md font-bold text-sm font-['Montserrat'] whitespace-nowrap">CADASTRAR</button>
            </div>
            <p className="hover:underline cursor-pointer text-sm text-white/60">Central de ajuda</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;