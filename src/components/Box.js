import "./Box.css";

const Box = ({text, smalltext}) => {
    return(
        <div className="box">
            <p>
                {(text)}
            </p>
            <p id="smaller">
                {(smalltext)}
            </p>
           
        </div>
    )
}

export default Box