import "./Button.css"


const Button = ({text, link}) => {
    /* These 'variables' ale called props */ 
    return (
        <a href={(link)}>
            <button type="button" className="btn">
                {(text)}
            </button> 
        </a>
    )
}

export default Button
