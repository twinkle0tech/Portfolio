// Three.js 3D Background for all Sections
let projectsScene, projectsCamera, projectsRenderer, projectsParticles;
let heroScene, heroCamera, heroRenderer, heroParticles;
let aboutScene, aboutCamera, aboutRenderer, aboutParticles;
let experienceScene, experienceCamera, experienceRenderer, experienceParticles;
let contactScene, contactCamera, contactRenderer, contactParticles;
let footerScene, footerCamera, footerRenderer, footerParticles;

// Three.js Firefly Effect
let fireflyScene, fireflyCamera, fireflyRenderer, firefly;
let fireflyContainer, fireflyCanvas;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
let currentSection = 'hero';

// Initialize Three.js for projects section
function initProjects3D() {
    if (projectsScene) return; // Already initialized
    
    const canvas = document.getElementById('projects3dCanvas');
    if (!canvas) return;

    // Scene setup
    projectsScene = new THREE.Scene();
    projectsCamera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    projectsRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    projectsRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    projectsRenderer.setClearColor(0x000000, 0);
    
    // Create particles
    createProjectsParticles();
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    projectsScene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    projectsScene.add(directionalLight);
    
    // Position camera
    projectsCamera.position.z = 5;
    
    // Start animation
    animateProjects3D();
}

// Initialize Three.js for hero section
function initHero3D() {
    if (heroScene) return;
    
    const canvas = document.getElementById('hero3dCanvas');
    if (!canvas) return;

    heroScene = new THREE.Scene();
    heroCamera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    heroRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    heroRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    heroRenderer.setClearColor(0x000000, 0);
    
    createHeroParticles();
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    heroScene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    heroScene.add(directionalLight);
    
    heroCamera.position.z = 5;
    
    animateHero3D();
}

// Initialize Three.js for about section
function initAbout3D() {
    if (aboutScene) return;
    
    const canvas = document.getElementById('about3dCanvas');
    if (!canvas) return;

    aboutScene = new THREE.Scene();
    aboutCamera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    aboutRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    aboutRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    aboutRenderer.setClearColor(0x000000, 0);
    
    createAboutParticles();
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    aboutScene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    aboutScene.add(directionalLight);
    
    aboutCamera.position.z = 5;
    
    animateAbout3D();
}

// Initialize Three.js for experience section
function initExperience3D() {
    if (experienceScene) return;
    
    const canvas = document.getElementById('experience3dCanvas');
    if (!canvas) return;

    experienceScene = new THREE.Scene();
    experienceCamera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    experienceRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    experienceRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    experienceRenderer.setClearColor(0x000000, 0);
    
    createExperienceParticles();
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    experienceScene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    experienceScene.add(directionalLight);
    
    experienceCamera.position.z = 5;
    
    animateExperience3D();
}

// Initialize Three.js for contact section
function initContact3D() {
    if (contactScene) return;
    
    const canvas = document.getElementById('contact3dCanvas');
    if (!canvas) return;

    contactScene = new THREE.Scene();
    contactCamera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    contactRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    contactRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    contactRenderer.setClearColor(0x000000, 0);
    
    createContactParticles();
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    contactScene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    contactScene.add(directionalLight);
    
    contactCamera.position.z = 5;
    
    animateContact3D();
}

// Initialize Three.js for footer section
function initFooter3D() {
    if (footerScene) return;
    
    const canvas = document.getElementById('footer3dCanvas');
    if (!canvas) return;

    footerScene = new THREE.Scene();
    footerCamera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    footerRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    footerRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    footerRenderer.setClearColor(0x000000, 0);
    
    createFooterParticles();
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    footerScene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    footerScene.add(directionalLight);
    
    footerCamera.position.z = 5;
    
    animateFooter3D();
}

// Create particles for projects background
function createProjectsParticles() {
    const particleCount = 150;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 1] = (Math.random() - 0.5) * 20;
        positions[i3 + 2] = (Math.random() - 0.5) * 10;
        
        // Golden, blue, and pink colors
        const colorChoice = Math.random();
        if (colorChoice < 0.4) {
            colors[i3] = 1.0;     // R - Golden
            colors[i3 + 1] = 0.8; // G
            colors[i3 + 2] = 0.0; // B
        } else if (colorChoice < 0.7) {
            colors[i3] = 0.0;     // R - Blue
            colors[i3 + 1] = 0.5; // G
            colors[i3 + 2] = 1.0; // B
        } else {
            colors[i3] = 1.0;     // R - Pink
            colors[i3 + 1] = 0.4; // G
            colors[i3 + 2] = 0.8; // B
        }
        
        sizes[i] = Math.random() * 0.5 + 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Custom shader material for particles
    const vertexShader = `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `;
    
    const fragmentShader = `
        varying vec3 vColor;
        void main() {
            float distance = length(gl_PointCoord - vec2(0.5, 0.5));
            if (distance > 0.5) discard;
            float alpha = 1.0 - (distance * 2.0);
            gl_FragColor = vec4(vColor, alpha * 0.6);
        }
    `;
    
    const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });
    
    projectsParticles = new THREE.Points(geometry, material);
    projectsScene.add(projectsParticles);
}

