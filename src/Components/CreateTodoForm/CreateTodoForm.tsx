import React, { useState } from "react";
import { api } from "../../Constants/api";

// import styles from "./CreateTodoForm.module.css";

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
                body: JSON.stringify({
                    title: title,
                    text: text,
                    status: todoType,
                }),
            });

            let resJson = await res.json();

            console.log(resJson);

            if (res.status === 200) {
                setTitle("");
                setText("");
                setMessage("Record created successfully");
            } else {
                setResponse(resJson.message);
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select
                    required
                    defaultValue={todoType}
                    onChange={(e) => setTodoType(e.target.value)}
                >
                    <option value="overdue">Overdue</option>
                    <option value="finished">Finished</option>
                    <option value="draft">Draft</option>
                    <option value="in progress">In progress</option>
                </select>
                <input
                    type="text"
                    value={text}
                    placeholder="Description"
                    onChange={(e) => setText(e.target.value)}
                />

                <button type="submit">Create</button>

                <div className="message">
                    {message ? (
                        <p>{message}</p>
                    ) : response ? (
                        response.map((item, index) => <p key={index}>{item}</p>)
                    ) : null}
                </div>
            </form>
        </>
    );
}

export default CreateTodoForm;
