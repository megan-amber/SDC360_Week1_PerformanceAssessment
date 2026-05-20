const { name } = require("ejs");

exports.render = 
    function(req, res) {
        if (req.session.lastVisit) {
            console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        var username = "Megan Gerth";
        var definitions = [
            { name: 'MongoDB', description: 'A document database that stores data in a type of JSON format called BSON. A record or document in MongoDB is composed of key value pairs.' },
            { name: 'Express.js', description: 'The most popular Node.js Web Application Framework, often called the de facto standard server framework for Node.js.' },
            { name: 'Angular', description: 'The Front-End JavaScript Framework responsible for building dynamic web applications in HTML.' },
            { name: 'Node.js', description: 'A free, open source JavaScript Runtime Environment that allows you to run JavaScript outside the web browser.' }
        ];
        res.render('index', { title: 'The MEAN Stack', name: 'My Name: ' + username, definitions: definitions });

    };
