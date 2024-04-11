fetch("menu.json")
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then(menuItems => {
  const menuContainer = document.getElementById("menuContainer");

  const groupedMenuItems = {};
  menuItems.forEach(item => {
    if (!groupedMenuItems[item.category]) {
      groupedMenuItems[item.category] = [];
    }
    groupedMenuItems[item.category].push(item);
  });

  for (const category in groupedMenuItems) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const categoryHeading = document.createElement("h2");
    categoryHeading.textContent = category;
    categoryDiv.appendChild(categoryHeading);

    const itemsList = document.createElement("ul");
    groupedMenuItems[category].forEach(item => {
      const itemElement = document.createElement("li");
      itemElement.innerHTML = `<strong>${item.name}</strong>: <br>${item.description}`;
      itemsList.appendChild(itemElement);
    });

    categoryDiv.appendChild(itemsList);
    menuContainer.appendChild(categoryDiv);
  }
})
.catch(error => {
  console.error("There was a problem with the fetch operation:", error);
});