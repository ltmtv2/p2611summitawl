(function () {
  'use strict';

  /**
   * Zentrale Navigationskonfiguration fuer Awakening Leaders 2027 (p2611summitawl).
   * Nur tatsächlich vorhandene interne Routen sind verlinkt; noch nicht angelegte
   * Seiten haben `href: null` und können hier zentral ergänzt werden, sobald sie existieren.
   */
  const NAV_CONFIG = {
    title: 'Navigation',
    topItems: [
      { label: 'Home', href: '/' },
    ],
    groups: [
      {
        heading: 'ANGEBOTE',
        items: [
          { label: 'One-Time-Offer', href: null },
          { label: 'Verkaufsseite', href: null },
          { label: 'Partnerprogramm', href: null },
        ],
      },
      {
        heading: 'EINLADUNGEN',
        items: [
          { label: 'Speaker-Einladung (Sandra)', href: '/speakereinladung-sandra' },
          { label: 'Speaker-Einladung (Georg)', href: '/speakereinladung-georg' },
        ],
      },
      {
        heading: 'INTERVIEWSEITEN',
        items: [
          { label: 'Interview 1', href: null },
          { label: 'Interview 2', href: null },
          { label: 'Interview 3', href: null },
        ],
      },
      {
        heading: 'ZUGANG',
        items: [
          { label: 'Kongresspaket Zugang', href: null },
        ],
      },
      {
        heading: 'RECHTLICHES',
        items: [
          { label: 'Impressum', href: null },
          { label: 'Datenschutz', href: null },
        ],
      },
    ],
  };

  function normalizePath(rawPath) {
    if (!rawPath) return '/';
    let p = rawPath.split('?')[0].split('#')[0];
    p = p.replace(/\/index\.html$/i, '');
    if (p.length > 1 && p.endsWith('/')) {
      p = p.slice(0, -1);
    }
    return p || '/';
  }

  function injectStyles() {
    if (document.getElementById('awl-nav-styles')) return;
    const style = document.createElement('style');
    style.id = 'awl-nav-styles';
    style.textContent = [
      'body { overflow-x: clip; }',
      '.awl-page-shell {',
      '  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);',
      '}',
      '@media (min-width: 769px) {',
      '  body.awl-nav-open .awl-page-shell {',
      '    transform: translateX(-320px);',
      '  }',
      '}',
      '.awl-nav-trigger {',
      '  appearance: none;',
      '  background: transparent;',
      '  border: 0;',
      '  padding: 2px 6px;',
      '  margin: 0 0 0 -10px;',
      '  min-width: 24px;',
      '  min-height: 24px;',
      '  display: inline-flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  font: inherit;',
      '  font-size: 14px;',
      '  line-height: 1;',
      '  color: rgba(100, 116, 139, 0.45);',
      '  cursor: pointer;',
      '  border-radius: 4px;',
      '  transition: color 0.2s ease;',
      '}',
      '.awl-nav-trigger:hover {',
      '  color: #475569;',
      '}',
      '.awl-nav-trigger:focus-visible {',
      '  outline: 2px solid #a90499;',
      '  outline-offset: 2px;',
      '  color: #0f172a;',
      '}',
      '.awl-nav-overlay {',
      '  position: fixed;',
      '  inset: 0;',
      '  z-index: 9998;',
      '  background: rgba(15, 23, 42, 0.28);',
      '  -webkit-backdrop-filter: blur(4px);',
      '  backdrop-filter: blur(4px);',
      '  opacity: 0;',
      '  visibility: hidden;',
      '  pointer-events: none;',
      '  touch-action: none;',
      '  transition: opacity 0.3s ease, visibility 0.3s ease;',
      '}',
      '.awl-nav-overlay.is-open {',
      '  opacity: 1;',
      '  visibility: visible;',
      '  pointer-events: auto;',
      '}',
      '.awl-nav-drawer {',
      '  position: fixed;',
      '  top: 0;',
      '  right: 0;',
      '  bottom: 0;',
      '  height: 100dvh;',
      '  width: 320px;',
      '  max-width: 320px;',
      '  z-index: 9999;',
      '  background: #ffffff;',
      '  color: #0f172a;',
      '  border-left: 1px solid #e2e8f0;',
      '  box-shadow: -16px 0 40px rgba(15, 23, 42, 0.12);',
      '  display: flex;',
      '  flex-direction: column;',
      '  font-family: Inter, system-ui, -apple-system, sans-serif;',
      '  transform: translateX(100%);',
      '  visibility: hidden;',
      '  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.4s;',
      '}',
      '@media (max-width: 768px) {',
      '  .awl-nav-drawer {',
      '    width: 85vw;',
      '    max-width: 384px;',
      '  }',
      '}',
      '.awl-nav-drawer.is-open {',
      '  transform: translateX(0);',
      '  visibility: visible;',
      '}',
      '.awl-nav-header {',
      '  flex: 0 0 auto;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: space-between;',
      '  padding: 20px 20px 18px 24px;',
      '  border-bottom: 1px solid #e2e8f0;',
      '}',
      '.awl-nav-title {',
      '  font-family: Adamina, Georgia, serif;',
      '  font-size: 20px;',
      '  font-weight: 400;',
      '  color: #0f172a;',
      '  margin: 0;',
      '  line-height: 1.2;',
      '}',
      '.awl-nav-close {',
      '  appearance: none;',
      '  background: transparent;',
      '  border: 1px solid transparent;',
      '  border-radius: 8px;',
      '  width: 40px;',
      '  height: 40px;',
      '  display: inline-flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  color: #334155;',
      '  cursor: pointer;',
      '  transition: background-color 0.2s ease, color 0.2s ease;',
      '}',
      '.awl-nav-close:hover {',
      '  background: #f1f5f9;',
      '  color: #0f172a;',
      '}',
      '.awl-nav-close:focus-visible {',
      '  outline: 2px solid #a90499;',
      '  outline-offset: 2px;',
      '  color: #0f172a;',
      '}',
      '.awl-nav-body {',
      '  flex: 1 1 auto;',
      '  overflow-y: auto;',
      '  -webkit-overflow-scrolling: touch;',
      '  overscroll-behavior: contain;',
      '  padding: 16px 16px 32px;',
      '}',
      '.awl-nav-list {',
      '  list-style: none;',
      '  margin: 0;',
      '  padding: 0;',
      '  display: flex;',
      '  flex-direction: column;',
      '  gap: 2px;',
      '}',
      '.awl-nav-group {',
      '  margin-top: 22px;',
      '}',
      '.awl-nav-group-heading {',
      '  margin: 0 0 8px 12px;',
      '  font-size: 10px;',
      '  font-weight: 500;',
      '  letter-spacing: 3px;',
      '  color: #475569;',
      '  text-transform: uppercase;',
      '}',
      '.awl-nav-link {',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: space-between;',
      '  min-height: 42px;',
      '  padding: 9px 12px;',
      '  border-radius: 8px;',
      '  text-decoration: none;',
      '  font-size: 15px;',
      '  font-weight: 400;',
      '  line-height: 1.4;',
      '  color: #0f172a;',
      '  border-left: 2px solid transparent;',
      '  transition: background-color 0.18s ease, color 0.18s ease;',
      '}',
      '.awl-nav-link:hover {',
      '  background: #f6f9fc;',
      '  color: #a90499;',
      '}',
      '.awl-nav-link:focus-visible {',
      '  outline: 2px solid #a90499;',
      '  outline-offset: 2px;',
      '}',
      '.awl-nav-link.is-current {',
      '  background: #f6f9fc;',
      '  color: #0f172a;',
      '  font-weight: 500;',
      '  border-left-color: #a90499;',
      '}',
      '.awl-nav-pending {',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: space-between;',
      '  min-height: 40px;',
      '  padding: 8px 12px;',
      '  border-radius: 8px;',
      '  font-size: 14px;',
      '  font-weight: 400;',
      '  line-height: 1.4;',
      '  color: #64748b;',
      '  border-left: 2px solid transparent;',
      '  cursor: default;',
      '}',
      '.awl-nav-status {',
      '  font-size: 10px;',
      '  letter-spacing: 1px;',
      '  color: #64748b;',
      '  opacity: 0.8;',
      '}',
      '@media (max-width: 768px) {',
      '  .awl-nav-link, .awl-nav-pending {',
      '    min-height: 44px;',
      '  }',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  function createCloseIcon() {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.8');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('aria-hidden', 'true');

    const line1 = document.createElementNS(svgNS, 'line');
    line1.setAttribute('x1', '18');
    line1.setAttribute('y1', '6');
    line1.setAttribute('x2', '6');
    line1.setAttribute('y2', '18');

    const line2 = document.createElementNS(svgNS, 'line');
    line2.setAttribute('x1', '6');
    line2.setAttribute('y1', '6');
    line2.setAttribute('x2', '18');
    line2.setAttribute('y2', '18');

    svg.appendChild(line1);
    svg.appendChild(line2);
    return svg;
  }

  function buildListItem(item, currentPath, onSelect) {
    const li = document.createElement('li');
    if (item.href) {
      const link = document.createElement('a');
      link.className = 'awl-nav-link';
      link.href = item.href;
      link.textContent = item.label;
      if (normalizePath(item.href) === currentPath) {
        link.classList.add('is-current');
        link.setAttribute('aria-current', 'page');
      }
      link.addEventListener('click', function () {
        onSelect();
      });
      li.appendChild(link);
    } else {
      const span = document.createElement('span');
      span.className = 'awl-nav-pending';
      span.setAttribute('aria-disabled', 'true');

      const labelEl = document.createElement('span');
      labelEl.textContent = item.label;
      span.appendChild(labelEl);

      const statusEl = document.createElement('span');
      statusEl.className = 'awl-nav-status';
      statusEl.textContent = 'folgt';
      span.appendChild(statusEl);

      li.appendChild(span);
    }
    return li;
  }

  function getFocusableElements(container) {
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    return Array.prototype.slice.call(container.querySelectorAll(selector)).filter(function (el) {
      return el.offsetParent !== null || el === document.activeElement;
    });
  }

  function init() {
    const trigger = document.getElementById('awl-nav-trigger');
    if (!trigger) return;

    injectStyles();

    const pageShell = document.getElementById('awl-page-shell');
    const currentPath = normalizePath(window.location.pathname);

    const overlay = document.createElement('div');
    overlay.id = 'awl-nav-overlay';
    overlay.className = 'awl-nav-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    const drawer = document.createElement('aside');
    drawer.id = 'awl-nav-drawer';
    drawer.className = 'awl-nav-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-labelledby', 'awl-nav-title');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('tabindex', '-1');

    const header = document.createElement('div');
    header.className = 'awl-nav-header';

    const title = document.createElement('h2');
    title.id = 'awl-nav-title';
    title.className = 'awl-nav-title';
    title.textContent = NAV_CONFIG.title;

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.id = 'awl-nav-close';
    closeBtn.className = 'awl-nav-close';
    closeBtn.setAttribute('aria-label', 'Navigation schließen');
    closeBtn.appendChild(createCloseIcon());

    header.appendChild(title);
    header.appendChild(closeBtn);

    const nav = document.createElement('nav');
    nav.className = 'awl-nav-body';
    nav.setAttribute('aria-label', 'Seitennavigation');

    let isOpen = false;
    let savedHtmlOverflow = '';
    let savedBodyOverflow = '';
    let savedBodyPaddingRight = '';

    function closeMenu(returnFocus) {
      if (!isOpen) return;
      isOpen = false;

      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('is-open');
      document.body.classList.remove('awl-nav-open');
      trigger.setAttribute('aria-expanded', 'false');

      if (pageShell) {
        pageShell.removeAttribute('aria-hidden');
        if ('inert' in pageShell) {
          pageShell.inert = false;
        }
      }

      document.documentElement.style.overflow = savedHtmlOverflow;
      document.body.style.overflow = savedBodyOverflow;
      document.body.style.paddingRight = savedBodyPaddingRight;

      if (returnFocus !== false) {
        trigger.focus();
      }
    }

    function openMenu() {
      if (isOpen) return;
      isOpen = true;

      savedHtmlOverflow = document.documentElement.style.overflow;
      savedBodyOverflow = document.body.style.overflow;
      savedBodyPaddingRight = document.body.style.paddingRight;

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0 && window.innerWidth >= 769) {
        document.body.style.paddingRight = scrollbarWidth + 'px';
      }

      if (pageShell) {
        pageShell.setAttribute('aria-hidden', 'true');
        if ('inert' in pageShell) {
          pageShell.inert = true;
        }
      }

      overlay.classList.add('is-open');
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('awl-nav-open');
      trigger.setAttribute('aria-expanded', 'true');

      window.requestAnimationFrame(function () {
        closeBtn.focus();
      });
    }

    const topList = document.createElement('ul');
    topList.className = 'awl-nav-list';
    NAV_CONFIG.topItems.forEach(function (item) {
      topList.appendChild(
        buildListItem(item, currentPath, function () {
          closeMenu(false);
        })
      );
    });
    nav.appendChild(topList);

    NAV_CONFIG.groups.forEach(function (group) {
      const section = document.createElement('div');
      section.className = 'awl-nav-group';

      const heading = document.createElement('p');
      heading.className = 'awl-nav-group-heading';
      heading.textContent = group.heading;
      section.appendChild(heading);

      const ul = document.createElement('ul');
      ul.className = 'awl-nav-list';
      group.items.forEach(function (item) {
        ul.appendChild(
          buildListItem(item, currentPath, function () {
            closeMenu(false);
          })
        );
      });
      section.appendChild(ul);
      nav.appendChild(section);
    });

    drawer.appendChild(header);
    drawer.appendChild(nav);

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    trigger.addEventListener('click', function () {
      if (isOpen) {
        closeMenu(true);
      } else {
        openMenu();
      }
    });

    closeBtn.addEventListener('click', function () {
      closeMenu(true);
    });

    overlay.addEventListener('click', function () {
      closeMenu(true);
    });

    document.addEventListener('keydown', function (event) {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key === 'Tab') {
        const focusables = getFocusableElements(drawer);
        if (focusables.length === 0) {
          event.preventDefault();
          drawer.focus();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey) {
          if (document.activeElement === first || !drawer.contains(document.activeElement)) {
            event.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last || !drawer.contains(document.activeElement)) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
