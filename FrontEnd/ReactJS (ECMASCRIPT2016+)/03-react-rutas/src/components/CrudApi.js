import React,{useState, useEffect} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';
import { HashRouter, NavLink, Route, Switch} from 'react-router-dom';
import Error404 from './pages/Error404';

const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp(),
        url = 'http://localhost:5000/santos';

    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then((res)=>{
            // console.log(res);
            if(!res.err){
                setDb(res);
                setError(null);
            }else{
                setDb(null);
                setError(res.err);
            }

            setLoading(false);
        })
    }, [url])

    const createData = (data) =>{
        data.id = Date.now();
        // console.log(data)
        let options = {
            body:data, 
            headers:{"content-type":"application/json"}
        }
        api.post(url,options).then((res)=>{
            console.log(res);
            if(!res.error){
                setDb([...db,res]);
            }else{
                setError(res);
            }
        })
        
    }   

    const updateData = (data) =>{

        let options = {
            body:data, 
            headers:{"content-type":"application/json"}
        }

        api.put(url+`/${data.id}`,options).then((res)=>{
            console.log(res);
            if(!res.error){
                setDb(()=> db.map(el=> el.id === data.id ? data : el));
            }else{
                setError(res);
            }
        })
        // setDb(() => db.map(el=> el.id === data.id ? data : el));
    }

    const deleteData = (id) =>{
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`)
        
        if(isDelete){
            helpHttp().del(url+`/${id}`).then((res)=>{
                console.log(res);
            })
            setDb(() => db.filter(el => el.id!==id));
        }else{
            return;
        }

    }

    return (
        <div>
            <HashRouter basename="santos">
            <header>
                <h2>CRUD API con Rutas</h2>
                <nav>
                <NavLink to="/" activeClassName="active">Santos</NavLink>
                <NavLink to="/agregar" activeClassName="active">Agregar</NavLink>
                </nav>
            </header>
            <Switch>
            <Route exact path="/">
            {loading && <Loader/>}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}

           {db &&
                <CrudTable 
                data={db} 
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                />
           }
            </Route>
            <Route exact path="/agregar">
                <CrudForm 
                createData={createData} 
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit} />
            </Route>
            <Route exact path="/editar/:id">
                <CrudForm 
                createData={createData} 
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit} />
            </Route>
            <Route path="*" children={<Error404/>}></Route>
            </Switch>
            </HashRouter>
            <h2>CRUD API</h2>
            <article className="grid-1-2">
 
            </article>
        </div>
    )
}

export default CrudApi;
;

