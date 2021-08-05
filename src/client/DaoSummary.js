import React from "react";
import "./daoSummary.css";
import DaoSummarySide from "./DaoSummarySide";

function DaoSummary({sum}) {
  
  return (
    <div className="summary">
      {sum && [
        <DaoSummarySide
          key="nod"
          header="Number of DAOs"
          now={sum.numberOfDaos?.now}
          before={sum.numberOfDaos?.before}
        />,
        <DaoSummarySide
          key="ta"
          header="Total AUM (USD)"
          now={sum.totalAUM?.now}
          before={sum.totalAUM?.before}
        />,
      ]}
    </div>
  );
}

export default DaoSummary;
