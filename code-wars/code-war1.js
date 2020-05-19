let result = "";

function change(string){
 let alfabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
 let condition = "";
 //converts all upperCase to LowerCase
 string = string.toLowerCase();

 for(let index = 0; index < alfabet.length; index += 1){
  condition = "";
  string += " ";

  for(let index2 = 0; index2 < string.length; index2 += 1){
     if(string[index2] === alfabet[index]){
       condition = "1";
     }else if(condition === "1"){
       condition = "1";
     }else{
       condition = "0";
     }
   }

   result += condition;

 }
 
 return result; // ..
}

change("");
console.log(result);