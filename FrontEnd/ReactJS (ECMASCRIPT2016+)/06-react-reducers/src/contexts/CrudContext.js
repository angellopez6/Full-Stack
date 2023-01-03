import { createContext, useEffect, useReducer } from "react";
import { TYPES } from "../actions/CrudActions";
import { helpHttp } from "../components/helpers/helpHttp";
import { crudInitialState, crudReducer,  } from "../reducers/CrudReducer";

const CrudContext = createContext();

const CrudProvider = ({children}) => {
    const [state, dispatch] = useReducer(crudReducer, crudInitialState),   
    {db, dataToEdit, error, loading, form} = state;
    let url = 'http://localhost:5000/santos';

    useEffect(() => {
        dispatch({type: TYPES.LOADING_DATA, payload: true});
        helpHttp().get(url).then((res)=>{
            // console.log(res);
            if(!res.err){
                dispatch({type: TYPES.GET_DATA, payload: res})
            }else{
                dispatch({type: TYPES.GET_DATA, payload: null})
            }
        })  
        dispatch({type: TYPES.LOADING_DATA, payload: false});      
    }, [url])

    useEffect(() => {
        if(dataToEdit){
            dispatch({type: TYPES.HANDLE_EDIT, payload:dataToEdit})
        }else{
            dispatch({type: TYPES.HANDLE_EDIT, payload:null})
        }
    }, [dataToEdit]);

    const createData = (data) =>{
        data.id = Date.now();
        // console.log(data)
        let options = {
            body:data, 
            headers:{"content-type":"application/json"}
        }

        helpHttp().post(url,options).then((res)=>{
            // console.log(res);
            if(!res.error){
                dispatch({type: TYPES.CREATE_DATA, payload: res})
            }else{
                dispatch({type: TYPES.SET_ERROR, payload: res})
            }
        })  
    }  
    
    const handleChange = (e) => {
        dispatch({type: TYPES.HANDLE_CHANGE, payload: e})
    }

    const handleReset = (e) => {
        dispatch({type: TYPES.HANDLE_RESET});
        setDataToEdit(null);
    }

    const setDataToEdit = (action) => {
        dispatch({type: TYPES.EDIT_DATA, payload: action})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.name || !form.constellation){
            alert("Datos incompletos");
            return;
        }

        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    }

    const updateData = (data) =>{

        let options = {
            body:data, 
            headers:{"content-type":"application/json"}
        }

        helpHttp().put(url+`/${data.id}`,options).then((res)=>{
            if(!res.error){
                dispatch({type: TYPES.GET_DATA, payload: db.map(el=> el.id === data.id ? data : el)})
            }else{
                dispatch({type: TYPES.SET_ERROR, payload: res})
            }
        })
    }

    const deleteData = (id) =>{
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`)
        
        if(isDelete){
            helpHttp().del(url+`/${id}`).then((res)=>{})
            dispatch({type: TYPES.GET_DATA, payload: db.filter(el => el.id!==id)})
        }else{
            return;
        }
    }

    const data = {
        db,
        dataToEdit,
        error,
        loading,
        createData,
        setDataToEdit,
        form,
        handleChange,
        handleReset,
        handleSubmit,
        deleteData
    }

    return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
}

export {CrudProvider};
export default CrudContext;