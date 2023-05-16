import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HeroStore from "./store/HeroStore";
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Context.Provider value={{
            hero: new HeroStore()
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);
