import { blogData } from "./blog-data.js";

document.getElementById("more").addEventListener("click", addMoreBlogs);

function addMoreBlogs() {
  document.getElementById("blog-section").innerHTML += blogData.map((blog) => {
    const {image, date, title, description, alt} = blog;
    return `
    <div>
        <img class="blog-img"src="${image}" alt="${alt}">
        <p class="blog-date">${date}</p>
        <p class="blog-title">${title}</p>
        <p class="blog-description">${description}</p>
      </div>
    `
  }).join("")
}