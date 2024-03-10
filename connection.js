const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Luckey@1234',
    database: 'clientdata'
})

db.connect(function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log("connected");
    }
})

// yourdata
app.post('/home', function (req, res) {
    const data = req.body;
    console.log(data);
    let firstname = data.firstname;
    let lastname = data.lastname;
    let email = data.email;
    let mobile = data.mobile;
    let text = data.text;
    if (firstname == '' || lastname == '' || email == '' || mobile == '' || text == '') {
        console.log('something wrong!')
    }
    else {
        db.query(`insert into yourdata values('${firstname}','${lastname}', '${email}', '${mobile}', '${text}');`, function (err, result, field) {
            if (err) {
                res.json({message: 'Please insert all information!'})
                
            }
            else {
                res.json({message: 'Submitted successfully'})
            }
        })
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});