import "./BookingTableTime.scss";

interface IBookTableTime {
  tableFree19: boolean;
  tableFree21: boolean;
  handleOnClick: (time: string) => void;
}

const BookTableTime = (props: IBookTableTime) => {
  return (
    <div>
      {props.tableFree19 && (
        <button onClick={() => props.handleOnClick("19:00")}>19:00</button>
      )}
      {props.tableFree21 && (
        <button onClick={() => props.handleOnClick("21:00")}>21:00</button>
      )}
      {!props.tableFree19 && !props.tableFree21 && (
        <>
          <h3>Fullbokad</h3>
          <button onClick={() => location.reload()}>Gå tillbaka</button>
        </>
      )}
    </div>
  );
};

export default BookTableTime;
