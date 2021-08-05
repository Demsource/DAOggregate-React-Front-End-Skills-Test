import greenArrow from "./icons/green-arrow.svg";
import redArrow from "./icons/red-arrow.svg";

function DaoSummarySide({ header, now, before }) {
  const result = now - before;

  return header?.includes ? (
    <div className="s-side">
      <div className="s-header">{header}</div>
      <div className="s-content">
        <div className="c-comparision">
          <div className="comp-now">
            {header?.includes("USD") && "$"}
            {Number(now).toLocaleString("en-US")}
          </div>
          {result && now && before ? (
            <div className="comp-before">
              from{" "}
              {(typeof header === "string" || header instanceof String) &&
                header?.includes("USD") &&
                "$"}
              {Number(before).toLocaleString("en-US")}
            </div>
          ) : (
            ""
          )}
        </div>
        {result && now && before ? (
          <div className="result-content">
            <div className="arrow-result">
              <img src={result > 0 ? greenArrow : redArrow} alt="arrow" />
              <span>{Number(result).toLocaleString("en-US")}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default DaoSummarySide;
