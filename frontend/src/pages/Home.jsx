import React, { useState } from 'react';
import videoBg from '../assets/video falaon.mp4'; 
import logoImg from '../assets/logo.png'; 
import { User, Menu, X, ChevronLeft, ChevronRight, Plus, Trash2 } from 'lucide-react'; 
import curva from '../assets/curva (1).png';
import linha from '../assets/linha (1).png';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Estados para controlar o modal do formulário da seção superior
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cardTitle, setCardTitle] = useState('');
  const [cardText, setCardText] = useState('');

  // Estados para controlar o modal do formulário da seção "Em Destaque"
  const [isDestaqueFormOpen, setIsDestaqueFormOpen] = useState(false);
  const [destaqueTitle, setDestaqueTitle] = useState('');
  const [destaqueText, setDestaqueText] = useState('');

  // Estados para controlar os carrosséis de forma independente
  const [currentTopSlide, setCurrentTopSlide] = useState(0);
  const [currentDestaqueSlide, setCurrentDestaqueSlide] = useState(0);

  // Estados para controle de Reordenação por Arraste (Drag and Drop)
  const [draggedTopIndex, setDraggedTopIndex] = useState(null);
  const [draggedDestaqueIndex, setDraggedDestaqueIndex] = useState(null);

  // Dados do primeiro carrossel (Cards Superiores)
  const [topCardsData, setTopCardsData] = useState([
    { title: "EMPREGOS", text: "Anuncie uma vaga de emprego ou procure oportunidades de trabalhos" },
    { title: "SERVIÇOS", text: "Anuncie seus serviços ou procure um professional que esteja precisando" },
    { title: "CONSULTORIAS\ne MENTORIAS", text: "Consulte um especialista e tenha orientações nas questões que precisa" },
    { title: "CURSOS\ne AULAS", text: "Tenha uma aula recorrente ou avulsa para aprender algum assunto específico" }
  ]);

  // Dados do segundo carrossel (Em Destaque)
  const [destaqueCardsData, setDestaqueCardsData] = useState([
    { id: 1, title: "Título 1", text: "Este é um texto descritivo mais robusto criado para preencher o espaço expandido do card. Com este parágrafo ligeiramente mais longo, garantimos que todas as informações se alinhem harmoniosamente ao layout visual do nosso site principal." },
    { id: 2, title: "Título 2", text: "Este é um texto descritivo mais robusto criado para preencher o espaço expandido do card. Com este parágrafo ligeiramente mais longo, garantimos que todas as informações se alinhem harmoniosamente ao layout visual do nosso site principal." },
    { id: 3, title: "Título 3", text: "Este é um texto descritivo mais robusto criado para preencher o espaço expandido do card. Com este parágrafo ligeiramente mais longo, garantimos que todas as informações se alinhem harmoniosamente ao layout visual do nosso site principal." },
    { id: 4, title: "Título 4", text: "Este é um texto descritivo mais robusto criado para preencher o espaço expandido do card. Com este parágrafo ligeiramente mais longo, garantimos que todas as informações se alinhem harmoniosamente ao layout visual do nosso site principal." }
  ]);

  // --- Lógica de Arrastar e Reordenar (Cards Superiores) ---
  const handleTopDragStart = (e, index) => {
    setDraggedTopIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleTopDragOver = (e, index) => {
    e.preventDefault();
    if (draggedTopIndex === null || draggedTopIndex === index) return;

    const newCards = [...topCardsData];
    const draggedItem = newCards[draggedTopIndex];
    newCards.splice(draggedTopIndex, 1);
    newCards.splice(index, 0, draggedItem);

    setDraggedTopIndex(index);
    setTopCardsData(newCards);
  };

  const handleTopDragEnd = () => {
    setDraggedTopIndex(null);
  };

  // --- Lógica de Arrastar e Reordenar (Cards Em Destaque) ---
  const handleDestaqueDragStart = (e, index) => {
    setDraggedDestaqueIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDestaqueDragOver = (e, index) => {
    e.preventDefault();
    if (draggedDestaqueIndex === null || draggedDestaqueIndex === index) return;

    const newCards = [...destaqueCardsData];
    const draggedItem = newCards[draggedDestaqueIndex];
    newCards.splice(draggedDestaqueIndex, 1);
    newCards.splice(index, 0, draggedItem);

    setDraggedDestaqueIndex(index);
    setDestaqueCardsData(newCards);
  };

  const handleDestaqueDragEnd = () => {
    setDraggedDestaqueIndex(null);
  };

  // Função para criar um novo card superior
  const handleCreateCard = (e) => {
    e.preventDefault();
    if (!cardTitle.trim() || !cardText.trim()) return;

    const newCard = {
      title: cardTitle,
      text: cardText
    };

    setTopCardsData((prevCards) => [...prevCards, newCard]);
    setCardTitle('');
    setCardText('');
    setIsFormOpen(false);
  };

  // Função para apagar um card superior
  const handleDeleteTopCard = (indexToDelete) => {
    setTopCardsData((prevCards) => {
      const updated = prevCards.filter((_, idx) => idx !== indexToDelete);
      if (currentTopSlide >= updated.length && updated.length > 0) {
        setCurrentTopSlide(updated.length - 1);
      } else if (updated.length === 0) {
        setCurrentTopSlide(0);
      }
      return updated;
    });
  };

  // Função para criar um novo card na seção "Em Destaque"
  const handleCreateDestaqueCard = (e) => {
    e.preventDefault();
    if (!destaqueTitle.trim() || !destaqueText.trim()) return;

    const newCard = {
      id: Date.now(),
      title: destaqueTitle,
      text: destaqueText
    };

    setDestaqueCardsData((prevCards) => [...prevCards, newCard]);
    setDestaqueTitle('');
    setDestaqueText('');
    setIsDestaqueFormOpen(false);
  };

  // Função para apagar um card em destaque
  const handleDeleteDestaqueCard = (idToDelete) => {
    setDestaqueCardsData((prevCards) => {
      const updated = prevCards.filter((card) => card.id !== idToDelete);
      if (currentDestaqueSlide >= updated.length && updated.length > 0) {
        setCurrentDestaqueSlide(updated.length - 1);
      } else if (updated.length === 0) {
        setCurrentDestaqueSlide(0);
      }
      return updated;
    });
  };

  // Funções de navegação do carrossel superior
  const nextTopSlide = () => {
    if (topCardsData.length === 0) return;
    setCurrentTopSlide((prev) => (prev === topCardsData.length - 1 ? 0 : prev + 1));
  };
  const prevTopSlide = () => {
    if (topCardsData.length === 0) return;
    setCurrentTopSlide((prev) => (prev === 0 ? topCardsData.length - 1 : prev - 1));
  };

  // Funções de navegação do carrossel de destaques
  const nextDestaqueSlide = () => {
    if (destaqueCardsData.length === 0) return;
    setCurrentDestaqueSlide((prev) => (prev === destaqueCardsData.length - 1 ? 0 : prev + 1));
  };
  const prevDestaqueSlide = () => {
    if (destaqueCardsData.length === 0) return;
    setCurrentDestaqueSlide((prev) => (prev === 0 ? destaqueCardsData.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between pl-2 pr-6 pt-0 pb-0 bg-white shadow-sm md:items-end md:pl-3 md:pr-12 relative z-50">
        <img src={logoImg} alt="Logo" className="h-20 md:h-36 w-auto cursor-pointer block mb-0 pb-0 self-end" />
        
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

      {/* Seção dos Cards de Cima (Carrossel 1) */}
      <section className="bg-[#010020] px-6 py-12 md:px-16 md:pt-12 md:pb-28 relative flex flex-col items-center justify-center select-none">
        
        {/* Botão para Abrir Formulário de Criação (Superior) */}
        <div className="w-full max-w-[1200px] flex justify-end mb-6 px-4 md:px-12">
          <button 
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 bg-[#f67225] hover:bg-[#d55e1d] text-white px-6 py-3 rounded-xl font-bold font-['Montserrat'] transition-all hover:scale-105 shadow-lg"
          >
            <Plus size={20} />
            Novo Card
          </button>
        </div>

        <div className="relative w-full max-w-[1200px] flex items-center justify-center px-4 md:px-12">
          
          {topCardsData.length > 0 && (
            <button 
              onClick={prevTopSlide}
              className="absolute left-0 z-20 p-2 bg-[#f67225] text-white rounded-full hover:bg-[#d55e1d] transition-all hover:scale-110 shadow-lg"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div className="w-full overflow-hidden py-10">
            {topCardsData.length === 0 ? (
              <p className="text-center text-white/60 font-['Montserrat'] py-10">
                Nenhum card cadastrado. Clique em "Novo Card" para adicionar.
              </p>
            ) : (
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6 md:gap-8 justify-start"
                style={{
                  transform: `translateX(calc(-${currentTopSlide * 100}% - ${currentTopSlide * 24}px))`
                }}
              >
                {topCardsData.map((card, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleTopDragStart(e, index)}
                    onDragOver={(e) => handleTopDragOver(e, index)}
                    onDragEnd={handleTopDragEnd}
                    className={`relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] h-[420px] bg-[#010f29] px-8 py-12 shadow-2xl border flex flex-col items-center text-center rounded-sm group cursor-grab active:cursor-grabbing transition-all ${
                      draggedTopIndex === index 
                        ? 'opacity-30 scale-95 border-dashed border-[#f67225]' 
                        : 'border-white/5 opacity-100'
                    }`}
                  >
                    {/* Botão de Apagar */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTopCard(index);
                      }}
                      onMouseDown={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 p-2 text-gray-400 hover:text-red-500 hover:bg-white/10 rounded-full transition-colors z-20"
                      title="Apagar card"
                    >
                      <Trash2 size={20} />
                    </button>

                    <h2 className="text-white text-3xl mb-8 uppercase font-['Marcellus'] leading-snug tracking-wide whitespace-pre-line pointer-events-none">
                      {card.title}
                    </h2>
                    <p className="text-white/85 font-['Marcellus'] leading-relaxed text-xl md:text-2xl pointer-events-none">
                      {card.text}
                    </p>
                    <button 
                      onMouseDown={(e) => e.stopPropagation()}
                      className="absolute bottom-0 translate-y-1/2 bg-[#f67225] text-white px-10 py-3 rounded-xl text-xl font-bold tracking-wide hover:bg-[#d55e1d] transition-all hover:scale-105 shadow-lg whitespace-nowrap z-10 font-['Montserrat']"
                    >
                      Conectar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {topCardsData.length > 0 && (
            <button 
              onClick={nextTopSlide}
              className="absolute right-0 z-20 p-2 bg-[#f67225] text-white rounded-full hover:bg-[#d55e1d] transition-all hover:scale-110 shadow-lg"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        <div className="flex space-x-2 mt-6">
          {topCardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTopSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentTopSlide === index ? 'bg-[#f67225] w-8' : 'bg-gray-500 w-2.5'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Modal / Formulário de Criação de Card Superior */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#010f29] border border-white/10 w-full max-w-lg rounded-2xl p-6 md:p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6 font-['Marcellus']">
              Adicionar Novo Card (Abaixo do Vídeo)
            </h2>

            <form onSubmit={handleCreateCard} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-['Montserrat']">
                  Título
                </label>
                <input 
                  type="text"
                  required
                  value={cardTitle}
                  onChange={(e) => setCardTitle(e.target.value)}
                  placeholder="Ex: NOVO SERVIÇO"
                  className="w-full bg-[#010020] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f67225]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-['Montserrat']">
                  Descrição
                </label>
                <textarea 
                  required
                  rows={4}
                  value={cardText}
                  onChange={(e) => setCardText(e.target.value)}
                  placeholder="Escreva a descrição do card..."
                  className="w-full bg-[#010020] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f67225] resize-none"
                />
              </div>

              <div className="flex justify-end gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-6 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors font-['Montserrat']"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#f67225] hover:bg-[#d55e1d] text-white rounded-lg font-bold font-['Montserrat'] transition-all"
                >
                  Criar Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Seção Quem Somos */}
      <section className="bg-[#010020] px-6 md:px-20 pt-24 pb-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-left font-['Marcellus']">Quem somos...</h1>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed font-['Arial_MT_Pro']">
            Nosso principal objetivo é contribuir com a divulgação e propiciar <br className="hidden md:inline"/> conexões profissionais para fechar negócios.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed font-['Arial_MT_Pro']">
            Aqui é um espaço para divulgar seu negócio, opportunities de <br className="hidden md:inline"/> empregos, divulgar seus serviços e monetizar seus conhecimentos.
          </p>
          <p className="text-2xl md:text-3xl font-bold font-['Arial_MT_Pro'] pt-4">
            Anuncie, crie um perfil e conecte com seu público!
          </p>
          <div className="flex justify-center pt-8">
            <button className="bg-[#f67225] text-white px-10 py-3 rounded-xl text-xl font-bold tracking-wide hover:bg-[#d55e1d] transition-all hover:scale-105 shadow-lg whitespace-nowrap font-['Montserrat']">
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

      {/* Seção Em Destaque (Carrossel 2) */}
      <section className="bg-white select-none">
        <div className="py-12">
          <div className="flex flex-col items-center">
            <a className="text-black text-2xl md:text-3xl font-bold uppercase relative pb-4 font-['Arial_MT_Pro']">
              EM DESTAQUE
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#f67225]"></span>
            </a>
          </div>
        </div>
        
        <div className="bg-[#010020] pt-10 pb-16 px-6 md:px-16 text-white relative flex flex-col items-center">
          
          {/* Botão para Abrir Formulário de Criação (Em Destaque) */}
          <div className="w-full max-w-[1200px] flex justify-end mb-4 px-4 md:px-12">
            <button 
              onClick={() => setIsDestaqueFormOpen(true)}
              className="flex items-center gap-2 bg-[#f67225] hover:bg-[#d55e1d] text-white px-6 py-3 rounded-xl font-bold font-['Montserrat'] transition-all hover:scale-105 shadow-lg"
            >
              <Plus size={20} />
              Novo Destaque
            </button>
          </div>

          {/* Container do Carrossel de Destaques */}
          <div className="relative w-full max-w-[1200px] flex items-center justify-center px-4 md:px-12">
            
            {/* Botão Esquerdo */}
            {destaqueCardsData.length > 0 && (
              <button 
                onClick={prevDestaqueSlide}
                className="absolute left-0 z-20 p-2 bg-[#f67225] text-white rounded-full hover:bg-[#d55e1d] transition-all hover:scale-110 shadow-lg"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Viewport do Carrossel */}
            <div className="w-full overflow-hidden py-10">
              {destaqueCardsData.length === 0 ? (
                <p className="text-center text-white/60 font-['Montserrat'] py-10">
                  Nenhum card em destaque cadastrado. Clique em "Novo Destaque" para adicionar.
                </p>
              ) : (
                <div 
                  className="flex transition-transform duration-500 ease-in-out gap-6 md:gap-8 justify-start"
                  style={{
                    transform: `translateX(calc(-${currentDestaqueSlide * 100}% - ${currentDestaqueSlide * 24}px))`
                  }}
                >
                  {destaqueCardsData.map((card, index) => (
                    <div 
                      key={card.id} 
                      draggable
                      onDragStart={(e) => handleDestaqueDragStart(e, index)}
                      onDragOver={(e) => handleDestaqueDragOver(e, index)}
                      onDragEnd={handleDestaqueDragEnd}
                      className={`relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-h-[480px] bg-[#010f29] border shadow-xl flex flex-col items-center px-8 py-10 rounded-sm cursor-grab active:cursor-grabbing transition-all ${
                        draggedDestaqueIndex === index 
                          ? 'opacity-30 scale-95 border-dashed border-[#f67225]' 
                          : 'border-white/10 opacity-100'
                      }`}
                    >
                      {/* Botão de Apagar */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteDestaqueCard(card.id);
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3 p-2 text-gray-400 hover:text-red-500 hover:bg-white/10 rounded-full transition-colors z-20"
                        title="Apagar destaque"
                      >
                        <Trash2 size={20} />
                      </button>

                      <div className="w-full h-28 bg-gray-300 mb-4 flex-shrink-0 pointer-events-none"></div>
                      <h3 className="text-white font-bold text-2xl uppercase mb-3 font-['Montserrat'] pointer-events-none">{card.title}</h3>
                      <p className="text-white/70 text-lg md:text-xl leading-relaxed font-['Arial_MT_Pro'] flex-grow pointer-events-none">
                        {card.text}{' '}
                        <span className="text-[#f67225] hover:underline cursor-pointer inline font-semibold whitespace-nowrap pointer-events-auto">Mais...</span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Botão Direito */}
            {destaqueCardsData.length > 0 && (
              <button 
                onClick={nextDestaqueSlide}
                className="absolute right-0 z-20 p-2 bg-[#f67225] text-white rounded-full hover:bg-[#d55e1d] transition-all hover:scale-110 shadow-lg"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>

          {/* Indicadores Visuais de Destaque */}
          <div className="flex space-x-2 mb-6">
            {destaqueCardsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDestaqueSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentDestaqueSlide === index ? 'bg-[#f67225] w-8' : 'bg-gray-500 w-2.5'
                }`}
              />
            ))}
          </div>

          {/* Container para alinhar o Explorar Mais */}
          <div className="w-full max-w-[1200px] flex justify-center md:justify-end mt-4 px-2 md:px-12">
            <a 
              href="#explorar" 
              className="text-[#f67225] text-lg font-bold font-['Montserrat'] uppercase tracking-wider hover:text-[#d55e1d] hover:underline transition-colors"
            >
              Explorar mais...
            </a>
          </div>
        </div>
      </section>

      {/* Modal / Formulário de Criação de Card em Destaque */}
      {isDestaqueFormOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#010f29] border border-white/10 w-full max-w-lg rounded-2xl p-6 md:p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsDestaqueFormOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6 font-['Marcellus']">
              Adicionar Card em Destaque
            </h2>

            <form onSubmit={handleCreateDestaqueCard} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-['Montserrat']">
                  Título
                </label>
                <input 
                  type="text"
                  required
                  value={destaqueTitle}
                  onChange={(e) => setDestaqueTitle(e.target.value)}
                  placeholder="Ex: Título em Destaque"
                  className="w-full bg-[#010020] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f67225]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-['Montserrat']">
                  Descrição
                </label>
                <textarea 
                  required
                  rows={4}
                  value={destaqueText}
                  onChange={(e) => setDestaqueText(e.target.value)}
                  placeholder="Escreva o texto descritivo para a seção de destaques..."
                  className="w-full bg-[#010020] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f67225] resize-none"
                />
              </div>

              <div className="flex justify-end gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsDestaqueFormOpen(false)}
                  className="px-6 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors font-['Montserrat']"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#f67225] hover:bg-[#d55e1d] text-white rounded-lg font-bold font-['Montserrat'] transition-all"
                >
                  Criar Destaque
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            <button className="bg-[#f67225] text-white px-12 py-4 rounded-xl font-bold uppercase tracking-tighter hover:bg-[#d55e1d] transition-all hover:scale-105 shadow-lg font-['Montserrat']">
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

export default Home;