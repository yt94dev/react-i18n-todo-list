import React from "react";
import FullTab from "../../Layouts/FullTab";
import CreateTodoForm from "../../Components/CreateTodoForm";
import styles from "./CreateTodo.module.css";

function CreateTodo() {
    return (
        <div className={styles.content}>
            <h1>Create new</h1>
            <FullTab>
                <CreateTodoForm />
            </FullTab>
        </div>
    );
}

export default CreateTodo;
