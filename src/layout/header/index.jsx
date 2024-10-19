import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
// import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { MenuIconContainer, NavContainer } from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
// import { useNavigate } from 'react-router-dom';
import useHistory from './useHistory'

export default function Header() {
  const [state, setState] = React.useState({
    top: false,
  })

  const history = useHistory()

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <NavContainer>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>history.push('/investments')}>
              <ListItemIcon>
                <TrendingUpIcon className='icon-color' />
              </ListItemIcon>
              <h3 className='text'>Investments</h3>
            </ListItemButton>
          </ListItem>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon className='icon-color' /> : <MailIcon className='icon-color' />}
                </ListItemIcon>
                <h3 className='text'>{text}</h3>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider className='divider_styles' />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon className='icon-color' /> : <MailIcon className='icon-color' />}
                </ListItemIcon>
                <h3 className='text'>{text}</h3>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </NavContainer>
    </Box>
  )

  return (
    <div className='header_bg_image' style={{padding: '12px 0 0 12px'}}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIconContainer onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className='burger-menu' />
          </MenuIconContainer>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
