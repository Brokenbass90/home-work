
// Old classes
// function OldConstructor(fieldValue) {
//     this.filed = fieldValue || 123;
// }

// OldConstructor.prototype.method = function() {
//     return this.field;
// }

// const instance = new OldConstructor();
// instance.method(); // -> 123

//new

// TS вводит модификаторы доступа
//public если не указать поле то оно будет публичным (для наглядности)
//protected - не достучаться снаружи, но внутри класса можно
//private - не достучаться снаружи, но внутри класса можно
//Внутри класса есть доступ к приватным элементам
class Constructor {
    public field: number = 123;
    private privateField: number = 321;

    constructor(arg: number){
        this.field = arg;
    }

    public publicMethod(){
        return this.field
    }

    protected protectedMethod(){
        return this.field + 10;
    }

    private privateMethod (){
        return this.field + 20;
    }
}

const instance = new Constructor(123);

// Классы можно наследовать от других классов
// private методы в наследниках не доступны
// protected доступны в наследникахз
// Нельзя понизить уровень доступа, сделать из protected -> private
// Можно повысить уровень доступа protected -> public
class Child extends Constructor {
    // constructor(){
    //     super();
    // }
 public childMethod() {
 }
 public protectedMethod(): number{
     return super.protectedMethod();
 }

// Не получится
//  protected publicMethod(): number {
//      return super.publicMethod();
//  }
}

// TS Вводит абстрактные классы
// Абстрактные поля необходимые для имплементации
abstract class AbstractClass {
    public abstract abstractField: number;

    public abstract abctractMethod(): number;

    protected protectedMethod(){
        return this.abstractField;
    }
}
// Невозможно инстанциировать
//const instance2 = new AbstractClass; // Не получится

// От абстрактного класса можно только унаследовать
// Обязаны имплементировать все обстрактные поля
class NewChild extends AbstractClass{
    public abstractField: number = 123;
    public abctractMethod(): number {
        return this.protectedMethod();
    }
}

//Интерфейс

interface MyInterface<T> {
    field: string;
    method(): string;
}

// Классы могут быть дженериками, принимать аргументы
class NewClass<T> implements MyInterface<T> {
    field: string = 'hello';
    public conf?: T;
    method(): string {
        return '';
    }
}
//Component это дженерик

// class MyComponent extends React.Component<{ prop1: number}, { state1: string }>{
//     constructor(props: { prop1: number }){
//         super(props);
//         this.state = {
//             state1: '123'
//         }
//     }
//     public render(){
//         return(
//             <div>{this.props.prop1}</div>
//         )
//     }
// }