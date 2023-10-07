import {PowerSelector} from "./powerSelector.jsx";
import {DisplayBoxWithContext} from "./displayBox.jsx";
import {VolumeSelector} from "./volumeSelector.jsx";
import {SoundBankSelector} from "./soundBankSelector.jsx";
import {DrumControls} from "./dmControls.jsx";
import {DrumPads} from "./dmPads.jsx";

/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function DrumMachine(){

    const controls = [
        <PowerSelector key="powerSelector" />,
        <DisplayBoxWithContext key="displayBox" />,
        <VolumeSelector key="volumeSelector" />,
        <SoundBankSelector key="bankSelector" />,
    ]

    return(
        <section id="drum-container" className="container-fluid min-vh-100 vw-100 d-flex ">
            <div id="drum-machine" className="container-fluid">
                <div className="row">
                    <div id="drum-header" className="col-md-12"><h1>M8 Drum Machine</h1></div>
                    <div id="drum-pads" className="col-md-6">
                        <DrumPads/>
                    </div>
                    <div id="drum-controls" className="col-md-6">
                        <DrumControls >
                            <PowerSelector key="powerSelector" />
                            <DisplayBoxWithContext key="displayBox" />
                            <VolumeSelector key="volumeSelector" />
                            <SoundBankSelector key="bankSelector" />
                        </DrumControls>
                    </div>
                </div>
            </div>
        </section>
    )
}