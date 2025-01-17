// const images = [
//   "https://simplychocolate.dk/cdn/shop/files/CrispyCarrie_sq_bar_wBite_1000_ffe5650b-6e98-4e42-9a65-05b1c371a882.png?v=1733827017&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/RichArnold_sq_bar_wBite_1000.png?v=1733828612&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/PersianPerry_sq_bar_wBite_1000_92f6baba-d72e-4716-9a8c-6d6654e67187.png?v=1733828379&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/SpeedyTom_sq_bar_wBite_1000.png?v=1733829171&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/DarkMarci_sq_bar_wBite_1000.png?v=1733827348&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/MintyCindy_sq_bar_wBite_1000_a5f2ac0a-558a-4be4-8d9e-6f6526ca0edd.png?v=1733828220&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/SaltyFred_sq_bar_wBite_1000_3c10273b-1f8c-4a11-8551-4979c0236692.png?v=1702044974&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/GrainyBilly_sq_bar_wBite_1000_c5ad5bb9-9da8-4357-8dfb-a49db5de9e92.png?v=1733827517&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/SixpackSally_sq_bar_wBite_1000.png?v=1733829047&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/CreamyCarol_sq_bar_wBite_1000_78b4ff61-c0e0-4b61-9378-1d3c65360ace.png?v=1733826181&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/GrainySue_sq_bar_wBite_1000.png?v=1733827675&width=700",
//   "https://simplychocolate.dk/cdn/shop/files/CookieJoe_sq_bar_wBite_1000_678fe7df-a0f8-4cdc-8e95-d9b2760543ac.png?v=1733825995&width=700",
// ];

const dots = document.querySelectorAll(".slide-dot");

const images = document.querySelectorAll(".img-backgrnd img");
dots.forEach((dot, index) => {
  dot.addEventListener("mouseover", () => {
    images.forEach((img) => img.classList.remove("active"));
    images[index].classList.add("active");
  });
});
