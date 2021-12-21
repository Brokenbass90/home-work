// 1. Работа с простыми типами
// Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;
// enum Method {
//     add,
// }
// type TypeFn = (method:Method, a: string, b :string) => string;
// export const concat: TypeFn = (method:Method.add, a: string, b :string): string =>  {
//     switch(method){
//         case Method.add: return a + b
//     }
// };
export const concat = (a:string, b:string): string => {return a + b};
// console.log(concat(Method.add, 'Hello ', 'World') )
console.log(concat('Hello ', ' World'));

// 2. Работа с интерфейсами
// Напишите интерфейс для описания следующих данных
// const MyHometask = {
//     howIDoIt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }
interface MyFirstInterface {
    howIDoIt: string;
    simeArray: [string, string, number];
    withData: [{howIDoIt: string, simeArray:Array<string | number>}]
    //withData: [{howIDoIt: string, simeArray:[string, number]}]
}

export const MyHometask: MyFirstInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}

// 3. Типизация функций, используя Generic
// В уроке про Generics мы написали интерфейс массива MyArray
// interface MyArray<T> {
//   [N: number]: T;
//  добавьте типизацию для метода reduce
//     reduce();
// }
// Справка о работе reduce
// const initialValue = 0;
// [1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6
// Результат работы предыдущей функции передается в следующую в качестве аргумента accumulator. На итерации 0 - accumulator === initialValue. Если initialValue не указан, то accumulator это 0 элемент массива
const myArray: MyArray<number> = [1,2,3];

interface MyArray<T> {
    [N: number]: T

    reduce(fn: (oneValue: T, twoValue: T, Index: number, array: T[]) => T): T;
}

export const q = myArray.reduce((a: number, b: number): number => a + b);

// 4. Работа с MappedTypes
// interface IHomeTask {
//     data: string;
//     numbericData: number;
//     date: Date;
//     externalData: {
//         basis: number;
//         value: string;
//     }
// }

// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным
// const homeTask: MyPartial<IHomeTask> = {
//     externalData: {
//         value: 'win'
//     }
// }
// type MyPartial<T> = {
//     [N in keyof T]: T[N] extends object ? MyPatial<T[N]> : T[N]
// }
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

const homeTask: MyPartial<IHomeTask> = {

    externalData: {
        value: 'win'
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
    
}