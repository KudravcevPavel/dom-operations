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



let open_modal = document.getElementById('open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
open_modal.onclick = function() { // клик на открытие
    modal.classList.add('modal_vis'); // добавляем видимость окна
    modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
    body.classList.add('body_block'); // убираем прокрутку
};
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};