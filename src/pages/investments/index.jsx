import { useEffect, useState } from 'react'
import { fetchStockDetails } from '../../API'
import InvestmentsList from './investmentsList'

const Investments = () => {
  const [ stockData, setStockData ] = useState([])
  useEffect(()=>{
    fetchStockDetails(
      (data)=>setStockData(data)
    )
  },[])
  return (
    <div>
      chart space
      <InvestmentsList stockData={stockData} />
    </div>
  )
}

export default Investments