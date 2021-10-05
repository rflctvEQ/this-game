import * as React from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Helmet from 'react-helmet';

function LoadingScreenPage() {
    return (
        <>
            <Helmet>
                <title>Loading</title>
                <meta http-equiv='refresh' content='11; url=/welcome' />
            </Helmet>
            <LoadingScreen/>
        </>
    )
}

export default LoadingScreenPage;