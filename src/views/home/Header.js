import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Container} from '@material-ui/core';
import Player from "../../components/player/Player";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {},
    siteTitle: {
        paddingTop: 150
    },
    cover: {
        position: 'relative',
        height: 360,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        '&:before': {
            position: 'absolute',
            content: '" "',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage: 'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)'
        },
        '&:hover': {
            '& $changeButton': {
                visibility: 'visible'
            }
        }
    },
    container: {
        padding: theme.spacing(2, 3),
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    }
}));

const Header = ({className, ...rest}) => {
    const classes = useStyles();
    return (
        <div{...rest} className={clsx(classes.root, className)}>
            <div className={classes.cover} style={{backgroundImage: `url(/images/cover.jpg)`}}>
                <Container>
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center">
                        <Typography component="h3" variant="h3" className={classes.siteTitle}>
                            <span style={{backgroundColor: '#fff', padding: '10px'}}>Radio Adunarea Nr.2 Chisinau</span>
                        </Typography>
                    </Grid>
                </Container>
            </div>
            <Container maxWidth="lg" className={classes.container}>
                <div style={{marginTop: '-64px'}}>
                    <Player/>
                </div>
            </Container>
        </div>
    );
};

Header.propTypes = {
    className: PropTypes.string
};

export default Header;
