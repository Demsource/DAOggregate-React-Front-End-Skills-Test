import Dao from "./Dao";
import { Switch, Route } from "react-router-dom";
import DaoId from "./DaoId";
import { useEffect, useState } from "react";
import data from "./data/daolist.json";

function DaoContent() {
  const [daoList, setDaoList] = useState();

  useEffect(() => {
    setDaoList(data);
  }, []);

  return (
    <Switch>
      <Route exact path="/DAOggregate-React-Front-End-Skills-Test/dao">
        <Dao list={daoList} />
      </Route>
      <Route path="/DAOggregate-React-Front-End-Skills-Test/dao/:daoId">
        <DaoId />
      </Route>
    </Switch>
  );
}

export default DaoContent;
