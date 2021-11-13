// const header = document.querySelector("[data-header]");
// const sections = [...document.querySelectorAll("[data-section]")];
// const headerLinks = [...document.querySelectorAll("[data-link]")];

// let prevYPosition = 0;
// let direction = "up";

// const options = {
//   rootMargin: `${header.offsetHeight * -1}px`,
//   threshold: 0,
// };

// const getTargetSection = (entry) => {
//   const index = sections.findIndex((section) => section == entry.target);

//   if (index >= sections.length - 1) {
//     return entry.target;
//   } else {
//     return sections[index + 1];
//   }
// };

// const updateColors = (target) => {
//   const theme = target.dataset.section;
//   header.setAttribute("data-theme", theme);
// };

// const shouldUpdate = (entry) => {
//   if (direction === "down" && !entry.isIntersecting) {
//     return true;
//   }

//   if (direction === "up" && entry.isIntersecting) {
//     return true;
//   }

//   return false;
// };

// const updateMarker = (target) => {
//   const id = target.id;

//   if (!id) return;

//   let link = headerLinks.find((el) => {
//     return el.getAttribute("href") === `#${id}`;
//   });

//   link = link || headerLinks[0];

//   const distanceFromLeft = link.getBoundingClientRect().left;

//   header.style.setProperty("--markerWidth", `${link.clientWidth}px`);
//   header.style.setProperty("--markerLeft", `${distanceFromLeft}px`);
// };

// const onIntersect = (entries) => {
//   entries.forEach((entry) => {
//     if (window.scrollY > prevYPosition) {
//       direction = "down";
//     } else {
//       direction = "up";
//     }

//     prevYPosition = window.scrollY;

//     const target =
//       direction === "down" ? getTargetSection(entry) : entry.target;

//     if (shouldUpdate(entry)) {
//       updateColors(target);
//       updateMarker(target);
//     }
//   });
// };

// document.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === "complete") {
//     updateMarker(sections[0]);
//   }
// });

// const observer = new IntersectionObserver(onIntersect, options);

// sections.forEach((section) => {
//   observer.observe(section);
// });

/** SAME FUNCTIONALITY WITH DIFFERENT CODE */

const header = document.querySelector("[data-header]");
const sections = [...document.querySelectorAll("[data-section]")];
const scrollRoot = document.querySelector("[data-scroller]");
const headerLinks = [...document.querySelectorAll("[data-link]")];
// console.dir(scrollRoot);

const options = {
  root: scrollRoot,
  rootMargin: `${header.offsetHeight * -1}px`,
  threshold: 0,
};

/* Finding the scroll direction */
let direction = "up";
let prevYPosition = 0;

const setScrollDirection = () => {
  if (scrollRoot.scrollTop > prevYPosition) {
    direction = "down";
  } else {
    direction = "up";
  }
  /* Update the prevYposition from 0 to current scrollYposition */
  prevYPosition = scrollRoot.scrollTop;
};

/* With that we can pass in different  targets to the updateColors function */
const getTargetSection = (target) => {
  if (direction === "up") return target;

  if (target.nextElementSibling) {
    return target.nextElementSibling;
  } else {
    return target;
  }
};

/* Update header's colors */
const updateColors = (target) => {
  const theme = target.dataset.section;
  header.setAttribute("data-theme", theme);
};

/*Decide the header's color should update */
const shouldUpdate = (entry) => {
  if (direction === "down" && !entry.isIntersecting) {
    return true;
  }

  if (direction === "up" && entry.isIntersecting) {
    return true;
  }
  return false;
};

const updateMarker = (target) => {
  console.log(target);
  const id = target.id;

  /* Do nothing if no target ID */
  if (!id) return;

  /* Find the corresponding nav link, or use the first one */
  let link = headerLinks.find((el) => {
    return el.getAttribute("href") === `#${id}`;
  });

  link = link || headerLinks[0];

  /* Get the values and set the custom properties */
  const distanceFromLeft = link.getBoundingClientRect().left;

  header.style.setProperty("--markerWidth", `${link.clientWidth}px`);
  header.style.setProperty("--markerLeft", `${distanceFromLeft}px`);
};

/* The callback that will fire on intersection */
const onIntersect = (entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    setScrollDirection();

    /* Do nothing if no need to update the header's colors*/
    if (!shouldUpdate(entry)) return;

    const target = getTargetSection(entry.target);
    updateColors(target);
    // const theme = entry.target.dataset.section;
    // header.setAttribute("data-theme", theme);
    updateMarker(target);
  });
};

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    updateMarker(sections[0]);
  }
});

/* Create the observer */
const observer = new IntersectionObserver(onIntersect, options);

/* Set our observer to observe each section */
sections.forEach((section) => {
  observer.observe(section);
});
