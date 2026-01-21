// ===============================================
// GOUPIL-4000 - JavaScript Principal
// Projet CNC 4 Axes - IUT Mantes-en-Yvelines
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    // Navigation mobile
    initMobileNav();
    
    // Scroll effects
    initScrollEffects();
    
    // Smooth scroll
    initSmoothScroll();
    
    // Animations on scroll
    initScrollAnimations();
});

// === NAVIGATION MOBILE ===
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Fermer le menu au clic sur un lien
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// === EFFETS AU SCROLL ===
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// === SMOOTH SCROLL ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// === ANIMATIONS AU SCROLL ===
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animer les cartes
    const cards = document.querySelectorAll('.stat-card, .feature-card, .team-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// === UTILITAIRES ===

// Formater les nombres
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Copier dans le presse-papiers
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copié dans le presse-papiers !');
    });
}

// Afficher une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// === FONCTIONS SPÉCIFIQUES AUX PAGES ===

// Page Galerie - Lightbox
if (document.querySelector('.gallery-grid')) {
    initGallery();
}

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img')?.src;
            const videoSrc = item.querySelector('video')?.src;
            
            if (imgSrc || videoSrc) {
                openLightbox(imgSrc || videoSrc, !!videoSrc);
            }
        });
    });
}

function openLightbox(src, isVideo) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            ${isVideo ? 
                `<video controls autoplay><source src="${src}" type="video/mp4"></video>` :
                `<img src="${src}" alt="Image">`
            }
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            closeLightbox(lightbox);
        }
    });
}

function closeLightbox(lightbox) {
    document.body.style.overflow = '';
    lightbox.style.opacity = '0';
    setTimeout(() => {
        document.body.removeChild(lightbox);
    }, 300);
}

// Page Spécifications - Tableaux interactifs
if (document.querySelector('.comparison-table')) {
    initComparisonTable();
}

function initComparisonTable() {
    const rows = document.querySelectorAll('.comparison-table tbody tr');
    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'scale(1.02)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'scale(1)';
        });
    });
}

// === ANIMATIONS CSS SUPPLÉMENTAIRES ===
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100px);
            opacity: 0;
        }
    }
    
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .lightbox-content img,
    .lightbox-content video {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 12px;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 3rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        line-height: 1;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// === GESTION DES VIDÉOS ===
document.addEventListener('DOMContentLoaded', () => {
    initVideoHandling();
});

function initVideoHandling() {
    const videos = document.querySelectorAll('.gallery-item video');
    
    videos.forEach(video => {
        // Ajouter un événement au clic pour pause/play
        video.addEventListener('click', function(e) {
            if (this.paused) {
                this.play();
                this.muted = false; // Activer le son au clic
            } else {
                this.pause();
            }
        });
        
        // Gérer les erreurs de chargement
        video.addEventListener('error', function(e) {
            console.error('Erreur de chargement vidéo:', this.src);
            const parent = this.closest('.gallery-item');
            if (parent) {
                const overlay = parent.querySelector('.gallery-overlay');
                if (overlay) {
                    const title = overlay.querySelector('.gallery-title');
                    if (title) {
                        title.innerHTML += ' <span style="color: #ff6b35;">(Erreur de chargement)</span>';
                    }
                }
            }
        });
        
        // Confirmer le chargement réussi et démarrer la lecture
        video.addEventListener('loadedmetadata', function() {
            console.log('Vidéo chargée avec succès:', this.src);
            // Tenter de démarrer la lecture automatiquement
            const playPromise = this.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Lecture automatique démarrée:', this.src);
                }).catch(error => {
                    console.log('Lecture automatique bloquée (normal):', error);
                    // La lecture automatique a été bloquée par le navigateur
                    // L'utilisateur devra cliquer pour démarrer
                });
            }
        });
        
        // Observer l'entrée dans le viewport pour autoplay
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play().catch(() => {
                        // Autoplay bloqué, nécessite interaction utilisateur
                    });
                } else {
                    entry.target.pause();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(video);
        
        // Précharger les données
        video.load();
    });
}

console.log('🚀 Goupil-4000 website loaded successfully!');
