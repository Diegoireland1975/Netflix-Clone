const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// select Tab content Item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to the current tab
  this.classList.add("tab-border");
  // Grab content item from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add showclass
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
// Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));

// Collapsible
const collapsibleHeader = document.querySelectorAll(".collapsible-header");
const collapsibleContent = document.querySelectorAll(".collapsible-content");
const icon = document.querySelectorAll(".icon");

collapsibleHeader.forEach((item) => {
  collapsibleHeader.addEventListener("click", () => {
    collapsibleContent.classList.toggle("show");
  });
});
