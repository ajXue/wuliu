let express = require("express");

let request = require("request");
let app = express();

app.all('/query', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let selectName = req.query.selectName;
    let appId = req.query.appId;
    request('http://www.kuaidi100.com/query?type='+selectName+'&postid='+appId+'', function (error, response, body) {
       res.send(body);
    })
});

app.listen('8000',function () {
    console.log('runing!!!')
})