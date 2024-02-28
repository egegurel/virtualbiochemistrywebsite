require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});


const express = require('express');
const nodemailer = require("nodemailer");
const cors = require('cors');
const https = require('https');
const https2 = require('https');
const http = require('http', {cors: {origin:"*"}})  ;
const io = require('socket.io');
//const { Server: SocketIOServer } = require('socket.io');
//const React = require('react');
//const http2Express = require('express-http2-workaround');
const http2 = require('http2');
const axios = require('axios');
const httpMocks = require('node-mocks-http');
const EventEmitter = require('events');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const session = require('express-session');
const MongoSession = require('connect-mongodb-session')(session); 
const bcrypt = require('bcryptjs');
const { crypto } = require('crypto');
const multer = require('multer'); // Middleware for handling file uploads
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const WebSocket = require('ws');

const cacheControl = require('express-cache-controller');
const util = require('util');
app.use(cacheControl({ noStore: true, noCache: true, mustRevalidate: true, maxAge: 0 }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
//app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static('views')); 
app.use(express.static('uploadedphotoss'));
app.use(express.static('mywebsite')); 
app.use('/AboutPageDocs',express.static('mywebsite')); 
app.use('/AboutPageDocs',express.static('views')); 
app.set( "ipaddr", "127.0.0.1" );
app.set( "port", 587 );
app.set( "port", 8443 );
app.use('/user/:name', express.static('views'));
app.use('/manager/:name', express.static('views'));
app.use('/manager/:name/', express.static('uploadedphotoss'));
app.use('/manager/:name/', express.static('serverdocumentss'));

app.use('/user/:name/', express.static(path.join(__dirname, 'uploadedphotoss')));
app.use('/user/:name/', express.static(path.join(__dirname, 'serverdocumentss')));
const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
app.use('aboutpage.html', express.static('views'));

app.use(cors({
  origin:"https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.4/socket.io.min.js"
}));


const jwt = require('jsonwebtoken');


mongoose.Promise = global.Promise; // Manually set Mongoose to use native promises


mongoose.connect("mongodb://127.0.0.1:27017/VirtualBio", {useNewUrlParser : true, useUnifiedTopology: true, connectTimeoutMS: 30000,socketTimeoutMS: 45000, serverSelectionTimeoutMS: 30000 });

app.use(express.static('views'));
const schemacredentials = new mongoose.Schema({
  username: String,
  name: String,
  surname:String,
  email:String,
  day:Number,
  month:Number,
  year:Number, 
  images: Buffer,
  gender: String,
  password:String,
  token: String,
  enquiryy: [String],
  imagepathfromdb: [String],
  enquiryimagepathfromdb:[String],
  enquirydocumentpathfromdb:[String],
  enquiryisreaded: {type: Boolean, default:false},
  enquiryisnotreaded:{type:Boolean, default:true},
  hasgotenquiry:{type:Boolean, default:false},
  replyfromdoctor: [String],
  chatofdoctorandclient:[String],
  itsanadminaccount: {type:Boolean,default: false },
  willrefund:{type:Boolean,default:false},
  messagecountofuser: Number,
  })
const Credentialssa = mongoose.model("Key",schemacredentials);
const schemamainpagequestions = new mongoose.Schema({
  itsname: String,
  itsemail:String,
  itsquestion:String
})
const Credentialssa2 = mongoose.model("Question",schemamainpagequestions );

const fs = require('fs');
const privateKey = fs.readFileSync('', 'utf8'); // Load the private key
const certificate = fs.readFileSync('', 'utf8');
const ceert = fs.readFileSync('', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);


const privateKey2 = fs.readFileSync('', 'utf8');
const certificate2 = fs.readFileSync('', 'utf8');


const agent2 = new https.Agent({
  ca:certificate,
  rejectUnauthorized: true
});
const agent = new https.Agent({  
  ca: certificate
});



const wss = new WebSocket.Server({ server: httpsServer });



app.get('/', (request, respond) => {
  // Serve your HTML form here
  respond.sendFile(__dirname +'/views'+ '/newformat.html');
  


});



app.post('/takeiteasy',async (req, res) => {
  const username = req.body.usernameonregister;
  const name = req.body.nameonregister;
  const surname = req.body.surnameonregister;
  const day = req.body.day;
  const month = req.body.month;
  const year = req.body.year;
  const gender = req.body.gender; 
  const email = req.body.emailonregister;
  const password = req.body.passworodnregister;
  const confirmPassword = req.body.passwordagainonregister;
 

    const hashedPassword = await bcrypt.hash(password, 10); 
    console.log(hashedPassword);
  
 

    let product = await Credentialssa.findOne({ username: { $regex: new RegExp("^" + username + "$", "i") } });
    let product2 = await Credentialssa.findOne({ email: { $regex: new RegExp("^" + email + "$", "i") } });
    //let product3 = await Credentialssa.findOne({ password: { $regex: new RegExp("^" + req.body.passworodnregister + "$", "i") } });

    if(product || product2){
      res.redirect('/emailexist.html');
    }
    else{

          var saveit = await new Credentialssa({ username:username , name: name, surname: surname, day:day,  month: month,year :year,gender: gender, email : email,password : hashedPassword});
           
          await saveit.save()  .then(user => console.log("User saved successfully:", hashedPassword))
          .catch(error => console.error("Error saving user:", error));;
          const payloada = {
         
            username: username,
            uniqueIdentifier: Date.now()
          };
          res.cookie('userLoggedData', JSON.stringify(payloada), { maxAge: 900000, httpOnly: false });
          res.redirect('/user/' + req.body.nameonregister);
        
    };
   
});

const NodeRSA = require('node-rsa');
/*
function generateKeyPair() {
  const key = new NodeRSA({ b: 2048 }); // Adjust key size as needed

  // Generate key pair
  key.generateKeyPair();

  // Export keys
  const publicKey = key.exportKey('pkcs1');
  const privateKey = key.exportKey('pkcs1');

  return { publicKey, privateKey };
}

// Generate key pair
const keys = generateKeyPair();

// Save public and private keys to files
fs.writeFileSync('publicKey_zz.pem', keys.publicKey, 'utf-8');
fs.writeFileSync('privateKey_zz.pem', keys.privateKey, 'utf-8');

console.log('Public and private keys generated and saved.');

*/


/*
const key = new NodeRSA({b: 512});

key.generateKeyPair();
const zz = key.exportKey('pkcs1');
key.importKey(zz, 'pkcs1');*/
//const publicDer = key.exportKey('pkcs8-public');
//const privateDer = key.exportKey('pkcs1');
//console.log(publicDer);
//console.log(privateDer);
//fs.writeFileSync('publicKey_itsme.pem', publicDer, 'utf-8');

//fs.writeFileSync('privateKey_itsme.pem', privateDer, 'utf-8');



app.get('/user/:name', async (req, res) => {
  const namee = req.params.name;
  //console.log(name);
  const getcookieforseekreply = req.cookies.userLoggedData;
  const gotthecookie = JSON.parse(getcookieforseekreply);
  const putonthedb = gotthecookie.username;
  //console.log('www',putonthedb);

    const forpullreplyfromdb = await Credentialssa.findOne({username:putonthedb});
    if(forpullreplyfromdb){
   const pulledreplyfromdb = forpullreplyfromdb.replyfromdoctor;
   const pullednamefromdb = forpullreplyfromdb.name;
    const putimgsrchere = forpullreplyfromdb.imagepathfromdb;
  
    const usernnn = forpullreplyfromdb.username;
  console.log(putimgsrchere);
    
  res.render('userpageloggedejs.ejs', { name: namee, indname: pullednamefromdb, answerhere: pulledreplyfromdb,imgsourceloadedforprofile:putimgsrchere,usernamep : usernnn });
    }
});



app.post('/user/:name/editingprofileroute',async(req,res) =>{ 

  const editname = req.body.nameinput;
  const editsurname = req.body.surnameinput;
  const editemail = req.params.emailinput;

  const day = req.body.day2;
  const month = req.body.month2;
  const year = req.body.year2;
  const editpassword = req.body.passwordinput;
  const selectedGender = req.body.gender;
  const userLoggedDataParsed = req.cookies.userLoggedData;

  const parsedUsername = JSON.parse(userLoggedDataParsed);
  const namesearch = parsedUsername.username;
  const varoneditname =await Credentialssa.findOne({
    username: namesearch

})

  if(editname){
   
  varoneditname.name = editname;


}
 if(editsurname){
  varoneditname.surname = editsurname;
 }  
 if(editemail){
  varoneditname.email = editemail;
  
 }
 if(day){
  varoneditname.day = day;
 
 }
 if(month){
  varoneditname.month = month;
 }
 if(year){
  varoneditname.year = year;
 }
if(editpassword){
  varoneditname.password = editpassword;

 }
if(selectedGender){
  varoneditname.gender = selectedGender; 

 }
 await varoneditname.save();
});
//const fs = require('fs');
//const fs = require('fs');

let filetypeofpassedimg = "";
async function getImageType(fileeePath) {
  try {
    const readFile = util.promisify(fs.readFile);
    const buffer = await readFile(fileeePath);

   
    const fileSignature = buffer.toString('hex', 0, 8);

 
    if (fileSignature.startsWith('ffd8ffe0') || fileSignature.startsWith('ffd8ffe1')) {
      console.log('File type: JPEG');
      filetypeofpassedimg = true;
    }
    
    else if (fileSignature.startsWith('89504e470d0a1a0a')) {
      console.log('File type: PNG');
      filetypeofpassedimg = true;
    }
    // Check for GIF file
    else if (fileSignature.startsWith('47494638')) {
      console.log('File type: GIF');
      filetypeofpassedimg = true;
    }
    else {
      console.log('Unknown image file type');
      filetypeofpassedimg = false;
    }
    
    // You can add more checks for other image formats as needed

  } catch (error) {
    console.error('Error reading file:', error);
  }
  
}


console.log(filetypeofpassedimg);

/*
 if(!logproduct){
  console.log('SENDING ALERT');
 


  wss.on('connection', ws => {
    console.log('Client connected');
  
    ws.send(JSON.stringify({ type: 'alert', message: 'No user found!' }));

    
    
  });
}

*/



function sendmyalert() {
  console.log('SENDING ALERT');
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'alert', message: 'No user found!' }));
      }
  });
}



