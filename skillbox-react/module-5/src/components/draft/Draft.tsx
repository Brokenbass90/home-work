// // Карирование
// // так же функция add - функция высшего порядка. Возвращает или принимает другие функции
// // window.addEventListener('resize' () => {}) //.addEventListener - функция высшего порядка
// add(1)(1) // -> 2
// function add(leftSide: number){
//     return(rightSide: number) => leftSide + rightSide
// }


// // //то же самое через стрелочную функцию
// // const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide

// // создфние новых функций на основе функции add
// const addOne = add(1);

// addOne(5); // -> number

//--------------------------------------------------------------------------------------

//hooks

// 1. useState
// 2. useEffect
// 3. useRef
// 4. useReducer
// 5. useMemo
// 6. useContext
// 7. useCallback
// 8. useImperativeHandle
// 9. useLayoutEffect
// 10. useDebugValue
//useEffect - жизненный цикл

import React from "react";

// export function myHooks({ title, id }: {title: string, id?: string}){
//     // // Каждый раз при рерэндэре отрабатывает хук. Например при вводе текста в форму будет отрабатывать после ввода кажого символа
//     // React.useEffect(() => {
//     //     console.log('componentDidMount');
//     //     console.log('componentDidUpdate');
//     // }); // если в конце нету зависимости массива [] то действует так


//     // // Срабатывает один раз
//     // React.useEffect(() => {
//     //     console.log('componentDidMount');
//     //     // Так же можно вернуть функцию
//     //     return () => {
//     //         console.log('componentWillUnmount'); // Размонтирование
//     //     }
//     // }, []); // если в конце есть зависимость то хук работает как аналог componentDidMount

//     // //
//     // React.useEffect(() => {
//     //     console.log('componentWillReciveProps: ', title);
//     // }, [title]) // Будет срабатывать только когда будет меняться свойство title
   
//     //const [isMounted] = useIsMounted();

//     return(
//         <div>{title} {id}</div>
//     )
// }

// Собственный хук

// function useIsMounted(){
//     const [isMounted, setIsMounted] = React.useState(false);

//     React.useEffect(() => {
//         setIsMounted(true)
//     }, [])

//     const [isMounted]
// }

// Хуки должны быть вызваны только из функционального компонента
// Нельзя оборачивать хуки в if или менять порядок исполнения хуков

// useMemo

// map Reducer React

// interface IItem {
//     value: string;
//     id: string;
//     onClick: (id: string) => void;
// }

// interface IMyListProps {
//     list: IItem[];
// }

// export function MyList({ list }: IMyListProps){
//     return (
//         <ul>
//             {list.map((item) => (
//                 // <li onClick={item.onClick} key={item.id}>{item.value}</li>
//                 <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//             ))}
//         </ul>
//     )
// }


//genericList - список который может рэндерить любые списки

interface IItem {
    id: string;
    text: string;
    onClick: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
}

interface IGenericListProps {
    list: IItem[];
}

export function GenericList({ list }: IGenericListProps){
    return(
        <>
            {list.map(({ As = "div", text, onClick, className, id, href }) => (
                <As
                    className={className}
                    onClick={() => onClick(id)} 
                    key={id}   
                    href={href}
                >
                    {text}
                </As>
            ))}
        </>
    )
}