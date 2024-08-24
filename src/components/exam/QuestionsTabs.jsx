import { useState } from "react";
import McqQuestion from "./McqQuestion";
import TrueFalseQusetion from "./TrueFalseQusetion";

const QuestionsTabs = () => {
  const [qTab, setQTab] = useState(true);

  return (
    <div className="m-auto">
      <div className="m-auto w-fit">
        <div className="flex justify-center items-center gap-5">
          <button
            className="text-xl bg-light-blue-300"
            onClick={() => setQTab(true)}
          >
            MCQ
          </button>
          <button
            className="text-xl bg-light-blue-300"
            onClick={() => setQTab(false)}
          >
            True Or False
          </button>
        </div>
        <div>{qTab ? <McqQuestion /> : <TrueFalseQusetion />}</div>
      </div>
    </div>
  );
};

export default QuestionsTabs;
