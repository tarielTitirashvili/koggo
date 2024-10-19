import InvestmentsListItem from './InvestmentsListIrtem/inedx'
import { InvestmentsWrapper } from './styles'


const InvestmentsList = ({stockData}) => {
  return (
    <InvestmentsWrapper>
      {stockData && stockData.map((item)=><InvestmentsListItem  item={item} key={item.id}/>)}
    </InvestmentsWrapper>
  )
}

export default InvestmentsList