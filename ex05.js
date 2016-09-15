/*
Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with 'message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

 Arguments

  messages: an Array of 10 to 100 random objects that look something like this:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }
  
  Hint - try chaining some Array methods!

*/

function getShortMessagesThan(messages, lessThan){
    return messages
        .filter(m => m.message.length < lessThan)
        .map(m => m.message);
}

function getShortMessages(messages){
  return getShortMessagesThan(messages, 50);
}