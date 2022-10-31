import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Layout from './Layout/Layout';
import CreateTodo from './CreateTodo/CreateTodo';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div>
        <Layout />
        <Routes>
            <Route index element={<Navigate replace to="/dashboard" />}></Route>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create" element={<CreateTodo />} />
        </Routes>
    </div>
  );
}

export default App;
