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
    const [titleInputErrorText, setTitleInputErrorText] = useState("");
    const [textInputErrorText, setTextInputErrorText] = useState("");

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

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);

        let result = e.target.value.match(
            /^(?=.{5,}$)(?=.*[A-Z])[A-Za-z0-9]+\s\w+/g
        );
        if (result) {
            setTitleInputErrorText("");
        } else {
            setTitleInputErrorText("Invalid title");
        }

        setResponse([]);
    };

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);

        let result = e.target.value.match(/^.{10,}$/);
        if (result) {
            setTextInputErrorText("");
        } else {
            setTextInputErrorText("Invalid text");
        }

        setResponse([]);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <TextField
                        required
                        error={titleInputErrorText.length > 0}
                        sx={{ width: "20%" }}
                        id="outlined-required"
                        label="Title"
                        onChange={handleChangeTitle}
                        value={title}
                        helperText={titleInputErrorText}
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
                        error={textInputErrorText.length > 0}
                        sx={{ width: "20%" }}
                        id="outlined-multiline-static"
                        label="Description"
                        placeholder="Enter a description..."
                        multiline
                        rows={4}
                        onChange={handleChangeText}
                        helperText={textInputErrorText}
                    />
                </div>
                <Button
                    variant="contained"
                    type="submit"
                    color="success"
                    disabled={
                        titleInputErrorText.length > 0 ||
                        textInputErrorText.length > 0
                    }
                >
                    Create
                </Button>
                <div className={styles.message}>
                    {message ? (
                        <p className={styles.success}>{message}</p>
                    ) : response ? (
                        response.map((item, index) => (
                            <p key={index} className={styles.error}>
                                {item}
                            </p>
                        ))
                    ) : null}
                </div>
            </form>
        </>
    );
}

export default CreateTodoForm;
