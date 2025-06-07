// const hiddenElements = document.querySelectorAll('.hidden');
// const sidebar = document.querySelector(".sidebar");
// const img = document.getElementById("img-div");

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }

//         if (entry.target.id === "img-div") {
//             if (entry.isIntersecting) {
//                 sidebar.classList.remove('sidebar-show');
//             } else {
//                 sidebar.classList.add('sidebar-show');
//             }
//         }

//     });

// });

// hiddenElements.forEach((el) => observer.observe(el));

// observer.observe(img);