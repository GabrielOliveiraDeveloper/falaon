import React from 'react';
import Anuncio from '../assets/CRIE SEU ANUNCIO (1).png';
import Cadastro from '../assets/CADASTRE NO SITE.png';
import Negocie from '../assets/NEGOCIE DIRETO COM SEU PUBLICO.png';
import SetaEsquerda from '../assets/SETA ROXA HORIZONTAL.png';
import Vaga from '../assets/VAGA DE EMPREGO OU CURRÍCULO (1).png';
import Servicos from '../assets/SERVIÇOS.png';
import Consultorias from '../assets/Consultorias, Mentorias ou Aulas (1).png';
import SETA45 from '../assets/SETA ROXA 45 GRAUS.png';

const Add = () => {
    return (
        /* Container Principal */
        <div className="w-full min-h-screen flex flex-col bg-[#010020] overflow-x-hidden">
            
            {/* ================= HEADER ================= */}
            <header className="w-full bg-white pt-4 pb-3 px-4 md:px-8 border-b border-gray-200 shadow-sm z-50">
                <nav className="flex justify-start items-center gap-4 sm:gap-6 font-sans text-xs sm:text-sm">
                    <a href="#" className="text-black hover:text-gray-600 font-medium transition-colors">
                        Voltar
                    </a>
                    <a href="#" className="text-black hover:text-gray-600 font-medium transition-colors">
                        Início
                    </a>
                    <a href="#" className="text-black hover:text-gray-600 font-medium transition-colors">
                        Entrar
                    </a>
                </nav>
            </header>

            {/* Conteúdo Principal */}
            <main className="w-full text-center py-10 md:py-16 px-4 sm:px-6 font-sans flex-1">
                
                <div className="max-w-5xl mx-auto relative">
                    
                    {/* ================= SEÇÃO 1: COMO ANUNCIAR ================= */}
                    <div className="relative inline-block mb-6 md:mb-10 px-2 sm:px-4">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
                            Como anunciar?
                        </h1>
                        
                        {/* Seta visível apenas a partir de telas médias (md) */}
                        <img 
                            src={SetaEsquerda} 
                            alt="Seta indicativa" 
                            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full h-28 lg:h-36 w-auto object-contain pl-4 lg:pl-6 pointer-events-none" 
                        />
                    </div>

                    <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 md:mb-16">
                        Anuncie gratuitamente. Você só paga se quiser destaque no anúncio
                        <span className="hidden sm:inline"><br /></span> ou usar as ferramentas para facilitar seu negócio.
                    </p>

                    {/* Grid da Seção 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 items-stretch max-w-3xl mx-auto mb-16 md:mb-24">
                        
                        {/* Coluna 1: Cadastro */}
                        <div className="flex flex-col justify-between items-center text-center">
                            <div className="flex items-center justify-center h-36 sm:h-44 md:h-48 mb-3">
                                <img 
                                    src={Cadastro} 
                                    alt="Cadastre no site" 
                                    className="max-h-full max-w-full object-contain mx-auto"
                                />
                            </div>
                            <p className="text-white text-base sm:text-lg font-semibold flex items-center justify-center">
                                Cadastre no site
                            </p>
                        </div>

                        {/* Coluna 2: Anúncio */}
                        <div className="flex flex-col justify-between items-center text-center">
                            <div className="flex items-center justify-center h-36 sm:h-44 md:h-48 mb-3">
                                <img 
                                    src={Anuncio} 
                                    alt="Crie seu anúncio" 
                                    className="max-h-full max-w-full object-contain mx-auto"
                                />
                            </div>
                            <p className="text-white text-base sm:text-lg font-semibold flex items-center justify-center">
                                Crie seu anúncio
                            </p>
                        </div>

                        {/* Coluna 3: Negocie */}
                        <div className="flex flex-col justify-between items-center text-center sm:col-span-2 md:col-span-1">
                            <div className="flex items-center justify-center h-36 sm:h-44 md:h-48 mb-3">
                                <img 
                                    src={Negocie} 
                                    alt="Negocie direto" 
                                    className="max-h-full max-w-full object-contain mx-auto"
                                />
                            </div>
                            <p className="text-white text-base sm:text-lg font-semibold flex items-center justify-center">
                                Negocie direto com <br className="hidden sm:block" /> seu público
                            </p>
                        </div>

                    </div>

                    {/* ================= SEÇÃO 2: ESCOLHA O QUE QUER ANUNCIAR ================= */}
                    <div className="relative w-full max-w-3xl mx-auto mb-10 md:mb-12 flex flex-col items-center">
                        
                        {/* Seta 45 graus visível apenas em desktop */}
                        <img 
                            src={SETA45} 
                            alt="Seta indicativa" 
                            className="hidden md:block absolute left-0 top-0 h-28 lg:h-36 w-auto object-contain pr-4 lg:pr-6 -translate-x-12 lg:-translate-x-16 pointer-events-none" 
                        />
                        
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase mt-4 md:mt-10 z-10">
                            Escolha o que quer <br /> anunciar
                        </h2>
                    </div>

                    {/* Grid da Seção 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 items-stretch max-w-3xl mx-auto">
                        
                        {/* Opção 1: Vaga de emprego */}
                        <div className="flex flex-col justify-between items-center text-center">
                            <div className="flex items-center justify-center h-36 sm:h-44 md:h-48 mb-3">
                                <img 
                                    src={Vaga} 
                                    alt="Vaga de emprego" 
                                    className="max-h-full max-w-full object-contain mx-auto"
                                />
                            </div>
                            <p className="text-white text-base sm:text-lg font-semibold flex items-center justify-center">
                                Vaga de emprego
                            </p>
                        </div>

                        {/* Opção 2: Serviços */}
                        <div className="flex flex-col justify-between items-center text-center">
                            <div className="flex items-center justify-center h-36 sm:h-44 md:h-48 mb-3">
                                <img 
                                    src={Servicos} 
                                    alt="Serviços" 
                                    className="max-h-full max-w-full object-contain mx-auto"
                                />
                            </div>
                            <p className="text-white text-base sm:text-lg font-semibold flex items-center justify-center">
                                Serviços
                            </p>
                        </div>

                        {/* Opção 3: Consultorias */}
                        <div className="flex flex-col justify-between items-center text-center sm:col-span-2 md:col-span-1">
                            <div className="flex items-center justify-center h-36 sm:h-44 md:h-48 mb-3">
                                <img 
                                    src={Consultorias} 
                                    alt="Consultorias, mentorias ou aulas" 
                                    className="max-h-full max-w-full object-contain mx-auto"
                                />
                            </div>
                            <p className="text-white text-base sm:text-lg font-semibold flex items-center justify-center">
                                Consultorias, mentorias <br className="hidden sm:block" /> ou aulas
                            </p>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
};

export default Add;