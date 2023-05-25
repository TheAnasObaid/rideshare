import { RideContext } from "@/context/rideContext";
import { useContext, useState } from "react";

const style = {
  wrapper: `pt-2`,
  searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
  inputBoxes: `flex flex-col mb-4 relative`,
  inputBox: `h-10 mx-4 border-2 rounded-md bg-[#eeeeee] flex items-center my-1 px-2`,
  focusedInputBox: `border-black`,
  input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full`,
};

const LocationSelector = () => {
  const [inFocus, setInFocus] = useState("from");
  const { pickup, setPickup, dropoff, setDropoff } = useContext(RideContext);

  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
        {inFocus === "from"
          ? "Where can we pick you up?"
          : "Where can we drop you off?"}
      </div>
      <div className={style.inputBoxes}>
        <div
          className={`${style.inputBox} ${
            inFocus === "from" && style.focusedInputBox
          }`}
        >
          <input
            className={style.input}
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onFocus={() => setInFocus("from")}
          />
        </div>
        <div
          className={`${style.inputBox} ${
            inFocus === "to" && style.focusedInputBox
          }`}
        >
          <input
            className={style.input}
            placeholder="Enter dropoff location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            onFocus={() => setInFocus("to")}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
