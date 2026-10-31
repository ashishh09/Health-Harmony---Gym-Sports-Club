/**
 * HEALTH & HARMONY — GYM & SPORTS CLUB
 * Vanilla JavaScript Implementation
 * Location: Chhatrapati Sambhajinagar, Maharashtra
 * Phone/WhatsApp: +91 85988 59853
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const WHATSAPP_PHONE = '918598859853';

  // ==========================================================================
  // 1. STICKY NAVBAR & ACTIVE NAV LINK HIGHLIGHT
  // ==========================================================================
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // ScrollSpy: highlight active link
    const scrollPosition = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ==========================================================================
  // 2. MOBILE HAMBURGER MENU
  // ==========================================================================
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-actions a');

  const toggleMobileNav = () => {
    const isOpen = hamburger?.classList.toggle('is-active');
    mobileNav?.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMobileNav = () => {
    hamburger?.classList.remove('is-active');
    mobileNav?.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', toggleMobileNav);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      closeMobileNav();
    }
  });

  // ==========================================================================
  // 3. SMOOTH SCROLL WITH NAVBAR OFFSET
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // ==========================================================================
  // 4. GALLERY FILTERING
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter') || 'all';

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category') || '';
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ==========================================================================
  // 5. GALLERY LIGHTBOX MODAL
  // ==========================================================================
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = lightbox?.querySelector('.lightbox-img');
  const lightboxTitle = lightbox?.querySelector('.lightbox-title');
  const lightboxCounter = lightbox?.querySelector('.lightbox-counter');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');
  const lightboxPrev = lightbox?.querySelector('.lightbox-prev');
  const lightboxNext = lightbox?.querySelector('.lightbox-next');

  let currentGalleryIndex = 0;
  let visibleGalleryItems = [];

  const getVisibleItems = () => {
    return Array.from(galleryItems).filter((item) => !item.classList.contains('hidden'));
  };

  const updateLightbox = (index) => {
    visibleGalleryItems = getVisibleItems();
    if (!visibleGalleryItems.length) return;

    if (index < 0) index = visibleGalleryItems.length - 1;
    if (index >= visibleGalleryItems.length) index = 0;
    currentGalleryIndex = index;

    const currentItem = visibleGalleryItems[currentGalleryIndex];
    const imgEl = currentItem.querySelector('img');
    const titleEl = currentItem.querySelector('.gallery-item-title');

    if (lightboxImg && imgEl) {
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt || 'Health & Harmony Gallery';
    }

    if (lightboxTitle) {
      lightboxTitle.textContent = titleEl ? titleEl.textContent : 'Health & Harmony';
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentGalleryIndex + 1} of ${visibleGalleryItems.length}`;
    }
  };

  const openLightbox = (index) => {
    updateLightbox(index);
    lightbox?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox?.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      visibleGalleryItems = getVisibleItems();
      const itemIndex = visibleGalleryItems.indexOf(item);
      if (itemIndex !== -1) {
        openLightbox(itemIndex);
      }
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);

  lightboxPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(currentGalleryIndex - 1);
  });

  lightboxNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(currentGalleryIndex + 1);
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      updateLightbox(currentGalleryIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateLightbox(currentGalleryIndex + 1);
    }
  });

  // ==========================================================================
  // 6. MEMBERSHIP WHATSAPP ENQUIRY BUTTONS
  // ==========================================================================
  const membershipButtons = document.querySelectorAll('.membership-enquire-btn');

  membershipButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan') || 'Gym';
      const text = `Hello Health & Harmony, I am interested in the *${planName}* at your club in Chhatrapati Sambhajinagar. Please share membership plans, facilities access, and joining details.`;
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  });

  // ==========================================================================
  // 7. CONTACT FORM VALIDATION & WHATSAPP REDIRECTION
  // ==========================================================================
  const contactForm = document.getElementById('clubContactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const phoneInput = document.getElementById('contactPhone');
      const facilitySelect = document.getElementById('contactFacility');
      const messageInput = document.getElementById('contactMessage');
      const statusDiv = document.getElementById('formStatusMessage');

      const name = nameInput?.value.trim();
      const phone = phoneInput?.value.trim();
      const facility = facilitySelect?.value.trim() || 'General Enquiry';
      const message = messageInput?.value.trim();

      // Simple validation
      if (!name || name.length < 2) {
        showStatus('Please enter your full name.', 'error');
        nameInput?.focus();
        return;
      }

      // Check Indian 10-digit mobile number format
      const phoneDigits = phone ? phone.replace(/\D/g, '') : '';
      if (phoneDigits.length < 10) {
        showStatus('Please enter a valid 10-digit mobile phone number.', 'error');
        phoneInput?.focus();
        return;
      }

      showStatus('Preparing your enquiry for WhatsApp...', 'success');

      let whatsappMsg = `*New Website Enquiry - Health & Harmony*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `🏋️ *Interested Facility:* ${facility}\n`;

      if (message) {
        whatsappMsg += `💬 *Message:* ${message}\n`;
      }

      whatsappMsg += `\nSent via Health & Harmony Club Website (Chhatrapati Sambhajinagar)`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMsg)}`;

      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        showStatus('Opening WhatsApp with your enquiry! If it did not open, click the button below.', 'success');
        contactForm.reset();
      }, 600);
    });
  }

  function showStatus(msg, type) {
    const statusDiv = document.getElementById('formStatusMessage');
    if (!statusDiv) return;

    statusDiv.textContent = msg;
    statusDiv.style.display = 'block';
    statusDiv.style.padding = '0.75rem 1rem';
    statusDiv.style.borderRadius = '6px';
    statusDiv.style.marginTop = '1rem';
    statusDiv.style.fontSize = '0.875rem';
    statusDiv.style.fontWeight = '600';

    if (type === 'error') {
      statusDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
      statusDiv.style.color = '#F87171';
      statusDiv.style.border = '1px solid rgba(239, 68, 68, 0.3)';
    } else {
      statusDiv.style.backgroundColor = 'rgba(198, 255, 0, 0.12)';
      statusDiv.style.color = '#C6FF00';
      statusDiv.style.border = '1px solid rgba(198, 255, 0, 0.3)';
    }
  }

  // ==========================================================================
  // 8. BACK TO TOP BUTTON
  // ==========================================================================
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // ==========================================================================
  // 9. SCROLL REVEAL OBSERVER
  // ==========================================================================
  const fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach((el) => observer.observe(el));
  } else {
    fadeElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // ==========================================================================
  // 10. LIVE OPERATING HOURS STATUS INDICATOR
  // ==========================================================================
  const updateClubHoursStatus = () => {
    const hoursValueEl = document.getElementById('clubHoursValue');
    const hoursStatusEl = document.getElementById('clubHoursStatus');
    if (!hoursValueEl) return;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const openMinutes = 6 * 60; // 6:00 AM
    const closeMinutes = 21 * 60 + 30; // 9:30 PM

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      hoursValueEl.innerHTML = `Closing time: 9:30 PM &nbsp;<span style="color: #C6FF00; font-weight: 700; font-size: 0.8125rem; letter-spacing: 0.05em; text-transform: uppercase; background: rgba(198, 255, 0, 0.12); padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(198, 255, 0, 0.3);">Open Now</span>`;
      if (hoursStatusEl) {
        hoursStatusEl.textContent = 'Open today from 6:00 AM until 9:30 PM for workouts and swim sessions';
      }
    } else {
      hoursValueEl.innerHTML = `Closing time: 9:30 PM &nbsp;<span style="color: #A1A1AA; font-weight: 700; font-size: 0.8125rem; letter-spacing: 0.05em; text-transform: uppercase; background: rgba(255, 255, 255, 0.06); padding: 2px 8px; border-radius: 4px;">Opens 6:00 AM</span>`;
      if (hoursStatusEl) {
        hoursStatusEl.textContent = 'Closed for the night · Daily club hours: 6:00 AM – 9:30 PM';
      }
    }
  };

  updateClubHoursStatus();
});
