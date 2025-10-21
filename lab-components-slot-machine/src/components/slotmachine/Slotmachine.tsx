import Slot from "../slot/Slot.tsx";
import style from "./Slotmachine.module.css"

interface SlotMachineProps {
    slots:number;
}

const fillArray = (numberOfSlots: number) => {
    const arr: number[] = [];

    for (let i = 0; i < numberOfSlots; i++) {
        arr.push(Math.floor(Math.random() * 5));
    }

    return arr;
};

const SlotMachine = ({slots}:SlotMachineProps) => {

    const slotsArray: number[] = fillArray(slots);
    const winning: boolean = slotsArray.every((item) => item === slotsArray[0]);


     return (
         <>
             <div className={`${style.slot_machine_container}`}>
                 {slotsArray.map((item, index) => (
                     <Slot key={index} value={item}/>
                 ))}
             </div>
             {winning ? <p className={`${style.msg_box}`} >JE HEBT GEWONNEN</p> : <p className={`${style.msg_box}`}>JE HEBT VERLOREN !</p>}
         </>
     )


};

export default SlotMachine;