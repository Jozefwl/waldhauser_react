import "./Box.css";

const Box = ({text, smalltext},{children}) => {
    return(
        <div className="box">
            <p>
                {(text)}
            </p>
            <p id="smaller">
                {(smalltext)}
            </p>
           {children}
        </div>       
    )
}

export default Box