import React,{ useEffect, useContext} from 'react';
import CrudContext from '../context/CrudContext';

const CrudForm = () => {
    const {createData, updateData, dataToEdit, setDataToEdit, form, initialForm, setForm} = useContext(CrudContext);

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    }, [dataToEdit,initialForm,setForm]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value, 
        })
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

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }

    return (
        <div>
            <h3>{dataToEdit ? "Editar" : "Agrega"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="name" 
                placeholder="Nombre"
                onChange={handleChange}
                value={form.name}
                />
                <input 
                type="text" 
                name="constellation" 
                placeholder="Constelación"
                onChange={handleChange}
                value={form.constellation}
                />
                <input type="submit"
                value="Enviar"
                onSubmit={handleSubmit}
                />
                <input type="reset"
                value="Limpiar"
                onClick={handleReset}
                />
            </form>
        </div>
    )
}

export default CrudForm;

