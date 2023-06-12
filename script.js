let inputMessage = prompt('Enter your Message');

let tempMessageArr = inputMessage.split('');

for(index in tempMessageArr){
  tempMessageArr[index] = getPreviousChar(tempMessageArr[index]);
}

let finalMessage = tempMessageArr.join('');

const messageContent = document.querySelector('.message');

messageContent.textContent = finalMessage;

console.log(finalMessage);

function getPreviousChar(char) {
  if (char === 'a') {
    return 'z';
  }

  if (char === 'A') {
    return 'Z';
  }

  if (char === ' ') {
    return ' ';
  }

  if (char === ',') {
    return ',';
  }

  if (char === '.') {
    return '.';
  }

  return String.fromCharCode(char.charCodeAt(0) - 1);
}