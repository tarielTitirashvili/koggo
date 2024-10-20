import { useState } from 'react'
// import DotsIconButton from '../../../../components/dotsButton'
import { BRAND_ICONS, HEALTHCARE_COMPANIES } from '../constants'
import MyModal from './modal/inex'
import { InvestmentsListItemWrapper } from './styles'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

const InvestmentsListItem = ({ item }) => {

  const [open, setOpen] = useState(false)

  // console.log(item)
  const diffClassNameGenerator = () =>{
    if(item.diff > 0)
      return 'price_change_positive'
    else if(item.diff < 0)
      return 'price_change_negative'
    else
      return 'price_change_zero'
  }
  function roundToTwo(num) {
    return Math.round(num * 100) / 100;
  }
  
  return (
    <InvestmentsListItemWrapper>
      <img src={BRAND_ICONS[item.displaySymbol]} className="icon" alt={''} />
      <span className="investments_container">
        <p className="text">{item.description}</p>
        <p className="text_secondary">{item.symbol}</p>
      </span>
      <span>
        <p className='price_styles'>
          {HEALTHCARE_COMPANIES.includes(item.symbol)? roundToTwo(item.price * 60) : roundToTwo(item.price)}&nbsp;$
        </p>
        <p className={`${diffClassNameGenerator()}`}>▼&nbsp;{item.diff}&nbsp;%</p>
      </span>
      {/* <DotsIconButton onClick={()=>setOpen(true)}/> */}
        <span onClick={()=>setOpen(true)}>
          <NotificationAddIcon />
        </span>
        
      <MyModal open={open} handleClose={()=>setOpen(false)} companyKey={item.symbol}/>
    </InvestmentsListItemWrapper>
  )
}

export default InvestmentsListItem
