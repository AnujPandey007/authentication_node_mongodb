const mongoose = require('mongoose');
const User = require("./models/User");
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;
app.use(bodyParser.json());



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://anuj:8HGVeOFiFDYJlbwB@cluster0.vc8b5.mongodb.net/auth");
  app.listen(port, () => {
      console.info(`Listening on port http://localhost:${port}`);
  });
}

// Static Files
app.use(express.static('public'));
app.use(express.json());
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('loginPage');
});

app.get('/homePage', (req, res) => {
    res.render('homePage', { text: 'Home Page'});
});


//API
app.get('/getUsers', async(req, res)=>{
  try{
    const user = await User.find();
    res.json(user);
  }catch(err){
    // res.status(404).json("Something went wrong.");
    console.log(e.message);
    res.status(404).json(e.message);
  }
});

app.get('/getUser/:userName', async(req, res)=>{
  try{
    const user = await User.find({userName:req.params.userName});
    res.json(user);
  }catch(err){
    // res.status(404).json("Something went wrong.");
    console.log(e.message);
    res.status(404).json(e.message);
  }
});

app.post('/insertUser', async(req, res)=>{
  try{
    const user = await User.create({ 
      userName: req.body.userName,
      userAge: req.body.userAge,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword,
      isMale: req.body.isMale,
    });
    res.json(user);
  }catch(e){
    // res.status(404).json("Something went wrong.");
    console.log(e.message);
    res.status(404).json(e.message);
  }
});

app.put('/updateUser/:id', async(req, res)=>{
  try{
    const user = await User.findByIdAndUpdate(
      req.params.id, {
        userName: req.body.userName,
        userAge: req.body.userAge,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
        isMale: req.body.isMale,
      },
      {new: true},
    );
    res.json(user);
  }catch(e){
    // res.status(404).json("Something went wrong.");
    console.log(e.message);
    res.status(404).json(e.message);
  }
});

app.delete('/deleteUser/:id', async (req, res)=>{
  try{
    await User.findByIdAndDelete(req.params.id);
    res.json("Deleted Successfully");
  }catch(e){
    // res.status(404).json("Something went wrong.");
    console.log(e.message);
    res.status(404).json(e.message);
  }
});
