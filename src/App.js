import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormsList from "./components/FormsList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormsList />} />
            </Routes>
        </Router>
    );
}

export default App;
