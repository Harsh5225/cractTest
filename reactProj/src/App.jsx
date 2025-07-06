import React from "react";
import { useState } from "react";

const App = () => {
  const [type, setType] = useState("one-way");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const isDepartureValid = departure && departure >= today;
  const isReturnValid =
    type === "one-way" || (returnDate && returnDate >= departure);
  const isValid = isDepartureValid && isReturnValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      type === "one-way"
        ? `Booked one-way flight on ${departure}`
        : `Booked return flight on ${departure} to ${returnDate}`;
    alert(msg);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow-2xl p-6 w-96 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Flight Booker</h2>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="one-way">one-way</option>
          <option value="return">return</option>
        </select>
        <input
          type="date"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          min={today}
          required
          style={{ padding: "8px" }}
        ></input>

        {type === "return" && (
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            min={departure || today}
            required
          ></input>
        )}
        <button disabled={!isValid} style={{ padding: "8px" }}>
          Book
        </button>
      </form>
    </div>
  );
};

export default App;
