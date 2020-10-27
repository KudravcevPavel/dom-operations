/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import {
  browserTree
} from "./models/browserTree/Tree.js";

import {
  nodesHierarchy
} from "./models/nodesHierarchy/Hierarchy.js";

import {
  renderTree,
  renderArray
} from "./element/render/renderTree.js";

import {flattenArray, allArray} from "./element/wholeArray/flatten.js";

const complexArray = [1, 2, 3, [4, 5, 6, [7, 8, 9], 10, [11, 12]]];

const trees = allArray();

export function renderPage() {
  const tree = renderTree([browserTree, nodesHierarchy]);

  const rootDiv = document.getElementById("root");
  if (tree !== null) rootDiv.append(tree);

  const flatArray = flattenArray(complexArray);
  rootDiv.append(renderArray(flatArray));

  const flatOurArray = flattenArray(trees);
  rootDiv.append(renderArray(flatOurArray));
}