// Create particles for hero section
function createHeroParticles() {
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 25;
        positions[i3 + 1] = (Math.random() - 0.5) * 25;
        positions[i3 + 2] = (Math.random() - 0.5) * 15;
        
        // Hero section colors - more vibrant
        const colorChoice = Math.random();
        if (colorChoice < 0.3) {
            colors[i3] = 1.0;     // R - Golden
            colors[i3 + 1] = 0.8; // G
            colors[i3 + 2] = 0.0; // B
        } else if (colorChoice < 0.6) {
            colors[i3] = 0.0;     // R - Blue
            colors[i3 + 1] = 0.5; // G
            colors[i3 + 2] = 1.0; // B
        } else {
            colors[i3] = 1.0;     // R - Pink
            colors[i3 + 1] = 0.4; // G
            colors[i3 + 2] = 0.8; // B
        }
        
        sizes[i] = Math.random() * 0.6 + 0.2;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.ShaderMaterial({
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                float distance = length(gl_PointCoord - vec2(0.5, 0.5));
                if (distance > 0.5) discard;
                float alpha = 1.0 - (distance * 2.0);
                gl_FragColor = vec4(vColor, alpha * 0.7);
            }
        `,
        transparent: true,
        vertexColors: true
    });
    
    heroParticles = new THREE.Points(geometry, material);
    heroScene.add(heroParticles);
}

// Create particles for about section
function createAboutParticles() {
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 1] = (Math.random() - 0.5) * 20;
        positions[i3 + 2] = (Math.random() - 0.5) * 10;
        
        // About section colors
        const colorChoice = Math.random();
        if (colorChoice < 0.4) {
            colors[i3] = 0.0;     // R - Blue
            colors[i3 + 1] = 0.5; // G
            colors[i3 + 2] = 1.0; // B
        } else if (colorChoice < 0.7) {
            colors[i3] = 1.0;     // R - Pink
            colors[i3 + 1] = 0.4; // G
            colors[i3 + 2] = 0.8; // B
        } else {
            colors[i3] = 1.0;     // R - Golden
            colors[i3 + 1] = 0.8; // G
            colors[i3 + 2] = 0.0; // B
        }
        
        sizes[i] = Math.random() * 0.4 + 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.ShaderMaterial({
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                float distance = length(gl_PointCoord - vec2(0.5, 0.5));
                if (distance > 0.5) discard;
                float alpha = 1.0 - (distance * 0.5);
                gl_FragColor = vec4(vColor, alpha * 0.5);
            }
        `,
        transparent: true,
        vertexColors: true
    });
    
    aboutParticles = new THREE.Points(geometry, material);
    aboutScene.add(aboutParticles);
}

// Create particles for experience section
function createExperienceParticles() {
    const particleCount = 100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 18;
        positions[i3 + 1] = (Math.random() - 0.5) * 18;
        positions[i3 + 2] = (Math.random() - 0.5) * 8;
        
        // Experience section colors
        const colorChoice = Math.random();
        if (colorChoice < 0.5) {
            colors[i3] = 1.0;     // R - Golden
            colors[i3 + 1] = 0.8; // G
            colors[i3 + 2] = 0.0; // B
        } else {
            colors[i3] = 0.0;     // R - Blue
            colors[i3 + 1] = 0.5; // G
            colors[i3 + 2] = 1.0; // B
        }
        
        sizes[i] = Math.random() * 0.3 + 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.ShaderMaterial({
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                float distance = length(gl_PointCoord - vec2(0.5, 0.5));
                if (distance > 0.5) discard;
                float alpha = 1.0 - (distance * 2.0);
                gl_FragColor = vec4(vColor, alpha * 0.4);
            }
        `,
        transparent: true,
        vertexColors: true
    });
    
    experienceParticles = new THREE.Points(geometry, material);
    experienceScene.add(experienceParticles);
}

// Create particles for contact section
function createContactParticles() {
    const particleCount = 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 15;
        positions[i3 + 1] = (Math.random() - 0.5) * 15;
        positions[i3 + 2] = (Math.random() - 0.5) * 6;
        
        // Contact section colors
        const colorChoice = Math.random();
        if (colorChoice < 0.6) {
            colors[i3] = 0.0;     // R - Blue
            colors[i3 + 1] = 0.5; // G
            colors[i3 + 2] = 1.0; // B
        } else {
            colors[i3] = 1.0;     // R - Pink
            colors[i3 + 1] = 0.4; // G
            colors[i3 + 2] = 0.8; // B
        }
        
        sizes[i] = Math.random() * 0.3 + 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.ShaderMaterial({
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                float distance = length(gl_PointCoord - vec2(0.5, 0.5));
                if (distance > 0.5) discard;
                float alpha = 1.0 - (distance * 2.0);
                gl_FragColor = vec4(vColor, alpha * 0.3);
            }
        `,
        transparent: true,
        vertexColors: true
    });
    
    contactParticles = new THREE.Points(geometry, material);
    contactScene.add(contactParticles);
}

