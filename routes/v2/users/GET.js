let user = require(process.env.PWD + '/models/user');
let resObj = require(process.env.PWD + '/librarires/response');
let getUser = async (req, res, next) => {
    try{
        let userOb;
        console.log(req.params);
        userOb = req.params.id?await user.findOne({"_id":req.params.id}):await user.find();
        if(userOb) return res.send(resObj(200, "Users", userOb));
    }
    catch(e) {
        next(e);
    }
}

module.exports.getUser = getUser;