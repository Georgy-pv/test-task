

const SET_CHECK = 'SET-CHECK';
const SET_COLOR = 'SET-COLOR';
const SET_SELECTED_ELEMENT = 'SET-SELECTED-ELEMENT';
const SET_HIDDING = 'SET_HIDDING';
const SET_DEFAULT_SELECTED_ELEMENTS = 'SET_DEFAULT_SELECTED_ELEMENTS';



let initialState = {
    selectedColor: 0,
    allElements: [
        {id: 0, color: 1, hidden: true},
        {id: 1, color: 2, hidden: true},
        {id: 2, color: 1, hidden: true},
        {id: 3, color: 2, hidden: true},
        {id: 4, color: 3, hidden: true},
        {id: 5, color: 4, hidden: true},
        {id: 6, color: 3, hidden: true},
        {id: 7, color: 4, hidden: true},
        {id: 8, color: 5, hidden: true},
        {id: 9, color: 6, hidden: true},
        {id: 10, color: 5, hidden: true},
        {id: 11, color: 6, hidden: true},
        {id: 12, color: 7, hidden: true},
        {id: 13, color: 8, hidden: true},
        {id: 14, color: 7, hidden: true},
        {id: 15, color: 8, hidden: true}
    ] ,
    selectedElement: '',
    check: false
}




const gameDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHECK:
          return{
            ...state,
            check: action.bool
          }  

        case SET_COLOR:
          return{
            ...state,
            selectedColor: action.color
          }  

        case SET_SELECTED_ELEMENT:
          return{
            ...state,
            selectedElement: action.element
          }  

        case SET_DEFAULT_SELECTED_ELEMENTS:
          return{
            ...state,
            selectedElement: '',
            selectedColor: 0
          }  

        case SET_HIDDING:
            
            for(let i = 0; i < state.allElements.length; i++){
                if(state.allElements[i].id == action.id){
                let elements = [...state.allElements]
                elements.splice(i, 1, {id: +action.id, color: +action.color, hidden: action.bool})
                
                    return{
                        ...state,
                        allElements: [...elements]
                    }
                }
            }
            
        default:
            return state;
    }
     

}


export const setCheck = (bool) => {
    return{
        type: SET_CHECK,
        bool
    }
}


export const setSelectedColor = (color) => {
    return{
        type: SET_COLOR,
        color
    }
}


export const setSelectedElement = (element) => {
    return{
        type: SET_SELECTED_ELEMENT,
        element
    }
}

export const setHidding = (id, color, bool) => {
    return{
        type: SET_HIDDING,
        id, color, bool
    }
}

export const setDefaultSelectedElements = () => {
    return{
        type: SET_DEFAULT_SELECTED_ELEMENTS
    }
}




export default gameDataReducer;