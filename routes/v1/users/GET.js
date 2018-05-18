let user = require(process.env.PWD + '/models/user');
let resObj = require(process.env.PWD + '/librarires/response');
let getUser = function (req, res, next) {
    try{
        if(req.params.id)
        {
            user.findOne({"_id":req.params.id}, function(err, data){
                if(data){
                    return  res.send(resObj(200, "User Already Exists", data));
                }
                if(err) {
                    next(err);
                }
            })
        }
        else{
            user.find(function(err, data){
                if(data){
                    return res.send(resObj(200, "User Already Exists", data));
                }
                if(err) {
                    next(err);
                }
            })
        }
    }
    catch(e) {
        next(e);
    }
}
module.exports.getUser = getUser;