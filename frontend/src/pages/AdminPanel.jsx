import React, { useState } from 'react';

export default function AdminPanel() {
  // --- ESTADO: SEÇÃO GERAL DE CARDS (Título e Descrição) ---
  const [cardsGerais, setCardsGerais] = useState([
    { id: 1, titulo: 'Aviso de Manutenção', descricao: 'A plataforma passará por atualizações no final de semana.' },
    { id: 2, titulo: 'Diretrizes Acadêmicas', descricao: 'Confira as regras e prazos para envio de atividades.' }
  ]);
  const [novoTituloGeral, setNovoTituloGeral] = useState('');
  const [novaDescricaoGeral, setNovaDescricaoGeral] = useState('');
  const [editandoGeralId, setEditandoGeralId] = useState(null);
  const [editTituloGeral, setEditTituloGeral] = useState('');
  const [editDescricaoGeral, setEditDescricaoGeral] = useState('');

  // --- ESTADO: SEÇÃO EM DESTAQUE (Título, Descrição e Imagem) ---
  const [cardsDestaque, setCardsDestaque] = useState([
    { id: 1, titulo: 'Novo Curso de Web Design', descricao: 'Aprenda os fundamentos de UI/UX e prototipagem.', imagem: null }
  ]);
  const [novoTituloDestaque, setNovoTituloDestaque] = useState('');
  const [novaDescricaoDestaque, setNovaDescricaoDestaque] = useState('');
  const [novaImagemDestaque, setNovaImagemDestaque] = useState(null);
  const [editandoDestaqueId, setEditandoDestaqueId] = useState(null);
  const [editTituloDestaque, setEditTituloDestaque] = useState('');
  const [editDescricaoDestaque, setEditDescricaoDestaque] = useState('');
  const [editImagemDestaque, setEditImagemDestaque] = useState(null);

  // --- FUNÇÕES: SEÇÃO GERAL ---
  const adicionarCardGeral = (e) => {
    e.preventDefault();
    if (!novoTituloGeral.trim() || !novaDescricaoGeral.trim()) return;
    const novoCard = {
      id: Date.now(),
      titulo: novoTituloGeral,
      descricao: novaDescricaoGeral
    };
    setCardsGerais([...cardsGerais, novoCard]);
    setNovoTituloGeral('');
    setNovaDescricaoGeral('');
  };

  const removerCardGeral = (id) => {
    setCardsGerais(cardsGerais.filter((card) => card.id !== id));
  };

  const moverCardGeral = (index, direcao) => {
    const novoIndex = index + direcao;
    if (novoIndex < 0 || novoIndex >= cardsGerais.length) return;
    const novosCards = [...cardsGerais];
    const temp = novosCards[index];
    novosCards[index] = novosCards[novoIndex];
    novosCards[novoIndex] = temp;
    setCardsGerais(novosCards);
  };

  const iniciarEdicaoGeral = (card) => {
    setEditandoGeralId(card.id);
    setEditTituloGeral(card.titulo);
    setEditDescricaoGeral(card.descricao);
  };

  const salvarEdicaoGeral = (id) => {
    setCardsGerais(
      cardsGerais.map((card) =>
        card.id === id ? { ...card, titulo: editTituloGeral, descricao: editDescricaoGeral } : card
      )
    );
    setEditandoGeralId(null);
  };

  // --- FUNÇÕES: SEÇÃO EM DESTAQUE ---
  const adicionarCardDestaque = (e) => {
    e.preventDefault();
    if (!novoTituloDestaque.trim() || !novaDescricaoDestaque.trim()) return;
    const novoCard = {
      id: Date.now(),
      titulo: novoTituloDestaque,
      descricao: novaDescricaoDestaque,
      imagem: novaImagemDestaque ? URL.createObjectURL(novaImagemDestaque) : null
    };
    setCardsDestaque([...cardsDestaque, novoCard]);
    setNovoTituloDestaque('');
    setNovaDescricaoDestaque('');
    setNovaImagemDestaque(null);
  };

  const removerCardDestaque = (id) => {
    setCardsDestaque(cardsDestaque.filter((card) => card.id !== id));
  };

  const moverCardDestaque = (index, direcao) => {
    const novoIndex = index + direcao;
    if (novoIndex < 0 || novoIndex >= cardsDestaque.length) return;
    const novosCards = [...cardsDestaque];
    const temp = novosCards[index];
    novosCards[index] = novosCards[novoIndex];
    novosCards[novoIndex] = temp;
    setCardsDestaque(novosCards);
  };

  const iniciarEdicaoDestaque = (card) => {
    setEditandoDestaqueId(card.id);
    setEditTituloDestaque(card.titulo);
    setEditDescricaoDestaque(card.descricao);
    setEditImagemDestaque(null);
  };

  const salvarEdicaoDestaque = (id) => {
    setCardsDestaque(
      cardsDestaque.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            titulo: editTituloDestaque,
            descricao: editDescricaoDestaque,
            imagem: editImagemDestaque ? URL.createObjectURL(editImagemDestaque) : card.imagem
          };
        }
        return card;
      })
    );
    setEditandoDestaqueId(null);
  };

  // --- DADOS FICTÍCIOS DE USUÁRIOS ---
  const usuariosFicticios = [
    { id: 1, nome: 'Ana Silva', email: 'ana.silva@email.com', tipoConta: 'Estudante', dataCadastro: '10/01/2025' },
    { id: 2, nome: 'Prof. Carlos Oliveira', email: 'carlos.oliveira@email.com', tipoConta: 'Professor', dataCadastro: '15/02/2025' },
    { id: 3, nome: 'Beatriz Santos', email: 'beatriz.santos@email.com', tipoConta: 'Estudante', dataCadastro: '20/02/2025' },
    { id: 4, nome: 'Prof. Roberto Mendes', email: 'roberto.mendes@email.com', tipoConta: 'Professor', dataCadastro: '01/03/2025' },
    { id: 5, nome: 'Eduardo Costa', email: 'eduardo.costa@email.com', tipoConta: 'Estudante', dataCadastro: '12/03/2025' },
    { id: 6, nome: 'Profa. Fernanda Lima', email: 'fernanda.lima@email.com', tipoConta: 'Professor', dataCadastro: '18/03/2025' }
  ];

  // --- DADOS FICTÍCIOS DE CURSOS CADASTRADOS ---
  const cursosFicticios = [
    { id: 1, titulo: 'Desenvolvimento Frontend com React', descricao: 'Aprenda a construir aplicações web dinâmicas e reativas com as melhores práticas.' },
    { id: 2, titulo: 'Estruturas de Dados e Algoritmos', descricao: 'Domine ordenação, busca, listas, árvores e otimização de código.' },
    { id: 3, titulo: 'Banco de Dados Relacionais e SQL', descricao: 'Aprenda modelagem, consultas complexas e gerenciamento de banco de dados.' },
    { id: 4, titulo: 'Engenharia de Software e Arquitetura', descricao: 'Conceitos de design de sistemas, padrões de projeto e testes automatizados.' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Título do Painel */}
      <h1>bem vindo ao painel de administraçao</h1>

      <hr />

      {/* --- SEÇÃO 1: CRIAR CARDS (Título e Descrição) --- */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Gerenciamento de Cards Gerais</h2>

        <form onSubmit={adicionarCardGeral} style={{ marginBottom: '20px' }}>
          <h3>Criar Novo Card</h3>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Título:</label>
            <input
              type="text"
              value={novoTituloGeral}
              onChange={(e) => setNovoTituloGeral(e.target.value)}
              placeholder="Digite o título"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Descrição:</label>
            <textarea
              value={novaDescricaoGeral}
              onChange={(e) => setNovaDescricaoGeral(e.target.value)}
              placeholder="Digite a descrição"
              rows={3}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <button type="submit">Confirmar e Criar Card</button>
        </form>

        <h3>Cards Cadastrados</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {cardsGerais.map((card, index) => (
            <div key={card.id} style={{ border: '1px solid #000', padding: '15px' }}>
              {editandoGeralId === card.id ? (
                <div>
                  <input
                    type="text"
                    value={editTituloGeral}
                    onChange={(e) => setEditTituloGeral(e.target.value)}
                    style={{ width: '100%', marginBottom: '5px' }}
                  />
                  <textarea
                    value={editDescricaoGeral}
                    onChange={(e) => setEditDescricaoGeral(e.target.value)}
                    style={{ width: '100%', marginBottom: '5px' }}
                  />
                  <button onClick={() => salvarEdicaoGeral(card.id)} style={{ marginRight: '5px' }}>
                    Salvar
                  </button>
                  <button onClick={() => setEditandoGeralId(null)}>Cancelar</button>
                </div>
              ) : (
                <div>
                  <h4>{card.titulo}</h4>
                  <p>{card.descricao}</p>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button onClick={() => moverCardGeral(index, -1)} disabled={index === 0}>
                      ▲ Mover para Cima
                    </button>
                    <button onClick={() => moverCardGeral(index, 1)} disabled={index === cardsGerais.length - 1}>
                      ▼ Mover para Baixo
                    </button>
                    <button onClick={() => iniciarEdicaoGeral(card)}>Editar</button>
                    <button onClick={() => removerCardGeral(card.id)}>Excluir</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* --- SEÇÃO 2: EM DESTAQUE (Título, Descrição e Imagem) --- */}
      <section style={{ marginBottom: '40px' }}>
        <h2>em destaque</h2>

        <form onSubmit={adicionarCardDestaque} style={{ marginBottom: '20px' }}>
          <h3>Criar Item em Destaque</h3>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Título:</label>
            <input
              type="text"
              value={novoTituloDestaque}
              onChange={(e) => setNovoTituloDestaque(e.target.value)}
              placeholder="Digite o título do destaque"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Descrição:</label>
            <textarea
              value={novaDescricaoDestaque}
              onChange={(e) => setNovaDescricaoDestaque(e.target.value)}
              placeholder="Digite a descrição do destaque"
              rows={3}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Selecionar Imagem:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNovaImagemDestaque(e.target.files[0])}
            />
          </div>
          <button type="submit">Confirmar e Criar Destaque</button>
        </form>

        <h3>Itens em Destaque Cadastrados</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {cardsDestaque.map((card, index) => (
            <div key={card.id} style={{ border: '1px solid #000', padding: '15px' }}>
              {editandoDestaqueId === card.id ? (
                <div>
                  <input
                    type="text"
                    value={editTituloDestaque}
                    onChange={(e) => setEditTituloDestaque(e.target.value)}
                    style={{ width: '100%', marginBottom: '5px' }}
                  />
                  <textarea
                    value={editDescricaoDestaque}
                    onChange={(e) => setEditDescricaoDestaque(e.target.value)}
                    style={{ width: '100%', marginBottom: '5px' }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setEditImagemDestaque(e.target.files[0])}
                    style={{ marginBottom: '5px', display: 'block' }}
                  />
                  <div>
                    <button onClick={() => salvarEdicaoDestaque(card.id)} style={{ marginRight: '5px' }}>
                      Salvar
                    </button>
                    <button onClick={() => setEditandoDestaqueId(null)}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <div>
                  {card.imagem ? (
                    <img
                      src={card.imagem}
                      alt={card.titulo}
                      style={{ maxWidth: '200px', maxHeight: '150px', display: 'block', marginBottom: '10px' }}
                    />
                  ) : (
                    <div style={{ width: '150px', height: '100px', backgroundColor: 'gray', marginBottom: '10px' }} />
                  )}
                  <h4>{card.titulo}</h4>
                  <p>{card.descricao}</p>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button onClick={() => moverCardDestaque(index, -1)} disabled={index === 0}>
                      ▲ Mover para Cima
                    </button>
                    <button onClick={() => moverCardDestaque(index, 1)} disabled={index === cardsDestaque.length - 1}>
                      ▼ Mover para Baixo
                    </button>
                    <button onClick={() => iniciarEdicaoDestaque(card)}>Editar</button>
                    <button onClick={() => removerCardDestaque(card.id)}>Excluir</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* --- SEÇÃO 3: LISTA FICTÍCIA DE USUÁRIOS --- */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Lista de Usuários</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #000' }}>
              <th style={{ padding: '8px' }}>Nome</th>
              <th style={{ padding: '8px' }}>E-mail</th>
              <th style={{ padding: '8px' }}>Tipo de Conta</th>
              <th style={{ padding: '8px' }}>Data de Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFicticios.map((usuario) => (
              <tr key={usuario.id} style={{ borderBottom: '1px solid #000' }}>
                <td style={{ padding: '8px' }}>{usuario.nome}</td>
                <td style={{ padding: '8px' }}>{usuario.email}</td>
                <td style={{ padding: '8px' }}>{usuario.tipoConta}</td>
                <td style={{ padding: '8px' }}>{usuario.dataCadastro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr />

      {/* --- SEÇÃO 4: LISTA FICTÍCIA DE CURSOS CADASTRADOS --- */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Lista de cursos cadastrados</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
          {cursosFicticios.map((curso) => (
            <div
              key={curso.id}
              style={{
                border: '1px solid #000',
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                {/* Bloco cinza fingindo ser uma imagem */}
                <div style={{ width: '100%', height: '140px', backgroundColor: 'gray', marginBottom: '10px' }} />
                <h4>{curso.titulo}</h4>
                <p>{curso.descricao}</p>
              </div>
              <button style={{ marginTop: '10px', padding: '8px' }}>Ver mais</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}