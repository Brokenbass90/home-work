import React, { useState } from "react";
import './main.global.less';
import { Layout } from "./components/Layout";
import { Header } from "./components/Header/Header"
import { Content } from "./components/Content";
import { CardsList } from "./components/CardsList/CardsList";
import { Dropdown } from './components/Dropdown/Dropdown';

import { generateRandomString, assiegnId, generateId } from "./utils/react/generateRandomIndex";

export function App(){

    return(
        <Layout>
             <Header />
             <Content>
                <CardsList />
             </Content>
        </Layout>       
    );
} 