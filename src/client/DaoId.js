import React from "react";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";

function DaoId() {
  const { daoId } = useParams();

  return Number(daoId) === 1 ? (
    <div>DaoId 1</div>
  ) : (
    <Redirect to="/DAOggregate-React-Front-End-Skills-Test/dao" />
  );
}

export default DaoId;
