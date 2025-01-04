const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(
        [
            { id: 1, name: "John Doe", age: 25 },
            { id: 2, name: "Dwayne Dehoedt", age: 24 }
        ]
    );
});