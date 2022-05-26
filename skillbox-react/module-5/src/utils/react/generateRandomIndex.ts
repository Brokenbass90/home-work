
//nanoid - библиотека  уникальные значения
//Эта функция поможет вывести рандомный id
import { assoc } from "../js/assoc";
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assiegnId = assoc('id', generateRandomString()); //generateRandomString вызывается один раз при определении модуля

//export const generateId = <O extends object>(obj: O) => assiegnId(obj); //Будет вызываться каждый раз когда вызываем функцию

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj); //Будет вызываться каждый раз когда вызываем функцию
