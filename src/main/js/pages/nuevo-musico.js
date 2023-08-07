const React = require("react");
const {Link} = require("react-router-dom");


function PageNuevoMusico(){
    return(
        <>
            <h1>Nuevo Musico</h1>
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageNuevoMusico