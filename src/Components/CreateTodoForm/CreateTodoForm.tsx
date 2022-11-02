import React, { useState } from "react";
import { api } from "../../Constants/api";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import styles from "./CreateTodoForm.module.css";

const statusList = [
    {
        value: "overdue",
        label: "Overdue",
    },
    {
        value: "finished",
        label: "Finished",
    },
    {
        value: "draft",
        label: "Draft",
    },
    {
        value: "in progress",
        label: "In progress",
    },
];

function CreateTodoForm() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [todoType, setTodoType] = useState("draft");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState([]);

    let handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            let res = await fetch(api.save, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    text: text,
                    status: todoType,
                }),
            });

            let resJson = await res.json();

            console.log(resJson);

            if (res.status === 201) {
                setTitle("");
                setText("");
                setMessage("Task successfully added");
                setTimeout(() => {
                    setMessage("");
                }, 2000);
            } else {
                setResponse(resJson.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <TextField
                        required
                        sx={{ width: "20%" }}
                        id="outlined-required"
                        label="Title"
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setResponse([]);
                        }}
                    />
                </div>
                <div className={styles.row}>
                    <TextField
                        id="outlined-select-currency"
                        sx={{ width: "20%" }}
                        select
                        label="Select"
                        value={todoType}
                        onChange={(e) => {
                            setTodoType(e.target.value);
                            setResponse([]);
                        }}
                    >
                        {statusList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className={styles.row}>
                    <TextField
                        required
                        sx={{ width: "20%" }}
                        id="outlined-multiline-static"
                        label="Description"
                        placeholder="Enter a description..."
                        multiline
                        rows={4}
                        onChange={(e) => {
                            setText(e.target.value);
                            setResponse([]);
                        }}
                    />
                </div>
                <Button variant="contained" type="submit" color="success">
                    Create
                </Button>
                <div className={styles.message}>
                    {message ? (
                        <p className={styles.success}>{message}</p>
                    ) : response ? (
                        response.map((item, index) => <p key={index}>{item}</p>)
                    ) : null}
                </div>
            </form>
        </>
    );
}

export default CreateTodoForm;
