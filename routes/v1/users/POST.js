let user = require(process.env.PWD + '/models/user');
let resObj = require(process.env.PWD + '/librarires/response');

let createUser = function (req, res, next) {
    try{
        let userOb;
        
        user.findOne({"mobile":req.body.users.mobile*1}, function(err, data){
                
                if(data){
                    return res.send(resObj(201, "User Already Exists", userOb));
                }
                if(err) {
                    next(err);
                }

                user.create(req.body.users, function(err, data){
                    res.send(resObj(200, "User Created Successfully", userOb))
                });

        });
    }
    catch(e) {
        next(e);
    }
}

module.exports.createUser = createUser;