
const _ = require('lodash')
const Clients = require('./clients')

Clients.methods(['get', 'post', 'put', 'delete'])
Clients.updateOptions({new: true, runValidators: true})

Clients.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

Clients.route('count', function(req, res, next) {
    Clients.count(function(err, value) {
        if (err) {
            res.status(500).json({errors: [err]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Clients