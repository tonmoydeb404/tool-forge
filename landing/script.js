// Features data
const featuresData = [
  {
    name: "Password Generator",
    description:
      "Create strong, secure passwords with customizable options including length, character sets, and complexity requirements.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    status: "available",
    iconColor: "red",
  },
  {
    name: "Lorem Ipsum Generator",
    description:
      "Generate placeholder text for your projects with customizable word count, paragraph length, and formatting options.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    status: "available",
    iconColor: "blue",
  },
  {
    name: "JWT Decoder",
    description:
      "Decode and analyze JSON Web Tokens with detailed header, payload, and signature information display.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    status: "available",
    iconColor: "green",
  },
  {
    name: "QR Code Generator",
    description:
      "Generate QR codes for URLs, text, contact information, and more with customizable styling options.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 012 2v12a4 4 0 01-4 4H9a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2z",
    status: "coming-soon",
    iconColor: "purple",
  },
  {
    name: "Color Palette Generator",
    description:
      "Create beautiful color palettes with harmony rules, export options, and accessibility checks for your designs.",
    icon: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h6a2 2 0 002-2V8M9 8h6",
    status: "coming-soon",
    iconColor: "orange",
  },
  {
    name: "Unit Converter",
    description:
      "Convert between different units of measurement including length, weight, temperature, and currency.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    status: "coming-soon",
    iconColor: "pink",
  },
];

// Roadmap data
const roadmapData = [
  {
    title: "Available Tools",
    status: "Available",
    statusClass: "available",
    description:
      "Tools that are currently available and ready to use in Tool Forge.",
    icon: "M5 13l4 4L19 7",
    iconClass: "available",
    features: [
      {
        name: "Password Generator",
        desc: "Secure password creation with custom options",
        status: "available",
      },
      {
        name: "Lorem Ipsum Generator",
        desc: "Placeholder text for design and development",
        status: "available",
      },
      {
        name: "JWT Decoder",
        desc: "Decode and analyze JSON Web Tokens",
        status: "available",
      },
    ],
  },
  {
    title: "In Progress",
    status: "In Progress",
    statusClass: "in-progress",
    description: "Tools currently being developed and will be available soon.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    iconClass: "in-progress",
    features: [],
  },
  {
    title: "Upcoming Tools",
    status: "Upcoming",
    statusClass: "upcoming",
    description:
      "Planned tools and features for future releases of Tool Forge.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    iconClass: "upcoming",
    features: [],
  },
];

// Function to render features
function renderFeatures() {
  const container = document.getElementById("features-grid");

  featuresData.forEach((feature) => {
    const featureElement = document.createElement("div");
    featureElement.className = `feature-card ${feature.status}`;

    const statusText =
      feature.status === "available" ? "Available Now" : "Coming Soon";
    const statusIcon =
      feature.status === "available"
        ? "M5 13l4 4L19 7"
        : "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";

    featureElement.innerHTML = `
            <div class="feature-icon ${feature.iconColor}">
                <svg viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="${feature.icon}"/>
                </svg>
            </div>
            <h3 class="feature-title">${feature.name}</h3>
            <p class="feature-description">${feature.description}</p>
            <div class="feature-status ${feature.status}">
                <span>${statusText}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${statusIcon}"/>
                </svg>
            </div>
        `;

    container.appendChild(featureElement);
  });
}

// Function to render roadmap
function renderRoadmap() {
  const container = document.getElementById("roadmap-container");

  roadmapData.forEach((phase, index) => {
    const phaseElement = document.createElement("div");
    phaseElement.className = "roadmap-item";
    phaseElement.style.animationDelay = `${index * 0.2}s`;

    let featuresHtml = "";

    if (phase.features.length === 0) {
      // Empty state
      featuresHtml = `
                <div class="roadmap-empty-state">
                    <i class="bi bi-clock-history"></i>
                    <p>No tools in this category yet. Stay tuned for updates!</p>
                </div>
            `;
    } else {
      // Regular features
      featuresHtml = `
                <div class="roadmap-features">
                    ${phase.features
                      .map(
                        (feature) => `
                        <div class="roadmap-feature ${
                          feature.status === "in-progress" ? "in-progress" : ""
                        }">
                            <h4 class="roadmap-feature-title ${
                              feature.status
                            }">${feature.name}</h4>
                            <p class="roadmap-feature-desc">${feature.desc}</p>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            `;
    }

    phaseElement.innerHTML = `
            <div class="roadmap-content">
                <div class="roadmap-header">
                    <h3 class="roadmap-title">${phase.title}</h3>
                  
                </div>
                <p class="roadmap-description">${phase.description}</p>
                ${featuresHtml}
            </div>
        `;

    container.appendChild(phaseElement);
  });
}

// Initialize page content
document.addEventListener("DOMContentLoaded", function () {
  renderFeatures();
  renderRoadmap();
  initMobileMenu();
});

// Mobile menu functionality
function initMobileMenu() {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navLinks.addEventListener("click", function (e) {
      if (e.target.classList.contains("nav-link")) {
        navToggle.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

// Observe elements for animations
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document
      .querySelectorAll(".roadmap-item, .feature-card")
      .forEach((item) => {
        observer.observe(item);
      });
  }, 100);
});

// Add parallax effect to hero background elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".floating-element");

  parallaxElements.forEach((element, index) => {
    const speed = (index + 1) * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Privacy policy page specific scripts
// if (window.location.pathname.includes("privacy-policy.html")) {
//   // Add parallax effect to privacy header
//   window.addEventListener("scroll", () => {
//     const scrolled = window.pageYOffset;
//     const privacyHeader = document.querySelector(".privacy-header");
//     if (privacyHeader) {
//       privacyHeader.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
//   });
// }
