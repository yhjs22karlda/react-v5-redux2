import React from 'react'
import ReactDOM from 'react-dom/client'
import {legacy_createStore as createStore} from "redux"
import {Provider} from "react-redux"
import App from './App'

const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

export interface state {
    text:string
}

interface action {
    type: string,
    payload:any
}

function reducer(state:state={text:""}, action:action):state {
    switch(action.type) {
        case "textChange": {
            return {
                ...state,
                text: action.payload
            }
        }
        default:
            return state
    }
}