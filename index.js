 document.getElementById('check').addEventListener('click', () => {
     document.getElementById('result').value = isStringIsomorphic(str1, str2);
 });
function isStringIsomorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j < str1.length; j++) {
            if (
                (str1[i] === str1[j] && str2[i] !== str2[j]) || (str1[i] !== str1[j] && str2[i] === str2[j])
            ) {
                return false;
            }
        }
    }
    return true;
}

str1 = "ABCA";
str2 = "XYZX";
console.log(isStringIsomorphic(str1,str2));



// document.getElementById('check').addEventListener('click', () => {
//     document.getElementById('result').value = initialaize();
// });


// function initialaize() {
//     var message = document.getElementById("Input").value;
//     var key = document.getElementById("Key").value;
//     var end_message = "";
//     var chipertext = "";
//     var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     var alphamap = new Map();
//     for (var i = 0; i < alphabet.length; i++) {
//         alphamap.set(alphabet[i], i);
//     }
//     for (var a = 0; a < key.length; a++) {
//         var value_original = alphamap.get(message[a]);
//         var value_key = alphamap.get(key[a]);
//         var value = getByValue(alphamap, ((value_original + value_key) % 26));
//         chipertext += value;
//     }
//     return false;
    
// } 

// function getByValue(map, searchValue) {
//     for (let [key, value] of map.entries()) {
//         if (value === searchValue) {
//             return true;
//         }
//     }
// }


//   document.getElementById('check').addEventListener('click', () => {
//       document.getElementById('result').value = isIsomorphic(firstString, secondString);
//  });
// function isIsomorphic(firstString, secondString) {

//     // Check if the same lenght. If not, they cannot be isomorphic
//     if (firstString.length == secondString.length)
//       return false
  
//     var letterMap = {};
  
//     for (var i = 0; i < firstString.length; i++) {
//       var letterA = firstString[i],
//         letterB = secondString[i];
  
//       // If the letter does not exist, create a map and map it to the value
//       // of the second letter
//       if (letterMap[letterA] === undefined) {
//         letterMap[letterA] = letterB;
//       } else if (letterMap[letterA] !== letterB) {
//         // Eles if letterA already exists in the map, but it does not map to
//         // letterB, that means that A is mapping to more than one letter.
//         return false;
//       }
//     }
//     // If after iterating through and conditions are satisfied, return true.
//     // They are isomorphic
//     return true;
//   }

//   document.getElementById('check').addEventListener('click', () => {
//       document.getElementById('result').value = isIsomorphic(str1, str2);
//  });
// const str1 = 'abcde';
// const str2 = 'eabdc';
// function isIsomorphic(str1, str2) {
//    if (str1.length !== str2.length) {
//       return false;
//    };
//    for (let i = 0;
//    i < str1.length; i++) {
//       const a = str1.indexOf(str1[i]);
//       const b = str2.indexOf(str2[i]);
//       if (str2[a] !== str2[i] || str1[b] !== str1[i]) {
//          return false;
//       };
//    };
//    return true;
// };
// console.log(isIsomorphic(str1, str2));

//   document.getElementById('check').addEventListener('click', () => {
//       document.getElementById('result').value =isIsomorphic(str1,str2);
//  });

// function isIsomorphic(str1,str2){
//     var obj = {};
//     for (let i = 0; i < str1.length; i++){
//         if(!obj[str1[i]]){
//             obj[str1[i]] = str2[i];
//         }else{
//             if (obj[str1[i]] !== str2[i]){
//                 return false;
//             }
//         }
//     }
//     return true
// }