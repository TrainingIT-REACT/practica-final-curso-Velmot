import React from "react";
import { Route } from "react-router-dom";
import { HomePage, AlbumPage, LibraryPage, SearchPage } from "../../../Page";

const pages = [
  { component: HomePage, path: "/", exact: true },
  { component: AlbumPage, path: "/album/:id", exact: true },
  { component: LibraryPage, path: "/library", exact: true },
  { component: SearchPage, path: "/search/:query", exact: true}
];

const ContentWrapper = () => (
  <>
    {pages.map((p, i) => (
      <Route
        key={i}
        exact={p.exact || false}
        path={p.path}
        component={p.component}
      />
    ))}
  </>
);

export default ContentWrapper;
