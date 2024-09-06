import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const PopupCharts = ({ chartData }) => {
  const numericData = chartData.map((data) => [Number(data.split(' ').join(''))]).reverse();

  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: null,
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      point: {
        valueDescriptionFormat: '{index}. The value for {x} is {y}.',
      },
      enabled: false,
    },
    series: [
      {
        keys: ['y', 'color'],
        data: numericData,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 1,
            y2: 0,
          },
          stops: [
            [0, '#e82020'],
            [1, '#48ee17'],
          ],
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
