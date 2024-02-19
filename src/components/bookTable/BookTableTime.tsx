import "./BookingTableTime.scss";

interface IBookTableTime {
  tableFree18: boolean;
  tableFree21: boolean;
  handleOnClick: (time: string) => void;
  handleCancel: () => void;
}

const BookTableTime = (props: IBookTableTime) => {
  return (
    <div className="timeSlotsContainer">
      <h2>Lediga tider</h2>
      <div>
        {props.tableFree18 && (
          <button
            className="chooseTimeBtn"
            onClick={() => props.handleOnClick("18:00")}
          >
            18:00
          </button>
        )}
        {props.tableFree21 && (
          <button
            className="chooseTimeBtn"
            onClick={() => props.handleOnClick("21:00")}
          >
            21:00
          </button>
        )}
      </div>
      {!props.tableFree18 && !props.tableFree21 && (
        <>
          <h3>Fullbokad</h3>
          <button className="chooseTimeBtn" onClick={props.handleCancel}>
            Gå tillbaka
          </button>
        </>
      )}
    </div>
  );
};

export default BookTableTime;
