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
       let res = '';
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            res += ' ';
            continue;
        }

        let symbol = '';
        for (let j = i; j < i + 10; j += 2) {       
            switch (expr.slice(j, j + 2)) {
                case '10':
                    symbol += '.';
                    break;
                case '11':
                    symbol += '-';
                    break;                   
            
                default:
                    break;
            }            
        }        
                 
        res += MORSE_TABLE[symbol];
    }

    
    return res;
}

module.exports = {
    decode
}
