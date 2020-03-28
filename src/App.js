import React from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import MomentUtils from '@date-io/moment';
import {Provider as StoreProvider} from 'react-redux';
import {ThemeProvider} from '@material-ui/styles';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {theme} from './theme';
import {configureStore} from './store';
import ScrollReset from './components/ScrollReset';
import StylesProvider from './components/StylesProvider';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/main.scss';
import Home from "./views/home";

const history = createBrowserHistory();
const store = configureStore();

const App = () => (
    <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
            <StylesProvider direction='ltr'>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Router history={history}>
                        <ScrollReset/>
                        <Home/>
                    </Router>
                </MuiPickersUtilsProvider>
            </StylesProvider>
        </ThemeProvider>
    </StoreProvider>
);

export default App;
