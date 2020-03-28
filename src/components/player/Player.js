import React, {useEffect, useRef, useState} from "react";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import {makeStyles} from "@material-ui/styles";
import LoadingAudioButton from "./LoadingAudioButton";
import VolumeSlider from "./VolumeSlider";
import Grid from "@material-ui/core/Grid";
import {debounce} from 'lodash';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },

}));

const Player = () => {
    const classes = useStyles();
    const [isPlaying, setIsPlaying] = useState(false);
    const [canPLay, setCanPlay] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const player = useRef();


    useEffect(() => {
        // player.current.onloadstart = () => setIsLoading(true);
        player.current.oncanplay = () => setCanPlay(true);
        player.current.onended = () => setIsPlaying(false);
    }, []);


    useEffect(() => {
        player.current.volume = volume / 100;
    }, [volume]);

    const play = () => {
        player.current.play();
        setIsPlaying(true);
    };
    const pause = () => {
        player.current.pause();
        setIsPlaying(false);
    };

    const debounceSetVolume = debounce(setVolume, 100);

    return (
        <>
            <Grid container>
                <Grid item>
                    {
                        canPLay ?
                            isPlaying ? <PauseButton onClick={() => pause()}/> : <PlayButton onClick={() => play()}/>
                            : <LoadingAudioButton/>
                    }
                </Grid>
                <Grid item>
                    <VolumeSlider onChange={(value) => debounceSetVolume(value)}/>
                </Grid>
            </Grid>
            <audio ref={player}>
                <source src="http://162.244.80.52:8584/stream" type="audio/mp3"/>
            </audio>
        </>
    );
};

export default Player;