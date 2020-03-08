import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, AlbumPage, LibraryPage, SearchPage } from "@/Page";

const NotFound = () => <p>¡Oops, aquí no hay música!</p>;

const pages = [
  { component: HomePage, path: "/", exact: true },
  { component: AlbumPage, path: "/album/:id", exact: true },
  { component: LibraryPage, path: "/library", exact: true },
  { component: SearchPage, path: "/search/:query", exact: true },
  { component: NotFound }
];

const ContentWrapper = () => (
  <Switch>
    {pages.map((p, i) => (
      <Route
        key={i}
        exact={p.exact || false}
        path={p.path}
        component={p.component}
      />
    ))}
  </Switch>
);

export default ContentWrapper;
