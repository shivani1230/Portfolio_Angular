const mysql = require('mysql2');
const express = require('express');
var app = express();

const cors = require('cors');
const bodyparser = require('body-parser');
var jsonParser = bodyparser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyparser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoded' })

app.use(jsonParser);
app.use(urlencodedParser);
app.use(cors());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'portfolio',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is running at port no : 3000'));


app.post('/getForm',(req,res,next) => {
    let name = req.body.name;
    let contact = req.body.contact;
    let email = req.body.email;
    console.log(req.body);

    mysqlConnection.query('INSERT into form (name,contact,email) VALUES (?,?,?)',[name,contact,email],
    (error) => {
        if(error){
            console.log('In index',req.body);
            console.error(error);
            res.status(500).json({status:'error'});
        }
        else{
            res.status(200).json({status:'OK'});
        }
    });
});