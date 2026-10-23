const DoneUser = require('./DoneUser');

const DoneRegisterController = async (req, res) => {
    const { nameSocial, fullName, cpf, email, cep, street, neighborhood, number, city, complement, country, dddTelphone, telphone, dddWhatsApp, whatsApp, isProfessor, password } = req.body; 

    try {
        await DoneUser.create({ nameSocial, fullName, cpf, email, cep, street, neighborhood, number, city, complement, country, dddTelphone, telphone, dddWhatsApp, whatsApp, isProfessor, password });
        res.status(201).json({ message: 'Registration completed successfully' });
        
    } catch (error) {
        console.error('Error completing registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
    
}

module.exports = DoneRegisterController;