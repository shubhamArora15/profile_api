let user = require(process.env.PWD + '/models/user');
let resObj = require(process.env.PWD + '/librarires/response');

let updateUser = async (req, res, next) =>{
    try{
        let userOb;

        userOb = await user.findOneAndUpdate({"_id":req.params.id}, req.body.users);
        if(userOb) return res.send(resObj(200, "User updated!", userOb));

    }
    catch(e) {
        next(e);
    }
}

module.exports.updateUser = updateUser;