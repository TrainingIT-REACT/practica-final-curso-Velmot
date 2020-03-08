import React from "react";
import { compose, merge, pick, omit } from "ramda";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { renameKeys } from "Components/utils";

const defaultLookup = { prefix: "fas" };
const getIconDefinition = lookup => findIconDefinition(lookup);

const Icon = props => (
  <FontAwesomeIcon
    className="icon"
    icon={compose(
      getIconDefinition,
      merge(defaultLookup),
      renameKeys({ name: "iconName" }),
      pick(["prefix", "name"])
    )(props)}
    {...omit(["prefix", "name"])(props)}
  />
);

export default Icon;
