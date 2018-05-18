let router = require('express').Router( {mergeParams: true} );

let POST    = require('./POST');
let PUT     = require('./PUT');
let GET     = require('./GET');
let DELETE  = require('./DELETE');

router

    .post('/', POST.createUser)
    .get('/', GET.getUser)
    .get('/:id', GET.getUser)
    .put('/:id', PUT.updateUser)
    .delete('/:id', DELETE.deleteUser)


module.exports = router;