import { useEffect, useState } from 'react'
import { fetchStockDetails } from '../../API'
import InvestmentsList from './investmentsList'
import InvestmentsChart from './investmentsChart'
import { FINANCIAL_COMPANIES, HEALTHCARE_COMPANIES, INDUSTRY_COMPANIES, TECHNOLOGY_COMPANIES } from './investmentsList/constants'

const Investments = () => {
  const [ stockData, setStockData ] = useState([])
  const [investmentsPerStor, setInvestmentsPerStor] = useState([])

  useEffect(()=>{
    if(stockData.length>0){
      const investments=[
        { x: "Health", y: 0 },
        { x: "Fin", y: 0 },
        { x: "Ind", y: 0 },
        { x: "Tech", y: 0 },
      ]
      stockData.map(stock => {
        if(TECHNOLOGY_COMPANIES.includes(stock.symbol))
          investments[3].y = investments[3].y + stock.price
        else if(FINANCIAL_COMPANIES.includes(stock.symbol))
          investments[1].y = investments[1].y + stock.price * 5
        else if(INDUSTRY_COMPANIES.includes(stock.symbol))
          investments[2].y = investments[2].y + stock.price * 5
        else if(HEALTHCARE_COMPANIES.includes(stock.symbol))
          investments[0].y = investments[0].y + stock.price * 15
      })
      console.log('investments', investments)
      console.log('stockData', stockData)
      setInvestmentsPerStor(investments)
    }
  },[stockData])
  
  useEffect(()=>{
    fetchStockDetails(
      (data)=>setStockData(data)
    )
  },[])
  return (
    <div>
      {
        stockData && <>
          <InvestmentsChart stocksPerSectors={investmentsPerStor} />
          <InvestmentsList stockData={stockData} />
        </>
      }
    </div>
  )
}

export default Investments