const express = require ('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PORT;
const bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/film', require('./routes/film.js'))
app.use('/article', require('./routes/article.js'))
app.use('/commentaire', require('./routes/commentaire'))


mongoose.connect('mongodb://localhost:27017/filmsDb', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log("Mongodb connected"))
.catch(err => console.log(err));;


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error' ));
db.once('open', function() {
    console.log('connected')
});


app.listen(port, () => console.log(('ok app listen')))



/* const dog = {
    name: "medor",
    age: 11, 
    color: "brown"
}

const {color, age, name} = dog; //on crée des variables avec les clé d'un objet 
console.log(color)

const tab = [1, 2];
const [one, two] = tab ; // je donne un nom à mes variables dans mon tableau avec les indexs 
console.log(one, two)

const dog2 = {
    ...dog, 
name: 'toby'}

console.log(dog2.name )
console.log(dog2)
console.log(dog )

console.log(`je suis ${name}, j'ai ${age} ans`)

class Dog {
    constructor (name, age) {
        this.name= name
        this.age= age
    }

    print() {
        console.log({
            name: this.name,
            ahe: this.age
        })
    }
}

const medor= new Dog('medor', 11)
console.log(age)
medor.print() */

