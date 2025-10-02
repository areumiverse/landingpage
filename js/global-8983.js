(function() {
  const init = () => {
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/628132014101?text=Halo%20Admin%20AreumiVerse,%20saya%20ingin%20bertanya';
    whatsappButton.target = '_blank';
    whatsappButton.className = 'whatsapp-float-button';
    whatsappButton.innerHTML = '<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M16 0C7.164 0 0 7.164 0 16c0 2.826.736 5.588 2.133 8.002L.08 31.92l8.166-2.137A15.937 15.937 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.334c-2.548 0-5.04-.721-7.217-2.083l-.518-.323-5.368 1.404 1.432-5.234-.354-.537A13.276 13.276 0 012.667 16c0-7.364 5.97-13.334 13.333-13.334S29.333 8.636 29.333 16 23.364 29.334 16 29.334zm7.308-9.975c-.4-.2-2.366-1.166-2.732-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.567-.234.266-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.984-1.188-1.06-1.99-2.368-2.224-2.768-.233-.4-.025-.616.175-.816.18-.18.4-.467.6-.7.2-.234.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.674-.9-.687-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.866 1.633 4.132c.2.267 2.817 4.3 6.826 6.03.954.412 1.698.658 2.278.842.957.304 1.828.261 2.517.158.768-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z"/></svg>';
    
    const style = document.createElement('style');
    style.textContent = `
      .whatsapp-float-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: #25D366;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        z-index: 9999;
        transition: all 0.3s ease;
        animation: pulse 2s infinite;
      }
      .whatsapp-float-button:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(37, 211, 102, 0.6);
      }
      .whatsapp-float-button svg {
        width: 32px;
        height: 32px;
      }
      @keyframes pulse {
        0%, 100% {
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        }
        50% {
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7);
        }
      }
      @media (max-width: 768px) {
        .whatsapp-float-button {
          width: 56px;
          height: 56px;
          bottom: 16px;
          right: 16px;
        }
        .whatsapp-float-button svg {
          width: 28px;
          height: 28px;
        }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(whatsappButton);

    const smoothScroll = (target) => {
      const element = document.querySelector(target);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          e.preventDefault();
          smoothScroll(href);
          const mobileNav = document.querySelector('[x-data]');
          if (mobileNav && mobileNav.__x) {
            mobileNav.__x.$data.mobileNavOpen = false;
          }
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();