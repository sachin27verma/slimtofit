import React from 'react';
import Chart from 'chart.js/auto';

class BMIChart extends React.Component {
  chartRef = React.createRef();
  chartInstance = null;

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.destroyChart();
    this.buildChart();
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  destroyChart() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null;
    }
  }

  buildChart() {
    const { bmiValue } = this.props;
    const ctx = this.chartRef.current.getContext('2d');

    this.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['User 1'], // Change label to user's name or ID
        datasets: [
          {
            label: 'BMI',
            data: [bmiValue], // Use single value for BMI
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default BMIChart;
