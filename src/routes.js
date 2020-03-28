/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, {lazy} from 'react';

export default [
    {
        path: '/',
        component: () => lazy(() => import('src/views/home'))
    }
];
