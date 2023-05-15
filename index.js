const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chef = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('Food Recipes are coming');
});

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(chef);
    }
    else {
        const chefRecipe = chef.filter(c => parseInt(c.id) === id);
        res.send(chefRecipe);
    }
})

app.listen(port, () => {
    console.log(`Food recipes will be coming at port: ${port}`);
})