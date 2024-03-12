// tslint:disable-next-line:label-position

import {ChartData, ChartType} from 'chart.js';

export const  doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
export const DoughnutChartData: ChartData = {
    labels: doughnutChartLabels,
    datasets: [
        { data: [ 350, 450, 100 ] },
        { data: [ 50, 150, 120 ] },
        { data: [ 250, 130, 70 ] }
    ]
};
export const DoughnutChartType: ChartType = 'doughnut';
