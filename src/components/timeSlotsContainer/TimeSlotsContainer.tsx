
import './TimeSlotsContainer.scss'
import { TimeSlot } from "../timeSlot/TimeSlot"

interface ITimeSlotsContainer {
    sittings: string[],
    setTime: (time: string) => void;
}

export const TimeSlotsContainer = ({sittings, setTime}: ITimeSlotsContainer) => {

    return(
        <div className='container'>
            <h2>Lediga tider</h2>
        <div className="timeSlots">
            {sittings.map((sitting, i) => (
            <TimeSlot key={i} time={sitting} onClickTime={() => setTime(sitting)} />
            ))}
        </div>
      </div>
    )
}