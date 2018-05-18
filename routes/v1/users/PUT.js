let user = require(process.env.PWD + '/models/user');
let resObj = require(process.env.PWD + '/librarires/response');

let updateUser = function (req, res, next) {
    try{
        user.findOneAndUpdate({"_id":req.params.id}, req.body.users, function(err, data){
            if(data){
                return  res.send(resObj(200, "User Updated Successfully", userOb));
            }
            
            next(err);
            
        });
    }
    catch(e) {
        next(e);
    }
}

module.exports.updateUser = updateUser;