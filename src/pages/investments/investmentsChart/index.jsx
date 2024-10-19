import { VictoryPie } from 'victory-pie'

const InvestmentsChart = ({stocksPerSectors}) => {
  console.log(stocksPerSectors)
  return (
  <VictoryPie
    colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
    style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
    data={stocksPerSectors}
  />
  )
}
// var(--classics-text)
export default InvestmentsChart