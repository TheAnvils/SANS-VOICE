const sans = async function(string, callback) {const str = ' ' + string;for(let i = 0; i < str.length; i++) {process.stdout.write(str[i]);await new Promise(resolve => setTimeout(resolve, 100));}console.log("");if(callback){callback();}else{throw new TypeError('Expected callback, recived undefined')}};
module.exports = function() {console.sans = sans;};
