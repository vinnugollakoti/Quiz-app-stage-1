import React from "react";

const QuizComponent = () => {
  return (
    <div>
        <div className="main-body-2">
          <center>
            <h1>Question</h1>
          </center>
          <p className="no">1 of 15</p>
          <center>
            <p className="question">Which is the only mammal that can jump?</p>

            <div className="options">
              <div className="options-1">
                <button>Dog</button> &nbsp;&nbsp;
                <button>Elephant</button>
              </div>
              <div className="options-2">
                <button>Goat</button> &nbsp;&nbsp;
                <button>Lion</button>
              </div>
              <div className="options-3">
                <button>Previous</button>&nbsp;
                <button>Next</button>&nbsp;
                <button>Quit</button>&nbsp;
              </div>
            </div>
          </center>
        </div>
    </div>
  );
};

export default QuizComponent;
