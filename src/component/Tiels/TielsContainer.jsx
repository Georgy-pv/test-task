import React from 'react';
import { connect } from 'react-redux';
import './TielsContainer.css'
import { setCheck, setSelectedElement, setSelectedColor, setHidding, setDefaultSelectedElements } from '../../redux/game-reducer';
import Tiels from './Tiels';



const TielsContainer = (props) => {
    
  
    const setSelectedParams = (element, color) => {
        props.setSelectedColor(color);
        props.setSelectedElement(element);
        props.setCheck(true);
    }

    const hideElement = (num, color) => {
        props.setHidding(num, color, true);
    }

    const onClick = (e) => {
        let element = e.target;
        if (element.classList.contains('hidden')) {
            props.setHidding(element.getAttribute('num'), element.getAttribute('color'), false);
           
                if (props.check) {
                    if (element.getAttribute('color') !== props.selectedColor) {
                        setTimeout(() => {
                            hideElement(props.selectedElement.getAttribute('num'), props.selectedElement.getAttribute('color'))
                            hideElement(element.getAttribute('num'), element.getAttribute('color'))
                        }, 700);
                    }
                    props.setCheck(false)
                    props.setDefaultSelectedElements()
                } else {
                    let color = element.getAttribute('color')
                    setSelectedParams(element, color)
                }

         
        }


    }
    console.log('rerender')
    return (
        <Tiels allElements = {props.allElements} onClick = {onClick} />
    );
}

let mapStateToProps = (state) => {
    return {
        colors: state.gameData.colors,
        check: state.gameData.check,
        hidden: state.gameData.hidden,
        selectedColor: state.gameData.selectedColor,
        allElements: state.gameData.allElements,
        selectedElement: state.gameData.selectedElement
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCheck: (bool) => {
            let action = setCheck(bool);
            dispatch(action);
        },
        setSelectedColor: (color) => {
            let action = setSelectedColor(color);
            dispatch(action);
        },
        setSelectedElement: (element) => {
            let action = setSelectedElement(element);
            dispatch(action);
        },
        setHidding: (id, color, bool) => {
            let action = setHidding(id, color, bool);
            dispatch(action);
        },
        setDefaultSelectedElements: () => {
            let action = setDefaultSelectedElements();
            dispatch(action);
        },

    }
}




export default connect(mapStateToProps,mapDispatchToProps)(TielsContainer);


