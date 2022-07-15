import {styled, Switch} from "@mui/material";

const SwitchButton = styled(Switch)(({theme}) => ({
  marginLeft: "auto",
  width: 28,
  height: 12,
  padding: 0,
  display: 'flex',

  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 12,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },

  '& .MuiSwitch-switchBase': {
    padding: 1,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },

  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 10,
    height: 10,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },

  '& .MuiSwitch-track': {
    borderRadius: 12 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .35)' : 'rgba(0, 0, 0, .25)',
    boxSizing: 'border-box',
  },
}));

export default SwitchButton;
