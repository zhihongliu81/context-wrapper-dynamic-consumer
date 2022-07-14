import { useState, useContext, useEffect } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext.js";

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);

  useEffect(() => {
    setMatch(false);
  }, [sign]);

  return (
    <>
      <button
        onClick={() => {
          match ? setMatch(false) : setMatch(true);
        }}
      >
        The Match
      </button>
      {match && <div>{sign.match}</div>}
    </>
  );
};

export default Match;
