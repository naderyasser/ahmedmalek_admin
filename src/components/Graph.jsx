import React from "react";
import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
// import FilterMenu from "./FilterMenu";
const Graph = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const values = [
    "10",
    "40",
    "60",
    "20",
    "40",
    "20",
    "40",
    "80",
    "40",
    "60",
    "20",
    "40",
  ];
  // const acadimcYear = [
  //   "الكل",
  //   "الاول الثانوي",
  //   "الثاني الثانوي",
  //   "الثالث الثانوي",
  // ];
  defaults.responsive = true;
  return (
    <div className="md:w-1/2 w-full m-auto relative">
      <h1 className="absolute top-11 left-11">80%</h1>
      {/* <div className="absolute top-11 right-11">
        <FilterMenu
          title={"السنة الدراسية"}
          data={acadimcYear}
          selected={"الكل"}
        />
      </div> */}
      <Line
        className="w-3/4"
        data={{
          
          labels: labels.map((month) => month),
          datasets: [
            {
              label: "exam one",
              data: values,
            },
          ],
        }}
        options={{
          elements: { line: { tension: 0.3}, },
        }}
      />
    </div>
  );
};

export default Graph;
