import { InputWrapper, StyledInput } from './styles'

const Input = ({ value, placeholder, onChange, label, labelClassName }) => {
  return (
    <InputWrapper>
      {label && <label className={labelClassName}>{label}</label>}
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  )
}

export default Input
