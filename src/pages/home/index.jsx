import Card from '../../components/card'
import { CardWrapper, TitleWrapper } from './styles'
import card1 from '../../assets/creditCard1.svg'
import card2 from '../../assets/creditCard2.svg'
// import CreditCard1 from '../../icons/cards/creitCar1/index.'

const Home = () => {
  return (
    <div>
      <Card>
        <TitleWrapper>
          <h3 className='text'>
            Balance
          </h3>
          <div className='balance-container'>
            <p className='text-amount'>
              994.21
            </p>
            <p className='text'>
              ₾
            </p>
          </div>
        </TitleWrapper>
        <div>
          <CardWrapper>
            <img src={card1} className="credit_card" />
            <div>
              <h4 className="text">Card</h4>
              <h4 className="text_secondary">Student Card</h4>
            </div>
          </CardWrapper>
          <CardWrapper>
            <img src={card2} className="credit_card" />
            <div>
              <h4 className="text">Card</h4>
              <h4 className="text_secondary">Student Card</h4>
            </div>
          </CardWrapper>
        </div>
      </Card>
      <div style={{height: '800px'}}>

      </div>
    </div>
  )
}

export default Home
