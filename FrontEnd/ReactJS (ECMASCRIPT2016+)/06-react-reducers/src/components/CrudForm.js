import React,{useContext} from 'react';
import CrudContext from '../contexts/CrudContext';

const CrudForm = () => {
    const { dataToEdit, form, handleChange , handleReset, handleSubmit} = useContext(CrudContext);
    return (
        <div>
            <h3>{dataToEdit ? "Editar" : "Agrega"}</h3>
            <form onSubmit={handleSubmit}>
            <input type="text"  name="name"  placeholder="Nombre" onChange={handleChange} value={form.name}/>
            <input  type="text"  name="constellation"  placeholder="Constelación" onChange={handleChange} value={form.constellation}/>
            <input type="submit" value="Enviar" onSubmit={handleSubmit} />
            <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
}
export default CrudForm;

