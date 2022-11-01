import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "../../Layouts/Layout";
import CreateTodo from "../../Pages/CreateTodo";
import Dashboard from "../../Pages/Dashboard";

function App() {
    return (
        <div>
            <Layout />
            <Routes>
                <Route
                    index
                    element={<Navigate replace to="/dashboard" />}
                ></Route>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="create" element={<CreateTodo />} />
            </Routes>
        </div>
    );
}

export default App;
