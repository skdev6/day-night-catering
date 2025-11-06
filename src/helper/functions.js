export function getUniqueId(){
    return Math.random().toString(36).substring(2, 9);
}
export function getCurrency(){
    return "$";
}
export function setElementFixed(
  element,
  top = 0,
  backup = true,
  appendBody = false,
  end = null,
  startMediaQuery = null,
  endMediaQuery = null
) {
  if (!element) return;

  let placeholder = null;
  let originalParent = element.parentNode;
  let nextSibling = element.nextSibling;
  const elemHeight = element.offsetHeight;
  const elemOffsetTop = element.getBoundingClientRect().top + window.scrollY;
  const endOffset = end ? end.getBoundingClientRect().top + window.scrollY : null;

  // ✅ Check if current screen width is within range
  const isWithinMedia = () => {
    const width = window.innerWidth;
    if (startMediaQuery && width > startMediaQuery) return false;
    if (endMediaQuery && width < endMediaQuery) return false; 
    return true;
  };

  const resetElement = () => {
      element.classList.remove("active"); 
    element.style.position = "";
    element.style.top = "";
    element.style.left = "";
    element.style.width = "";
    element.style.zIndex = "";

    // Move back to original parent if appended to body
    if (appendBody && element.parentNode === document.body) {
      if (nextSibling) originalParent.insertBefore(element, nextSibling);
      else originalParent.appendChild(element);
    }

    // Remove placeholder if exists
    if (backup && placeholder) {
      placeholder.remove();
      placeholder = null;
    }
  };

  const onScroll = () => {
    if (!isWithinMedia()) {
      resetElement();
      return;
    }

    const scrollY = window.scrollY;

    // Stop at end element
    if (endOffset && scrollY + top + elemHeight >= endOffset) {
      element.classList.remove("active"); 
      element.style.position = "absolute";
      element.style.top = `${endOffset - elemHeight - elemOffsetTop}px`;
      element.style.left = "";
      element.style.width = "100%";
      element.style.zIndex = "";
      return;
    }

    // Normal sticky start
    if (scrollY + top > elemOffsetTop) {
      element.classList.add("active");
      // Create placeholder
      if (backup && !placeholder) {
        placeholder = document.createElement("div");
        placeholder.style.height = `${elemHeight}px`;
        originalParent.insertBefore(placeholder, element);
      }

      if (appendBody && element.parentNode !== document.body) {
        document.body.appendChild(element);
      }

      const rect = placeholder
        ? placeholder.getBoundingClientRect()
        : element.getBoundingClientRect();

      element.style.position = "fixed";
      element.style.top = `${top}px`;
    //   element.style.left = `${rect.left}px`;
      element.style.width = `${rect.width}px`;
      element.style.zIndex = "9999";
    } else {
      resetElement();
    }
  };

  const onResize = () => {
    if (!isWithinMedia()) resetElement();
  };

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    resetElement();
  };
}
