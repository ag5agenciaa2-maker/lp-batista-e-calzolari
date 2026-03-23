/**
 * BATISTA E CALZOLARI ADVOGADOS
 * Editorial Jurídico Premium - Preto & Dourado
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // VARIÁVEIS GLOBAIS
    // ==========================================
    const navbar = document.getElementById('navbar');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    const drawerClose = document.querySelector('.drawer-close');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const heroBgImg = document.querySelector('.hero-bg img');
    const heroLine = document.querySelector('.hero-line');
    const heroLabel = document.querySelector('.hero-label');
    const heroTitleLines = document.querySelectorAll('.hero-title-line');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    const heroScroll = document.querySelector('.hero-scroll');

    const timelineItems = document.querySelectorAll('.timeline-item');
    const depoimentoContents = document.querySelectorAll('.depoimento-content');
    const contatoForm = document.getElementById('contato-form');

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });

    // ==========================================
    // MOBILE MENU
    // ==========================================
    function toggleMobileMenu() {
        const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        navbarToggle.setAttribute('aria-expanded', !isExpanded);
        navbarMenu.classList.toggle('active');
        if (drawerOverlay) drawerOverlay.classList.toggle('active');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    }

    function closeMobileMenu() {
        navbarToggle.setAttribute('aria-expanded', 'false');
        navbarMenu.classList.remove('active');
        if (drawerOverlay) drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (navbarToggle) {
        navbarToggle.addEventListener('click', toggleMobileMenu);
    }

    if (drawerClose) {
        drawerClose.addEventListener('click', closeMobileMenu);
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeMobileMenu);
    }

    // Fechar menu ao clicar em links
    navbarLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ==========================================
    // ANIMAÇÕES DO HERO (Load)
    // ==========================================
    function animateHero() {
        // Imagem de fundo
        if (heroBgImg) {
            setTimeout(() => {
                heroBgImg.classList.add('animate');
            }, 100);
        }

        // Linha decorativa
        if (heroLine) {
            setTimeout(() => {
                heroLine.classList.add('animate');
            }, 500);
        }

        // Label
        if (heroLabel) {
            setTimeout(() => {
                heroLabel.classList.add('animate');
            }, 700);
        }

        // Título
        heroTitleLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('animate');
            }, 900 + (index * 150));
        });

        // Subtítulo
        if (heroSubtitle) {
            setTimeout(() => {
                heroSubtitle.classList.add('animate');
            }, 1400);
        }

        // CTA
        if (heroCta) {
            setTimeout(() => {
                heroCta.classList.add('animate');
            }, 1600);
        }

        // Scroll indicator
        if (heroScroll) {
            setTimeout(() => {
                heroScroll.classList.add('animate');
            }, 2000);
        }
    }

    // Iniciar animações do hero
    setTimeout(animateHero, 100);

    // ==========================================
    // ANIMAÇÕES DE ENTRADA (Intersection Observer)
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => observer.observe(el));

    // Observar cards de serviços com stagger
    const servicoCards = document.querySelectorAll('.servico-card');
    servicoCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Observar timeline com stagger
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 150}ms`;
        observer.observe(item);
    });

    // Observar depoimentos
    depoimentoContents.forEach((item, index) => {
        item.style.animationDelay = `${index * 200}ms`;
        observer.observe(item);
    });

    // ==========================================
    // SCROLL SUAVE PARA ANCORAS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // MÁSCARA DE TELEFONE
    // ==========================================
    const telefoneInput = document.getElementById('telefone');
    
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            
            if (value.length > 2) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            }
            
            if (value.length > 10) {
                value = `${value.slice(0, 10)}-${value.slice(10)}`;
            } else if (value.length > 9) {
                value = `${value.slice(0, 9)}-${value.slice(9)}`;
            }
            
            e.target.value = value;
        });
    }

    // ==========================================
    // VALIDAÇÃO DO FORMULÁRIO
    // ==========================================
    const formValidators = {
        nome: (value) => {
            if (!value.trim()) return 'Nome é obrigatório';
            if (value.trim().length < 3) return 'Nome deve ter pelo menos 3 caracteres';
            return '';
        },
        email: (value) => {
            if (!value.trim()) return 'E-mail é obrigatório';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'E-mail inválido';
            return '';
        },
        telefone: (value) => {
            if (!value.trim()) return 'Telefone é obrigatório';
            const phoneDigits = value.replace(/\D/g, '');
            if (phoneDigits.length < 10) return 'Telefone inválido';
            return '';
        },
        assunto: (value) => {
            if (!value.trim()) return 'Por favor, selecione uma área de interesse';
            return '';
        },
        mensagem: (value) => {
            if (!value.trim()) return 'Mensagem é obrigatória';
            if (value.trim().length < 10) return 'Mensagem deve ter pelo menos 10 caracteres';
            return '';
        }
    };

    function validateField(field) {
        const name = field.name;
        const value = field.value;
        const errorElement = field.parentElement.querySelector('.form-error');
        
        if (formValidators[name]) {
            const error = formValidators[name](value);
            
            if (error) {
                field.classList.add('error');
                if (errorElement) errorElement.textContent = error;
                return false;
            } else {
                field.classList.remove('error');
                if (errorElement) errorElement.textContent = '';
                return true;
            }
        }
        
        return true;
    }

    function validateForm() {
        const fields = contatoForm.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    // Validação em tempo real (blur)
    if (contatoForm) {
        const formFields = contatoForm.querySelectorAll('input[required], textarea[required], select[required]');
        
        formFields.forEach(field => {
            field.addEventListener('blur', () => validateField(field));
            
            field.addEventListener('input', () => {
                if (field.classList.contains('error')) {
                    validateField(field);
                }
            });
        });
    }

    // ==========================================
    // ENVIO DO FORMULÁRIO
    // ==========================================
    if (contatoForm) {
        contatoForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validar formulário
            if (!validateForm()) {
                const firstError = contatoForm.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
                return;
            }
            
            const submitBtn = contatoForm.querySelector('button[type="submit"]');
            const successDiv = contatoForm.querySelector('.form-success');
            
            // Obter os valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const assuntoElement = document.getElementById('assunto');
            const assunto = assuntoElement.options[assuntoElement.selectedIndex].text;
            const mensagem = document.getElementById('mensagem').value.trim();
            
            const numeroWhatsApp = "5521981600382";
            const textoWhatsApp = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.\n\n- E-mail: ${email}\n- Telefone: ${telefone}\n- Assunto/Serviço: ${assunto}\n- Mensagem/Situação: ${mensagem}`;
            
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
            
            // Mostrar loading
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            try {
                successDiv.textContent = 'Redirecionando para o WhatsApp...';
                
                setTimeout(() => {
                    window.open(urlWhatsApp, '_blank');
                    contatoForm.reset();
                    successDiv.textContent = '';
                    submitBtn.classList.remove('loading');
                    submitBtn.disabled = false;
                }, 800);
                
            } catch (error) {
                successDiv.textContent = 'Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato pelo telefone.';
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    }

    // ==========================================
    // FAQ ACCORDION
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        
        summary.addEventListener('click', (e) => {
            e.preventDefault();
            
            const isOpen = item.hasAttribute('open');
            
            // Fechar todos os outros
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.hasAttribute('open')) {
                    otherItem.removeAttribute('open');
                }
            });
            
            // Toggle atual
            if (isOpen) {
                item.removeAttribute('open');
            } else {
                item.setAttribute('open', '');
            }
        });
    });

    // ==========================================
    // DETECTAR PREFERÊNCIA DE MOVIMENTO REDUZIDO
    // ==========================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-base', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
        document.documentElement.style.setProperty('--transition-reveal', '0ms');
    }

    // ==========================================
    // LAZY LOADING PARA IMAGENS
    // ==========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ==========================================
    // ANIMAÇÃO DE LINHAS DIVISÓRIAS NO SCROLL
    // ==========================================
    const lineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = '60px';
                lineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.divisor-line').forEach(line => {
        line.style.width = '0';
        line.style.transition = 'width 800ms ease';
        lineObserver.observe(line);
    });

    // ==========================================
    // HEADER ACTIVE STATE
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navbarLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink, { passive: true });

    // ==========================================
    // EFEITO SPOTLIGHT NOS CARDS DE SERVIÇOS
    // ==========================================
    servicoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // ==========================================
    // CONSOLE LOG INFORMATIVO
    // ==========================================
    console.log('%c Batista e Calzolari Advogados ', 'background: #0A0A0A; color: #B08A57; padding: 10px 20px; font-size: 14px; font-weight: bold; border: 1px solid #B08A57;');
    console.log('%c Editorial Jurídico Premium - Preto & Dourado - 2026 ', 'background: #B08A57; color: #0A0A0A; padding: 5px 20px; font-size: 12px; font-weight: 600;');
});

// ==========================================
// FUNÇÕES GLOBAIS
// ==========================================

function formatPhone(value) {
    const numbers = value.replace(/\D/g, '');
    
    if (numbers.length === 11) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    } else if (numbers.length === 10) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    }
    
    return value;
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.BatistaCalzolari = {
    formatPhone,
    isValidEmail,
    debounce
};