function sendmyalert2() {
  
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'alertpass', message: 'Wrong password!' }));
      }
  });
}
/*
function sendmyalert() {
  console.log('SENDING ALERT');
 
  wss.on('connection', ws => {
    console.log('Client connected');
  
  ws.send(JSON.stringify({ type: 'alert', message: 'No user found!' }));
  return 0;
})}*/

  app.post('/take', (req, res) => {
    const enternamesub = req.body.enternamelog;
    const enterpasswordsub = req.body.enterpasswordlog;

 
    async function authenticate() {
      try {
        let logproduct = await Credentialssa.findOne({
          username: { $regex: new RegExp("^" + enternamesub + "$", "i") },
        });
        if(logproduct){

       if(logproduct.itsanadminaccount===true){
          console.log('admin account is true');
          const adminsstoredPlainPassword = logproduct.password;
          const passwordMatch23 = await bcrypt.compare(enterpasswordsub,adminsstoredPlainPassword);
          const payloada = {
         
            username: enternamesub,
            uniqueIdentifier: Date.now()
          };
          res.cookie('userLoggedData', JSON.stringify(payloada), { maxAge: 900000, httpOnly: false });       
          if ( passwordMatch23) {           
            res.redirect('/manager/' + enternamesub +'?'+'success=true');           
        }
        else{
          console.log('Admin authentication is failed');
          sendmyalert2();
          res.status(200);  
        }
      }
    
        
       

        //__________________
       else if (logproduct.itsanadminaccount===false) {
          console.log('HERE YOU ARE');
          
          const storedPlainPassword = logproduct.password;
  const passwordMatch = await bcrypt.compare(enterpasswordsub,storedPlainPassword);
          const payloada = {
         
            username: enternamesub,
            uniqueIdentifier: Date.now()
          };
          res.cookie('userLoggedData', JSON.stringify(payloada), { maxAge: 900000, httpOnly: false });

          if (passwordMatch) {
 
        res.redirect('/user/' + enternamesub +'?'+'success=true');
 
            
            } else  {
            res.status(200);  

              sendmyalert2();
              
            console.log('Authentication failed');
           
          }
        } else {
       
          console.log('User not found');  
          res.status(200);      
        }
      } 
    
    else if(!logproduct){
       res.status(200);  
      sendmyalert();
      console.log('SENDING ALERT');
     

    
    }}catch (error) {
        console.error('Error during authentication:', error);
        res.status(200);  
      }
    }
   
    authenticate();

  });

