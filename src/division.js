module.exports = {
    divide: function(a,b){
        return new Promise(function(resolve,reject){
            try {
                const result = (a / b);
                resolve(result);
            } catch (error) {
                reject(new Error('Enter the integer'))
            }
        })
    }
}