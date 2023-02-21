import React from "react";

function Input(props) {

    // return JSX (HTML in a JavaScript file)
    return (

        // React.Fragment allows us to ommit enclosing div Node from DOM tree when rendered
        <React.Fragment>
            <input type={props.type} min={props.min} max={props.max} />
        </React.Fragment>
    );
}


// export the Component to be used in another file
export default Input;