app.get('/manager/:name',(req,res)=>{
  if(req.cookies.userLoggedData){
  const name = req.params.name;
  res.render('adminpageejs.ejs',{name:name});}
})




const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'serverdocumentss')); 
  },
  filename: (req, file, cb) => {
   
      cb(null,Date.now()+file.originalname);
  }
});
  
  const upload2 = multer({ storage: storage2 });
 

app.post('/user/:name/routeofenquiry',upload2.any(), async (req,res) =>{
 const usingcookie = req.cookies.userLoggedData;
 const usingcookie2 = JSON.parse(usingcookie);
 const usingcookie3 = usingcookie2.username; 
 
 const usingcookie4 = await Credentialssa.findOne(
  { username: { $regex: new RegExp("^" + usingcookie3 + "$", "i") }})
 const texttodb = req.body.inquiry;
 if(texttodb){
  usingcookie4.enquiryy.push(texttodb);
  
 } 


 if(req.files && req.files[0]){
const takefilenameforenquiry = req.files[0].path;
await getImageType(takefilenameforenquiry);
console.log('GotImageConsole', filetypeofpassedimg);
const takefilenameforenquiry2 = req.files[0];
const takenfilenameforenquiry3 = takefilenameforenquiry2.filename;

  usingcookie4.enquiryimagepathfromdb = takenfilenameforenquiry3;
}else{
  console.log('Please choose an image of .png or .jpeg/.jpg in ord');
}
usingcookie4.hasgotenquiry = true;
if(usingcookie4.enquiryisnotreaded === false){
  usingcookie4.enquiryisnotreaded = true;
}

await usingcookie4.save();

sendAnotherQueryAlert();
console.log('You are under the sendAnotherQuerySent func');
})



