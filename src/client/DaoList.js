import { useRef, useState, useEffect } from "react";
import DaoRow from "./DaoRow";
import "./daoList.css";

function DaoList({
  list,
  allDisplayDao,
  updateAllDisplayDao,
  searchBy,
  filterBy,
}) {
  const [activeHeaderCol, setActiveHeaderCol] = useState("h-col-name");
  const colNameArrow = useRef(null);
  const colCategoryArrow = useRef(null);
  const colAUMArrow = useRef(null);
  const colTWLArrow = useRef(null);
  const colFoundDateArrow = useRef(null);

  useEffect(() => {
    if (searchBy === "") {
      updateAllDisplayDao(list);
    } else {
      updateAllDisplayDao(
        list?.filter((dao) =>
          dao.name.toLowerCase().includes(searchBy.toLowerCase())
        )
      );
    }
  }, [list, searchBy]);

  useEffect(() => {
    if (filterBy === "all") {
      updateAllDisplayDao(list);
    } else {
      updateAllDisplayDao(
        list?.filter((dao) => {
          return dao.category.toLowerCase().includes(filterBy);
        })
      );
    }
  }, [list, filterBy]);

  const hColClick = (activeHeaderColClassName, arrowRef) => {
    setActiveHeaderCol(activeHeaderColClassName);
    toggleArrow(arrowRef, activeHeaderColClassName);
  };
  const toggleArrow = (arrowDiv, columnId) => {
    arrowDiv.current.classList.toggle("arrow-down");
    arrowDiv.current.classList.toggle("arrow-up");
  };

  return (
    <table className="dao-list">
      <thead className="header-wrapper">
        <tr className="header">
          <th
            className="h-col-name h-col"
            id={`${activeHeaderCol === "h-col-name" && "active-col"}`}
            onClick={() => hColClick("h-col-name", colNameArrow)}
          >
            <div className="flex ai-c-flex jc-c-flex">
              <span>NAME</span>
              <div ref={colNameArrow} className="arrow arrow-down"></div>
            </div>
          </th>
          <th
            className="h-col-category h-col"
            id={`${activeHeaderCol === "h-col-category" && "active-col"}`}
            onClick={() => hColClick("h-col-category", colCategoryArrow)}
          >
            <div className="flex ai-c-flex jc-c-flex">
              <span>CATEGORY</span>
              <div ref={colCategoryArrow} className="arrow arrow-down"></div>
            </div>
          </th>
          <th
            className="h-col-aum h-col"
            id={`${activeHeaderCol === "h-col-aum" && "active-col"}`}
            onClick={() => hColClick("h-col-aum", colAUMArrow)}
          >
            <div className="flex ai-c-flex jc-c-flex">
              <span>AUM (USD)</span>
              <div ref={colAUMArrow} className="arrow arrow-down"></div>
            </div>
          </th>
          <th
            className="h-col-twl h-col"
            id={`${activeHeaderCol === "h-col-twl" && "active-col"}`}
            onClick={() => hColClick("h-col-twl", colTWLArrow)}
          >
            <div className="flex ai-c-flex jc-c-flex">
              <span>
                TWITTER <br /> FOLLOWERS
              </span>
              <div ref={colTWLArrow} className="arrow arrow-down"></div>
            </div>
          </th>
          <th
            className="h-col-found-date h-col"
            id={`${activeHeaderCol === "h-col-found-date" && "active-col"}`}
            onClick={() => hColClick("h-col-found-date", colFoundDateArrow)}
          >
            <div className="flex ai-c-flex jc-c-flex">
              <span>
                FOUNDED <br /> DATE
              </span>
              <div ref={colFoundDateArrow} className="arrow arrow-down"></div>
            </div>
          </th>
          <th className="h-social-icons h-col"></th>
        </tr>
      </thead>
      <tbody className="list">
        {allDisplayDao &&
          allDisplayDao.map((dao) => {
            return <DaoRow key={dao.id} dao={dao} />;
          })}
      </tbody>
    </table>
  );
}

export default DaoList;
