import styled from 'styled-components'

export const InvestmentsListItemWrapper = styled.div`
display: flex;
align-items: center;
gap: 12px;
width: 90%;
.investments_container{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.icon{
  border-radius: 100%;
  width: 36px;
  height: 36px;
  object-fit: cover;
}
.text{
  font-size: 1rem;
  color: var(--classics-text);
}
.text_secondary{
  font-size: 0.8rem;
  color: var(--classic-text-secondary);
}
.dots_icon_styles{
  width: 16px;
  height: 8px;
  fill: var(--classic-text-secondary);
}
.price_change_styles{
  display: flex;
}
.price_change_negative{
  color: var(--negative-change);
}
.price_change_positive{
  color: var(--positive-change);
}
.price_styles{
  text-align: end;
}
.price_change_zero{
  color: var(--classics-text);
}
`