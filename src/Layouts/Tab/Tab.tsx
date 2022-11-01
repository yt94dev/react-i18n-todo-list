import React from 'react';

import styles from './Tab.module.css';

interface TabProps {
  title: string,
  itemCount: number,
  children: React.ReactNode,
}

function Tab({title, itemCount, children}: TabProps) {
  return(
    <div className={styles.tab}>
      <h3 className={styles.title}>{title} <span className={styles.number}>{itemCount}</span></h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Tab;