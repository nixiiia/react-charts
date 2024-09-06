import React from 'react';
import styles from './Table.module.scss';
import { TableRow } from '../TableRow';

export const Table = ({ datas }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Показатель</th>
          <th className={styles.th}>Текущий день</th>
          <th className={styles.th}>Вчера</th>
          <th className={styles.th}>Этот день недели</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {datas.map((data) => (
          <TableRow key={data.id} data={data} />
        ))}
      </tbody>
    </table>
  );
};
