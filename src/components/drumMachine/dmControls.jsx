import PropTypes from "prop-types";
import {Component} from "react";

/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function DrumControls({children}){

    return(
        <div className="drum-box-control">
            {children}
        </div>
    )
}
/*
DrumControls.propTypes = {
    controls: PropTypes.arrayOf(Component).isRequired
}*/