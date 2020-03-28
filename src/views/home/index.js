import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {colors, Container} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Blockquote from "../../components/blockquote/Blockquote";

const useStyles = makeStyles((theme) => ({
    root: {},
    container: {
        marginTop: theme.spacing(3)
    },
    divider: {
        backgroundColor: colors.grey[300]
    },
    content: {
        marginTop: theme.spacing(3)
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Page className={classes.root} title="Radio Adunarea Nr.2 Chisinau">
            <Header/>
            <Container maxWidth="md">
                <Blockquote/>
            </Container>
        </Page>
    );
};
export default Home;
