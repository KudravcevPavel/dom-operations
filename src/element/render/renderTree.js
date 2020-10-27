export function renderTree(treeArray) {
   if (treeArray.length === 0) return null;

   const rootUlElement = document.createElement("ul");

   treeArray.forEach((node) => {
      const liElement = document.createElement("li");
      liElement.innerHTML = node.label;
      rootUlElement.append(liElement);

      const subTree = renderTree(node.children);
      if (subTree !== null) rootUlElement.append(subTree);
   });

   return rootUlElement;
};

export function renderArray(array) {
   const p = document.createElement("p");
   p.innerHTML = JSON.stringify(array, null, 20);
 
   return p;
 }


