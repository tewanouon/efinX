
//recursive decode strings
function decodeString(str){

	let regex = /(\d+)\[([a-z]*)\]/gi;

	let result = str.replace(regex, (match, num, substr) => substr.repeat(num));

	let recall = regex.test(result);
	
        if(recall){
		
           return decodeString(result);

        }
	
        return result;

 }



//console.log( decodeString("2[3[a]b]") );