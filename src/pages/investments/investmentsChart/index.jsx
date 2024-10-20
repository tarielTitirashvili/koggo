import { VictoryPie } from 'victory-pie'
import { useTheme } from '../../../layout/themeSwitcher/context'

const InvestmentsChart = ({stocksPerSectors}) => {
  const { colorForOtherLibs } = useTheme()
  return (
  <VictoryPie
    colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
    style={{ labels: { fill: colorForOtherLibs.className, fontSize: 20, fontWeight: "bold" } }}
    data={stocksPerSectors}
  />
  )
}
// var(--classics-text)
export default InvestmentsChart