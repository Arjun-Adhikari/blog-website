module.exports = function (fn) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}

//This is wrapAsync middleware used instead of tireding try catch long method.
//how can we know which is middleware and which is function both uses module.exports?
//=> We can distinguish between them as ,middleware consists "=" after exports but function consist name,word something after exports like (m.exports.fnc).
// symbolization of exported functions is {functionname}=require(paths);
// symbolization of exported middleware is middleware-name=require(paths);