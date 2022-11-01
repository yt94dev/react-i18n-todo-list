import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../../Layouts/Layout";
import CreateTodo from "../../Pages/CreateTodo";
import Dashboard from "../../Pages/Dashboard";
import { ROUTES } from "../../Constants/routes";

import "./App.css";

function App() {
    return (
        <div>
            <Layout />
            <Routes>
                <Route
                    index
                    element={<Navigate replace to={ROUTES.dashboard} />}
                ></Route>
                <Route path={ROUTES.dashboard} element={<Dashboard />} />
                <Route path={ROUTES.create} element={<CreateTodo />} />
            </Routes>
        </div>
    );
}

export default App;
