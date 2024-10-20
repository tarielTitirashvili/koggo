import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useTheme } from '../../../layout/themeSwitcher/context'
import { useEffect, useState } from 'react'

const sizing = {
  margin: { right: 5 },
  width: 400,
  height: 400,
  legend: { hidden: true },
};




export default function PieChartWithCustomizedLabel({investmentsPerStor}) {
  const { colorForOtherLibs } = useTheme()
  const data = [
    { label: "Health", value: 0, color: '#0088FE' },
    { label: "Fin", value: 0, color: '#00C49F' },
    { label: 'Ind', value: 0, color: '#FFBB28' },
    { label: 'IT', value: 0, color: '#FF8042' },
  ];

  const [chartData, setChartData] = useState(data)
  const TOTAL = chartData.map((item) => item.value).reduce((a, b) => a + b, 0);
  
  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(1)}%`;
  };

  useEffect(()=>{
    if(investmentsPerStor){
      const dataCopy = JSON.parse(JSON.stringify(data))
      investmentsPerStor.map((sector, index)=>{
        dataCopy[index].value = Math.floor(dataCopy[index].value + sector.y)
    })
    console.log(dataCopy)
    setChartData(dataCopy)
    }
  },[investmentsPerStor])
  return (
    <PieChart
      series={[
        {
          outerRadius: 150,
          data: chartData,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: colorForOtherLibs.className,
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  );
}