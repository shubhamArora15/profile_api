let user = require(process.env.PWD + '/models/user');
let resObj = require(process.env.PWD + '/librarires/response');

let deleteUser = async (req, res, next) =>{
    try{
        let userOb = await user.remove({"_id":req.params.id});
        if(userOb) return res.send(resObj(200, "User Deleted Successfully", userOb));
    }
    catch(e) {
        return resObj(404, "Something wrong", e);
    }
}

module.exports.deleteUser = deleteUser;