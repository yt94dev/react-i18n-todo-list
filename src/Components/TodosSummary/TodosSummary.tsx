import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import date from "date-and-time";

import { TodosList, TodoItem } from "./types";

import "react-circular-progressbar/dist/styles.css";
import styles from "./TodosSummary.module.css";

function TodosSummary({ todos }: TodosList) {
    const finishedTasks: Array<TodoItem> = todos.filter((item) => {
        return item.status === "finished";
    });
    const overdueTasks: Array<TodoItem> = todos.filter((item) => {
        return item.status === "overdue";
    });
    const dates: Date[] = todos.map((item) => new Date(item.createdAt));
    const calcMaxDate = (dates: Date[]) =>
        new Date(Math.max(...dates.map(Number)));
    const maxDate = calcMaxDate(dates);

    return (
        <div className={styles.card}>
            <p className={styles.subtitle}>IT Department</p>
            <h5 className={styles.title}>Internal governance & control</h5>
            <div className={styles.totalProgress}>
                <div className={styles.progressContainer}>
                    <CircularProgressbar
                        value={overdueTasks.length}
                        maxValue={todos.length}
                        text={`${overdueTasks.length}/${todos.length}`}
                        styles={buildStyles({
                            textColor: "#101B28",
                            pathColor: "#DC6803",
                            trailColor: "#FEF0C7",
                        })}
                    />
                    <p>Overdue</p>
                </div>
                <div className={styles.progressContainer}>
                    <CircularProgressbar
                        value={finishedTasks.length}
                        maxValue={todos.length}
                        text={`${finishedTasks.length}/${todos.length}`}
                        styles={buildStyles({
                            textColor: "#101B28",
                            pathColor: "#56B87D",
                            trailColor: "#E5F2EA",
                        })}
                    />
                    <p>Finished</p>
                </div>
            </div>

            <h5 className={styles.latestDate}>Latest date</h5>
            <p>{date.format(maxDate, "DD MMM YYYY")}</p>
        </div>
    );
}

export default TodosSummary;
