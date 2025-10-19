import {cherry, lemon, watermelon, plum, seven} from "/IdeaProjects/ReactLearning/lab-components-slot-machine/src/assets/index.ts"
import style from "./Slot.module.css"
const images = [cherry, lemon, watermelon, plum, seven];

interface SlotNum {
    value: number;
}


const Slot = ({value}:SlotNum) => (

    <>

        {value !== null && value >= 0 && value < 5 && (
            <div className="msg_box container_slot">
                <img
                    className={`${style.picture_box}`}
                    src={images[value]}
                    alt={images[value] + " picture"}
                />
            </div>
        )}

    </>

);

export default Slot;