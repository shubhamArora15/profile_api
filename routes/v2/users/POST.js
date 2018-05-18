let user = require(process.env.PWD + '/models/user');
let resObj = require(process.env.PWD + '/librarires/response');

let createUser = async (req, res, next) => {
    try{
        let userOb;
        
        userOb = await user.findOne({"mobile":req.body.users.mobile*1});
        if(userOb) return res.send(resObj(201, "User Already Exists", userOb));

        userOb = await user.create(req.body.users);
        if(userOb) return res.send(resObj(200, "User Created Successfully", userOb));
    }
    catch(e) {
        next(e);
    }
}

module.exports.createUser = createUser;