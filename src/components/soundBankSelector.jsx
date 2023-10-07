import {useEffect} from "react";
import {ut} from "../utils/utils.js";
import {useSelector, useDispatch} from 'react-redux'
import {selectPower, selectBank, selectAvailableBanks, setSoundBank} from '../features/drmMachine/drmMachineSlice';
import PropTypes from "prop-types";

export function SoundBankSelectorWithContext(){
    const dispatch = useDispatch()
    const power = useSelector(selectPower)
    const bank = useSelector(selectBank)
    const availableBanks = useSelector(selectAvailableBanks)

    const handleChange = (e)=>{
        const target = e.target;
        const bank = target.getAttribute('data-bank')
        dispatch(setSoundBank(bank))
    }

    return <SoundBankSelector
        power={power}
        bank={bank}
        availableBanks={availableBanks}
        title="Select a Sound Bank"
        handleChange={handleChange} />
}
/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function SoundBankSelector({power, bank, availableBanks, title, handleChange}){

    useEffect(() => {
        //-> select bank
        if(ut.isStr(bank)){
            const key = `m8-${bank}-snd-bank`
            document.getElementById(key).checked = true;
        }
    }, []);

    const soundBanks = availableBanks.map((name, index) => {
        return (
            <div key={index} className="pe-2 bank-item">
                <input type="radio"
                       className="btn-check"
                       name="m8-snd-bank-selector"
                       id={`m8-${name}-snd-bank`}
                       key={index}
                       autoComplete="off"
                       data-bank={name}
                       onChange={handleChange}
                       disabled={!power}/>
                <label className="btn btn-outline-light" htmlFor={`m8-${name}-snd-bank`}>index+1</label>
            </div>
        )
    })
    return(
        <div className="bank-box">
            <div className="bank-header">{title}</div>
            <div className="d-flex flex-row bank-selector">
                {soundBanks}
            </div>
        </div>
    )
}

SoundBankSelector.propTypes = {
    power: PropTypes.bool.isRequired,
    bank: PropTypes.string.isRequired,
    availableBanks: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}