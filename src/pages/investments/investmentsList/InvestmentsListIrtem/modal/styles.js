import styled from 'styled-components'

export const CustomModalStyles = styled.div`
  .modal_styles{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    background-color: var(--classic-bg);
    border: 2px solid var(--classic-text);
    box-shadow: 24px;
    padding: 16px;
    border-radius: 12px;
  }
  .input_container{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .negative_label{
    color: var(--negative-change);
  }
  .positive_label{
    color: var(--positive-change);
  }
  .title{
    color: var(--classic-text);
    margin-bottom: 32px;
  }
  .button_container{
    padding-top: 24px;
    display: flex;
    justify-content: flex-end;
  }
`