function sendAnotherQueryAlert(){
wss.clients.forEach(client => {
  if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({type: 'querysent', message: 'z'}));

  }
});
}



app.post('/formofrecover', async (req,res) => {
  
  const emailforrecover = req.body.enterrecovermail;

 async function emailrec(){
    try{
    

      const foundedemail = await Credentialssa.findOne(
        
        
     
      { email: { $regex: new RegExp("^" + emailforrecover + "$", "i") }}
      )
      const foundedemail2 = foundedemail.email;
      if(foundedemail){

          const payload = {
         
            email: emailforrecover,
            uniqueIdentifier: Date.now()
          };
          res.cookie('storedData', JSON.stringify(payload), { maxAge: 900000, httpOnly: true });
          
          sendmyalert3();
          await mailing();
          res.redirect('/newformat.html');
        }
        else{
          console.log('email not exist, enter an existed email please ');
        }

        async function mailing(){
          const transporter = nodemailer.createTransport({
            host:'smtp-relay.brevo.com',
            port:587,
            secure:false,
            tls: {
              minVersion: 'TLSv1.2',
            },
            auth:{
              user:'ege_gurel35@hotmail.com',
              pass:'' 
            }
          })
          const info = await transporter.sendMail({
            from:'ege_gurel35@hotmail.com',
            to:`${foundedemail2}`,
            subject:'Password Recovery Link',
            text: "Hello world?",
            html: '<a href="https://virtualbiochemistry.com/recoverpageofpass.html">Click here to reset your email</a>',
          })
          
          console.log("Message sent: %s", info.messageId);
        }
       
      }
      

  
  catch(error){
      console.error('Error on finding email');
    }

}
await emailrec();
});



function sendmyalert3() {
  console.log('SENDING ALERT');
  // Iterate over all connected clients and send the alert message.
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'emailfound', message: 'Your recovery e-mail has been sent! Please check your e-mail box.' }));
      }
  });
}


