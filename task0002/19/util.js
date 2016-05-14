/**
 * add handler to element
 */
function addHandler(element, type, handler) {
  if(element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else if(element.attachEvent) {
    element.attachEvent("on"+type, handler);
  } else {
    element["on"+type] = handler;
  }
}

/**
 * get target from event
 */
function getTarget(event) {
  event = event || window.event;
  return event.target || event.srcElement;
}

/**
 * prevent default
 */
function preventDefault(event) {
  if(event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

/**
 * trim string
 */
function trim(word) {
  return word.replace(/^\s+|\s+$/g,"");
}
