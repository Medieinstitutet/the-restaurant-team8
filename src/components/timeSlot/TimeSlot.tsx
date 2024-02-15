import "./TimeSlot.scss";

interface ITimeSlot {
  time: string;
  onClickTime: (time: string) => void;
}

export const TimeSlot = ({ time, onClickTime }: ITimeSlot) => {
  return (
    <>
      <button id="timeSlot" onClick={() => onClickTime(time)}>
        {time}
      </button>
    </>
  );
};
