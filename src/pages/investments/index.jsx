import { useEffect, useState } from 'react'
import { fetchStockDetails } from '../../API'
import InvestmentsList from './investmentsList'
// import InvestmentsChart from './investmentsChart'
import {
  FINANCIAL_COMPANIES,
  HEALTHCARE_COMPANIES,
  INDUSTRY_COMPANIES,
  TECHNOLOGY_COMPANIES,
} from './investmentsList/constants'
import { InvestContainer, InvestmentsTitle, LoaderContainer } from './styles'
import { CircularProgress } from '@mui/material'
import PieChartWithCustomizedLabel from './muiChart'

const Investments = () => {
  const [stockData, setStockData] = useState([])
  const [investmentsPerStor, setInvestmentsPerStor] = useState([])

  useEffect(() => {
    if (stockData?.length > 0) {
      const investments = [
        { x: 'Health', y: 0, },
        { x: 'Fin', y: 0 },
        { x: 'Ind', y: 0 },
        { x: 'IT', y: 0 },
      ]
      stockData.map((stock) => {
        if (TECHNOLOGY_COMPANIES.includes(stock.symbol))
          investments[3].y = investments[3].y + stock.price
        else if (FINANCIAL_COMPANIES.includes(stock.symbol))
          investments[1].y = investments[1].y + stock.price
        else if (INDUSTRY_COMPANIES.includes(stock.symbol))
          investments[2].y = investments[2].y + stock.price
        else if (HEALTHCARE_COMPANIES.includes(stock.symbol))
          investments[0].y = investments[0].y + stock.price * 60
      })

      setInvestmentsPerStor(investments)
    }
  }, [stockData])

  useEffect(() => {
    fetchStockDetails((data) => setStockData(data))
  }, [])
  return (
    <InvestContainer>
      {stockData?.length > 0 ?(
        <>
          <InvestmentsTitle>
            Portfolio Allocation
          </InvestmentsTitle>
          <PieChartWithCustomizedLabel  investmentsPerStor={investmentsPerStor}/>
          {/* <InvestmentsChart stocksPerSectors={investmentsPerStor} /> */}
          <InvestmentsList stockData={stockData} />
        </>
      ):
      (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      )
    }
    </InvestContainer>
  )
}

export default Investments
