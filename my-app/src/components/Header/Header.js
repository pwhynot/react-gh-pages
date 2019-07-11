import React from 'react';
import './style.css'
const style = {
    HeaderStyle: {
        marginTop: 0,
        height: "22vh",
        textAlign: "center",
        width: "100%",
    }
}
function Header() {
    return (<div style={style.HeaderStyle} className='headerDiv'>
        <div><h2>Ghostbusters Clicky Game!</h2></div>
        <h2 id="instructions">Click an image to gain points, click the same image twice game over!.</h2>
    </div >
    );
}
export default Header;