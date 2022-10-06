function lowerCaseWords(myarray) {
  var p1 = new Promise((resolve, reject) => {
    newarray = [];

    for (let index = 0; index < myarray.length; index++) {
      if (typeof myarray[index] === "string") {
        newarray.push(myarray[index].toLowerCase());
      }
    }
    if (newarray) {
      setTimeout(() => {
        resolve(newarray);
      }, newarray);
    } else {
      reject("Reject : " + newarray);
    }
  });
  return p1;
}

//
const mixedArray = ["PIZZA", 10, true, 25, false, "wings"];
console.log("-- START -- ");

console.log("-- CALL 1 -- ");
lowerCaseWords(mixedArray)
  .then(
    (success) => console.log(success),
    (err) => console.log(err)
  )
  .finally(() => console.log("Finally"));
