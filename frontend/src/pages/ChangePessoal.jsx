const ChangePessoal = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    padding: '20px',
    gap: '15px',
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9' // Um fundo leve apenas para os inputs brancos aparecerem
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const inputStyle = {
    padding: '14px',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
    border: 'none',             // Sem bordas
    backgroundColor: '#ffffff', // Fundo branco
    outline: 'none',            // Sem contorno ao focar
    boxShadow: '0px 2px 5px rgba(0,0,0,0.05)' // Sombra bem sutil para não sumir no branco
  };

  const uploadTextStyle = {
    color: '#FF8C00', 
    fontWeight: 'bold',
    marginTop: '10px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Informações pessoais</h1>

      <input type="text" placeholder="Nome completo (Cadastrado)  " style={inputStyle} />
 
      <input type="text" placeholder="CPF" style={inputStyle} />

           <input type="text" placeholder="Nome completo (Igual a do documento de identidade)" style={inputStyle} />

      <p style={{ maxWidth: '450px', fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
        Caso não tenha acesso ao email antigo, terá de enviar uma foto do seu documento de identidade com foto e cpf
      </p>

      <p style={uploadTextStyle}>Upload do documento</p>
    </div>
  );
};

export default ChangePessoal;