app.post('/ontherecoveringpass' ,async (req,res)=>{
  
  const storedData = req.cookies.storedData;
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const email = parsedData.email; 
    const updatingpass = await Credentialssa.findOne(
      { email: { $regex: new RegExp("^" + email + "$", "i") }})
    
if (updatingpass) {
  const newPassword = req.body.recoveringmypass2;
  const hashedPassword2 = await bcrypt.hash(newPassword, 10);
  updatingpass.password = hashedPassword2;
  await updatingpass.save();
  res.status(200);
  sendmyalert4();
  res.redirect('/newformat.html');
  
  
}}


})

function sendmyalert4() {
  console.log('SENDING ALERT');
  // Iterate over all connected clients and send the alert message.
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'passwordupdatedx', message: 'Your password updated successfully!' }));
      }
  });
}

app.get('/fetchedAllNotReadedUsers/getTheirInfos', async(req,res)=>{
  //const Credentialssa = mongoose.model("Key", schemacredentials);
  const usersss = await Credentialssa.find({hasgotenquiry:true});
 
  res.json(usersss);
 
  
})

app.get('/tw/parsetherefundeds', async(req,res)=>{
  const usersss2 = await Credentialssa.find({willrefund:true});
 
  res.json(usersss2);
})

app.get("/fetchedAllUsersPath/getUsers", async (req,res)=>{
  const Credentialssa = mongoose.model("Key", schemacredentials);
  const users = await Credentialssa.find({}); 

  res.json(users);
})

app.get("/fetchusersforchat/gimmeUsers", async (req,res)=>{
  const Credentialssa = mongoose.model("Key", schemacredentials);
  const usersjsonenquiry = await Credentialssa.find({hasgotenquiry:true});
  res.json(usersjsonenquiry);
})

app.post("/apiapiapi/sendDataForReply",async (req,res) => 
{
  const requestData = req.body;
  var beforewritingtoreplyfromdoc = "";
  beforewritingtoreplyfromdoc = requestData.takenvaluefromdoctodb;
  const zz = await Credentialssa.findOne({ username: { $regex: new RegExp("^" + requestData.data + "$", "i") }});  
  zz.replyfromdoctor = beforewritingtoreplyfromdoc;
  await zz.save();
  console.log('this is zzzz');
})

app.post("/qwq/routeofrefunded", async(req,res)=>{
  const requestDataData = req.body;
  const dddbqry = await Credentialssa.findOne({username: requestDataData.useruser2});
  dddbqry.willrefund = requestDataData.boolofrefund2;
  dddbqry.enquiryisnotreaded = requestDataData.clicktruereverse; 
  await dddbqry.save();

}
)



app.post("/myfetchapiforchat/bringthechat", async(req,res)=>{
  const reqDataData = req.body;
  let recordname = "";
  recordname = reqDataData.nameofuseronchat;
  
  const pushthemessage1 = reqDataData.messagecontentofchat;
  console.log(recordname);

  try{
    const databaseqqq = await Credentialssa.findOne({username:reqDataData.nameofuseronchat});
    if(recordname){
    funcofchathistory(recordname);
  }

  if(databaseqqq){
    databaseqqq.chatofdoctorandclient.push('D::::'+pushthemessage1);
    await databaseqqq.save();
    return res.status(200).json({});
  }
  else{
    console.log('issue');
  }}  catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
}

})

let usernameforchathistory = "";
function funcofchathistory(nameqp){
  usernameforchathistory = nameqp;
  console.log('this is func of chat ', usernameforchathistory);


}
console.log(usernameforchathistory);
  


app.post('/fetchfordisplay/fetchfordisplay2', async(req,res)=>{
    const usname2 = req.body; 
  
    const deducta = usname2.nametakentakentaken2;
    console.log('deductadeductadeductadeducta',deducta);
    const deducta2 = await Credentialssa.findOne({username:deducta});
    deducta2.messagecountofuser = 0;
    await deducta2.save();  
    const deducta3 =  deducta2.chatofdoctorandclient;

    functionbeforedisplay(deducta3);
    res.status(200).json(deducta3);
})

  let deducta40 = "";
  function functionbeforedisplay(deducta3){

    deducta40  = deducta3;
    axios.get('https://127.0.0.1:81/herethechat/hereherechat', {httpsAgent: agent2}).then(function (response) {
      // handle success
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });


}

