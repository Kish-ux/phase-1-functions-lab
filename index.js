function receivesAFunction(callback) {
    callback();
}

function returnNameFunction() {
    return function nameFunction() {

    }
}

function returnsAnAnonymousFunction(){
    return function namedFunction () {
        
    }
}