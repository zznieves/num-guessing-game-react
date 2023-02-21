import React from 'react';


function Header(props) {

    // return JSX (HTML in a JavaScript file)
    return (
        <div id='header'>
            <h1>{props.title}</h1>
        </div>
    );
}

// export the Component to be used in another file
export default Header;