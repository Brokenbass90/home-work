// const myArray: MyArray<number> = [1,2,3];
const myArray: MyArray<number> = [1,2,3];
interface MyArray<T> {
    [N: number]: T

    map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U> //index: всегда number 
}

let variable = myArray[1];
myArray.map((f, index , arr) => f + 1);
myArray.map<string>((f) => `f + ${f}`); // <string> можно не использовать -> myArray.map((f) => `f + ${f}`);

[1,2,3].map((f, index, arr) => f + 1); // [2,3,4]
[1,2,3].map((f) => `f + ${f}`); // ['f + 1', 'f + 2' ...]

function identity<T>(arg: T): T{
    return arg
}

let resultOne = identity(12);

function getLen<T extends Array<any>>(arr: T): number { // Ключевое слово extends
    return arr.length
}

getLen([1,2,3]);

interface IValueWithType<T> { //I впереди это венгерская аннотация для обозначения переменной интерфейса
    type: string;
    value: T
}

function wifthType<U>(arg: U): IValueWithType<U>{
    return {
        type: typeof arg,  //typeof ts и typeof js отличаются
        value: arg
    }
}

const resultThree = wifthType('цйуйцу');

// в ts  есть встроенные дженерики
// Array

interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}
//Omit Удаляет ключи из интерфейсов
const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
    type: 'aqx'
};

//Pick забирает ключи, можно создать новый интерфейс из уже существующих и не создавать новый
// Partial все ключи не обязательные на подобии ? но у всех свойств
