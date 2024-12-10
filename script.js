


const userName = prompt('Enteryour name, please');
// console.log(userName);

switch (true) {

    case userName === null:
        console.log('Goodbay...!!!');
        break;

    case userName.trim() === '':
        console.log('Ener your name!!!');
        break;

    default:
        alert(`\" Hello, ${userName}! How are you? \” `)
        console.log(`\" Hello, ${userName}! How are you? \” `);
        break;

}

