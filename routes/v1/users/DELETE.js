let user = require(process.env.PWD + '/models/user');
let resObj = require(process.env.PWD + '/librarires/response');

let deleteUser = async (req, res, next) =>{
    try{
        user.remove({"_id":req.params.id}, function(err, data){
            if(data) {
                return res.send(resObj(200, "User Deleted Successfully", data));
            }
            else{
                next(err);
            }
        });
    }
    catch(e) {
        next(e);
    }
}

module.exports.deleteUser = deleteUser;