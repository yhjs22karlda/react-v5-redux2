import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {state} from "./main"

export default function App() {
    const dispatch = useDispatch()

    function handleKeyDown(e:any) {
        if(e.key === "Enter") {
            dispatch(textChange(e.target.value))
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
    let message = useSelector((state:state) => state.text)
    return <p>Your message: {message}</p>
}

const textChange = (text:string) => {
    return {
        type: "textChange",
        payload: text
    }
}