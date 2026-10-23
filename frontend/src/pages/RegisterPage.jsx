import logo from '../assets/logo.png';
import backIcon from '../assets/back.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    // Remove qualquer scroll do body
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    const handleRegister = async () => {
        if (!termsAccepted) {
            alert('Você deve aceitar os termos de uso para continuar.');
            return;
        }

        try {
            await axios.post('https://falaon.onrender.com/api/register', {
                email,
                password
            });
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        // Justify-between e remoção de padding inferior para o bloco colar no fundo
        <div className="min-h-screen w-screen text-white flex flex-col items-center justify-between relative overflow-hidden">

            {/* Cabeçalho / Botão Voltar */}
            <div className="w-full flex items-center justify-center mt-12 md:mt-20 px-4 relative">
                <div className="absolute right-4 flex items-center gap-1 cursor-pointer">
                    <img src={backIcon} alt="Voltar" className="w-12 h-12 md:w-16 md:h-16" />
                    <span className="text-black text-lg md:text-xl hidden sm:inline">Voltar</span>
                </div>

                <div className="flex items-center gap-3 relative">
                    <h1 className="text-3xl sm:text-4xl text-black relative">Cadastro</h1>
                    <div className="absolute -bottom-6 w-16 h-1 bg-orange-500 rounded-md left-1/2 -translate-x-1/2"></div>
                </div>
            </div>

            {/* Container do Formulário */}
            <div className="relative w-full max-w-md md:max-w-lg mt-auto">
                
                {/* Bloco Preto: Arredondado apenas no topo e colado na base */}
                <div className="bg-black flex flex-col gap-3 p-6 md:p-8 rounded-t-[40px] w-full relative shadow-2xl z-10">
                    <input 
                        type="text" 
                        placeholder="E-mail: " 
                        className="bg-white p-3 text-black rounded-3xl mb-2 md:mb-4 outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha: " 
                        className="bg-white p-3 text-black rounded-3xl mb-2 outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <div className="flex items-start gap-2 mt-2">
                        <input 
                            type="checkbox" 
                            id="terms" 
                            className="w-4 h-4 mt-1 flex-shrink-0"
                            onChange={(e)=>{setTermsAccepted(e.target.checked)}}
                        />
                        <label htmlFor="terms" className="text-xs sm:text-sm text-white">
                            Ao clicar aqui, declaro que li, aceito e concordo com os <span className="text-orange-500 underline">Termos de Uso e Políticas da falaON</span> e que tenho mais de 18 anos.
                        </label>
                    </div>

                    <button 
                        className="text-white bg-orange-500 p-3 rounded-xl mt-6 hover:bg-orange-600 transition-colors font-bold text-lg" 
                        onClick={handleRegister}
                    >
                        Confirmar
                    </button>
                </div>

                {/* Logo Flutuante (Desktop) */}
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute -left-40 bottom-10 w-36 h-auto object-cover md:-left-48 md:w-48 lg:-left-60 hidden md:block z-0"
                />
            </div>
        </div>
    )
}

export default RegisterPage;