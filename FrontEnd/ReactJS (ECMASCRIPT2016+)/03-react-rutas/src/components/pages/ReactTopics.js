import React from 'react'
import { Link, Switch, Route, useRouteMatch, useParams} from 'react-router-dom'

const Topic = () =>{
    let {topic} = useParams();


    return (
        <div>
            <h4>
                {
                    topic
                }
            </h4>
            <p>
                Algo de contenido por acá xd.....
            </p>
        </div>
    );
};

const ReactTopics = () => {
    // let match = useRouteMatch();
    // console.log(match)

    // el path nos va a permitir construir rutas relativas,
    //  mientras que url nos va a permitir construir enlaces relativos.

    let {path, url} = useRouteMatch();

    return (
        <div>
            <h3>Temas de React</h3>
            <ul>
            <li>
                <Link to={`${url}/jsx`}>JSX</Link>
            </li>
            <li>
                <Link to={`${url}/props`}>Prosp</Link>
            </li>
            <li>
                <Link to={`${url}/estado`}>Estado</Link>
            </li>
            <li>
                <Link to={`${url}/componentes`}>componentes</Link>
            </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h4>Elije un tema de React</h4>
                    <p>Lo que sea lorem ipsu</p>
                </Route>
                <Route path={`${path}/:topic`} component={Topic} />
                   
            </Switch>
        </div>
    )
}

export default ReactTopics;
