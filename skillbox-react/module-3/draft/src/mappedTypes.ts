
// Массив может принять что угодно
// const mistake = []; // Не знает какой тип вывести
// mistake.push(1);
// mistake.push('123')

//Тайпкастинг (приведение к типу) ключевое слово as
const mistake = [] as Array<number>;
mistake.push(1);
//mistake.push('123')

//Не нужно типизировать все
let bigObject = {
    "commit": {
          "id": "a1e8f8d745cc87e3a9248358d9352bb7f9a0aeba",
          "name": "html",
          "type": "tree",
          "path": "files/html",
          "mode": "040000"
        },
    "commits":{
          "id": "4535904260b1082e14f867f7a24fd8c21495bde3",
          "name": "images",
          "type": "tree",
          "path": "files/images",
          "mode": "040000"
        },
    "diffs": {
          "id": "31405c5ddef582c5a9b7a85230413ff90e2fe720",
          "name": "js",
          "type": "tree",
          "path": "files/js",
          "mode": "040000"
        },
    "compare_timeoyt":{
          "id": "cc71111cfad871212dc99572599a568bfe1e7e00",
          "name": "lfs",
          "type": "tree",
          "path": "files/lfs",
          "mode": "040000"
        },   
        "bool": false,  
};

//bigObject.bool = 'hello';//сам определил тип
bigObject.bool = true;

//typeof возьмет тип из bigObject и присвоит TMyBigObject
type TMyBigObject = typeof bigObject;

// Присвоили Readonly, сделали иммутабельным
 const typeBigObject: Readonly<TMyBigObject> = bigObject;

//const typeBigObject: MyReadonly<TMyBigObject> = bigObject;

// Не получится так как typeBigObject -> Readonly
//typeBigObject.bool = false;

//Readonly работает только с внешними ключами
// получится
//typeBigObject.diffs.name = "TS";

// type MyReadonly = {
//   readonly [N in "asr" | "qwe"]: N
// }
//N in - цикл для типов (в первой итерации N = "asr", во второй N = "qwe")
// for (let N of ['asr', 'qwe']){}
//для того что бы TS брал ключи из интерфейса или объекта - keyof
// то же самое что for (let N os ['asr', 'qwe']){} но ключи сгенерировал сам ts
type TObjectKeys = keyof TMyBigObject;
type TCommitType = TMyBigObject['commit'];

type MyReadonly<T> = {
  // mapped types
  readonly [N in keyof T]: T[N]
}

// const some: MyReadonly<TMyBigObject> = {
//   bool: false
// }
// type MyReadonly = {
//   readonly [N in keyof TMyBigObject]: N
// }

// const some: MyReadonly = {
//   commit: 'commit'
// }

type MyPartial<T> = {
  [N in keyof T]?: T[N];
}

// T - интерфейс, K - ключи
//K extends keyof позволить ограничить всеми ключами которые находятся в T, на неправильных ключах будет ошибка
type MyPick<T, K extends keyof T> = {
  [N in K]: T[N]
}
// теперь в picket только 'commit', который вытащили из TMyBigObject
// type picket = Pick<TMyBigObject, 'commit'>;

type picket = MyPick<TMyBigObject, 'commit' | 'commits'>;

//тип который работает по всей глубине объекта
type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}

const typeBigObjectTwo: Readonly<TMyBigObject> = bigObject;
//typeBigObject.commits.id = 2; // не получится потому что в объекте string
typeBigObjectTwo.commit.name = 'newName';

//Тип убирающий readonly
type TSomeType = MyReadonlyDeep<TMyBigObject>;

//infer вычисляет аргумент дженерика Typr inference
type RemooveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemooveReadonly<TSomeType>;

function greaterThenZero (a: number, b: string): boolean{
  return a > 0
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type FnParametrs<T> = T extends ((...args: infer R) => any) ? R :  never;

type TReturnType =FnReturnType<typeof greaterThenZero>;
type TArgsType = FnParametrs<typeof greaterThenZero>;

