import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore} from "redux"
import {Provider} from "react-redux"
import App from './App'
import './index.css'

const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)

export interface state {
    name:string
}

interface action {
    type: string,
    payload:any
}

function reducer(state:state={name:""}, action:action):state {
    switch(action.type) {
        case "textChange": {
            return {
                ...state,
                name: action.payload
            }
        }
        default:
            return state
    }
}