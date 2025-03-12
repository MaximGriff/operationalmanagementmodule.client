import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';

import './App.css';
import MainPage from './components/MainPage';

import GanttUnity from './components/DiagrammGantt'


function App() {
    

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/gantt" element={<GanttUnity />} />
                    </Routes>


                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;