import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Footer";

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Nav />
            <div style={{minHeight:'95vh'}}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default App;