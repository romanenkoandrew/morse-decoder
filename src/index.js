const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    MORSE_TABLE[''] = ' ';
    expr = expr.match(/.{1,10}/g);
    let letterArr = expr.map(el => el.match(/.{1,2}/g).map(item=> item == '10' ? item = '.' : item == '11' ? item = '-' : item = '' ));
    let codeArr = letterArr.map(el=> el.join(''));
    let resultArr = [];
    codeArr.map(el=> resultArr.push(MORSE_TABLE[el]));
    return resultArr.join('');
  }

module.exports = {
    decode
}