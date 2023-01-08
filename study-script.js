// const str = 'string';
// const indexStr = str[1];
//
// console.log('str[0]:   ' + str[0]);
// console.log('indexStr:   ' + indexStr);
// console.log('str.charAt(2):   ' + str.charAt(2));
// console.log('string\'.charAt(3):   ' + 'string'.charAt(3));
//
// console.log('--------------------');
// ///
// const s_prim = 'foo';
// const s_obj = new String(s_prim);
//
// console.log('s_obj.toString():   ' + s_obj.toString());
//
// console.log('--------------------');
// //
// const s1 = '2 + 2';
// const s2 = new String('2 + 2');
//
// console.log('s1:   ' + s1);                   //2+2
// console.log('eval(s1):   ' + eval(s1));             //4
// console.log('s2:   ' + s2);                   //String{'2 + 2'}
// console.log('eval(s2):   ' + eval(s2));             //String{'2 + 2'}
// console.log('eval(s2.toString()):   ' + eval(s2.toString()));  //4
// console.log('s2.toString():   ' + s2.toString());        //2+2
// console.log('s2.valueOf():   ' + s2.valueOf());         //2+2
// console.log('eval(s2.valueOf()):   ' + eval(s2.valueOf()));   //4
//
// console.log('--------------------');
// //////////////////////////////////////////
// console.log('Static methods');
// console.log('String.fromCharCode(189, 43, 190 ,61)   ' + String.fromCharCode(189, 43, 190 ,61));
//
// console.log('String.fromCodePoint(458, 4756, 4575):   ' + String.fromCodePoint(458, 4756, 4575));
//
// console.log('String.raw`jgyuf56k-08976r\\/`:   ' + String.raw`jgyuf56k-08976r\/`);
//
// console.log('--------------------');
// ////////////////////
// console.log('Properties');
// const getText = (name) => `My name is ${name}!`;
// const person = { name: 'Irina'};
//
// const text = getText(person.name);
//
// console.log('text:   ' + text);
// console.log('text.length:   ' + text.length);
//
// console.log('--------------------');
// ////////////////////////////////////////////
// const instMet = 'Instance methods';
// console.log(instMet);
//
// console.log('instMet.charCodeAt(0):  ' + instMet.charCodeAt(0));
// console.log('instMet.codePointAt(2):  ' + instMet.codePointAt(2));
//
// console.log('instMet.includes("p"):  ' + instMet.includes('p'));
// console.log('instMet.includes("M"):  ' + instMet.includes('M'));
// console.log('instMet.includes("m"):  ' + instMet.includes('m'));
//
// console.log('instMet.indexOf(\'m\'):  ' + instMet.indexOf('m'));
// console.log('instMet.indexOf(\'e\', 8):  ' + instMet.indexOf('e', 8));
// console.log('instMet.indexOf(\'r\'):  ' + instMet.indexOf('r'));
//
// console.log('instMet.lastIndexOf(\'s\'):   ' + instMet.lastIndexOf('s'));
//
// console.log('instMet.padEnd(30, \'.\'):   ' + instMet.padEnd(30, '.'));
//
// const codeCart = '1234567890';
// console.log('codeCart:   ' + codeCart);
// console.log('codeCart.padStart(13, \'j\'):   ' + codeCart.padStart(13, 'j'));
// console.log('codeCart.padStart(3, \'j\'):   ' + codeCart.padStart(3, 'j'));
//
// const secretCode = (cod) => {
//   return cod.slice(-4).padStart(cod.length, '*');
// }
//
// console.log('codeCart.slice(4):   ' + codeCart.slice(4));
// console.log('codeCart.slice(-4):   ' + codeCart.slice(-4));
// console.log('codeCart.slice(0, 4):   ' + codeCart.slice(0, 4));
//
// console.log(secretCode(codeCart));
//
// console.log('codeCart.repeat(2):  ' + codeCart.repeat(2));
// console.log('`${codeCart} + ${codeCart.repeat(1)}`:  ' + `${codeCart} + ${codeCart.repeat(1)}`);
//
// console.log('--------------------');
// ////////////////////////////////////////////
//
// console.log('.split');
// console.log(text);
//
// const textArr = text.split();
// const textArr2 = text.split('');
// const textArr3 = text.split(' ');
//
// console.log(textArr);
// console.log('textArr:   ' + textArr);
// console.log(textArr2);
// console.log('textArr2[5]:   ' + textArr2[5]);
// console.log(textArr2.join('_'));
// console.log('textArr2.join(\'_\'):   ' + textArr2.join('_'));
// console.log(textArr3);
// console.log('textArr3[5]:   ' + textArr3[5]);
// console.log('textArr3[2]:   ' + textArr3[2]);
// console.log(textArr3.join('_'));
//
//
// console.log(text.split());
// console.log(text.split(''));
// console.log(text.split(' '));
//
// console.log('--------------------');
// ////////////////////////////////////////////
// console.log('.substring');
//
// console.log('text.substring(2, 10):   ' + text.substring(2, 10));
// console.log('text.substring(2):   ' + text.substring(2));
//
// console.log('text.toUpperCase():   ' + text.toUpperCase());
// console.log('\'KLFJIOH\'.toLowerCase():   ' + 'KLFJIOH'.toLowerCase());
//
// const textTrim = `   ${text}   `;
// console.log('text.trim():   ' + text.trim());
// console.log('textTrim:   ' + textTrim);
// console.log('textTrim.trim():   ' + textTrim.trim());
//
// console.log('--------------------');
// ////////////////////////////////////////////
//
// function f2c(x) {
//   const t = typeof x === 'number' ? `${x}F` : x;
//   const re = /(-?\d+(?:\.\d*)?)F\b/g;
//   const repl = (t, p1) => `${(5/9 *(p1 - 32))}C`;
//   return t.replace(re, repl);
// }
//
// console.log(f2c(275));
// console.log(f2c(-35,4));
// console.log(f2c('-354F'));