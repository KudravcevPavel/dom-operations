export function flattenArray(array) {
   let result = [];
   array.forEach((item) => {
      if (Array.isArray(item)) {
         result = [...result, ...flattenArray(item)];
      } else {
         result = [...result, item];
      }
   });

   return result;
};

export function allArray() {
   const arr1 = Object.values(browserTree);
   const arr2 = Object.values(nodesHierarchy);
   const result = [...arr1, ...arr2];

   return result;
}

import { browserTree } from "../../models/browserTree/Tree.js"

import { nodesHierarchy } from "../../models/nodesHierarchy/Hierarchy.js"