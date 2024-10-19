import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { CustomModalStyles } from './styles'
import Input from '../../../../../components/input'
import Button from '../../../../../components/button'
import { useState } from 'react'
import { setNotificationsOnStockPriceChange } from '../../../../../API'

const MyModal = ({ open, handleClose, companyKey }) => {
  const [maxGain, setMaxGain] = useState('')
  const [maxLoss, setMaxLoss] = useState('')

  const handleChangeMaxGain = (e) =>{
    setMaxGain(e.target.value)
  }

  const handleChangeMaxLoss = (e) =>{
    setMaxLoss(e.target.value)
  }

  const handleSubmit = () =>{
    setNotificationsOnStockPriceChange({
      "stockIdentifier": companyKey,
      "minPercent": +maxGain,
      "maxPercent": +maxLoss,
    },
    ()=>handleClose()
  )
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CustomModalStyles>
        <Box className={'modal_styles'}>
          <h4 className='title'>Notifications</h4>
          <Box className={'input_container'}>
            <Input label={'Max gain'} value={maxGain} onChange={handleChangeMaxGain} labelClassName={'positive_label'}/>
            <Input label={'Max loss'} value={maxLoss} onChange={handleChangeMaxLoss} labelClassName={'negative_label'}/>
          </Box>
          <Box className={'button_container'}>
            <Button text={'Submit'} onClick={handleSubmit}/>
          </Box>
        </Box>
      </CustomModalStyles>
    </Modal>
  )
}

export default MyModal
