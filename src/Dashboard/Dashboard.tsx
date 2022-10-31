import React, {useState, useEffect} from 'react';
import Tab from '../Tab/Tab';
import TodosTable from '../TodosTable/TodosTable';

import styles from './Dashboard.module.css';

function Dashboard() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://188.166.76.128:8888/api/task/getAll', {
            method: 'post',
        }).then((response) => response.json())
        .then((data) => {
            setTodos(data);
            console.log(data);
        });
    }, []);

    return(
        <div className={styles.content}>
            <Tab title={'My todo’s'} itemCount={todos.length}>
                <TodosTable todos={todos} />
            </Tab>
            <Tab title={'Publish report'} itemCount={4}>sdfsdfsad</Tab>
        </div>
    );
}

export default Dashboard;