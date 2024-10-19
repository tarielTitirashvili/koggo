import { DotsButton } from './styles'

const DotsIconButton = ({onClick}) => {
  return (
    <DotsButton onClick={onClick}>
      <span className='text_dots'>
        ...
      </span>
    </DotsButton>
  )
}

export default DotsIconButton