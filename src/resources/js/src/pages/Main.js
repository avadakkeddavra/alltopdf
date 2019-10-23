import * as React from "react";
import {createStyles, withStyles} from "@material-ui/core";
import useAuth from "../hooks/useAuth";
import Preloader from "../Components/Common/Preloader";
import Router from "../Components/Common/Router";
import TopBar from "../Components/Common/TopBar";

const styles = (theme) => createStyles({
    container: {
        padding: '0px 30px'
    },
    root: {
        display: 'flex',
        height: 'calc(100vh - 100px)',
        marginTop: 10
    },
    sidebar: {
        width: 50
    },
    main: {
        width: '100%',
        padding: '0px 50px',
        [theme.breakpoints.down(1250)]: {
            paddingRight: '0px'
        },
    },
    content: {
        boxSizing: 'border-box'
    }
});

const Main = (props) => {
    const {classes,
        history: {
            location: { pathname },
        },
        history
    } = props;

    const auth = useAuth(history);

    return  (
        <>
            {auth.token === ''
                ? <Preloader/>

                : <div className={classes.container}>
                    <div className={classes.root}>
                        <main className={classes.main}>
                            <div className={classes.content}>
                                <TopBar/>
                                <Router history={history} />
                            </div>
                        </main>
                    </div>
                </div>
            }
        </>
    );
}
export default withStyles(styles)(Main)
