export function getUniqueId(){
    return Math.random().toString(36).substring(2, 9);
}
export function getCurrency(){
    return "$";
}
export function setElementFixed({
  element,
  top = 0,
  backup = true,
  appendBody = false,
  end = null,
  startMediaQuery = null,
  endMediaQuery = null,
  zIndex=999
} = {}) {
  if (!element) return;

  let placeholder = null;
  const originalParent = element.parentNode;
  const nextSibling = element.nextSibling;
  const elemHeight = element.offsetHeight;
  const elemOffsetTop = element.getBoundingClientRect().top + window.scrollY;
  const endOffset = end ? end.getBoundingClientRect().top + window.scrollY : null;

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

    if (appendBody && element.parentNode === document.body) {
      if (nextSibling) originalParent.insertBefore(element, nextSibling);
      else originalParent.appendChild(element);
    }

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

    if (endOffset && scrollY + top + elemHeight >= endOffset) {
      element.classList.remove("active");
      element.style.position = "absolute";
      element.style.top = `${endOffset - elemHeight - elemOffsetTop}px`;
      element.style.left = "";
      element.style.width = "";
      element.style.zIndex = "";
      return;
    }

    if (scrollY + top > elemOffsetTop) {
      element.classList.add("active");

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
      element.style.width = `${rect.width}px`;
      element.style.zIndex = zIndex;
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


export function goToScroll(position = 0, smooth = true) {
    let targetY = 0;

    if (typeof position === 'string') {
        const el = document.querySelector(position);
        if (el) targetY = el.getBoundingClientRect().top + window.scrollY;
    } else if (position instanceof HTMLElement) {
        targetY = position.getBoundingClientRect().top + window.scrollY;
    } else {
        targetY = position;
    }

    window.scrollTo({
        top: targetY,
        behavior: smooth ? 'smooth' : 'auto'
    });
}