document.getElementById('check').addEventListener('click', () => {
  document.getElementById('result').value = isStringIsomorphic(str1, str2)
})
function isStringIsomorphic (str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j < str1.length; j++) {
      if (
        (str1[i] === str1[j] && str2[i] !== str2[j]) || (str1[i] !== str1[j] && str2[i] === str2[j])) {
        return false
      }
    }
  }
  return true
}
let str1 = "ABCA"
let str2 = "XYZX"
console.log(isStringIsomorphic(str1, str2))
