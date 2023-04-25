import { Bar } from "react-chartjs-2";
    import Chart from "chart.js/auto";
    const BarChart = () => {

        const data = {
            labels: ['January', 'February', 'March', "May"],
            datasets: [
              {
                label: 'Sales',
                data: [100, 75, 120, 135],
                backgroundColor: '#36A2EB',
              
              },
            ],
          };
      return (
        <div>
          <Bar
            data={data}
            height={500}
            width={650}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      );
    };
    export default BarChart;
