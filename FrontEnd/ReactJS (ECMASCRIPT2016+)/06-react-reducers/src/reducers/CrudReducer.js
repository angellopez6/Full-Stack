import {TYPES} from "../actions/CrudActions";

export const crudInitialState = {
        db: null,
        dataToEdit: null,
        error: null,
        loading: false,
        form: {
            name: "",
            constellation: "",
            id:null,
        }
}

export function crudReducer(state, action){
    switch (action.type) {

        case TYPES.LOADING_DATA:
            {
                return {
                    ...state,
                    loading: action.payload
                }
            }

        case TYPES.GET_DATA:
        {
            return {
                ...state,
                 db: action.payload
            }
        }

        case TYPES.CREATE_DATA:
        {
            return {
                ...state,
                db: [...state.db, action.payload]
            }
        }

        case TYPES.EDIT_DATA:
        {
            let isEdit = action.payload;
            return isEdit 
            ? {
                ...state,
                dataToEdit: action.payload
            }
            : {
                ...state,
                dataToEdit: null
            }
        }

        case TYPES.SET_ERROR:
        {
            return {
                ...state,
                error: action.payload
            }
        }

        case TYPES.HANDLE_CHANGE: {
            return {
                ...state,
                form:{...state.form, [action.payload.target.name]: action.payload.target.value}
            }
        }

        case TYPES.HANDLE_RESET: {
            return {
                ...state,
                form: crudInitialState.form
            }
        }

        case TYPES.HANDLE_EDIT: {
            let isEdit = action.payload;
            return isEdit 
            ? {
                ...state,
                form: isEdit
            }
            : {
                ...state,
                form: crudInitialState.form
            }
        }

        default: return state;
    }
}
