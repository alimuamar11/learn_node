const express = require('express');
const app = express();

const courses = [
    { id:1, name: "kursus 1"},
    { id:2, name: "kursus 2"},
    { id:3, name: "kursus 3"},
    { id:4, name: "kursus 4"},
];

app.get('/', (req, res) => {
    res.send('hello dunia ku');
});
app.get('/api/courses', (req,res)=>{
    res.send(courses);
})

app.get('/api/courses/:id', (req,res) =>{
    const kursus = courses.find(kur => kur.id === parseInt(req.params.id)) //parseInt agar berupa int, karena default string
    if(!kursus) res.status(404).send('Kursus dengan id yang diberikan tidak ada');
    res.send(kursus);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port},...`))
// app.listen(3000, () => console.log('Listening on port 3000,...'))