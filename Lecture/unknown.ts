let userInput3: unknown;
let userName3: string;

userInput3 = 5;
userName3 = 'Joh';
if (typeof userInput === 'string') {
  userName3 = userInput;
}

function generateError1(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

generateError1('An error occured!', 500)


