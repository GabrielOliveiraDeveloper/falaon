import footerImage from '../assets/faixa horizontal 2.png';
import logo from '../assets/logo.png';

const RegisterInitFinish = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Conteúdo principal com o texto e a logo centralizados */}
            <div className="flex-grow flex flex-col justify-center items-center">
                <p className="text-center mb-4 text-black text-2xl">
                    Por favor, acesse o seu e-mail para <br />
                    completar o cadastro.
                </p>
                <img src={logo} alt="Logo" className="w-56 h-auto" />
            </div>

            {/* Footer fixo na parte inferior */}
            <footer className="absolute bottom-0 w-full">
                <img src={footerImage} alt="Footer" className="w-full h-24 md:h-auto object-cover" />
            </footer>
        </div>
    );
};

export default RegisterInitFinish;