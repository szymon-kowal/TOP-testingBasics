export function reverseStr(str) {
    str = str.split('');
    let swap = '';
    for (let i = 0; i < str.length / 2; i++) {
        swap = str[i];
        str[i] = str[str.length - 1 - i]; 
        str[str.length - 1 - i] = swap;
    }
    return str.join('');
};