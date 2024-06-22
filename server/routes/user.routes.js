const express = require('express');

const router = express.Router();


let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

router.get('/users', (req, res) => {
    res.json(users);
});

router.get('/users/:id', (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

router.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    user.name = name || user.name;
    user.email = email || user.email;
    res.json(user);
});


router.delete('/users/:id', (req, res) => {
    const index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users.splice(index, 1);
    res.sendStatus(204);
});

module.exports = router;