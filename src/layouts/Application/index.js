import React, {Suspense} from 'react';
import {renderRoutes} from 'react-router-config';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {LinearProgress} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        display: 'flex',
        '@media all and (-ms-high-contrast:none)': {
            height: 0 // IE11 fix
        }
    },
    content: {
        paddingTop: 64,
        flexGrow: 1,
        maxWidth: '100%',
        overflowX: 'hidden',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 256
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: 56
        }
    }
}));

function Dashboard({route}) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <div className={classes.content}>
                    <Suspense fallback={<LinearProgress/>}>
                        {renderRoutes(route.routes)}
                    </Suspense>
                </div>
            </div>
        </>
    );
}

Dashboard.propTypes = {
    route: PropTypes.object
};

export default Dashboard;
