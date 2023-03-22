import "./Button.css"
import { Link } from 'react-router-dom'

const Button = ({text, link}) => {
    /* These 'variables' ale called props */ 
    return (
        <Link to={(link)}>
            <button type="button" className="btn">
                {(text)}
            </button> 
        </Link>
    )
}

export default Button
