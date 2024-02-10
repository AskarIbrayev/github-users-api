import { createPortal } from "react-dom"


const Portal = ({children}: {children: any}) => {
    return createPortal(children, document.body)
}
export default Portal