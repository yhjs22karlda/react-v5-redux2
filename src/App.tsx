import './App.css'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import type {state} from "./main"

export default function App() {
    const dispatch = useDispatch()

    function handleKeyDown(e:any) {
        if(e.key === "Enter") {
            dispatch(textChange(e.target.value))
        console.log(e)
        }
    }
    return (
        <>
        <div className="app">
            <input onKeyDown={handleKeyDown} />
        </div>
        <Output />
        </>
    )
}

function Output() {
    let message = useSelector((state:state) => state.name)
    return <p>Your message: {message}</p>
}

const textChange = (text:string) => {
    return {
        type: "textChange",
        payload: text
    }
}