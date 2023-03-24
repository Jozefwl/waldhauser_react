import "./Box.css";

const BoxClr = ({color, children}) => {
    let Colorpicker = (colour) =>{
    if(colour == "white"){
        return("boxWht");
    }
    if(colour == "black"){
        return("boxBlk");
    }
    if(colour == "grey"){
        return("boxGry");
    }
    if(colour == "carbon"){
        return("boxCrb");
    }

}
    return(
        <div className={Colorpicker(color)}>
            {children}
        </div>       
    )
}

export default BoxClr