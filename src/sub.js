module.exports = {
    subtract: function(a, b){

        return new Promise(function(resolve, reject){
            try {
                const result= parseInt(a-b);
                if(isNaN(result)){
                    return reject(new Error('Enter the integer'))
                }
                resolve(result)
            } catch (error) {
                reject(new Error('Enter the integer'))
            }
            
        }) 
   }
}