import React from "react";
import {IconButton} from "@material-ui/core";
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        padding: 1,
        '&:hover': {
            backgroundColor: '#fff',
        },
        borderBottom: '1px solid #b9b6b6'
    }
}));
const PauseButton = ({onClick}) => {
    const classes = useStyles();
    return (
        <IconButton color="primary" className={classes.root} onClick={() => onClick()}>
            <PauseCircleFilledIcon style={{fontSize: 95}}/>
        </IconButton>
    );
};

export default PauseButton;