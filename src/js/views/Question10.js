import React from "react";


// use style below to work on the cloud
// import "src/styles/quiz.css"
import "/Users/alex/Documents/Code/Recmndr/Recmndr/src/styles/quiz.css";

// images
import hiphop from "../../img/quizpage/hiphop.jpg";


export const Question10 = () => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <img src={hiphop} className="qimg" />
      </div>
      <div className="col qpage qten qmain" id="qten">
        <div className="container text-center">
        <div className="question"><p>&nbsp;</p><p>&nbsp;</p><p>You're at the bar,</p><p>what are you ordering?</p><p>&nbsp;</p></div>
          <div className="d-flex justify-content-center answer"><a href="/my-profile" className="btn btn-light answerbtn" id="answerbtn" role="button">Answer 1</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/my-profile" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 2</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/my-profile" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 3</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/my-profile" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 4</a></div>
          <div className="d-flex justify-content-center answer2"><a href="/my-profile" className="btn btn-light answerbtn" id="answerbtn2" role="button">Answer 5</a></div>
          <div className="d-flex justify-content-center pagecount" id="pagecount">10 / 10</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question10;