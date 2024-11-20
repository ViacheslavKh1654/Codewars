/* Complete the function that accepts a string parameter,
 and reverses each word in the string. All spaces in the string should be retained. 
 */
 function reverseWords(str) {
    let result = ""
    let word = ""
    
    for(let i = 0; i < str.length; i++){
      const char = str[i];
      if(char !== " "){
        word += char;
      } else {
        result += word.split('').reverse('').join('') + ' ';
        word = "";
      }
    }
    result += word.split('').reverse().join('');
      return result
    }



