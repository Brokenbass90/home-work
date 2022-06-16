import React, { useState } from "react";
import './main.global.less';
import { Layout } from "./components/Layout";
import { Header } from "./components/Header/Header"
import { Content } from "./components/Content";
import { CardsList } from "./components/CardsList/CardsList";

import { generateRandomString, assiegnId, generateId } from "./utils/react/generateRandomIndex";
import { merge } from "../src/utils/js/merge";
import { GenericList } from "./components/draft/Draft";

// Константу можно называть с большой буквы

// const LIST = [
//     {value: 'some'}, 
//     {value: "other some"}, 
//     {value: 'some'}
// ].map((item) => ({ ...item, id: generateRandomString() }))

//Избавляемся от стрелочной функции с помощью утилиты
// const LIST = [
//     {value: 'some'}, 
//     {value: "other some"}, 
//     {value: 'some'},
// ].map(generateId)

const LIST = [
    {As: 'li' as const, text: 'some'}, 
    {As: 'li' as const, text: "other some"}, 
    {As: 'li' as const, text: 'some'},
].map(generateId)
export function App(){
    const [list, setList] = useState(LIST);
    
    const handleItemClick = (id: string) => {
        setList(list.filter((item) => item.id !== id))
        console.log(id + " Удален");
    }

    const handleAdd = () => {
        setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const })))
    }

    return(
        <Layout>
             <Header />
             <Content>
                <CardsList />
                {/* <MyList list={LIST.map(merge({ onClick: () => { console.log("klick") } }))} /> */}
                <button onClick={handleAdd}>Add element</button>
                {/*<MyList list={list.map(merge({ onClick: handleItemClick }))} /> */}
                <ul>
                    <GenericList list={list.map(merge({ onClick: handleItemClick }))} />

                </ul>
             </Content>
        </Layout>       
    );
} 