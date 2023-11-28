const initialState = {

}

const reducerSwitch = (state,action)=>{
    switch (action.type){
        case 'PANELOPEN':
             return {
                ...state,
                isOpen: true,
             };
        // case 'PANELOPEN':
        //      return {
        //         ...state,
        //         isOpen: true,
        //      };
        // case 'PANELOPEN':
        //      return {
        //         ...state,
        //         isOpen: true,
        //      };
        // case 'PANELOPEN':
        //      return {
        //         ...state,
        //         isOpen: true,
        //      };
    default:
        return{
            ...state
        }
    }
}