// Create particles for footer section
function createFooterParticles() {
    const particleCount = 60;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 12;
        positions[i3 + 1] = (Math.random() - 0.5) * 12;
        positions[i3 + 2] = (Math.random() - 0.5) * 5;
        
        // Footer section colors - subtle
        const colorChoice = Math.random();
        if (colorChoice < 0.7) {
            colors[i3] = 1.0;     // R - Golden
            colors[i3 + 1] = 0.8; // G
            colors[i3 + 2] = 0.0; // B
        } else {
            colors[i3] = 0.0;     // R - Blue
            colors[i3 + 1] = 0.5; // G
            colors[i3 + 2] = 1.0; // B
        }
        
        sizes[i] = Math.random() * 0.2 + 0.1;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.ShaderMaterial({
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                float distance = length(gl_PointCoord - vec2(0.5, 0.5));
                if (distance > 0.5) discard;
                float alpha = 1.0 - (distance * 2.0);
                gl_FragColor = vec4(vColor, alpha * 0.2);
            }
        `,
        transparent: true,
        vertexColors: true
    });
    
    footerParticles = new THREE.Points(geometry, material);
    footerScene.add(footerParticles);
}

// Animate projects particles
function animateProjects3D() {
    if (!projectsScene) return;
    
    requestAnimationFrame(animateProjects3D);
    
    if (projectsParticles) {
        projectsParticles.rotation.y += 0.002;
        projectsParticles.rotation.x += 0.001;
        
        // Floating effect
        const positions = projectsParticles.geometry.attributes.position.array;
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + i) * 0.001;
        }
        
        projectsParticles.geometry.attributes.position.needsUpdate = true;
    }
    
    projectsRenderer.render(projectsScene, projectsCamera);
}

// Animate hero particles
function animateHero3D() {
    if (!heroScene) return;
    
    requestAnimationFrame(animateHero3D);
    
    if (heroParticles) {
        heroParticles.rotation.y += 0.003;
        heroParticles.rotation.x += 0.0015;
        
        // Floating effect
        const positions = heroParticles.geometry.attributes.position.array;
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + i * 0.1) * 0.002;
        }
        
        heroParticles.geometry.attributes.position.needsUpdate = true;
    }
    
    heroRenderer.render(heroScene, heroCamera);
}

// Animate about particles
function animateAbout3D() {
    if (!aboutScene) return;
    
    requestAnimationFrame(animateAbout3D);
    
    if (aboutParticles) {
        aboutParticles.rotation.y += 0.0015;
        aboutParticles.rotation.x += 0.001;
        
        // Floating effect
        const positions = aboutParticles.geometry.attributes.position.array;
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + i * 0.05) * 0.001;
        }
        
        aboutParticles.geometry.attributes.position.needsUpdate = true;
    }
    
    aboutRenderer.render(aboutScene, aboutCamera);
}

// Animate experience particles
function animateExperience3D() {
    if (!experienceScene) return;
    
    requestAnimationFrame(animateExperience3D);
    
    if (experienceParticles) {
        experienceParticles.rotation.y += 0.002;
        experienceParticles.rotation.x += 0.0008;
        
        // Floating effect
        const positions = experienceParticles.geometry.attributes.position.array;
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + i * 0.03) * 0.0008;
        }
        
        experienceParticles.geometry.attributes.position.needsUpdate = true;
    }
    
    experienceRenderer.render(experienceScene, experienceCamera);
}

// Animate contact particles
function animateContact3D() {
    if (!contactScene) return;
    
    requestAnimationFrame(animateContact3D);
    
    if (contactParticles) {
        contactParticles.rotation.y += 0.001;
        contactParticles.rotation.x += 0.0005;
        
        // Floating effect
        const positions = contactParticles.geometry.attributes.position.array;
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + i * 0.02) * 0.0006;
        }
        
        contactParticles.geometry.attributes.position.needsUpdate = true;
    }
    
    contactRenderer.render(contactScene, contactCamera);
}

// Animate footer particles
function animateFooter3D() {
    if (!footerScene) return;
    
    requestAnimationFrame(animateFooter3D);
    
    if (footerParticles) {
        footerParticles.rotation.y += 0.0008;
        footerParticles.rotation.x += 0.0003;
        
        // Floating effect
        const positions = footerParticles.geometry.attributes.position.array;
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + i * 0.01) * 0.0004;
        }
        
        footerParticles.geometry.attributes.position.needsUpdate = true;
    }
    
    footerRenderer.render(footerScene, footerCamera);
}

// Handle projects resize
function onProjectsResize() {
    if (!projectsCamera || !projectsRenderer) return;
    
    const canvas = document.getElementById('projects3dCanvas');
    if (!canvas) return;
    
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    projectsCamera.aspect = width / height;
    projectsCamera.updateProjectionMatrix();
    projectsRenderer.setSize(width, height);
}

// Handle hero resize
function onHeroResize() {
    if (!heroCamera || !heroRenderer) return;
    
    const canvas = document.getElementById('hero3dCanvas');
    if (!canvas) return;
    
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    heroCamera.aspect = width / height;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(width, height);
}

// Handle about resize
function onAboutResize() {
    if (!aboutCamera || !aboutRenderer) return;
    
    const canvas = document.getElementById('about3dCanvas');
    if (!canvas) return;
    
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    aboutCamera.aspect = width / height;
    aboutCamera.updateProjectionMatrix();
    aboutRenderer.setSize(width, height);
}

// Handle experience resize
function onExperienceResize() {
    if (!experienceCamera || !experienceRenderer) return;
    
    const canvas = document.getElementById('experience3dCanvas');
    if (!canvas) return;
    
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    experienceCamera.aspect = width / height;
    experienceCamera.updateProjectionMatrix();
    experienceRenderer.setSize(width, height);
}

// Handle contact resize
function onContactResize() {
    if (!contactCamera || !contactRenderer) return;
    
    const canvas = document.getElementById('contact3dCanvas');
    if (!canvas) return;
    
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    contactCamera.aspect = width / height;
    contactCamera.updateProjectionMatrix();
    contactRenderer.setSize(width, height);
}

// Handle footer resize
function onFooterResize() {
    if (!footerCamera || !footerRenderer) return;
    
    const canvas = document.getElementById('footer3dCanvas');
    if (!canvas) return;
    
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    footerCamera.aspect = width / height;
    footerCamera.updateProjectionMatrix();
    footerRenderer.setSize(width, height);
}

// Initialize projects 3D when visible
function initProjects3DWhenVisible() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initProjects3D();
                observer.disconnect();
            }
        });
    }, { threshold: 0.1 });
    
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        observer.observe(projectsSection);
    }
}

// Initialize Firefly Effect
function initFirefly() {
    // Create container for firefly
    fireflyContainer = document.createElement('div');
    fireflyContainer.id = 'firefly-container';
    fireflyContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(fireflyContainer);
    
    // Create canvas
    fireflyCanvas = document.createElement('canvas');
    fireflyCanvas.id = 'firefly-canvas';
    fireflyContainer.appendChild(fireflyCanvas);
    
    // Three.js setup for firefly
    fireflyScene = new THREE.Scene();
    fireflyCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    fireflyRenderer = new THREE.WebGLRenderer({ 
        canvas: fireflyCanvas, 
        alpha: true, 
        antialias: true 
    });
    
    fireflyRenderer.setSize(window.innerWidth, window.innerHeight);
    fireflyRenderer.setClearColor(0x000000, 0);
    
    // Create firefly geometry
    const fireflyGeometry = new THREE.SphereGeometry(0.05, 8, 6);
    const fireflyMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffff00,
        transparent: true,
        opacity: 0.8
    });
    
    firefly = new THREE.Mesh(fireflyGeometry, fireflyMaterial);
    fireflyScene.add(firefly);
    
    // Add glow effect
    const glowGeometry = new THREE.SphereGeometry(0.15, 8, 6);
    const glowMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffff00,
        transparent: true,
        opacity: 0.3
    });
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    firefly.add(glow);
    
    // Position firefly initially near hero section
    updateFireflyPosition();
    
    // Start firefly animation
    animateFirefly();
    
    // Add event listeners
    window.addEventListener('resize', onFireflyResize);
    window.addEventListener('scroll', updateFireflySection);
    document.addEventListener('mousemove', onMouseMove);
}

// Update firefly position based on current section
function updateFireflyPosition() {
    const sections = {
        'hero': { x: window.innerWidth * 0.7, y: window.innerHeight * 0.3 },
        'about': { x: window.innerWidth * 0.8, y: window.innerHeight * 0.4 },
        'experience': { x: window.innerWidth * 0.2, y: window.innerHeight * 0.6 },
        'projects': { x: window.innerWidth * 0.3, y: window.innerHeight * 0.7 },
        'contact': { x: window.innerWidth * 0.7, y: window.innerHeight * 0.8 }
    };
    
    const target = sections[currentSection] || sections['hero'];
    targetX = target.x;
    targetY = target.y;
}

// Update current section based on scroll position
function updateFireflySection() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrollY < windowHeight * 0.5) {
        currentSection = 'hero';
    } else if (scrollY < windowHeight * 1.5) {
        currentSection = 'about';
    } else if (scrollY < windowHeight * 2.5) {
        currentSection = 'experience';
    } else if (scrollY < windowHeight * 3.5) {
        currentSection = 'projects';
    } else {
        currentSection = 'contact';
    }
    
    updateFireflyPosition();
}

// Handle mouse movement for interactive firefly
function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

// Animate firefly
function animateFirefly() {
    if (!firefly) return;
    
    requestAnimationFrame(animateFirefly);
    
    // Smooth movement towards target position
    const currentX = firefly.position.x;
    const currentY = firefly.position.y;
    
    firefly.position.x += (targetX - currentX) * 0.02;
    firefly.position.y += (targetY - currentY) * 0.02;
    
    // Add subtle floating movement
    const time = Date.now() * 0.001;
    firefly.position.y += Math.sin(time * 2) * 0.5;
    
    // Gentle rotation
    firefly.rotation.y += 0.01;
    
    // Pulsing glow effect
    firefly.material.opacity = 0.6 + Math.sin(time * 3) * 0.2;
    firefly.children[0].material.opacity = 0.2 + Math.sin(time * 3) * 0.1;
    
    // Render firefly
    fireflyRenderer.render(fireflyScene, fireflyCamera);
}

// Handle firefly resize
function onFireflyResize() {
    if (!fireflyCamera || !fireflyRenderer) return;
    
    fireflyCamera.aspect = window.innerWidth / window.innerHeight;
    fireflyCamera.updateProjectionMatrix();
    fireflyRenderer.setSize(window.innerWidth, window.innerHeight);
}

// Enhanced project card interactions
function enhanceProjectCards() {
    const projectCards = document.querySelectorAll('.project-card-3d');
    
    projectCards.forEach(card => {
        const inner = card.querySelector('.project-card-3d-inner');
        if (!inner) return;
        
        // Mouse move for 3D tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -10;
            const rotateY = (x - centerX) / centerX * 10;
            
            inner.style.transform = `translateZ(30px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', () => {
            inner.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)';
        });
        
        // Click effect
        card.addEventListener('click', () => {
            inner.style.transform = 'translateZ(40px) scale(1.05)';
            setTimeout(() => {
                inner.style.transform = 'translateZ(0) scale(1)';
            }, 200);
        });
    });
}

// Initialize navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar
    initNavbar();
    
    // Initialize firefly effect
    initFirefly();
    
    // Initialize all 3D backgrounds
    initHero3D();
    initAbout3D();
    initExperience3D();
    initContact3D();
    initFooter3D();
    
    // Initialize projects 3D when visible
    initProjects3DWhenVisible();
    
    // Enhance project cards
    enhanceProjectCards();
    
    // Update footer year
    const footerYear = document.querySelector('.footer-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
    
    // Add scroll event listener for firefly section updates
    window.addEventListener('scroll', updateFireflySection);
});

// Handle window resize for all 3D backgrounds and firefly
window.addEventListener('resize', () => {
    onProjectsResize();
    onHeroResize();
    onAboutResize();
    onExperienceResize();
    onContactResize();
    onFooterResize();
    onFireflyResize();
});
