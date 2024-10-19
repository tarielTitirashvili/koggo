import styled from 'styled-components'

export const DotsButton = styled.div`
display: flex;
align-items: center;
position: relative;
.text_dots{
  position: absolute;
  bottom: -6px;
  font-size: 2rem;
  color: var(--classic-text);
  text-align: center;
  user-select: none;
  cursor: pointer;
}
`