app.get('/herethechat/hereherechat', async(req,res)=>{
  res.status(200).json(deducta40);
}
)


let chatliftedaccordingly2 = "";

  app.post('/fornamelayoutchat/secondpartofroute', async (req,res) => {
    const usernameofchat = req.body; 
    console.log('Console foR Inspect',usernameofchat.myvalueqqq2);
    const deductchatfromdb = await Credentialssa.findOne({username:usernameofchat.myvalueqqq2});
    const chatliftedaccordingly = deductchatfromdb.chatofdoctorandclient;
    const deductchatfromdbun = deductchatfromdb.username;
    chatliftedaccordingly2 = chatliftedaccordingly;
    console.log('deduct from chat ', deductchatfromdbun);
    if(deductchatfromdb){
    initiatelayout(deductchatfromdbun);
    parsethechat(chatliftedaccordingly);
    return res.status(200).json({});
  }

  
 
  })

let usname = "";
let chthistory2 = "";
function parsethechat(chthistory){
  chthistory2 = chthistory;

}



class EventEmitter2 extends EventEmitter {}
const eventEmitter2 = new EventEmitter2();


let trueorfalsevar = "false";


let usersnameformessages = "";
function initiatelayout(usernameforch){
  usersnameformessages = usernameforch;
    if(usersnameformessages){
          

      trueorfalsevar = true;
 
     eventEmitter2.emit('trigger-it');

      
    }

    

    console.log('usersnameformessages is works', usersnameformessages);

   }




   
eventEmitter2.on('trigger-it', () => {
  axios.get('https://127.0.0.1:81/layoutchat/layitchatout', {httpsAgent: agent2}).then(function (response) {
    // handle success
    console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  console.log('axios is worked_________');
   });
   

   







app.get("/layoutchat/layitchatout", async(req,res) => {

  console.log('layout chat api is works');

  if(trueorfalsevar===true){
   
console.log('right under initiatelayout function',usersnameformessages);
const takeforusage = await Credentialssa.findOne({username:usersnameformessages});
console.log('this is under takeforusage variable' , takeforusage);

  console.log('Yes take for usage');
     const usersmessages = takeforusage.chatofdoctorandclient;

      console.log(usersmessages);
      res.json(usersmessages);
  
     } else{
      console.log('JUST ELSE');
     }
 // res.status(500).send('testing');
    })
    
    

app.post("/myfetchapiforchat2/bringthechatofuser", async(req,res)=>{
  const reqreqreqData = req.body; 

    const basedatabase = await Credentialssa.findOne({username:reqreqreqData.nameofuseronchat2});
    const pushthemessage2 = reqreqreqData.messagecontentofchat2;
    console.log('wwwwww', pushthemessage2);
    const councount = reqreqreqData.councount2;
    basedatabase.chatofdoctorandclient.push('U::::'+pushthemessage2);
    if (typeof basedatabase.messagecountofuser !== 'number') {
      basedatabase.messagecountofuser = 0;
  }
  
  basedatabase.messagecountofuser += 1;

    console.log(typeof councount);
    await basedatabase.save()

  res.status(200).json({});
})


app.post("/routeofaskedquestionsonmainpage",async (req,res)=>{
  try{
  const xzxz = new  Credentialssa2({itsname:req.body.mainpagequestionname, itsemail:req.body.askingquestionsidemail, itsquestion:req.body.askingquestionsidquestion});
 
 await xzxz.save();
 wss.clients.forEach(client => {
  if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'questionroute' , message:'Your question request has been sent!'}));
  }
});
res.redirect('/');
}
  catch(error)  {console.error(error)};
})

app.get('/user/:name/routeofchatchat', async(req,res)=>{
 
  const minecookie = req.cookies.userLoggedData;
  const minecookie2 = JSON.parse(minecookie);
  const minecookie3 = minecookie2.username;
  const minecookie4 = await Credentialssa.findOne({username:minecookie3});
  const minecookie5 = minecookie4.chatofdoctorandclient;
  res.json(minecookie5);

})


