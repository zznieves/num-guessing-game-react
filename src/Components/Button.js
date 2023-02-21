import React from "react";

function Button(props) {

    // return JSX (HTML in a JavaScript file)
    return (

        // React.Fragment allows us to ommit enclosing div Node from DOM tree when rendered
        <React.Fragment>
            <button type={props.type}>{props.text}</button>
        </React.Fragment>
    );
}


// export the Component to be used in another file
export default Button;