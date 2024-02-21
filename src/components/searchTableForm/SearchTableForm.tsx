import { ChangeEvent } from "react";
import "./SearchTableForm.scss";

interface ISearchTableFormProps {
  numberOfGuests: number;
  date: string;
  onNumberOfGuestsChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

export const SearchTableForm = (props: ISearchTableFormProps) => {
  return (
    <div className="container">
      <h2>När?</h2>

      <div className="row">
        <div className="formSection">
          <label htmlFor="numberOfGuests">Antal personer</label>
          <select
            className="searchFormInput"
            name="numberOfGuests"
            id="numberOfGuests"
            onChange={props.onNumberOfGuestsChange}
            value={props.numberOfGuests}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="formSection">
          <label htmlFor="date">Datum</label>
          <input
            className="searchFormInput"
            min={new Date().toISOString().split("T")[0]}
            type="date"
            name="date"
            id="date"
            value={props.date}
            onChange={props.onDateChange}
          />
        </div>
      </div>
      <button id="searchTableBtn" onClick={props.handleSubmit}>
        Sök efter bord
      </button>
    </div>
  );
};