app.post("/lll/routeofreaded", async (req,res)=>
{


  const requestData2 = req.body;
  const dbqry = await Credentialssa.findOne({username:requestData2.useruser});
  dbqry.enquiryisnotreaded = requestData2.boolofnotreaded;
  dbqry.enquiryisreaded = true;
  await dbqry.save();

  sendreadeddocsfunc(dbqry);
  //res.status(200).json({ result });
})

let wqwqwq = ""; 
function sendreadeddocsfunc(ttt){
  const queryoverit = ttt;
  const useruserusername = queryoverit.username;  
  wqwqwq = useruserusername;
}
  

app.get("/ppp/routeforforreaded", async(req,res)=>{
  const wwuser = await Credentialssa.find({enquiryisreaded:true});
  res.json(wwuser);
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'uploadedphotoss')); 
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
   // const filenameonmulter = file.originalname + Date.now()+ '-' +fileExtension
      cb(null,file.originalname + Date.now()+ '-' + fileExtension);
  }
});

const upload = multer({ storage: storage });
app.post('/user/:name/uploadingphotoroute', upload.any(), async (req, res) => {
  if (req.files) {
    const usingcookie = req.cookies.userLoggedData;
    const usingcookie2 = JSON.parse(usingcookie);
    const usingcookie3 = usingcookie2.username;

    const usingcookie4 = await Credentialssa.findOne({
      username: { $regex: new RegExp("^" + usingcookie3 + "$", "i") }
    });
  //  const uploadedFileName = req.files[0].originalname;

  const uploadedFile = req.files[0];
  //  usingcookie4.imagepathfromdb = uploadedFileName;

         
    //const uploadedFile = req.files[0].originalname;
    const filenameonmulter = uploadedFile.filename;
    usingcookie4.imagepathfromdb = filenameonmulter;
    await usingcookie4.save();

    res.send('File(s) uploaded successfully');

  } else {
      res.status(400).send('No file uploaded');
  }
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading
    console.log(err);
    res.status(500).send('Multer error occurred');
  } else {
    next(err);
  }
});




const io2 = io(httpsServer,{ path: '/socket.io' ,  cors: {
  origin: "https://127.0.0.1",
  methods: ["GET", "POST"]
}});



let usernameforsearch = "";
let mymsg = "";
io2.on('connection', (socket) => {
  console.log('A user connected');
 

  socket.on('chat-message', (data) => {
    console.log('Message received:', data);
    socket.emit('chat-message', data);
    mymsg = data;
    socket.emit('chat-message3', mymsg);

    console.log('mymsg',mymsg);
    mymsg = "";
   
    console.log('BOTH is Working'); 
  });
  socket.on('chat-message7', (message)=>{
      socket.emit('chat-message7', message);
    });

    socket.on('chat-message98', (message)=>{
      socket.broadcast.emit('chat-message17', message);
    });
  socket.on('chat-message99', (message)=>{
    socket.broadcast.emit('chat-message96', message);
  })

  socket.on('searchingusername', (z)=>{
      console.log(z);
    usernameforsearch = z;
   console.log('AR');
    sendmyalert6();
    console.log('you are in searchingusername');
  })


  socket.on('disconnect', () => {
    console.log('User disconnected');
  });


})


function sendmyalert7() {
  console.log('SENDING ALERT');

  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'openthediv'}));
      }
  });
}

io2.on('chat-message2', (socket3)=>{
  socket3.emit('chat-message2', message);
  console.log('This is chat-message2 consolelog');
});

let usernameforsearch2 = "";

app.get('/usernameseek', async(req,res)=>{
  let usernameforsearch3 = "";
  usernameforsearch3 = usernameforsearch2;
  res.json(usernameforsearch3);
})
async function sendmyalert6(){
  usernameforsearch2 = await Credentialssa.findOne({username:usernameforsearch});
  console.log(usernameforsearch2);
  if(usernameforsearch2){
    sendmyalert7();

  }
};


httpsServer.listen(81, '0.0.0.0' , () => {
  console.log('HTTPS server is running on port 81');
});
