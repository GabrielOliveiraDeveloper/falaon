const DoneUser = require('./DoneUser');

const LoginController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const user = await DoneUser.findOne({
            email: email,
            password: password
        });

        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }  
}

module.exports = LoginController;