import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </ThemeProvider>
    );
};

export default App;