import React from 'react'


const Layout = (props) => {
    return props.name ? (
        <div>
            {props.name}
        </div>
        
    ): null;
}

export default Layout;