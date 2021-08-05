import { useEffect, useState } from "react";
import DaoSummary from "./DaoSummary";
import DaoCategories from "./DaoCategories";
import Search from "./Search";
import DaoList from "./DaoList";

function Dao({ list }) {
  const [activeSum, setActiveSum] = useState();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTextState, setSearchTextState] = useState("");
  const [allDisplayDao, setAllDisplayDao] = useState();

  useEffect(() => {
    setActiveSum(getListSummary(list));
  }, [list]);

  const updateAllDisplayDao = (list) => {
    setAllDisplayDao(list);
    setActiveSum({ ...getListSummary(list) });
  };

  const getListSummary = (list) => {
    if (list) {
      let sum = { numberOfDaos: {}, totalAUM: {} };
      sum.numberOfDaos.now = list.length;
      sum.numberOfDaos.before = activeCategory === "all" && 84;

      sum.totalAUM.now = list.reduce((acc, currObj) => {
        return acc + (isNaN(Number(currObj.aum)) ? 0 : Number(currObj.aum));
      }, 0);
      sum.totalAUM.before = activeCategory === "all" && 3152000;

      return sum;
    }
  };

  const activateCategory = (e) => {
    if (!e.target.classList.contains("btn-selected")) {
      e.target.classList.toggle("btn-selected");
      setActiveCategory(e.target.id);
    }
  };

  const updateSearch = (searchText) => {
    setSearchTextState(searchText);
  };

  return (
    <div className="dao">
      {activeSum && <DaoSummary sum={activeSum} />}
      <DaoCategories
        active={activeCategory}
        handleBtnClick={activateCategory}
      />
      <Search updateSearch={updateSearch} />
      {list ? (
        <DaoList
          list={list}
          allDisplayDao={allDisplayDao}
          updateAllDisplayDao={updateAllDisplayDao}
          searchBy={searchTextState}
          filterBy={activeCategory}
        />
      ) : (
        "No dao list"
      )}
    </div>
  );
}

export default Dao;
