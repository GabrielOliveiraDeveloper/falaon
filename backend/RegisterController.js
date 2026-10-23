const { default: mongoose } = require('mongoose');
const User = require('./User');
const nodemailer = require('nodemailer');


const RegisterController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    };

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }
        const newUser = new User({ email, password });
        await newUser.save();

        await sendermailasync(email);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });   
    }
}


const sendermailasync = async (email) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
                user: 'sendermailservice01@gmail.com',
                pass: "slht vdcm pfgi mmru"
            }
        });
            
let mailOptions = {
        from: 'senderemailservice01@gmail.com',
        to: email,
        subject: 'Bem-vindo ao Falaon!',
        text: `Olá! Sua conta foi criada com sucesso, acesse o link para completar seu cadastro: https://falaon.com.br/`
};


transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('Erro:', error);
        } else {
                console.log('Email enviado:', info.response);
        }
});

console.log('Lead recebido:');
}

module.exports = RegisterController;