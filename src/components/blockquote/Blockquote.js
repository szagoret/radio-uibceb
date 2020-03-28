import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginBottom: 120
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    bible: {
        padding: 15
    },
    verse: {
        paddingLeft: 13,
        borderLeft: '5px solid #3f51b5'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 300,
    }
}));

const Blockquote = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" className={classes.bible}>
                        Biblia
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.verse}>
                        Căci n-avem un Mare Preot care să n-aibă milă de slăbiciunile noastre, ci Unul care în toate lucrurile a fost ispitit ca şi
                        noi, dar fără păcat. Să ne apropiem, dar, cu deplină încredere de scaunul harului, ca să căpătăm îndurare şi să găsim har,
                        pentru ca să fim ajutaţi la vreme de nevoie.
                    </Typography>
                </CardContent>
                <CardActions>
                    Evrei 4:15,16
                </CardActions>
            </div>
            <Hidden xsDown>
                <CardMedia className={classes.cover} image="/images/Bible.jpg"/>
            </Hidden>
        </Card>
    );
};

export default Blockquote;