import React from 'react';
import { Outlet } from 'react-router-dom';
import withView from '../../hoc/withView';

const DashBoard = () => {    
    return (
        <> 
            <Outlet />
        </>
    )
}

export default withView(DashBoard)