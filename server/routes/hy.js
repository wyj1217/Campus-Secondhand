var express = require('express');
var router = express.Router();
let multiparty=require('multiparty');

router.get('/', function(req, res, next) {
    res.send()
})


router.post('/upload', (req,res)=>{
    let form = new multiparty.Form();
    form.uploadDir = 'upload';
    form.parse(req, function(err, fields, files) {
        console.log(files);
        res.send({path:files.avatar[0].path})
    });
})

module.exports = router;
