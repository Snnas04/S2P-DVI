const express = require('express');
const app = express();
const port = 3000;

app.get('/data', async (req, res) => {
    try {
        const data = await getQueryData();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
