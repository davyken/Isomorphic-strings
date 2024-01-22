const mainBox = document.getElementById('container')
const result = document.getElementById('result')
const firstString = document.createElement('input')
const secondString = document.createElement('input')
const check = document.createElement('button')

firstString.placeholder = 'Enter the first string...'
secondString.placeholder = 'Enter the second string...'
check.innerHTML = "<p style= 'padding: 1px;'>Check</p>"

mainBox.appendChild(firstString)
mainBox.appendChild(secondString)
mainBox.appendChild(check)

check.addEventListener('click', checkIsomorphic)

function isomorphic (str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    const x = str1.indexOf(str1[i])
    const y = str2.indexOf(str2[i])
    if (str2[x] !== str2[i] || str1[y] !== str1[i]) {
      return false
    }
  }
  return true
}

function checkIsomorphic () {
  const string1 = firstString.value
  const string2 = secondString.value
  const answer = isomorphic(string1, string2)

  if (string1 === '' && string2 === '') {
    result.innerHTML = '<span class="material-symbols-outlined" style="color: red; font-size: 1.5rem;">error</span>' + 'No word has been entered, please try again!'
  } else if (string1.length !== string2.length) {
    result.innerHTML = '<span class="material-symbols-outlined" style="color: red; font-size: 1.5rem;">error</span>' + 'The length of your strings should be the same'
  } else if (answer) {
    result.innerHTML = 'The word entered is isomorphic'
  } else {
    result.innerHTML = 'The word entered is not isomorphic'
  }
}

refresh.addEventListener('click', () => {
  window.location.reload()
})





// document.getElementById('check').addEventListener('click', () => {
//   document.getElementById('result').value = isStringIsomorphic(str1, str2)
// })
// function isStringIsomorphic (str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = i + 1; j < str1.length; j++) {
//       if (
//         (str1[i] === str1[j] && str2[i] !== str2[j]) || (str1[i] !== str1[j] && str2[i] === str2[j])) {
//         return false
//       }
//     }
//   }
//   return true
// }
// const str1 = 'ABCA'
// const str2 = 'XYZX'
// console.log(isStringIsomorphic(str1, str2))




