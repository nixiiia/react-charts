import React from 'react';
import styles from './TableRow.module.scss';

import { PopupCharts } from '../PopupCharts';

export const TableRow = ({ data }) => {
  const [selectedData, setSelectedData] = React.useState(null);

  const toggleChart = (rowData) => {
    setSelectedData((prevSelectedData) =>
      prevSelectedData ? null : [rowData.today, rowData.yesterday, rowData.thisday],
    );
  };

  const getCellClass = (today, yesterday) => {
    const todayValue = Number(today.split(' ').join(''));
    const yesterdayValue = Number(yesterday.split(' ').join(''));
    if (todayValue > yesterdayValue) {
      return styles.increase;
    } else if (todayValue < yesterdayValue) {
      return styles.decrease;
    } else {
      return '';
    }
  };

  return (
    <>
      <tr onClick={() => toggleChart(data)}>
        <td className={styles.td}>{data.indicator}</td>
        <td className={`${styles.td} ${getCellClass(data.today, data.yesterday)}`}>{data.today}</td>
        <td className={`${styles.td} ${getCellClass(data.yesterday, data.thisday)}`}>
          {data.yesterday}
        </td>
        <td className={styles.td}>{data.thisday}</td>
      </tr>
      {selectedData && (
        <tr>
          <td colSpan={4}>
            <PopupCharts chartData={selectedData} />
          </td>
        </tr>
      )}
    </>
  );
};
