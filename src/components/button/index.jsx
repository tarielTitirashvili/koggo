import { StyledButton } from './styles'

const Button = ({onClick, text, disabled}) => {
  return <StyledButton  onClick={onClick} disabled={disabled}>{text}</StyledButton>
}

export default Button