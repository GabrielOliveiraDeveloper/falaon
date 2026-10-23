import logo from '../assets/logo.png';
import backIcon from '../assets/back.png'
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await axios.post('http://localhost:3000/api/login', {
                email,
                password
            });
            alert('Login realizado com sucesso!');
        } catch (error) {
            alert('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <div className="min-h-screen w-full text-white flex flex-col items-center justify-between relative overflow-x-hidden">
            
            {/* Cabeçalho de Login - Ajustado para w-full e posições relativas como no Register */}
            <div className="w-full flex justify-center items-center mt-12 md:mt-20 px-4 relative">
                
                {/* Título Centralizado */}
                <div className="flex items-center gap-3 relative">
                    <h1 className="text-3xl sm:text-4xl text-black relative">Login</h1>
                    {/* Linha laranja */}
                    <div className="absolute -bottom-6 w-16 h-1 bg-orange-500 rounded-md left-1/2 -translate-x-1/2"></div>
                </div>

                {/* Botão "Voltar" - Agora posicionado exatamente como no RegisterPage */}
                <div className="absolute right-4 flex items-center gap-1 cursor-pointer">
                    <img src={backIcon} alt="Voltar" className="w-12 h-12 md:w-16 md:h-16" />
                    <span className="text-black text-lg md:text-xl hidden sm:inline">Voltar</span>
                </div>
            </div>

           
            <div className="relative w-full max-w-md md:max-w-lg mt-auto">
                
                <div className="bg-black flex flex-col gap-3 p-8 rounded-t-[40px] w-full relative shadow-2xl z-10">
                    <input 
                        type="text" 
                        placeholder="E-mail: " 
                        className="bg-white p-3 text-black rounded-3xl mb-4 md:mb-6 outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha: " 
                        className="bg-white p-3 text-black rounded-3xl mb-4 outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button 
                        className="text-white bg-orange-500 p-3 rounded-xl mt-4 hover:bg-orange-600 transition-colors font-bold text-lg" 
                        onClick={handleLogin}
                    >
                        Confirmar
                    </button>
                </div>

                {/* Logo lateral */}
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute -left-32 bottom-8 w-36 h-auto object-cover md:-left-48 md:w-48 lg:-left-64 hidden md:block z-0"
                />
            </div>
        </div>
    );
};

export default LoginPage;