import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";

import { AuthContext } from "../providers/auth";

export default function Users() {

    const navigate = useNavigate();
    const { theme, themeLight, themeDark } = React.useContext(AuthContext);
    const [user] = useState(() => {
        const userStorage = localStorage.getItem("user");
        return (JSON.parse(userStorage));
    });
    const [userId] = useState(() => {
        const storedId = localStorage.getItem("userId");
        return storedId;
    });

    return (
        <ThemeProvider theme={theme ? themeDark : themeLight}>
            <Container>
                <Header>
                    <IconContext.Provider value={{ color: "white", size: "34px" }}>
                        <FaArrowLeft onClick={() => navigate("/home")} />
                    </IconContext.Provider>
                </Header>
                <p>Dados e preferências</p>
                <Input placeholder={user.name} disabled={true}/>
                <Input placeholder={user.cpf} disabled={true}/>
                <Input placeholder={user.email} disabled={true}/>
                <Button onClick={() => navigate(`/users/${userId}/update`)}> ATUALIZAR </Button>
                <Button onClick={() => navigate("/themes")}>TEMAS</Button>
            </Container>
        </ThemeProvider>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${props => props.theme.background};
    padding: 32px 38px 5px 38px;

    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 32px;
        color:${props => props.theme.text}
    }
`
const Input = styled.input`
    width: 300px;
    height: 52px;
    border-radius: 8px;
    margin-top: 16px;
    border: none;
    padding-left: 14px;
    font-size: 14px;
    color: #7E7E7E;
    background: #EBEBEB;
`
const Button = styled.button`
    width: 300px;
    height: 52px;
    margin-top: 24px;
    background-color: ${props => props.theme.button};
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF;   
    &:last-child{
        margin-top: auto;
        margin-bottom: 15px;
    }
`
const Header = styled.div`
    width: 100%;
    height: fit-content;
`