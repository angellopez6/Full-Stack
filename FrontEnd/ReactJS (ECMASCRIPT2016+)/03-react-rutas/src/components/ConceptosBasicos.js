import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, HashRouter, Link} from 'react-router-dom';
import MenuConceptos from './MenuConceptos';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Login from './pages/Login';
import PooPractica from './pages/PooPractica';
import Productos from './pages/Productos';
import ReactTopics from './pages/ReactTopics';
import Usuario from './pages/Usuario';
import PrivateRoute from './PrivateRoute';

const ConceptosBasicos = () => {
    return (
        <div>    
            <h2>Hash Router</h2>
            {/* Rutas amigables */}
            <HashRouter>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/acerca">Acerca</Link>
                <Link to="/contacto">Contacto</Link>
            </nav> */}
            <MenuConceptos/>
            <Switch>
            <Route exact path="/" component={Home} />
                <Route exact path="/acerca" component={Acerca} />
                <Route exact path="/contacto" component={Contacto} />
                <Route exact path="/usuario/:username" component={Usuario} />
                <Route exact path="/productos" component={Productos} />
                <Route exact path="/about">
                    {/* Esto es una redirección, si no encuentra la ruta redirecciona. */}
                <Redirect to="/acerca" />
                </Route>
                <Route exact path="/contact">
                <Redirect to="/contacto" />
                </Route>
                <Route path="/react" component={ReactTopics} />
                <Route exact path="/poo" component={PooPractica} />
                <Route exact path="/login" component={Login} /> 
                {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                <PrivateRoute exact path="/dashboard" component={Dashboard}  />
                 {/* El comodín * lo que hace es decirle al switch que si no coincidio con ninguna ruta exacta pues carge el componente error
                , es importante que esté al final del Switch y que no tenga la propiedad exact. */}
                <Route path="*" component={Error404} />
            </Switch>
            </HashRouter>
            <hr/>
            <h2>Conceptos Básicos</h2>
            <Router> 
                {/* Siempre se pone los Links fuera del Switch */}
            <MenuConceptos/>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/acerca" component={Acerca} />
                <Route exact path="/contacto" component={Contacto} />
                <Route exact path="/usuario/:username" component={Usuario} />
                <Route exact path="/productos" component={Productos} />
                <Route exact path="/about">
                    {/* Esto es una redirección, si no encuentra la ruta redirecciona. */}
                <Redirect to="/acerca" />
                </Route>
                <Route exact path="/contact">
                <Redirect to="/contacto" />
                </Route>
                <Route path="/react" component={ReactTopics} />
                <Route exact path="/poo" component={PooPractica} />
                <Route exact path="/login" component={Login} /> 
                {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                <PrivateRoute exact path="/dashboard" component={Dashboard}  />
                 {/* El comodín * lo que hace es decirle al switch que si no coincidio con ninguna ruta exacta pues carge el componente error
                , es importante que esté al final del Switch y que no tenga la propiedad exact. */}
                <Route path="*" component={Error404} />
                </Switch>  
            </Router>
        </div>
    )
}

export default ConceptosBasicos;



// ++++++++++++++  A partir de acá es la función vieja que aprendimos ++++++++++++++
// // Por buenas prácticas colocarle un alias a BrowserRouter de "Router"
// // El browserRouter es el router para react de la web.
// const ConceptosBasicos = () => {
//     return (
//         <div>
//             <h2>Conceptos Básicos</h2>
//             <Router> 
//                 {/* Para poder definir una ruta yo debo de utilizar Route */}
//                 {/* Las rutas, son componentes que resiven muchas propiedades */}
//                 {/* El componente Switch trabaja como un Switch case en javascript, renderiza la ruta data en específico...  */}
//                 {/* La propiedad exact le dice al switch que tiene que ser la ruta exacta sin necesidad de ordenar de lo más específico a lo más genérico... */}
//                 {/* Hay una mejor manera de manejar el contenedor Route para no hacerlo tan verboso y es con la propiedad component={?componente} */}
//                 <Switch>
//                 <Route exact path="/">
//                 <h3>Home</h3>
//                 <p>Bienvenido al tema de las rutas en React</p>
//                 </Route> 
//                 <Route exact path="/acerca">
//                 <Acerca/>
//                 </Route>
//                 {/* Esta es la mejor manera... en una sóla línea, o usando las props children que es el contenido que está dentro de un componente. */}
//                 {/* <Route exact path="/contacto" component={Contacto} /> */}
//                 <Route exact path="/contacto" children={<><Contacto/><p>lorem</p></>} />
//                 </Switch>    
//             </Router>
//         </div>
//     )
// }

// export default ConceptosBasicos;
