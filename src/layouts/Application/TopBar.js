/* eslint-disable no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {useHistory} from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {useDispatch} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import {AppBar, Button, colors, Hidden, IconButton, Toolbar} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'src/utils/axios';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
    },
    flexGrow: {
        flexGrow: 1
    },
    search: {
        backgroundColor: 'rgba(255,255,255, 0.1)',
        borderRadius: 4,
        flexBasis: 300,
        height: 36,
        padding: theme.spacing(0, 2),
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        marginRight: theme.spacing(2),
        color: 'inherit'
    },
    searchInput: {
        flexGrow: 1,
        color: 'inherit',
        '& input::placeholder': {
            opacity: 1,
            color: 'inherit'
        }
    },
    searchPopper: {
        zIndex: theme.zIndex.appBar + 100
    },
    searchPopperContent: {
        marginTop: theme.spacing(1)
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    chatButton: {
        marginLeft: theme.spacing(1)
    },
    notificationsButton: {
        marginLeft: theme.spacing(1)
    },
    notificationsBadge: {
        backgroundColor: colors.orange[600]
    },
    logoutButton: {
        marginLeft: theme.spacing(1)
    },
    logoutIcon: {
        marginRight: theme.spacing(1)
    }
}));

function TopBar({
                    onOpenNavBarMobile,
                    className,
                    ...rest
                }) {
    const classes = useStyles();
    const history = useHistory();
    const searchRef = useRef(null);
    const dispatch = useDispatch();
    const notificationsRef = useRef(null);
    const [openSearchPopover, setOpenSearchPopover] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [openNotifications, setOpenNotifications] = useState(false);
    const [openChatBar, setOpenChatBar] = useState(false);
    const [pricingModalOpen, setPricingModalOpen] = useState(false);

    const handleLogout = () => {
        history.push('/auth/login');
        // dispatch(logout());
    };

    const handlePricingModalOpen = () => {
        setPricingModalOpen(true);
    };

    const handlePricingModalClose = () => {
        setPricingModalOpen(false);
    };

    const handleChatBarOpen = () => {
        setOpenChatBar(true);
    };

    const handleChatBarClose = () => {
        setOpenChatBar(false);
    };

    const handleNotificationsOpen = () => {
        setOpenNotifications(true);
    };

    const handleNotificationsClose = () => {
        setOpenNotifications(false);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);

        if (event.target.value) {
            if (!openSearchPopover) {
                setOpenSearchPopover(true);
            }
        } else {
            setOpenSearchPopover(false);
        }
    };

    const handleSearchPopverClose = () => {
        setOpenSearchPopover(false);
    };

    useEffect(() => {
        let mounted = true;

        const fetchNotifications = () => {
            axios.get('/api/account/notifications').then((response) => {
                if (mounted) {
                    setNotifications(response.data.notifications);
                }
            });
        };

        fetchNotifications();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <AppBar{...rest} className={clsx(classes.root, className)} color="primary">
            <Toolbar>
                <Hidden lgUp>
                    <IconButton className={classes.menuButton} color="inherit" onClick={onOpenNavBarMobile}>
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
                <RouterLink to="/">
                    <img alt="Logo" width="100px" src="/images/logos/fasolit-logo.png"/>
                </RouterLink>
                <div className={classes.flexGrow}/>
                <Button className={classes.logoutButton} color="inherit" onClick={handleLogout}>
                    <InputIcon className={classes.logoutIcon}/>
                    Sign out
                </Button>
            </Toolbar>
        </AppBar>
    );
}

TopBar.propTypes = {
    className: PropTypes.string,
    onOpenNavBarMobile: PropTypes.func
};

export default TopBar;
