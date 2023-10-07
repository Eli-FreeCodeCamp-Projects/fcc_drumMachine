import { useSelector } from 'react-redux'
import {selectDisplay} from '../../features/drmMachine/drmMachineSlice.js';
import PropTypes from "prop-types";


/**
 * DisplayBoxWithContext Component.
 * Used to display a message.
 * Use Redux store context.
 * @return {JSX.Element}
 * @constructor
 */
export function DisplayBoxWithContext(){
    const displayMsg = useSelector(selectDisplay)
    return<DisplayBox displayMsg={displayMsg}/>
}

/**
 * DisplayBox Component.
 * Used to display a message.
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function DisplayBox({displayMsg}){
    return(
        <div id="display" className="display-box">
            {displayMsg}
        </div>
    )
}

DisplayBox.propTypes = { displayMsg: PropTypes.string.isRequired }
