import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleTable from "./ArticleTable";
import ArticleDetail from "./ArticleDetail";

const Articles = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticleTable />} />
      <Route path="/:articleId" element={<ArticleDetail />} />
    </Routes>
  );
};

export { Articles, ArticleTable, ArticleDetail };
