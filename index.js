// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
function camelize(str) {
    const removedDashes = str.split("-");
    // console.log(removedDashes)

    const camelizedArray = removedDashes.map((word, idx) => {

      if(idx>0){
        word = word[0].toUpperCase() + word.slice(1);
        // console.log(word)
      }
      return word
    })
    return camelizedArray.join("")
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

//or

function camelizeV2(str) {

  const removedDashes = str.split('-')
  console.log("🚀 ~ camelize ~ removedDashes", removedDashes)

  const camelizedArray = removedDashes.map((word, idx) => {

      word = word[0].toUpperCase() + word.slice(1)

      return word
  })
  
  
  const result = camelizedArray.join('')
  
  const resultCorrected = result[0].toLowerCase() + result.slice(1)

  console.log(resultCorrected)


}

camelizeV2("webkit-transition")
camelizeV2("background-color-adsfa-aa-a")

//or

function camelizeV3(str) {

  const removedDashes = str.split('-')
  console.log("🚀 ~ camelizeV3 ~ removedDashes", removedDashes)

  // removedDashes.replace('', )

  let result = ''
  
  removedDashes.forEach((word, idx) => {

      if (word) {

          result += word[0].toUpperCase() + word.slice(1)
      } 

  })

  let finalResult =  ''

  if (str[0] === '-') {
      finalResult = result 
  } else {
      finalResult = result[0].toLowerCase() + result.slice(1)
  }

  console.log("🚀 ~ camelizeV3 ~ result", finalResult)

}

camelizeV3("background-color-adsfa-aa-a")
camelizeV3("-webkit-transition")


//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

function transformUsers(array) {

  const newArray = array.map(user => {

    const newUser = {}

    newUser.fullName = user.name + " " + user.surname;
    newUser.id = user.id

    return newUser

  })

  const newArray2 = array.map(user => {
    return {
      fullName: user.name + ' ' + user.surname,
      id: user.id
  }
}
)

const newArray3 = array.map(user => (

  {
      fullName: user.name + ' ' + user.surname,
      id: user.id
  }
))

console.log(newArray)
}

transformUsers(users)
