import React from 'react';

const MyAccount = () => {
    // Estilo padrão para os inputs para manter a consistência
    const inputStyle = "w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all";

    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800">
            {/* Título Centralizado com Linha Laranja */}
            <div className="flex flex-col items-center mb-12 gap-3">
                <h1 className="text-3xl font-bold uppercase tracking-wider">
                    MINHA CONTA
                </h1>
                <div className="w-24 h-1 bg-orange-500"></div>
            </div>

            {/* Informações Pessoais e Foto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Informações Pessoais</h2>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome público</label>
                        <input type="text" className={inputStyle} placeholder="Seu nome de exibição" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                        <input type="text" className={inputStyle} placeholder="Nome completo" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                        <input type="text" className={inputStyle} placeholder="000.000.000-00" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <input type="email" className={inputStyle} placeholder="seu@email.com" />
                        <div className="mt-2">
                            <p className="text-sm text-black">
                                Para mudar o e-mail registrado <a href="#" className="text-orange-500 underline hover:text-orange-600">Clique aqui</a>
                            </p>
                            <p className="text-sm text-black mt-1">
                                Para mudar informações pessoais <a href="#" className="text-orange-500 underline hover:text-orange-600">Clique aqui</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Foto de Perfil - Borda removida conforme solicitado */}
                <div className="flex flex-col items-center justify-center p-6 h-fit self-start mt-8">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400">
                        <span className="text-xs text-center px-2">Coloque uma imagem para seu perfil</span>
                    </div>
                    <button className="text-sm bg-white border border-gray-300 px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition-colors">
                        Upload Foto
                    </button>
                </div>
            </div>

            {/* Endereço */}
            <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Endereço</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                        <input type="text" className={inputStyle} placeholder="00000-000" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
                        <input type="text" className={inputStyle} placeholder="Nome da rua" />
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                        <input type="text" className={inputStyle} placeholder="123" />
                    </div>
                    
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                        <input type="text" className={inputStyle} placeholder="Apto, Bloco..." />
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                        <input type="text" className={inputStyle} placeholder="Seu bairro" />
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                        <input type="text" className={inputStyle} placeholder="Sua cidade" />
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">País</label>
                        <input type="text" className={inputStyle} placeholder="Brasil" />
                    </div>
                </div>
            </div>

            {/* Contatos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <section>
                    <h2 className="text-xl font-semibold mb-4">Telefone</h2>
                    <div className="flex gap-2">
                        <div className="w-20">
                            <label className="block text-[10px] uppercase font-bold text-gray-400">Cód.</label>
                            <input type="text" className={inputStyle} placeholder="+55" />
                        </div>
                        <div className="w-20">
                            <label className="block text-[10px] uppercase font-bold text-gray-400">DDD</label>
                            <input type="text" className={inputStyle} placeholder="11" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-[10px] uppercase font-bold text-gray-400">Número</label>
                            <input type="text" className={inputStyle} placeholder="99999-9999" />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">WhatsApp</h2>
                    <div className="flex gap-2">
                        <div className="w-20">
                            <label className="block text-[10px] uppercase font-bold text-gray-400">Cód.</label>
                            <input type="text" className={inputStyle} placeholder="+55" />
                        </div>
                        <div className="w-20">
                            <label className="block text-[10px] uppercase font-bold text-gray-400">DDD</label>
                            <input type="text" className={inputStyle} placeholder="11" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-[10px] uppercase font-bold text-gray-400">Número</label>
                            <input type="text" className={inputStyle} placeholder="99999-9999" />
                        </div>
                    </div>
                </section>
            </div>

            {/* Privacidade e Segurança */}
            <div className="mb-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-xl font-semibold mb-6">Privacidade e segurança</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Senha atual</label>
                        <input type="password" className={inputStyle} placeholder="Digite a senha atual" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nova senha</label>
                        <input type="password" className={inputStyle} placeholder="Nova senha" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar senha</label>
                        <input type="password" className={inputStyle} placeholder="Repita a nova senha" />
                    </div>
                </div>
                <button className="mt-6 bg-orange-500 text-white px-8 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-md">
                    Alterar senha
                </button>
            </div>

            {/* Dispositivos Conectados */}
            <div className="mb-10">
                <h2 className="text-xl font-semibold mb-2">Dispositivos conectados</h2>
                <p className="text-gray-600 mb-4">Desconecte todos os dispositivos conectados a sua conta na falaON.</p>
                <button className="text-sm font-bold text-orange-600 border border-orange-600 px-4 py-2 rounded-md hover:bg-orange-50 transition-colors">
                    Sair de todas as sessões
                </button>
            </div>

            {/* Encerramento de Conta */}
            <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                    <span className="font-bold text-red-600 cursor-pointer hover:underline transition-all">
                        Encerrar sua conta
                    </span>
                    <span className="font-bold text-gray-800 cursor-pointer hover:opacity-70 transition-opacity">
                        Desativar conta temporariamente
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;