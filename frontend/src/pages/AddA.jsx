import React, { useState } from 'react';
import Anuncio from '../assets/CRIE SEU ANUNCIO (1).png';
import Cadastro from '../assets/CADASTRE NO SITE.png';
import Negocie from '../assets/NEGOCIE DIRETO COM SEU PUBLICO.png';
import SetaEsquerda from '../assets/SETA ROXA HORIZONTAL.png';
import Vaga from '../assets/VAGA DE EMPREGO OU CURRÍCULO (1).png';
import Servicos from '../assets/SERVIÇOS.png';
import Consultorias from '../assets/Consultorias, Mentorias ou Aulas (1).png';
import SETA45 from '../assets/SETA ROXA 45 GRAUS.png';
import setaleft from '../assets/back.png';

const AddA = () => {
    // 1. Dados estruturados em arrays
    const etapasComoAnunciar = [
        { id: 1, title: "Cadastre no site", img: Cadastro, alt: "Cadastre no site" },
        { id: 2, title: "Crie seu anúncio", img: Anuncio, alt: "Crie seu anúncio" },
        { id: 3, title: "Negocie direto com seu público", img: Negocie, alt: "Negocie direto" }
    ];

    const opcoesAnuncio = [
        { id: 1, title: "Vaga de emprego", img: Vaga, alt: "Vaga de emprego" },
        { id: 2, title: "Serviços", img: Servicos, alt: "Serviços" },
        { id: 3, title: "Consultorias, mentorias ou aulas", img: Consultorias, alt: "Consultorias, mentorias ou aulas" }
    ];

    // 2. Estados para controlar o slide ativo e menu mobile
    const [indexSecao1, setIndexSecao1] = useState(0);
    const [indexSecao2, setIndexSecao2] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Funções de navegação da Seção 1
    const proximoSecao1 = () => {
        setIndexSecao1((prev) => (prev + 1) % etapasComoAnunciar.length);
    };
    const anteriorSecao1 = () => {
        setIndexSecao1((prev) => (prev - 1 + etapasComoAnunciar.length) % etapasComoAnunciar.length);
    };

    // Funções de navegação da Seção 2
    const proximoSecao2 = () => {
        setIndexSecao2((prev) => (prev + 1) % opcoesAnuncio.length);
    };
    const anteriorSecao2 = () => {
        setIndexSecao2((prev) => (prev - 1 + opcoesAnuncio.length) % opcoesAnuncio.length);
    };

    // Função para voltar ao topo da página suavemente
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="w-full min-h-screen flex flex-col bg-[#010020] overflow-x-hidden">
            
            {/* HEADER */}
            <header className="w-full bg-white py-4 px-4 md:px-8 border-b border-gray-200 shadow-sm z-50">
                <div className="max-w-7xl mx-auto flex justify-end items-center">
                    
                    {/* Botão Hambúrguer (Visível apenas em telas pequenas) */}
                    <button 
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-black hover:text-gray-600 focus:outline-none p-1"
                        aria-label="Abrir menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Navegação Desktop (Alinhada à direita) */}
                    <nav className="hidden md:flex items-center gap-6 font-sans text-base md:text-lg">
                        <a href="#" className="flex items-center gap-1 text-black hover:text-gray-600 font-bold transition-colors group">
                            <img 
                                src={setaleft} 
                                alt="Voltar" 
                                className="h-5 sm:h-6 md:h-7 w-auto object-contain transition-transform group-hover:-translate-x-1" 
                            />
                            <span>Voltar</span>
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 font-bold transition-colors">Início</a>
                        <a href="#" className="text-black hover:text-gray-600 font-bold transition-colors">Entrar</a>
                    </nav>
                </div>

                {/* Menu Mobile Dropdown */}
                {isMenuOpen && (
                    <nav className="md:hidden flex flex-col items-end gap-4 pt-4 pb-2 font-sans text-base border-t border-gray-100 mt-3">
                        <a href="#" className="flex items-center gap-1 text-black hover:text-gray-600 font-bold transition-colors group">
                            <img 
                                src={setaleft} 
                                alt="Voltar" 
                                className="h-5 w-auto object-contain transition-transform group-hover:-translate-x-1" 
                            />
                            <span>Voltar</span>
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 font-bold transition-colors">Início</a>
                        <a href="#" className="text-black hover:text-gray-600 font-bold transition-colors">Entrar</a>
                    </nav>
                )}
            </header>

            {/* CONTEÚDO PRINCIPAL */}
            <main className="w-full text-center py-10 md:py-16 px-4 sm:px-6 font-sans flex-1">
                <div className="max-w-5xl mx-auto relative">
                    
                    {/* ================= SEÇÃO 1 ================= */}
                    <div className="relative inline-block mb-6 md:mb-10 px-2 sm:px-4">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
                            Como anunciar?
                        </h1>
                        <img 
                            src={SetaEsquerda} 
                            alt="Seta" 
                            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full h-28 lg:h-36 w-auto object-contain pl-4 lg:pl-6 pointer-events-none" 
                        />
                    </div>

                    <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 md:mb-16">
                        Anuncie gratuitamente. Você só paga se quiser destaque no anúncio
                        <span className="hidden sm:inline"><br /></span> ou usar as ferramentas para facilitar seu negócio.
                    </p>

                    {/* --- CARROSSEL MOBILE (Seção 1) --- */}
                    <div className="block md:hidden max-w-sm mx-auto mb-16 relative">
                        <div className="flex flex-col items-center justify-between min-h-[260px] bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
                            <div className="flex items-center justify-center h-40 w-full mb-4">
                                <img 
                                    key={etapasComoAnunciar[indexSecao1].id}
                                    src={etapasComoAnunciar[indexSecao1].img} 
                                    alt={etapasComoAnunciar[indexSecao1].alt} 
                                    className="max-h-full max-w-full object-contain mx-auto transition-all duration-300"
                                />
                            </div>
                            <p className="text-white text-lg font-semibold min-h-[3rem] flex items-center justify-center">
                                {etapasComoAnunciar[indexSecao1].title}
                            </p>
                        </div>

                        {/* Botões do Carrossel */}
                        <button 
                            type="button"
                            onClick={anteriorSecao1}
                            className="absolute left-[-16px] top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg z-10 active:scale-95"
                        >
                            &#10094;
                        </button>
                        <button 
                            type="button"
                            onClick={proximoSecao1}
                            className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg z-10 active:scale-95"
                        >
                            &#10095;
                        </button>

                        {/* Bolinhas / Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            {etapasComoAnunciar.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndexSecao1(i)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        indexSecao1 === i ? 'w-6 bg-purple-500' : 'w-2.5 bg-white/30'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* --- GRID DESKTOP (Seção 1) --- */}
                    <div className="hidden md:grid grid-cols-3 gap-10 lg:gap-14 items-start max-w-5xl mx-auto mb-24">
                        {etapasComoAnunciar.map((item) => (
                            <div key={item.id} className="flex flex-col justify-start items-center text-center">
                                <div className="flex items-center justify-center h-60 lg:h-72 mb-4">
                                    <img src={item.img} alt={item.alt} className="max-h-full max-w-full object-contain mx-auto" />
                                </div>
                                <p className="text-white text-xl lg:text-2xl font-bold flex items-start justify-center">{item.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* ================= SEÇÃO 2 ================= */}
                    <div className="relative w-full max-w-3xl mx-auto mb-10 md:mb-12 flex flex-col items-center">
                        {/* Seta puxada levemente mais para a esquerda */}
                        <img 
                            src={SETA45} 
                            alt="Seta" 
                            className="hidden md:block absolute -left-2 lg:left-2 top-0 h-36 lg:h-48 w-auto object-contain pointer-events-none" 
                        />
                        {/* Título subido um pouco */}
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight z-10 mt-24 md:mt-32">
                            Escolha o que quer <br /> anunciar
                        </h2>
                    </div>

                    {/* --- CARROSSEL MOBILE (Seção 2) --- */}
                    <div className="block md:hidden max-w-sm mx-auto relative">
                        <div className="flex flex-col items-center justify-between min-h-[260px] bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
                            <div className="flex items-center justify-center h-40 w-full mb-4">
                                <img 
                                    key={opcoesAnuncio[indexSecao2].id}
                                    src={opcoesAnuncio[indexSecao2].img} 
                                    alt={opcoesAnuncio[indexSecao2].alt} 
                                    className="max-h-full max-w-full object-contain mx-auto transition-all duration-300"
                                />
                            </div>
                            <p className="text-white text-lg font-semibold min-h-[3rem] flex items-center justify-center">
                                {opcoesAnuncio[indexSecao2].title}
                            </p>
                        </div>

                        {/* Botões do Carrossel */}
                        <button 
                            type="button"
                            onClick={anteriorSecao2}
                            className="absolute left-[-16px] top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg z-10 active:scale-95"
                        >
                            &#10094;
                        </button>
                        <button 
                            type="button"
                            onClick={proximoSecao2}
                            className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg z-10 active:scale-95"
                        >
                            &#10095;
                        </button>

                        {/* Bolinhas / Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            {opcoesAnuncio.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndexSecao2(i)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        indexSecao2 === i ? 'w-6 bg-purple-500' : 'w-2.5 bg-white/30'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* --- GRID DESKTOP (Seção 2) --- */}
                    <div className="hidden md:grid grid-cols-3 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
                        {opcoesAnuncio.map((item) => (
                            <div key={item.id} className="flex flex-col justify-start items-center text-center">
                                <div className="flex items-center justify-center h-60 lg:h-72 mb-4">
                                    <img src={item.img} alt={item.alt} className="max-h-full max-w-full object-contain mx-auto" />
                                </div>
                                <p className="text-white text-xl lg:text-2xl font-bold flex items-start justify-center">{item.title}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            {/* RODAPÉ */}
            <footer className="w-full bg-white pt-8 pb-4 px-4 sm:px-8 border-t border-gray-200 mt-auto">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    
                    {/* BOTÃO VOLTAR AO TOPO */}
                    <button 
                        type="button"
                        onClick={scrollToTop}
                        className="flex flex-col items-center justify-center text-gray-700 hover:text-purple-600 transition-colors group cursor-pointer focus:outline-none"
                    >
                        <div className="p-2.5 rounded-full border-2 border-gray-300 group-hover:border-purple-600 transition-colors mb-1.5">
                            <svg 
                                className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </div>
                        <span className="font-sans text-xs md:text-sm font-semibold tracking-wider uppercase">
                            Topo
                        </span>
                    </button>

                    {/* ÁREA DA COMUNIDADE FALAON */}
                    <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 text-center text-gray-900 text-lg sm:text-xl md:text-2xl font-bold px-2 leading-snug">
                        <span>Entre na comunidade FalaON e fique ligado nas novidades, ofertas e aulas gratuitas</span>
                        <svg 
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#25D366] fill-current shrink-0" 
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                    </div>

                    {/* VOLTAR NO CANTO INFERIOR ESQUERDO */}
                    <div className="w-full mt-8 md:mt-12 flex justify-start">
                        <a 
                            href="#" 
                            className="flex items-center gap-1 text-black hover:text-gray-600 font-bold text-base sm:text-lg md:text-xl transition-colors group"
                        >
                            <img 
                                src={setaleft} 
                                alt="Seta Voltar" 
                                className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-transform group-hover:-translate-x-1" 
                            />
                            <span>Voltar</span>
                        </a>
                    </div>

                </div>
            </footer>

        </div>
    );
};

export default AddA;