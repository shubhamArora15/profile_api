let router = require('express').Router( {mergeParams: true} );

router.use('/users', require('./users'))

module.exports = router;