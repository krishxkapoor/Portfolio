// nav bar link active state on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Typed text effect
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Java Developer', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", () => {
    // Download CV button
    const downloadBtn = document.querySelector(".button");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", (e) => {
            if (e.target.id !== "about-read-more" && !e.target.classList.contains("service-read-more")) {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "https://drive.google.com/file/d/1Q9dWQF5raBeVrmnZd62URSP7GCaNu2pf/view?usp=sharing";
                link.download = "Krish_Kapoor_CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    }

    // Social media links
    const githubLink = document.querySelector(".Social-media a[title='GitHub']");
    const linkedinLink = document.querySelector(".Social-media a[title='LinkedIn']");

    if (githubLink) {
        githubLink.addEventListener("click", (e) => {
            e.preventDefault();
            window.open("https://github.com/krishxkapoor", "_blank");
        });
    }
    if (linkedinLink) {
        linkedinLink.addEventListener("click", (e) => {
            e.preventDefault();
            window.open("https://www.linkedin.com/in/krish-kapoor-009a18272/", "_blank");
        });
    }

    // About Section Read More/Less (vertical expand)
    const aboutReadMore = document.getElementById("about-read-more");
    const aboutMoreText = document.getElementById("about-more");

    if (aboutReadMore && aboutMoreText) {
        aboutReadMore.addEventListener("click", (e) => {
            e.preventDefault();
            aboutMoreText.classList.toggle("expanded");
            aboutReadMore.textContent = aboutMoreText.classList.contains("expanded") ? "Read Less" : "Read More";
        });
    }

    // Services Section Read More/Less (vertical expand)
    // (Restored previous code)
    const serviceReadMoreButtons = document.querySelectorAll(".service-read-more");
    serviceReadMoreButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const moreText = btn.previousElementSibling;
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "block";
                btn.textContent = "Read Less";
            } else {
                moreText.style.display = "none";
                btn.textContent = "Read More";
            }
        });
    });
});
