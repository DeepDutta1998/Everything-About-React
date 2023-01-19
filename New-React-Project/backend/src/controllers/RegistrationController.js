const fs = require('fs');

module.exports = function RegistrationController(req, res) {
    const name = req.body.name;
    const date = req.body.date;
    const email = req.body.email;
    const pwd = req.body.pwd;

    const user = {email, pwd, name, date};


    fs.writeFileSync('./database/db.json', JSON.stringify(user));

    res.send('User registered');

}