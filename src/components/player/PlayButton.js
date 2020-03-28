import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        padding: 1,
        '&:hover': {
            backgroundColor: '#fff'
        },
        borderBottom: '1px solid #b9b6b6'
    }
}));
const PlayButton = ({onClick}) => {
    const classes = useStyles();
    return (
        <IconButton color="primary" className={classes.root} onClick={() => onClick()}>
            <PlayCircleFilledIcon style={{fontSize: 95}}/>
        </IconButton>
    );
};

export default PlayButton;