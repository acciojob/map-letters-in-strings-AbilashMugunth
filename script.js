//your JS code here. If required.
function mapLetters(str) {
  let letterMap = new Map();

  for (let i = 0; i < str.length; i++) {
    letterMap.set(str.charAt(i), []);
  }
  // console.log(letterMap);

  letterMap.forEach((val, key) => {
    let charindex = [];
    for (let i = 0; i < str.length; i++) {
      if (key == str[i]) {
        charindex.push(i);
      }
    }
    letterMap.set(key, charindex);
  });

  // console.log(letterMap);
  // Convert Map to Object
  const myObject = {};
  letterMap.forEach((value, key) => {
    myObject[key] = value;
  });

  return myObject;
}