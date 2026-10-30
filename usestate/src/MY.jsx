import { useReducer } from "react";
import "./App.css";

const initialState = {
  teamName: "India",
  runs: 0,
  wickets: 0,
  balls: 0,
};

// Reducer function
function cricketReducer(state, action) {
  switch (action.type) {
    case "ADD_RUNS":
      if (state.wickets >= 10 || state.balls >= 120) {
        return state;
      }
      return {
        ...state,
        runs: state.runs + action.payload,
        balls: state.balls + 1,
      };
    case "WICKET":
      if (state.wickets >= 10 || state.balls >= 120) {
        return state;
      }
      return {
        ...state,
        wickets: state.wickets + 1,
        balls: state.balls + 1,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function App() {
  // useReducer hook
  const [state, dispatch] = useReducer(cricketReducer, initialState);
  
  // Calculate overs
  const overs = Math.floor(state.balls / 6);
  const balls = state.balls % 6;
  const isMatchOver = state.wickets >= 10 || state.balls >= 120;

  return (
    <div className="app">
      <div className="scoreboard">
        <h1>🏏 Cricket Scoreboard 🏏</h1>
        <h2>{state.teamName}</h2>
        
        <div className="score">
          {state.runs}/{state.wickets}
        </div>
        
        <p className="overs">
          Overs: {overs}.{balls} / 20
        </p>
        
        <p className="status">
          {isMatchOver ? "Innings Over!" : "India is Batting"}
        </p>
        
        <h3>Select Runs</h3>
        
        <div className="buttons">
          {[1, 2, 3, 4, 6].map((run) => (
            <button
              key={run}
              onClick={() =>
                dispatch({
                  type: "ADD_RUNS",
                  payload: run,
                })
              }
              disabled={isMatchOver}
            >
              {run} Run{run > 1 ? "s" : ""}
            </button>
          ))}
        </div>
        
        <div className="buttons">
          <button
            className="wicket"
            onClick={() => dispatch({ type: "WICKET" })}
            disabled={isMatchOver}
          >
            Wicket
          </button>
          
          <button
            className="reset"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset Score
          </button>
        </div>
        
        <div className="summary">
          <p>Total Runs: {state.runs}</p>
          <p>Wickets: {state.wickets}</p>
          <p>Legal Balls: {state.balls}</p>
        </div>
      </div>
    </div>
  );
}

export default MY;