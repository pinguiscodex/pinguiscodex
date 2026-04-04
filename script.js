/* ==========================================================================
   pinguiscodex — Portfolio Scripts
   Vanilla JS only. No dependencies.
   ========================================================================== */

(function () {
  'use strict';

  // --- Config ---
  const GITHUB_USERNAME = 'pinguiscodex';
  const MAX_REPOS = 6;
  // Repos to exclude (e.g. username.github.io)
  const EXCLUDED_REPOS = [`${GITHUB_USERNAME}.github.io`];

  // --- Typing Animation ---
  const TYPING_TEXT = "Hey there, I'm pinguiscodex";
  const typingEl = document.getElementById('typing-text');
  const subtitleEl = document.getElementById('hero-subtitle');
  const heroActionsEl = document.getElementById('hero-actions');
  const TYPING_SPEED = 65; // ms per character
  const TYPING_DELAY = 600; // initial delay before typing starts

  function typeText(text, element, speed, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    setTimeout(type, TYPING_DELAY);
  }

  function revealHeroContent() {
    subtitleEl.classList.remove('hidden');
    heroActionsEl.classList.remove('hidden');
  }

  // Start typing on load
  if (typingEl) {
    typeText(TYPING_TEXT, typingEl, TYPING_SPEED, revealHeroContent);
  }

  // --- Mobile Nav Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // --- Active Nav Highlighting (scroll spy) ---
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function setActiveNav() {
    const scrollY = window.scrollY + 120; // offset for fixed nav
    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function (a) {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });

  // --- Fetch GitHub Repos ---
  const projectsGrid = document.getElementById('projects-grid');
  const projectsLoading = document.getElementById('projects-loading');
  const projectsError = document.getElementById('projects-error');

  function createRepoCard(repo) {
    var card = document.createElement('article');
    card.className = 'repo-card';
    card.setAttribute('role', 'listitem');

    var description = repo.description || 'No description provided.';
    var language = repo.language || '—';
    var stars = repo.stargazers_count || 0;

    card.innerHTML =
      '<a href="' + repo.html_url + '" target="_blank" rel="noopener noreferrer" class="repo-name">' +
        repo.name +
      '</a>' +
      '<p class="repo-desc">' + escapeHTML(description) + '</p>' +
      '<div class="repo-meta">' +
        '<span class="repo-lang"><span class="repo-lang-dot"></span>' + escapeHTML(language) + '</span>' +
        '<span class="repo-stars">&#9733; ' + stars + '</span>' +
      '</div>' +
      '<a href="' + repo.html_url + '" target="_blank" rel="noopener noreferrer" class="repo-link-arrow">view on github &rarr;</a>';

    return card;
  }

  function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function fetchRepos() {
    if (!projectsGrid) return;

    var url = 'https://api.github.com/users/' + GITHUB_USERNAME +
              '/repos?sort=updated&per_page=100&type=owner';

    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('API error: ' + res.status);
        return res.json();
      })
      .then(function (repos) {
        // Filter out excluded repos and sort by stars (popularity)
        var filtered = repos
          .filter(function (r) { return EXCLUDED_REPOS.indexOf(r.name) === -1; })
          .sort(function (a, b) { return b.stargazers_count - a.stargazers_count; })
          .slice(0, MAX_REPOS);

        if (filtered.length === 0) {
          throw new Error('No repos found');
        }

        // Clear loading
        if (projectsLoading) projectsLoading.style.display = 'none';

        // Render cards
        filtered.forEach(function (repo) {
          projectsGrid.appendChild(createRepoCard(repo));
        });
      })
      .catch(function () {
        if (projectsLoading) projectsLoading.style.display = 'none';
        if (projectsError) projectsError.classList.remove('hidden');
      });
  }

  // Fetch repos when the section scrolls into view (lazy)
  if (projectsGrid) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          fetchRepos();
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });

    observer.observe(projectsGrid);
  }

  // --- Footer Year ---
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
