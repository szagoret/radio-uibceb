import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import {VolumeDown, VolumeUp} from "@material-ui/icons";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
        width: 230,
        marginTop: 35,
        backgroundColor: '#fff',
        borderRadius: '5px',
        paddingLeft: 15,
        paddingRight: '7px',
        marginLeft: '-10px',
        borderBottom: '1px solid #b9b6b6'
    },
    slider: {
        paddingTop: '0 !important'
    }
});
const VolumeSlider = ({onChange}) => {
    const classes = useStyles();
    const [value, setValue] = useState(50);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item>
                    <VolumeDown/>
                </Grid>
                <Grid item xs className={classes.slider}>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider"/>
                </Grid>
                <Grid item>
                    <VolumeUp/>
                </Grid>
            </Grid>
        </div>
    );
};

export default VolumeSlider;
