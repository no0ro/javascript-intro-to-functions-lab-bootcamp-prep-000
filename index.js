function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout(string).toUpperCase())
}

function logWhisper(string){
  console.log(whisper(string).toLowerCase())
}

function sayHiToGrandma(string){
<<<<<<< HEAD
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
} else if (string.toUpperCase() === string) {
    return "YES INDEED!";
} else if (string === "I love you, Grandma.") {
  return "I love you, too.";
}
}

sayHiToGrandma('hello!')
sayHiToGrandma('HELLO!')
sayHiToGrandma("I love you, Grandma.")
=======
  var lowercase = 'hello!'
  var uppercase = 'HELLO!'
  var mixedCase = 'Hi there!'
  if (whisper(string).toLowerCase() === lowercase) {
    return "I can\'t hear you!"
} else if (shout(string).toUpperCase() === uppercase) {
    return "YES INDEED!"
} else ( === mi)
 
>>>>>>> 680961fa96b9275cb415a7e426e92ac34b642a43
