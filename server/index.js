require('./db/mongoose');
const express = require('express');
const Quest = require('./models/Quest');
const Mat = require('./models/Mat');
const Amount = require('./models/Amount');
const { Router } = require('express');
const router = express.Router();
const cors = require("cors");

const app = express();
// Init middleware
// app.use(logger);
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Create a new Quest
app.post('/quests', (req,res) =>{
    const quest = new Quest(req.body);

    quest.save().then((quest)=>{
        res.status(201).send(quest);
    }).catch((error)=>{
        res.status(400).send(error);
    })
})

app.post('/amounts', (req,res) =>{
    const amount = new Amount(req.body);
    amount.save().then((amount)=>{
        res.status(201).send(amount);
    }).catch((error)=>{
        res.status(400).send(error);
    })
})

app.post('/mats',(req,res) => {

    Mat.create(req.body).then((mat)=>{
        res.status(201).send(mat);
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

//Get all Quests
app.get('/quests',(req,res)=>{
    Quest.find({}).then((quest) => {
        res.send(quest);
    }).catch((error)=>{
        res.status(500).send(error);
    })
})

//Get all Amounts
app.get('/amounts',(req,res)=>{
    Amount.find({}).then((amount) => {
        res.send(amount);
    }).catch((error)=>{
        res.status(500).send(error);
    })
})

//Get all Mats
app.get('/mats',(req,res)=>{
    Mat.find({}).then((mat) => {
        res.send(mat);
    }).catch((error)=>{
        res.status(500).send(error);
    })
})


app.get('/mats/:id',(req,res)=>{
    Mat.findById(req.params.id).then((mat)=>{
        if (!mat){
            return res.status(404).send();
        }
        res.send(mat);
    }).catch((error)=>{
        res.status(500).send(error);
    })
})

app.get('/amounts/:id',(req,res)=>{
    Amount.findOne({_id: req.params.id}).then((amount)=>{
        if (!amount){
            return res.status(404).send();
        }
        res.send(amount);
    }).catch((error)=>{
        res.status(500).send(error);
    })
})


//delete Quest on ID
app.delete('/quests/:id',(req,res)=>{
    Quest.findByIdAndDelete(req.params.id).then(quest =>{
        if(!quest){
            return res.status(404).send();
        }
        res.send(quest);
    }).catch(error => {
        res.status(500).send(error)
    })
})

router.route("/quests").put((req,res) => {
    const title= req.body.title;
    const content = req.body.content;
    const newQuest = new Quest({
        title,
        content
    });
    newQuest.save();
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
