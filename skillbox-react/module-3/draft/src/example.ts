const str = 'string'; // typeof str --> 'string'
const num = 2; // typeof num --> 'number'
const nan =  NaN; // typeof nan --> 'number'
const obj = {}; // typeof obj --> 'object'
const arr = []; // typeof arr --> 'object'
const nul = null; // typeof nul --> 'object'
const sym = Symbol(); // typeof sym --> 'symbol'
const und = undefined; // typeof und --> 'undefined'
const _void = void 0; // typeof _void --> 'undefined'
const bool = true; // typeof bool --> 'boolean'
const fn = () => {}; // typeof fn --> 'function'

let tdStr: string = 'qwe';

// function sunJS(arr){
//     if(arr instanceof Array){
//         return arr.reduce((a, v) => a + v);
//     }
//     throw new Error('type mismatch');
// }

function sumTS(arr: number[]) {
    return arr.reduce((a, v) => a + v)
}

const tsNumber: number = 2;
const tsString: string = 'str';

const result = tsString + tsNumber;
const resultTwo = parseInt(tsString) - tsNumber;

if(typeof tsString === 'number') {
    const resultThree = tsString - tsNumber;
}
//Union type
const strOrNumber: string | number = 2;

// Tupe alias
type StrOrNumber = string | number;

const strOrNumber1: StrOrNumber = 1;
const strOrNumber2: StrOrNumber = '2';
const strOrNumber3: StrOrNumber = '1';
const strOrNumber4: StrOrNumber = 4;

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

//Array
const tsArray: number[] = [1,2,3]; // идентичные формы записи
const tsArrayGeneric: Array<number> = []; //форма записи generic

const unionArray: (string | number)[] = [1,2,3, 'hello'];
const unionArray2: Array<string | number> = [1,2,3, 'hello']; //generic

//tuple
const myTuple: [number, string] = [1 ,'2'];
const val = myTuple[0];
const [val1, val2] = myTuple;

// Object
type myObjectType = { a: number, b: string, c: boolean};
const myObj = { a:1, b: "2", c: false};
const myObj2: { a: number, b: string, c: boolean} = { a:1, b: "2", c: false};
const myObj3: myObjectType = { a:1, b: "2", c: false};

//Лучше использовать интерфейс
interface MyFirstInterface {
    readonly a: number;
    b: string;
    c?: number[]; // стараться избегать
}
//readonly - нельзя менять

const myObj4: MyFirstInterface = {
    a: 3,
    b: '332',
    c: [1, 3, 5]
};

const myObj5: MyFirstInterface = {
    a: 3,
    b: '332',
};

// так не надо
// const val = myObj5.c;

//Надо так
if(myObj5.c){
    const val = myObj5.c;
}

const ApiAnswer: IndexInterface = { key: 'qwe', key1: 'qwe'};

const val3 = ApiAnswer.randomkey;

interface IndexInterface {
    [n: string]: string;
}

//function

enum Methods{
    add,
    sub,
}

function calculate(method: Methods, left: number, right: number): number{
    switch(method){
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}

calculate(Methods.add,2,4)
calculate(Methods.sub,2,4)
// function calculate(method: 'add' | 'sub', left: number, right: number): number{
//     switch(method){
//         case 'add': return left + right;
//         case 'sub': return left - right;
//     }
// }

// calculate('add',2,4)
// calculate('sub',2,4)
type TypeFn = () => number;
const ArrowFn: TypeFn = () => 2;

type StrangeTsTypes = any | unknown | never;

const some: any = "sdsad"; //any тайпскрипт не следит за типом
const un: unknown ='2'; //unknown Если планируем определить тип потом
function neverFn(): never { //never функция не доработает до конца
    throw new Error('my exception')
}
const someValue = neverFn();


