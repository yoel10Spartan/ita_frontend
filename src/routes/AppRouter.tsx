import React, { useEffect } from 'react';
import {
    // BrowserRouter,
    Routes,
    Route,
    HashRouter
} from "react-router-dom";
import { useAppDispatch } from '../components/hooks/useRedux';
import DashEvaluation from '../components/layout/Evaluation/DashEvaluation/DashEvaluation';
import Exercises from '../components/layout/Evaluation/DashEvaluation/Exercises';
import Students from '../components/layout/Evaluation/DashEvaluation/Students';
import EvaluationContainer from '../components/layout/Evaluation/EvaluationContainer/EvaluationContainer';
import Home from '../components/layout/Home/Home';
import Material from '../components/layout/Material/Material';
import Auth from '../components/views/Auth/Auth';
import DashBoard from '../components/views/DashBoard/DashBoard';
import { authRefreshData } from '../statement/actions/users';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const AppRouter = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch( authRefreshData() );
    }, [dispatch]);
    
    return (
        <HashRouter>
            <Routes>
                <Route path='/auth' element={
                    <PublicRouter>
                        <Auth /> 
                    </PublicRouter>
                } />
                
                <Route path='/' element={
                        <PrivateRouter>
                            <DashBoard /> 
                        </PrivateRouter>
                    }>
                        <Route path='evaluation' element={
                            <EvaluationContainer /> 
                        } />
                        <Route path='material' element={
                            <Material /> 
                        } />
                        <Route path='home' element={
                            <Home /> 
                        } />
                </Route>
                    <Route path='dash_evaluation' element={
                        <PrivateRouter>
                            <DashEvaluation /> 
                        </PrivateRouter>
                    }>
                        <Route path='exercises/:id' element={<Exercises />} />
                        <Route path='students/:id' element={<Students />} />
                    </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRouter