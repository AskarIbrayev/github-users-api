interface AlertProps {
    type: 'error' | 'info' | 'warning' | 'success',
    alertText: string
}
const AlertInline = ({type, alertText}: AlertProps) => {
    return <p className={`alert ${type}`}>{alertText}</p> 
}
export default AlertInline