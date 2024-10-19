import styled from 'styled-components'

export const CardWrapper = styled.div`
display: flex;
align-items: center;
gap: 8px;
.text{
  font-size: 1.5rem;
  color: var(--classics-text);
}
.text_secondary{
  font-size: 1.5rem;
  color: var(--classic-text-secondary);
}
.credit_card{
  height: 75px;
  margin: 19px 0 0 12px;
  text-transform: uppercase;
}
`

export const TitleWrapper = styled.div`
padding: 12px;
display: flex;
flex-direction: column;
gap: 8px;
.text{
  font-size: 1.2rem;
  color: var(--classic-text-secondary);
}
.text-amount{
  font-size: 1.5rem;
  color: var(--classics-text);
}
.balance-container{
  display: flex;
  align-items: flex-end;
}
`