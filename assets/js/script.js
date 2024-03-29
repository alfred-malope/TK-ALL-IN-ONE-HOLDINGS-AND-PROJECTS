$(window).scroll(function(){

    if(this.scrollY > 200){
        $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            }

      // Scrolling Button Btn
      if(this.scrollY >500){
        $('.scroll-up-btn').addClass("show");
        }else{
        $('.scroll-up-btn').removeClass("show");
        }   
});
//slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
});

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');


        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});

function showContact() {
    document.getElementById("popup-container").style.display = "flex";
}

function hideContact() {
    document.getElementById("popup-container").style.display = "none";
}

// function fetchSkills() {
//     return fetch("./assets/json/skills.json")
//       .then(response => response.json())
//       .then(skillsData => {
//         return skillsData;
//       });
//   }
  

// function showSkills(skills) {
//     let skillsContainer = document.getElementById("skillsContainer");
//     let skillHTML = "";
//     skills.forEach(skill => {
//         skillHTML += `
//         <div class="bar">
//               <div class="info">
//                 <img src=${skill.icon} alt="skill" />
//                 <span>${skill.name}</span>
//               </div>
//             </div>`
//     });
//     skillsContainer.innerHTML = skillHTML;
// }


// fetchSkills().then(data => {
//     showSkills(data);
// });



// function fetchProjects() {
//     return fetch("./assets/json/projects.json")
//       .then(response => response.json())
//       .then(projectsData => {
//         return projectsData;
//       });
//   }
  

// function showProjects(projects) {
//     let projectsContainer = document.getElementById("projects-card");
//     let projectHTML = "";
//     projects.forEach(project => {
//         projectHTML += `
//         <article class="projects-card" >
//         <div class="projects-image">
//             <img src="${project.photo}" class="projects-img" alt="image">

//             <a href="${project.link}" target="_blank" class="projects-button button">
//                 <i class="ri-arrow-right-up-line"></i>
//             </a>
//         </div>

//         <div class="projects-content">
//             <h3 class="projects-subtitle">Website</h3>
//             <h2 class="projects-title">${project.title}</h2>

//             <p class="projects-description">${project.description}</p>
//         </div>

//         <div class="projects-buttons">
//             <a href="${project.link}" target="_blank" class="projects-link">
//                 <i class="ri-github-line"> Live</i>
//             </a>
//             <a href="${project.github}" target="_blank" class="projects-link">
//                 <i class="ri-github-line"> Code</i>
//             </a>

//         </div>
//         </article>`
//     });
//     projectsContainer.innerHTML = projectHTML;
// }


// fetchProjects().then(data => {
//     showProjects(data);
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const currentYear = new Date().getFullYear();
//     document.getElementById('currentYear').innerText = currentYear;
// });

// const slides = document.querySelector(".slider").children;
// const indicatorImages = document.querySelector(".slider-indicator").children;

// for(let i=0; i<indicatorImages.length; i++){
//   indicatorImages[i].addEventListener("click", function(){

//     for(let j=0; j<indicatorImages.length; j++){
//       indicatorImages[j].classList.remove("active");
//     }
//     this.classList.add("active");
//     const id=this.getAttribute("data-id");
//     for(let j=0; j<slides.length; j++){
//       slides[j].classList.remove("active");
//     }

//     slides[id].classList.add("active");
//   })
// }

// function infoReveal(elementId, clickedLink) {
//   const allRevealTexts = document.querySelectorAll('.revealImage');
//   allRevealTexts.forEach(text => {
//       text.style.display = "none";
//   });

//   const revealText = document.getElementById(elementId);
//   if (revealText) {
//       revealText.style.display = "flex";
//   }

//   const allLinks = document.querySelectorAll('.about-header a');
//   allLinks.forEach(link => {
//       link.classList.remove('active');
//   });
//   if (clickedLink) {
//       clickedLink.classList.add('active');
//   }
// };

