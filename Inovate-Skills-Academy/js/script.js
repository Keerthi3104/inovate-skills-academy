/**
 * INOVATE SOLUTION TECHNOLOGY - SKILLS ACADEMY
 * Official Application Script - Completely Audited & Repaired
 * Vanilla JavaScript (ES6+) - 100% Robust, Zero TDZ issues, Zero Framework Overhead.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. DATA STORES
  // =========================================================================

  // Course Details Database
  const courseDatabase = {
    'web-development': {
      title: 'Web Development',
      badge: 'Full Stack & Web',
      description: 'Comprehensive introduction to modern web engineering from semantic structuring to modern client-side scripting.',
      skills: ['HTML5 Semantic Markup', 'CSS3 & Flexbox/Grid', 'Responsive Layouts', 'Modern Vanilla JavaScript', 'DOM Manipulation', 'Web Accessibility (a11y)'],
      overview: 'This track equips learners with core frontend fundamentals to build resilient, responsive, and standards-compliant websites. Learners begin with semantic document hierarchy, progress through modern responsive styling systems, and master dynamic DOM manipulation using modern JavaScript.',
      modules: [
        'Module 1: Semantic HTML5 Structure & Document Architecture',
        'Module 2: Advanced CSS3 Layouts (Flexbox, CSS Grid & Media Queries)',
        'Module 3: Vanilla JavaScript Programming, Events & DOM Control',
        'Module 4: Responsive UI Design, Cross-Browser Compatibility & Performance'
      ],
      practicalProject: 'Build and deploy a responsive multi-page institutional web portal with interactive navigation and accessible client-side form controls.'
    },
    'frontend-development': {
      title: 'Frontend Development',
      badge: 'Full Stack & Web',
      description: 'Master modular component architectures, modern UI styling, and reactive state workflows for fast user interfaces.',
      skills: ['Component-Based Design', 'Bootstrap 5 Framework', 'ES6+ Modules', 'Asynchronous JS (Fetch/Promises)', 'REST API Consumption', 'Build & Asset Workflows'],
      overview: 'Focuses on designing interactive and high-performance client-side applications. Learners master component abstraction, CSS framework customisation, asynchronous data fetching from RESTful services, and stateful interface development.',
      modules: [
        'Module 1: Modern JavaScript Architecture & Modular Workflows',
        'Module 2: Advanced Bootstrap 5 & Custom CSS Design Systems',
        'Module 3: Asynchronous Web Requests, JSON & REST APIs',
        'Module 4: Client-Side State Management & Single-Page Application Patterns'
      ],
      practicalProject: 'Develop a dynamic single-page dashboard fetching live data from third-party REST APIs with filterable cards and modal details.'
    },
    'backend-development': {
      title: 'Backend Development',
      badge: 'Full Stack & Web',
      description: 'Architect scalable server applications, design secure RESTful APIs, and manage reliable backend business logic.',
      skills: ['Node.js & Express / Python Server Backends', 'REST API Architecture', 'Middleware & Routing', 'Authentication & Session Handling', 'Database Querying', 'Error Handling & Logging'],
      overview: 'Equips students with the server-side engineering foundations required to power modern web and mobile apps. Students learn routing, middleware patterns, API security best practices, and integration with persistent data layers.',
      modules: [
        'Module 1: Server Runtime Fundamentals & Request-Response Lifecycles',
        'Module 2: Designing RESTful APIs & HTTP Specification Standards',
        'Module 3: Authentication, Password Hashing & Role-Based Access Control',
        'Module 4: Database Integration, Schema Relationships & Data Persistence'
      ],
      practicalProject: 'Architect an authenticated backend REST API service for an academy management system supporting CRUD operations and role-based permissions.'
    },
    'python-programming': {
      title: 'Python Programming',
      badge: 'Programming Languages',
      description: 'Build rigorous problem-solving logic, master object-oriented programming, and write clean, maintainable Python scripts.',
      skills: ['Core Python Syntax', 'Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'File I/O & Automation', 'Exception Handling', 'Package Management'],
      overview: 'Designed for college students and beginners seeking a rock-solid programming foundation. Starting with algorithmic thinking and data structures, learners advance to object-oriented software design, file processing, and modular scripting.',
      modules: [
        'Module 1: Core Syntax, Data Types & Control Structures',
        'Module 2: Functions, Scope & Modular Code Organisation',
        'Module 3: Object-Oriented Programming (Classes, Inheritance, Polymorphism)',
        'Module 4: File Handling, Error Management & Practical Automation Scripts'
      ],
      practicalProject: 'Build a modular command-line academic grading and report generator that parses CSV/JSON files, validates entries, and produces formatted summaries.'
    },
    'java-programming': {
      title: 'Java Programming',
      badge: 'Programming Languages',
      description: 'Develop enterprise-grade software capabilities with strongly-typed object-oriented Java and collections.',
      skills: ['Java SE Core', 'OOP Principles & Design Patterns', 'Java Collections Framework', 'Exception Architecture', 'Multithreading Basics', 'JDBC & SQL Connectivity'],
      overview: 'Provides deep immersion into industry-standard Java development. Students master core object-oriented concepts, memory models, collection interfaces, and relational database interaction via JDBC.',
      modules: [
        'Module 1: Java Architecture, JVM Basics & Fundamental Data Types',
        'Module 2: Deep Dive into OOP (Encapsulation, Inheritance, Abstract Classes, Interfaces)',
        'Module 3: Collections Framework (Lists, Sets, Maps & Iterators)',
        'Module 4: Exception Handling, File Streams & JDBC Database Interaction'
      ],
      practicalProject: 'Develop an inventory management application featuring full CRUD capabilities connected to a relational database through JDBC.'
    },
    'database-management': {
      title: 'Database Management',
      badge: 'Core Foundations',
      description: 'Master relational schema modeling, efficient SQL querying, transactional integrity, and index optimisation.',
      skills: ['Relational Data Modeling', 'SQL (DDL, DML, DCL)', 'Complex JOINs & Subqueries', 'Normalisation (1NF-3NF)', 'Indexing & Query Optimization', 'Transactions & ACID'],
      overview: 'Understanding data storage is fundamental to software engineering. This track teaches learners how to design robust relational database schemas, write high-performance SQL queries, and ensure data consistency.',
      modules: [
        'Module 1: Relational Database Concepts & Entity-Relationship Modeling',
        'Module 2: SQL Fundamentals: Tables, Constraints & CRUD Operations',
        'Module 3: Advanced SQL: Joins, Aggregations, Grouping & Views',
        'Module 4: Database Normalisation, Indexing Principles & ACID Transactions'
      ],
      practicalProject: 'Design, normalise, and implement a full relational database schema for a multi-department college course enrollment system.'
    },
    'fullstack-development': {
      title: 'Full Stack Development',
      badge: 'Full Stack & Web',
      description: 'Connect client-side interfaces with robust server architectures and databases in a unified engineering workflow.',
      skills: ['End-to-End System Design', 'Frontend Component Layer', 'Backend API Layer', 'Database Integration', 'Git Version Control', 'Application Deployment Basics'],
      overview: 'Our flagship hands-on track uniting modern frontend presentation, robust backend routing, and persistent database storage into complete, functional software applications.',
      modules: [
        'Module 1: Full Stack Architecture & Collaborative Git Workflows',
        'Module 2: Client-Side Interface Engineering & Responsive Views',
        'Module 3: Server API Development & Business Logic Pipeline',
        'Module 4: Database Schema Integration, Testing & End-to-End Deployment'
      ],
      practicalProject: 'Build and deploy a full-featured Skill Academy Portal enabling student registration, course tracking, and administrative review.'
    },
    'software-fundamentals': {
      title: 'Software Development Fundamentals',
      badge: 'Core Foundations',
      description: 'Cultivate foundational computer science concepts, algorithmic thinking, version control, and clean code principles.',
      skills: ['Algorithmic Thinking', 'Data Structures Primer', 'Git & GitHub Collaboration', 'Debugging & Troubleshooting', 'Clean Code Guidelines', 'Software Development Life Cycle (SDLC)'],
      overview: 'A crucial primer for students and career switchers looking to build enduring technical foundations. Covers problem breakdown, version control workflows, command-line usage, and professional code craftsmanship.',
      modules: [
        'Module 1: Computational Logic, Flowcharts & Algorithmic Problem Solving',
        'Module 2: Essential Data Structures & Time/Space Complexity Basics',
        'Module 3: Git Version Control, Branching Models & Repository Management',
        'Module 4: Clean Code Practices, Code Reviews & Professional Tooling'
      ],
      practicalProject: 'Establish a collaborative open-source style repository with clean commit hygiene, documentation, and a suite of algorithm implementations.'
    }
  };

  // Hero Code Snippets Database
  const heroCodeSnippets = {
    'fullstack': {
      title: 'RESTful API & Database Integration',
      code: `<span class="code-syntax-keyword">const</span> express = <span class="code-syntax-fn">require</span>(<span class="code-syntax-str">'express'</span>);
<span class="code-syntax-keyword">const</span> app = <span class="code-syntax-fn">express</span>();

<span class="code-syntax-comment">// Practical endpoint routing</span>
app.<span class="code-syntax-fn">get</span>(<span class="code-syntax-str">'/api/courses'</span>, <span class="code-syntax-keyword">async</span> (req, res) => {
  <span class="code-syntax-keyword">const</span> tracks = <span class="code-syntax-keyword">await</span> db.<span class="code-syntax-fn">query</span>(<span class="code-syntax-str">'SELECT * FROM tracks'</span>);
  res.<span class="code-syntax-fn">status</span>(200).<span class="code-syntax-fn">json</span>({ success: <span class="code-syntax-keyword">true</span>, data: tracks });
});`
    },
    'python': {
      title: 'Python Modular Logic & OOP',
      code: `<span class="code-syntax-keyword">class</span> <span class="code-syntax-fn">AcademyTrack</span>:
    <span class="code-syntax-keyword">def</span> <span class="code-syntax-fn">__init__</span>(self, title, practical_hours):
        self.title = title
        self.practical_hours = practical_hours
    
    <span class="code-syntax-keyword">def</span> <span class="code-syntax-fn">generate_syllabus</span>(self):
        <span class="code-syntax-keyword">return</span> f<span class="code-syntax-str">"Certified Track: {self.title} [Labs: {self.practical_hours}h]"</span>`
    },
    'frontend': {
      title: 'Modern Client-Side Component DOM',
      code: `<span class="code-syntax-comment">// Responsive client-side data binding</span>
<span class="code-syntax-keyword">const</span> loadCourses = <span class="code-syntax-keyword">async</span> () => {
  <span class="code-syntax-keyword">const</span> response = <span class="code-syntax-keyword">await</span> <span class="code-syntax-fn">fetch</span>(<span class="code-syntax-str">'/api/courses'</span>);
  <span class="code-syntax-keyword">const</span> { data } = <span class="code-syntax-keyword">await</span> response.<span class="code-syntax-fn">json</span>();
  <span class="code-syntax-fn">renderCourseCards</span>(data);
};`
    }
  };

  // =========================================================================
  // 2. ALL CORE DOM REFERENCES (Declared upfront to prevent TDZ issues)
  // =========================================================================
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const navbar = document.querySelector('.navbar-custom');
  const navLinks = document.querySelectorAll('.navbar-custom .nav-link');
  const navCollapse = document.getElementById('navbarContent');
  const navToggler = document.querySelector('.navbar-toggler');
  const sections = document.querySelectorAll('header[id], section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Hero switcher elements
  const codeTabBtns = document.querySelectorAll('.code-tab-btn');
  const codeSnippetPre = document.getElementById('heroCodeSnippet');
  const codeBoxTitle = document.getElementById('heroCodeTitle');

  // Course catalogue elements
  const searchInput = document.getElementById('courseSearchInput');
  const clearSearchBtn = document.getElementById('clearCourseSearch');
  const filterBtns = document.querySelectorAll('.course-filter-btn');
  const courseCards = document.querySelectorAll('.course-card-col');
  const resultStats = document.getElementById('coursesResultStats');
  const emptyState = document.getElementById('coursesEmptyState');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Course Details Modal elements
  const courseDetailsModalEl = document.getElementById('courseDetailsModal');
  const modalTitle = document.getElementById('modalCourseTitle');
  const modalBadge = document.getElementById('modalCourseBadge');
  const modalOverview = document.getElementById('modalCourseOverview');
  const modalSkillsContainer = document.getElementById('modalCourseSkills');
  const modalModulesContainer = document.getElementById('modalCourseModules');
  const modalProjectText = document.getElementById('modalCourseProject');
  const modalEnquireBtn = document.getElementById('modalEnquireBtn');
  let activeModalCourseKey = '';

  // Poster Lightbox Modal elements
  const posterModalEl = document.getElementById('posterLightboxModal');
  const posterModalImg = document.getElementById('posterModalImg');
  const posterModalTitle = document.getElementById('posterModalTitle');
  const posterModalCaption = document.getElementById('posterModalCaption');

  // Learning Journey elements
  const journeySection = document.getElementById('learning-process');
  const journeyProgressLine = document.getElementById('processLineProgress');
  const journeyStepItems = document.querySelectorAll('.process-step-item');

  // Enquiry Form elements
  const enquirySection = document.getElementById('enquiry');
  const enquiryForm = document.getElementById('academyEnquiryForm');
  const successBanner = document.getElementById('enquirySuccessBanner');
  const submitBtn = document.getElementById('enquirySubmitBtn');
  const submitBtnText = document.getElementById('submitBtnText');
  const submitBtnSpinner = document.getElementById('submitBtnSpinner');
  const resetFormBtn = document.getElementById('resetFormBtn');

  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('emailAddress');
  const mobileInput = document.getElementById('mobileNumber');
  const mobileDigitCounter = document.getElementById('mobileDigitCounter');
  const courseSelectDropdown = document.getElementById('enquiryCourse');
  const qualificationInput = document.getElementById('currentQualification');
  const messageInput = document.getElementById('userMessage');
  const consentCheckbox = document.getElementById('privacyConsent');
  const modeRadioTiles = document.querySelectorAll('.mode-radio-tile');

  let selectedMode = 'In-Person Classroom / Lab (Madurai Centre)';
  let activeCategory = 'all';
  let activeSearchTerm = '';

  // =========================================================================
  // 3. ROBUST MODAL HELPERS (Bootstrap with Pure Vanilla Fallback)
  // =========================================================================
  const openModal = (modalEl) => {
    if (!modalEl) return;
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
      const inst = bootstrap.Modal.getOrCreateInstance(modalEl);
      inst.show();
    } else {
      modalEl.classList.add('show');
      modalEl.style.display = 'block';
      modalEl.removeAttribute('aria-hidden');
      modalEl.setAttribute('aria-modal', 'true');
      document.body.classList.add('modal-open');

      if (!document.querySelector('.modal-backdrop')) {
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        backdrop.addEventListener('click', () => closeModal(modalEl));
        document.body.appendChild(backdrop);
      }
    }
  };

  const closeModal = (modalEl) => {
    if (!modalEl) return;
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
      const inst = bootstrap.Modal.getInstance(modalEl);
      if (inst) inst.hide();
    }
    modalEl.classList.remove('show');
    modalEl.style.display = 'none';
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.removeAttribute('aria-modal');
    document.body.classList.remove('modal-open');

    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) backdrop.remove();
  };

  // Wire all modal dismiss buttons
  document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parentModal = btn.closest('.modal');
      if (parentModal) {
        closeModal(parentModal);
      }
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('.modal.show');
      openModals.forEach(m => closeModal(m));
    }
  });

  // =========================================================================
  // 4. SCROLL PROGRESS & LEARNING JOURNEY ANIMATION
  // =========================================================================
  const updateJourneyProgress = (winScroll) => {
    if (!journeySection || !journeyProgressLine) return;
    const rect = journeySection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
      const sectionHeight = rect.height;
      const progressRatio = Math.min(Math.max((windowHeight * 0.75 - rect.top) / (sectionHeight * 0.8), 0), 1);
      journeyProgressLine.style.width = (progressRatio * 100) + '%';

      journeyStepItems.forEach((step, idx) => {
        const threshold = (idx + 0.25) / journeyStepItems.length;
        if (progressRatio >= threshold) {
          step.classList.add('is-active');
        } else {
          step.classList.remove('is-active');
        }
      });
    }
  };

  const handleScroll = () => {
    const winScroll = window.scrollY || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Top scroll progress bar
    if (scrollProgressBar && height > 0) {
      const scrolled = (winScroll / height) * 100;
      scrollProgressBar.style.width = scrolled + '%';
    }

    // Sticky navbar elevation
    if (navbar) {
      if (winScroll > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll spy for navigation
    let currentSectionId = '';
    const scrollPos = winScroll + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + secHeight) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }

    // Update learning journey
    updateJourneyProgress(winScroll);

    // Back to top button visibility
    if (backToTopBtn) {
      if (winScroll > 350) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial run safely after all variables are declared

  // Back to top click handler
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 5. MOBILE NAVIGATION TOGGLE & AUTO-COLLAPSE
  // =========================================================================
  if (navToggler && navCollapse) {
    navToggler.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        const inst = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        inst.toggle();
      } else {
        navCollapse.classList.toggle('show');
        const isShown = navCollapse.classList.contains('show');
        navToggler.setAttribute('aria-expanded', isShown ? 'true' : 'false');
      }
    });
  }

  // Auto-close mobile navigation when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const inst = bootstrap.Collapse.getInstance(navCollapse);
          if (inst) inst.hide();
        } else {
          navCollapse.classList.remove('show');
          if (navToggler) navToggler.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // =========================================================================
  // 6. SCROLL REVEAL ANIMATIONS
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // =========================================================================
  // 7. HERO CODE & ARCHITECTURE SWITCHER
  // =========================================================================
  codeTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      codeTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const trackKey = btn.getAttribute('data-code-track');
      const snippetObj = heroCodeSnippets[trackKey];

      if (snippetObj && codeSnippetPre) {
        codeSnippetPre.innerHTML = snippetObj.code;
        if (codeBoxTitle) {
          codeBoxTitle.textContent = snippetObj.title;
        }
      }
    });
  });

  // =========================================================================
  // 8. COURSE SEARCH & CATEGORY FILTERING (Unified)
  // =========================================================================
  const filterAndSearchCourses = () => {
    let visibleCount = 0;
    const term = (activeSearchTerm || '').toLowerCase().trim();

    courseCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const title = card.querySelector('.course-card-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.course-card-desc')?.textContent.toLowerCase() || '';
      const skills = card.querySelector('.course-skill-tags')?.textContent.toLowerCase() || '';

      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = (term === '' || title.includes(term) || desc.includes(term) || skills.includes(term));

      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
        card.style.opacity = '1';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultStats) {
      resultStats.textContent = `Showing ${visibleCount} of ${courseCards.length} course tracks`;
    }

    if (emptyState) {
      emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      activeSearchTerm = searchInput.value;
      if (clearSearchBtn) {
        if (activeSearchTerm.length > 0) {
          clearSearchBtn.classList.remove('d-none');
        } else {
          clearSearchBtn.classList.add('d-none');
        }
      }
      filterAndSearchCourses();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchInput.value = '';
      activeSearchTerm = '';
      clearSearchBtn.classList.add('d-none');
      searchInput.focus();
      filterAndSearchCourses();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      filterAndSearchCourses();
    });
  });

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (searchInput) searchInput.value = '';
      activeSearchTerm = '';
      if (clearSearchBtn) clearSearchBtn.classList.add('d-none');

      activeCategory = 'all';
      filterBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
      });

      filterAndSearchCourses();
    });
  }

  // =========================================================================
  // 9. COURSE ACTIONS: PRE-FILL & CURRICULUM MODAL
  // =========================================================================
  const selectCourseAndScroll = (courseKey) => {
    if (courseSelectDropdown) {
      courseSelectDropdown.value = courseKey;
      courseSelectDropdown.dispatchEvent(new Event('change'));
    }

    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (fullNameInput) {
          fullNameInput.focus();
        }
      }, 600);
    }
  };

  document.querySelectorAll('.btn-course-enquire').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseKey = btn.getAttribute('data-course-key');
      selectCourseAndScroll(courseKey);
    });
  });

  document.querySelectorAll('.btn-course-overview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseKey = btn.getAttribute('data-course-key');
      const data = courseDatabase[courseKey];

      if (data && courseDetailsModalEl) {
        activeModalCourseKey = courseKey;
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalBadge) modalBadge.textContent = data.badge;
        if (modalOverview) modalOverview.textContent = data.overview;
        if (modalProjectText) modalProjectText.textContent = data.practicalProject;

        if (modalSkillsContainer) {
          modalSkillsContainer.innerHTML = '';
          data.skills.forEach(skill => {
            const pill = document.createElement('span');
            pill.className = 'badge bg-light text-dark border me-1 mb-1 p-2';
            pill.style.fontSize = '0.785rem';
            pill.textContent = skill;
            modalSkillsContainer.appendChild(pill);
          });
        }

        if (modalModulesContainer) {
          modalModulesContainer.innerHTML = '';
          data.modules.forEach(mod => {
            const li = document.createElement('li');
            li.className = 'mb-2 text-secondary';
            li.style.fontSize = '0.92rem';
            li.innerHTML = `<i class="bi bi-check2-circle text-teal me-2"></i> ${mod}`;
            modalModulesContainer.appendChild(li);
          });
        }

        openModal(courseDetailsModalEl);
      }
    });
  });

  if (modalEnquireBtn) {
    modalEnquireBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal(courseDetailsModalEl);
      if (activeModalCourseKey) {
        selectCourseAndScroll(activeModalCourseKey);
      }
    });
  }

  // =========================================================================
  // 10. PROMOTIONAL POSTER LIGHTBOX
  // =========================================================================
  document.querySelectorAll('.poster-image-container').forEach(container => {
    container.addEventListener('click', () => {
      const img = container.querySelector('img');
      const parentCard = container.closest('.poster-card');
      const title = parentCard ? parentCard.querySelector('.poster-caption-title')?.textContent : 'Promotional Poster';
      const caption = parentCard ? parentCard.querySelector('.poster-caption-note')?.textContent : '';

      if (posterModalImg && img) {
        posterModalImg.src = img.src;
        posterModalImg.alt = img.alt;
      }
      if (posterModalTitle) {
        posterModalTitle.textContent = title || 'Promotional Poster';
      }
      if (posterModalCaption) {
        posterModalCaption.textContent = caption || '';
      }

      openModal(posterModalEl);
    });
  });

  // =========================================================================
  // 11. INTERACTIVE ENQUIRY FORM (Highest Priority)
  // =========================================================================

  // Mode Selection Radio Tiles
  modeRadioTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      modeRadioTiles.forEach(t => t.classList.remove('is-selected'));
      tile.classList.add('is-selected');

      const radio = tile.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
      }
      const titleText = tile.querySelector('.mode-radio-title')?.textContent.trim();
      if (titleText) {
        selectedMode = titleText;
      }
    });
  });

  // Validation Patterns
  const nameRegex = /^[a-zA-Z\s.]{2,60}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const indianMobileRegex = /^[6-9]\d{9}$/;

  const validateField = (input, isValid, errorElementId, customErrorMsg = '') => {
    if (!input) return false;
    const errorEl = document.getElementById(errorElementId);
    if (!isValid) {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      if (errorEl && customErrorMsg) {
        errorEl.textContent = customErrorMsg;
      }
      return false;
    } else {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      return true;
    }
  };

  // Mobile number input with live digit counter
  if (mobileInput) {
    mobileInput.addEventListener('input', () => {
      const cleanVal = mobileInput.value.replace(/\D/g, '').slice(0, 10);
      mobileInput.value = cleanVal;

      if (mobileDigitCounter) {
        mobileDigitCounter.textContent = `(${cleanVal.length}/10 digits)`;
        if (cleanVal.length === 10 && indianMobileRegex.test(cleanVal)) {
          mobileDigitCounter.className = 'field-digit-counter text-success fw-bold';
        } else {
          mobileDigitCounter.className = 'field-digit-counter text-muted';
        }
      }

      if (mobileInput.classList.contains('is-invalid')) {
        validateField(
          mobileInput,
          indianMobileRegex.test(cleanVal),
          'mobileError',
          'Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.'
        );
      }
    });

    mobileInput.addEventListener('blur', () => {
      const cleanVal = mobileInput.value.trim().replace(/\D/g, '');
      validateField(
        mobileInput,
        indianMobileRegex.test(cleanVal),
        'mobileError',
        'Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.'
      );
    });
  }

  // Full Name validation
  if (fullNameInput) {
    fullNameInput.addEventListener('blur', () => {
      validateField(
        fullNameInput,
        nameRegex.test(fullNameInput.value.trim()),
        'fullNameError',
        'Please enter your full name (minimum 2 letters).'
      );
    });
    fullNameInput.addEventListener('input', () => {
      if (fullNameInput.classList.contains('is-invalid')) {
        validateField(
          fullNameInput,
          nameRegex.test(fullNameInput.value.trim()),
          'fullNameError'
        );
      }
    });
  }

  // Email validation
  if (emailInput) {
    emailInput.addEventListener('blur', () => {
      validateField(
        emailInput,
        emailRegex.test(emailInput.value.trim()),
        'emailError',
        'Please enter a valid email address (e.g., student@domain.com).'
      );
    });
    emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('is-invalid')) {
        validateField(
          emailInput,
          emailRegex.test(emailInput.value.trim()),
          'emailError'
        );
      }
    });
  }

  // Course dropdown
  if (courseSelectDropdown) {
    courseSelectDropdown.addEventListener('change', () => {
      validateField(
        courseSelectDropdown,
        courseSelectDropdown.value !== '',
        'courseError',
        'Please select a course track.'
      );
    });
  }

  // Qualification dropdown
  if (qualificationInput) {
    qualificationInput.addEventListener('change', () => {
      validateField(
        qualificationInput,
        qualificationInput.value !== '',
        'qualificationError',
        'Please select your qualification status.'
      );
    });
  }

  // Consent checkbox
  if (consentCheckbox) {
    consentCheckbox.addEventListener('change', () => {
      if (consentCheckbox.checked) {
        consentCheckbox.classList.remove('is-invalid');
      } else {
        consentCheckbox.classList.add('is-invalid');
      }
    });
  }

  // Form submission handler
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(
        fullNameInput,
        nameRegex.test(fullNameInput.value.trim()),
        'fullNameError',
        'Please enter a valid full name.'
      );

      const isEmailValid = validateField(
        emailInput,
        emailRegex.test(emailInput.value.trim()),
        'emailError',
        'Please enter a valid email address.'
      );

      const cleanMobile = mobileInput.value.trim().replace(/\D/g, '');
      const isMobileValid = validateField(
        mobileInput,
        indianMobileRegex.test(cleanMobile),
        'mobileError',
        'Please enter a valid 10-digit Indian mobile number.'
      );

      const isCourseValid = validateField(
        courseSelectDropdown,
        courseSelectDropdown.value !== '',
        'courseError',
        'Please select a course track.'
      );

      const isQualValid = validateField(
        qualificationInput,
        qualificationInput.value !== '',
        'qualificationError',
        'Please select your qualification.'
      );

      let isConsentValid = true;
      if (!consentCheckbox.checked) {
        consentCheckbox.classList.add('is-invalid');
        isConsentValid = false;
      } else {
        consentCheckbox.classList.remove('is-invalid');
      }

      if (!isNameValid || !isEmailValid || !isMobileValid || !isCourseValid || !isQualValid || !isConsentValid) {
        const firstInvalid = enquiryForm.querySelector('.is-invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }
        return;
      }

      // Simulated Submission Flow (Prevent double-submission)
      submitBtn.disabled = true;
      if (submitBtnSpinner) submitBtnSpinner.classList.remove('d-none');
      if (submitBtnText) submitBtnText.textContent = 'Verifying & Submitting...';

      const selectedCourseText = courseSelectDropdown.options[courseSelectDropdown.selectedIndex].text;
      const selectedQualText = qualificationInput.options[qualificationInput.selectedIndex].text;

      const submissionSummary = {
        name: fullNameInput.value.trim(),
        email: emailInput.value.trim(),
        mobile: cleanMobile,
        course: selectedCourseText,
        qualification: selectedQualText,
        mode: selectedMode,
        message: messageInput ? messageInput.value.trim() : '',
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      setTimeout(() => {
        submitBtn.disabled = false;
        if (submitBtnSpinner) submitBtnSpinner.classList.add('d-none');
        if (submitBtnText) submitBtnText.textContent = 'Submit Course Enquiry';

        const summaryName = document.getElementById('summaryName');
        const summaryEmail = document.getElementById('summaryEmail');
        const summaryMobile = document.getElementById('summaryMobile');
        const summaryCourse = document.getElementById('summaryCourse');
        const summaryMode = document.getElementById('summaryMode');
        const summaryTime = document.getElementById('summaryTime');

        if (summaryName) summaryName.textContent = submissionSummary.name;
        if (summaryEmail) summaryEmail.textContent = submissionSummary.email;
        if (summaryMobile) summaryMobile.textContent = `+91 ${submissionSummary.mobile}`;
        if (summaryCourse) summaryCourse.textContent = submissionSummary.course;
        if (summaryMode) summaryMode.textContent = submissionSummary.mode;
        if (summaryTime) summaryTime.textContent = submissionSummary.timestamp;

        enquiryForm.style.display = 'none';
        if (successBanner) {
          successBanner.style.display = 'block';
          successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 700);
    });
  }

  // Reset form button
  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (enquiryForm) {
        enquiryForm.reset();
        const inputs = enquiryForm.querySelectorAll('.is-valid, .is-invalid');
        inputs.forEach(el => el.classList.remove('is-valid', 'is-invalid'));
      }

      if (mobileDigitCounter) {
        mobileDigitCounter.textContent = '(0/10 digits)';
        mobileDigitCounter.className = 'field-digit-counter text-muted';
      }

      // Reset mode to default
      modeRadioTiles.forEach((tile, idx) => {
        if (idx === 0) {
          tile.classList.add('is-selected');
          const radio = tile.querySelector('input[type="radio"]');
          if (radio) radio.checked = true;
          selectedMode = 'In-Person Classroom / Lab (Madurai Centre)';
        } else {
          tile.classList.remove('is-selected');
        }
      });

      if (successBanner) successBanner.style.display = 'none';
      if (enquiryForm) enquiryForm.style.display = 'block';

      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (fullNameInput) fullNameInput.focus();
        }, 500);
      }
    });
  }

  // =========================================================================
  // 12. DYNAMIC COPYRIGHT YEAR
  // =========================================================================
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
