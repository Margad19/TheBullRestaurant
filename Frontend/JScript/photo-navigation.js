class PhotoNavigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Define styles
        const style = document.createElement('style');
        style.textContent = `
            .slider-container {
                position: relative;
                width: 90%;
                max-width: 900px;
                margin: auto;
                overflow: hidden;
                display: flex;
                align-items: center;
                cursor: grab;
            }

            .slider {
                display: flex;
                transition: transform 0.3s ease-out;
                user-select: none; /* Prevent text selection */
            }

            .slide {
                min-width: 200px;
                max-width: 200px;
                margin: 10px;
            }

            img {
                max-width: 200px;
                max-height: 400px;
                transition: opacity 0.3s ease;
            }
        `;

        // Create HTML structure
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="slider-container">
                <div class="slider">
                    <!-- Images will be inserted here dynamically -->
                </div>
            </div>
        `;

        // Append styles and HTML content
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);

        // Get elements
        this.slider = this.shadowRoot.querySelector('.slider');

        // Dragging variables
        this.isDragging = false;
        this.startX = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.animationID = 0;
        this.moved = false; // Track movement

        // Event listeners for dragging
        this.slider.addEventListener('mousedown', this.startDrag.bind(this));
        this.slider.addEventListener('mousemove', this.drag.bind(this));
        this.slider.addEventListener('mouseup', this.endDrag.bind(this));
        this.slider.addEventListener('mouseleave', this.endDrag.bind(this));
        this.slider.addEventListener('touchstart', this.startDrag.bind(this));
        this.slider.addEventListener('touchmove', this.drag.bind(this));
        this.slider.addEventListener('touchend', this.endDrag.bind(this));

        this.fetchData();
    }

    async fetchData() {
        try {
            const response = await fetch('http://localhost:5500/api/branch');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        
            const data = await response.json();
        
            // Dynamically create slide elements for each photo
            const slider = this.shadowRoot.querySelector('.slider');
            data.forEach(branch => {
                const slide = document.createElement('div');
                slide.classList.add('slide');
                const img = document.createElement('img');
                img.src = branch.photo; // Assuming 'photo' field contains the image URL
                img.alt = 'Branch Image';
                
                // Add event listeners for opacity change
                img.addEventListener('mouseenter', () => {
                    img.style.opacity = 0.7; // Set opacity to 70% on hover
                });
                img.addEventListener('mouseleave', () => {
                    img.style.opacity = 1; // Revert to full opacity on hover out
                });
                img.addEventListener('click', () => {
                    img.style.opacity = 0.3; // Set opacity to 30% on click
                });
        
                slide.appendChild(img);
                slider.appendChild(slide);
            });
    
            // Recalculate slider metrics after images are loaded
            this.updateSliderMetrics();
        
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    
    
    updateSliderMetrics() {
        // Get slides and container width after images are loaded
        this.slides = this.shadowRoot.querySelectorAll('.slide');
        this.slideWidth = this.slides[0].offsetWidth + 20; // Image width + margin
        this.containerWidth = this.shadowRoot.querySelector('.slider-container').offsetWidth;
        this.maxTranslate = -(this.slides.length * this.slideWidth - this.containerWidth); // Fixed max translate calculation
    }

    startDrag(event) {
        this.isDragging = true;
        this.moved = false; // Reset movement tracking
        this.startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        this.prevTranslate = this.currentTranslate;
        this.slider.style.transition = 'none';
        this.animationID = requestAnimationFrame(this.animate.bind(this));
    }

    drag(event) {
        if (!this.isDragging) return;
        const currentPosition = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        const deltaX = currentPosition - this.startX;

        if (Math.abs(deltaX) > 5) {
            this.moved = true; // Mark as moved only if a significant move happens
        }

        let newTranslate = this.prevTranslate + deltaX;

        // Prevent moving past the first and last images
        if (newTranslate > 0) newTranslate = 0; // Stop at the first image
        if (newTranslate < this.maxTranslate) newTranslate = this.maxTranslate; // Stop at the last image

        this.currentTranslate = newTranslate;
    }

    endDrag() {
        this.isDragging = false;
        cancelAnimationFrame(this.animationID);

        if (!this.moved) {
            return; // Prevent snap if no real movement happened (just a click)
        }

        // Snap to the closest slide
        const closestIndex = Math.round(-this.currentTranslate / this.slideWidth);
        this.currentTranslate = -closestIndex * this.slideWidth;
        this.slider.style.transition = 'transform 0.3s ease-out';
        this.slider.style.transform = `translateX(${this.currentTranslate}px)`;
    }

    animate() {
        this.slider.style.transform = `translateX(${this.currentTranslate}px)`;
        if (this.isDragging) {
            requestAnimationFrame(this.animate.bind(this));
        }
    }
}

window.customElements.define('photo-navigation', PhotoNavigation);






