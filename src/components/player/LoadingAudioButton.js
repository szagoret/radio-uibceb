import React from "react";
import {IconButton} from "@material-ui/core";
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

import {makeStyles} from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import {green} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        padding: 1,
        '&:hover': {
            backgroundColor: '#fff'
        },
        borderBottom: '1px solid #b9b6b6'
    },
    wrapper: {
        position: 'relative',
        marginTop: -98,
        marginLeft: -3,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
    }
}));
const LoadingAudioButton = () => {
    const classes = useStyles();
    return (
        <>
            <IconButton color="primary" className={classes.root}>
                <VolumeOffIcon style={{fontSize: 95}}/>
            </IconButton>
            <div className={classes.wrapper}>
                <CircularProgress size={100} className={classes.buttonProgress} thickness={3}/>
            </div>
        </>
    );
};

export default LoadingAudioButton;