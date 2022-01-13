import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./views/Login";
import SignUp from "./views/SignUp"
import Subscriptions from "./views/Subscriptions"
import Buy from "./views/Buy";
import Home from  "./views/Home";
import Users from "./views/Users";
import { AuthContext } from "./providers/auth";

export default function App() {

    const user = React.useContext(AuthContext);

    return (

        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/subscriptions/:idPlano" element={<Buy />} />
                <Route path="/home" element={<Home />} />
                <Route path="/users/:idUser" element={<Users />} />
            </Routes>
        </BrowserRouter>

    );
}