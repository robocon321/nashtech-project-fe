import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import { FaProductHunt, FaShoppingCart, FaMoneyBillWave, FaHeart, FaUserAlt } from 'react-icons/fa';
import { AiFillDashboard, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Sidebar = (props) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={props.open}>
    <DrawerHeader>
      <IconButton onClick={props.handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to='/admin/dashboard'>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <AiFillDashboard />
          </ListItemIcon>
          <ListItemText primary='Dashboard' sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
    
    <Divider />

    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to='/admin/products'>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <FaProductHunt />
          </ListItemIcon>
          <ListItemText primary='Products' sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to='/admin/carts'>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <FaShoppingCart />
          </ListItemIcon>
          <ListItemText primary='Carts' sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to='/admin/transactions'>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <FaMoneyBillWave />
          </ListItemIcon>
          <ListItemText primary='Transactions' sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to='/admin/wishlists'>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <FaHeart />
          </ListItemIcon>
          <ListItemText primary='Wishlist' sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to='/admin/users'>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <FaUserAlt />
          </ListItemIcon>
          <ListItemText primary='Users' sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
    
    <Divider />
    
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to='/admin/settings'>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <AiFillSetting />
          </ListItemIcon>
          <ListItemText primary='Settings' sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to='/admin/logout'>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <AiOutlineLogout />
          </ListItemIcon>
          <ListItemText primary='Logout' sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>

  </Drawer>

  )
}

export default Sidebar;