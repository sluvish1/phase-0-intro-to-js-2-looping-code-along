const names = [ 'Guadalupe', 'Ollie', 'Aki' ]/*names to be passed*/
const messages =[]/*empty  Array that needs to be returned*/


function writeCards(names, events) {
    for (let i = 0; i < names.length; i++){
      let nameMessage = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
    messages.push(nameMessage); /*put the empty Array and the message with the names to be
      passed together to make the new Array*/
  }
  return messages; /*prints out the message*/
}

function countDown(){
let countDown = 0
while (countDown < 11) {
   console.log(countDown++);
}
}