/**
 * Invokes `callback` when focus moves outside the given element's DOM
 * subtree.
 *
 * Returns a function that can optionally be called to remove the
 * event listener.
 */
export const onFocusOutsideOf = (container, callback) => {
 const eventListener = () => {
   // setTimeout is used to allow `document.activeElement` to
   // be updated to the newly focused element. This is needed
   // since the 'focusout' event within the container happens
   // before the 'focus' event on the new element.
   setTimeout(() => {
     if (!isDescendantOf(container, document.activeElement)) {
       callback();
     }
   });
 };
 container.addEventListener("focusout", eventListener);

 return function unsubscribe() {
   container.removeEventListener("focusout", eventListener);
 };
};

/**
 * Utility function which returns whether a given DOM element
 * has another DOM element as a descendant.
 */
export const isDescendantOf = (ancestor: Element, potentialDescendant: Element) => {
 let parent = potentialDescendant.parentNode;
 while (parent) {
   if (parent === ancestor) {
     return true;
   }

   parent = parent.parentElement;
 }
 return false;
};
