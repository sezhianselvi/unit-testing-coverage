module.exports = {
    multiply: function(a,b){
        return new Promise(function(resolve,reject){
            if(isNaN(a) || isNaN(b))
            reject(new Error('Enter only Numbers'));
            else{
                const result = a*b;
                resolve(result);
            } 


            // try {
            //     const result = parseInt(a * b);
            //     resolve(result);
            // } catch (error) {
            //     reject(new Error('Enter the integer'))
            // }
        })
    }

}