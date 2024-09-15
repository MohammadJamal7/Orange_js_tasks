console.log("Hello".concat(" World"));
 
 
 console.log("JavaScript".length);
 
 console.log("Programming".charAt(0));
 
 console.log("coding is fun".substr(0,3));
 
 console.log("cat".replaceAll('a','e'));
 
 
 console.log("javascript".toUpperCase());
 
 console.log("apple,banana,orange".split(','));
 
 console.log(["hello", "world"].join(' '));
 
 console.log(" hello world ".trim());
 
 console.log("hello world".includes("hello"));


console.log("hello".split('').reverse().join(""));



//Countring number of  a latter in string
function latterCounter(latter,str) {
    let counter =0;
 for(let i=0;i<str.length/2;i++){
     if(str[i] ==latter)counter++;
     
 }
 console.log('The number of 2 :'+counter);
}
 


//Finding polindrome 
console.log(isPalindrome('saas'));
function isPalindrome(str){
    
    let p2 = str.length -1 ;
for (let i=0; i<p2; i++){
    if (str[i] === str[p2]){
        p2--;
    }
    else{
        return false;
    }
     
}
return true;
}


//Convert first latter of each word to UpperCase

function upperConverter(str) {
    let arr = str.split(' ');
    console.log(arr);
    arr = arr.map(element => {
      return element[0].toUpperCase() + element.slice(1);
    });
 
    return arr.join(' ');
 }
 
 console.log(upperConverter('hello to the best world ever'));
 


 //Number Formatting
 function numberExtracter(str) {
    let numArray = [];
    let arrCounter = 0;

    for (let index = 0; index < str.length; index++) {
        if (!isNaN(str[index]) && str[index] !== ' ') { // Check if it's a number and not a space
            numArray[arrCounter] = str[index];
            arrCounter++;
        }
    }

    console.log(numArray);
}

numberExtracter('this is a tes with some 4 numbers 2');


//Validating email
function validatingEmail(email) {
    if (!email.includes('@') || !email.includes(' ') ) {
        return true;
    }
    return false;
}
console.log(validatingEmail('mj266501@gmail.com'));


//Replaceing word with other word in all its places
function replacingWords(str,originalWord,replacedWord) {
   
    return str.replaceAll(originalWord,replacedWord);

}
console.log(replacingWords('bad word','bad','good'));


//Removing duplicated latters in a string
function removeDuplicates(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    return result;
}

console.log(removeDuplicates('aabbc'));


//Sorting character
function sortChar(_char) {
    let arr = _char.split('');
      arr.sort();
      return arr.join('');
  }
  console.log(sortChar('helllo'));


  //Checking for anagrams
  function areAnagrams(str1, str2) {
   
    if (str1.length !== str2.length) {
        return false;
    }

    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams('listen', 'silent')); 



//Find the largest word in string
function largestString(str) {
    let arr = str.split(' ');
    let maxLength = arr[0]; // Assume the first word is the longest initially
    
    for (let index = 1; index < arr.length; index++) {
        if (arr[index].length > maxLength.length) { // Compare lengths
            maxLength = arr[index]; // Update maxLength if current word is longer
        }
    }
    return maxLength; // Return the longest word
}

console.log(largestString("ali ahmad samir shady")); 


//Check polindrome

function isPolindrome2(str) {
    let strr = str.toLowerCase().replace(' ','').replace(',','');
    console.log(strr);
    let reversed = strr.split('').reverse().join('');
        console.log(reversed);
    if (strr ===reversed) {
        console.log('Is polindrome');
    }
    else console.log("Isn't polindrome");
}
isPolindrome2(',,sasas,');



//


//Voiwels replacing
function vowelsReplacer(str) {
    let arr = str.split(''); // Convert the string to an array of characters
    
    for (let index = 0; index < arr.length; index++) {
        switch (arr[index]) {
            case 'a': arr[index] = '1';
                break;
            case 'e': arr[index] = '2';
                break;
            case 'i': arr[index] = '3';
                break;
            case 'o': arr[index] = '4';
                break;
            case 'u': arr[index] = '5';
                break;
        }
    }

    str = arr.join(''); 
    console.log(str); 
}

vowelsReplacer('ali ahmad us');


