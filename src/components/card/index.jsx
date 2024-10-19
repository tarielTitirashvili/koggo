import {CardWrapper} from './styles.js'

const Card = (props) => {
  const {children} = props
  return (
    <CardWrapper>
      {children}
    </CardWrapper>
  )
}

export default Card