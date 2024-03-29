import React, { useState, useEffect } from "react";
import Tab from "../../Layouts/Tab";
import TodosTable from "../../Components/TodosTable";
import TodosSummary from "../../Components/TodosSummary";
import { api } from "../../Constants/api";

import styles from "./Dashboard.module.css";

function Dashboard() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(api.getAll, {
            method: "post",
        })
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
            });
    }, []);

    return (
        <div className={styles.content}>
            <Tab title={"My todo’s"} itemCount={todos.length}>
                <TodosTable todos={todos} />
            </Tab>
            <Tab title={"Publish report"} itemCount={4}>
                <TodosSummary todos={todos} />
            </Tab>
        </div>
    );
}

export default Dashboard;
