mixedMessage=()=> {
let randomnum=Math.floor(Math.random()*5)
switch (randomnum) {
    case 0:
        return 'You got this!'
    break;
    case 1:
        return 'Keep it up!'
    break;
    case 2:
        return 'Never give up, never surrender!'
    break;
    case 3:
        return 'Every darkness must end in morning light.'
    break;
    case 4:
        return 'Believe in yourself!'

}
}

console.log(mixedMessage())