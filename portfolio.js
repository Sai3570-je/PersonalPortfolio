// Enhanced VS Code Portfolio - Interactive JavaScript
class PortfolioApp {
    constructor() {
        this.currentPage = 'home';
        this.pages = {
            home: { title: 'Welcome', breadcrumb: 'Welcome' },
            about: { title: 'About', breadcrumb: 'About' },
            experience: { title: 'Experience', breadcrumb: 'Experience' },
            projects: { title: 'Projects', breadcrumb: 'Projects' },
            contact: { title: 'Contact', breadcrumb: 'Contact' }
        };
        
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupAll();
            });
        } else {
            this.setupAll();
        }
    }

    setupAll() {
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupHoverEffects();
        this.setupContactForm();
        this.setupResumeDownload();
        this.setupProjectFilters();
        this.setupContactTooltips();
        this.handleInitialRoute();
        this.setupProjectCards();
        this.setupGitHubPortfolioButton();
        console.log('Portfolio App initialized successfully');
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.getAttribute('data-page');
                console.log('Navigating to:', page);
                this.navigateToPage(page);
            });
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            const page = e.state ? e.state.page : 'home';
            this.navigateToPage(page, false);
        });
    }

    navigateToPage(page, addToHistory = true) {
        if (page === this.currentPage) return;

        console.log('Navigating from', this.currentPage, 'to', page);

        // Hide all pages first
        const allPages = document.querySelectorAll('.page');
        allPages.forEach(pageEl => {
            pageEl.classList.add('hidden');
        });

        // Show new page
        const newPageEl = document.getElementById(`${page}-page`);
        if (newPageEl) {
            newPageEl.classList.remove('hidden');
            console.log('Showing page:', `${page}-page`);
        } else {
            console.error('Page not found:', `${page}-page`);
        }

        // Update navigation
        this.updateNavigation(page);
        
        // Update breadcrumb
        this.updateBreadcrumb(page);
        
        // Update URL
        if (addToHistory) {
            history.pushState({ page }, '', `#${page}`);
        }

        this.currentPage = page;

        // Re-setup contact tooltips when navigating to contact page
        if (page === 'contact') {
            setTimeout(() => {
                this.setupContactTooltips();
            }, 100);
        }

        // Close mobile menu if open
        this.closeMobileMenu();
    }

    updateNavigation(activePage) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const page = item.getAttribute('data-page');
            if (page === activePage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    updateBreadcrumb(page) {
        const breadcrumbCurrent = document.getElementById('breadcrumb-current');
        if (breadcrumbCurrent && this.pages[page]) {
            breadcrumbCurrent.textContent = this.pages[page].breadcrumb;
            console.log('Updated breadcrumb to:', this.pages[page].breadcrumb);
        }
    }

    handleInitialRoute() {
        const hash = window.location.hash.replace('#', '');
        if (hash && this.pages[hash]) {
            this.navigateToPage(hash, false);
        } else {
            this.navigateToPage('home', false);
        }
    }

    setupMobileMenu() {
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const sidebar = document.getElementById('sidebar');
        
        if (mobileToggle && sidebar) {
            mobileToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                this.toggleMobileMenuIcon();
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });

            // Close menu when window is resized to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    closeMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('open');
            this.resetMobileMenuIcon();
        }
    }

    toggleMobileMenuIcon() {
        const hamburgers = document.querySelectorAll('.hamburger');
        hamburgers.forEach(hamburger => {
            hamburger.style.transform = hamburger.style.transform === 'rotate(45deg)' ? 'rotate(0deg)' : 'rotate(45deg)';
        });
    }

    resetMobileMenuIcon() {
        const hamburgers = document.querySelectorAll('.hamburger');
        hamburgers.forEach(hamburger => {
            hamburger.style.transform = 'rotate(0deg)';
        });
    }

    setupHoverEffects() {
        const hoverTrigger = document.getElementById('hover-trigger');
        const tooltip = document.getElementById('tooltip');
        
        console.log('Setting up hover effects:', { hoverTrigger, tooltip });
        
        if (hoverTrigger && tooltip) {
            let hoverTimeout;

            // Mouse enter on trigger
            hoverTrigger.addEventListener('mouseenter', () => {
                console.log('Hover trigger activated');
                clearTimeout(hoverTimeout);
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
                tooltip.style.transform = 'translateY(0)';
                tooltip.style.display = 'flex';
            });

            // Mouse leave trigger
            hoverTrigger.addEventListener('mouseleave', () => {
                console.log('Hover trigger deactivated');
                hoverTimeout = setTimeout(() => {
                    tooltip.style.opacity = '0';
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.transform = 'translateY(-10px)';
                }, 200);
            });

            // Keep tooltip open when hovering over it
            tooltip.addEventListener('mouseenter', () => {
                console.log('Tooltip hovered');
                clearTimeout(hoverTimeout);
            });

            tooltip.addEventListener('mouseleave', () => {
                console.log('Tooltip left');
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
                tooltip.style.transform = 'translateY(-10px)';
            });

            // Also try CSS hover as backup
            hoverTrigger.addEventListener('mouseover', () => {
                tooltip.classList.add('show');
            });

            hoverTrigger.addEventListener('mouseout', () => {
                setTimeout(() => {
                    if (!tooltip.matches(':hover')) {
                        tooltip.classList.remove('show');
                    }
                }, 100);
            });
        } else {
            console.error('Hover elements not found:', { hoverTrigger, tooltip });
        }

        // Add typing effect to terminal command
        setTimeout(() => {
            this.setupTypingEffect();
        }, 500);
    }

    setupGitHubPortfolioButton() {
        // Set up the GitHub Portfolio button with a direct click handler
        setTimeout(() => {
            const githubButton = document.querySelector('#tooltip .btn-secondary');
            console.log('Setting up GitHub Portfolio button:', githubButton);
            
            if (githubButton) {
                // Remove any existing event listeners and add a fresh one
                githubButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('GitHub Portfolio button clicked');
                    
                    // Open the GitHub portfolio in a new tab
                    const url = 'https://sai3570-je.github.io/Sai-Portfolio/';
                    window.open(url, '_blank', 'noopener,noreferrer');
                    
                    // Show success message
                    this.showSuccessMessage('Opening GitHub Portfolio...');
                });

                // Also ensure the href works as fallback
                githubButton.setAttribute('href', 'https://sai3570-je.github.io/Sai-Portfolio/');
                githubButton.setAttribute('target', '_blank');
                githubButton.setAttribute('rel', 'noopener noreferrer');
            }
        }, 1000);
    }

    showSuccessMessage(message) {
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 60px;
            right: 20px;
            background-color: var(--accent-color);
            color: var(--sidebar-bg);
            padding: 12px 20px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(messageEl);

        // Remove message after 2 seconds
        setTimeout(() => {
            messageEl.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                messageEl.remove();
            }, 300);
        }, 2000);
    }

    setupTypingEffect() {
        const terminalCommand = document.querySelector('.terminal-command');
        if (terminalCommand) {
            const originalText = terminalCommand.textContent;
            terminalCommand.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    terminalCommand.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Add blinking cursor
                    const cursor = document.createElement('span');
                    cursor.textContent = '_';
                    cursor.style.animation = 'pulse 1s infinite';
                    cursor.style.color = 'var(--accent-color)';
                    terminalCommand.appendChild(cursor);
                }
            };
            
            // Start typing effect after a short delay
            setTimeout(typeWriter, 1000);
        }
    }

    setupProjectFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                
                // Update active filter button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter project cards
                this.filterProjects(category);
            });
        });
    }

    filterProjects(category) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                card.classList.remove('hidden');
                card.classList.add('show');
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
                card.classList.remove('show');
            }
        });
    }

    setupProjectCards() {
        // Add hover effects and interactions to project cards
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            // Add entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            // Animate in when visible
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, Math.random() * 300);
        });
    }

    setupContactTooltips() {
        // Clear any existing event listeners by re-selecting elements
        const contactTriggers = document.querySelectorAll('.contact-trigger');
        
        contactTriggers.forEach(trigger => {
            const wrapper = trigger.closest('.contact-link-wrapper');
            const tooltip = wrapper ? wrapper.querySelector('.contact-tooltip') : null;
            
            if (tooltip) {
                let hoverTimeout;

                // Clone to remove existing listeners
                const newTrigger = trigger.cloneNode(true);
                trigger.parentNode.replaceChild(newTrigger, trigger);

                newTrigger.addEventListener('mouseenter', () => {
                    clearTimeout(hoverTimeout);
                    tooltip.style.opacity = '1';
                    tooltip.style.visibility = 'visible';
                    tooltip.style.transform = 'translateY(0)';
                });

                newTrigger.addEventListener('mouseleave', () => {
                    hoverTimeout = setTimeout(() => {
                        tooltip.style.opacity = '0';
                        tooltip.style.visibility = 'hidden';
                        tooltip.style.transform = 'translateY(-5px)';
                    }, 300);
                });

                // Add click to copy functionality
                newTrigger.addEventListener('click', () => {
                    const textToCopy = newTrigger.textContent.trim();
                    this.copyToClipboard(textToCopy);
                    this.showCopyMessage(textToCopy);
                });

                // Also add hover for the tooltip itself to keep it open
                tooltip.addEventListener('mouseenter', () => {
                    clearTimeout(hoverTimeout);
                });

                tooltip.addEventListener('mouseleave', () => {
                    tooltip.style.opacity = '0';
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.transform = 'translateY(-5px)';
                });
            }
        });
    }

    copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
        }
    }

    showCopyMessage(text) {
        const message = document.createElement('div');
        message.textContent = `Copied: ${text}`;
        message.style.cssText = `
            position: fixed;
            top: 60px;
            right: 20px;
            background-color: var(--green-text);
            color: var(--sidebar-bg);
            padding: 12px 20px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(message);

        // Remove message after 3 seconds
        setTimeout(() => {
            message.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 3000);
    }

    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactFormSubmit(e);
            });
        }
    }

    handleContactFormSubmit(e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create mailto link
        const mailtoLink = `mailto:trainwithjk26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        this.showFormMessage('Thank you! Your email client should open with the pre-filled message.', 'success');
        
        // Reset form
        e.target.reset();
    }

    showFormMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;

        // Add message after form
        const contactForm = document.getElementById('contact-form');
        contactForm.appendChild(messageEl);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }

    setupResumeDownload() {
        const resumeBtn = document.getElementById('resume-btn');
        console.log('Setting up resume button:', resumeBtn);
        if (resumeBtn) {
            resumeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Resume button clicked');
                this.downloadResume();
            });
        }
    }

    downloadResume() {
        console.log('Downloading resume...');
        // Create resume content for Sai Panindra Pechetti
        const resumeContent = this.generateResumeContent();
        
        // Create blob and download
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Sai_Panindra_Pechetti_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        this.showDownloadMessage();
    }

    generateResumeContent() {
        return `SAI PANINDRA PECHETTI
Electronics & Communication Engineer | Full Stack Developer
Email: trainwithjk26@gmail.com
Phone: +91-7095088395
LinkedIn: linkedin.com/in/sai-088083344
GitHub: sai3570-je.github.io/Sai-Portfolio

ABOUT
Passionate Electronics & Communication Engineering student with expertise in Full Stack Development, IoT systems, and AI/Machine Learning. Currently in final year at Raghu Institute of Technology with CGPA: 7.75/10. Demonstrates strong problem-solving skills with 150+ LeetCode problems solved and multiple real-world projects.

EDUCATION
Bachelor of Technology - Electronics and Communication Engineering
Raghu Institute of Technology | 2022 - 2026
CGPA: 7.75/10 | Final Year Student

TECHNICAL SKILLS

Programming Languages:
• Python, Java, JavaScript
• HTML5, CSS3, SQL

Frameworks & Libraries:
• React.js, Node.js, Express.js
• MongoDB, PyTorch, Flask

AI/ML & IoT:
• Machine Learning, Artificial Intelligence
• Natural Language Processing
• Arduino, Raspberry Pi, OpenCV
• IoT Systems, MQTT

Tools & Domains:
• Git & GitHub, Linux, Tableau
• Cloud Computing, Embedded Systems
• Cyber Security, VLSI Design

PROFESSIONAL EXPERIENCE

Full Stack Web Developer | Slash Mark | Current
• Working on real-time client projects using the MERN stack
• Building scalable applications with focus on user experience
• Implementing responsive design and performance optimization

AI & ML with Data Science | YBI Foundation | Dec 2024 – Feb 2025
• Trained on real-world datasets and applied ML models using Python
• Gained hands-on experience with data preprocessing and model evaluation
• Worked with various machine learning algorithms and techniques

Java Full Stack Developer | Data Pro | Aug 2023 – Oct 2023
• Built robust backend services and responsive front-end interfaces
• Experience in database integration and API development
• Worked on Java-based web applications and services

MAJOR PROJECTS

1. Smart Traffic Management System using IoT & AI
   • Technologies: Arduino, Raspberry Pi, OpenCV, Flask, MQTT
   • Real-time traffic monitoring and dynamic signal control
   • Camera feed analysis for congestion reduction

2. Character-Level GPT Language Model using PyTorch
   • Technologies: PyTorch, Python, Deep Learning, Transformers, NLP
   • Custom GPT-like model for Shakespearean-style text generation
   • Implemented self-attention and transformer architecture

3. Smart Home IoT Dashboard
   • Technologies: React.js, Node.js, MongoDB, Arduino, ESP8266, MQTT
   • Comprehensive home automation system with real-time monitoring
   • Voice control integration and energy analytics

4. EduLearn - Online Learning Platform
   • Technologies: React.js, Node.js, Express.js, MongoDB, Socket.io, Stripe
   • Full-stack education platform with video streaming and quizzes
   • Payment integration and real-time chat functionality

5. AI-Powered Expense Tracker
   • Technologies: React.js, Python, Flask, scikit-learn, PostgreSQL
   • Intelligent expense categorization using machine learning
   • Receipt OCR scanning and spending prediction

6. Real-Time Chat Application with Video Calling
   • Technologies: React.js, Node.js, Socket.io, WebRTC, MongoDB
   • Comprehensive communication platform with video conferencing
   • End-to-end encryption and file sharing capabilities

CERTIFICATIONS
• Developer and Technology Job Simulation – Accenture
• Data Visualisation: Empowering Business with Effective Insights – TATA
• Python for Data Science – IBM
• AI for Beginners – HP Foundation

ACHIEVEMENTS
• Solved 150+ problems on LeetCode
• GitHub Portfolio with 181+ commits across 6 major projects
• Fluent in English, Hindi, and Telugu

CONTACT
Email: trainwithjk26@gmail.com
Phone: +91-7095088395
LinkedIn: linkedin.com/in/sai-088083344
GitHub: sai3570-je.github.io/Sai-Portfolio`;
    }

    showDownloadMessage() {
        // Create temporary message
        const message = document.createElement('div');
        message.textContent = 'Resume downloaded successfully!';
        message.style.cssText = `
            position: fixed;
            top: 60px;
            right: 20px;
            background-color: var(--green-text);
            color: var(--sidebar-bg);
            padding: 12px 20px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

        // Add keyframe animation
        if (!document.querySelector('#download-animation-styles')) {
            const style = document.createElement('style');
            style.id = 'download-animation-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(message);

        // Remove message after 3 seconds
        setTimeout(() => {
            message.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 3000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing portfolio app...');
    window.portfolioApp = new PortfolioApp();
});

// Handle page refresh
window.addEventListener('load', () => {
    console.log('Page loaded');
    // Ensure proper page state after refresh
    if (window.portfolioApp) {
        window.portfolioApp.handleInitialRoute();
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        if (window.portfolioApp) {
            window.portfolioApp.closeMobileMenu();
        }
    }
});

// Performance optimization: Lazy load heavy content
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe timeline items and project cards for animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const animatableElements = document.querySelectorAll('.timeline-item, .project-card, .stat-item');
        animatableElements.forEach(el => observer.observe(el));
    }, 1000);
});

// Add CSS animation classes
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .project-card {
        transition: all 0.6s ease;
    }
    
    .project-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .timeline-item {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.6s ease;
    }
    
    .timeline-item.animate-in {
        opacity: 1;
        transform: translateX(0);
    }

    .stat-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }

    .stat-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animationStyles);