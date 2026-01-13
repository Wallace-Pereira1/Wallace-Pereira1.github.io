document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Efeito Digitação ---
    const nameElement = document.getElementById('typewriter-name');
    const jobElement = document.getElementById('typewriter-job');
    const cursor = document.querySelector('.cursor');
    
    const nameText = "Olá, sou Wallace Pereira";
    const jobText = "Especialista em Automação, Integrações e IA Aplicada.";
    
    let charIndex = 0;

    // Função para digitar o Nome
    function typeName() {
        if (charIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(charIndex);
            charIndex++;
            setTimeout(typeName, 100); // Velocidade da digitação
        } else {
            // Terminou o nome, reseta índice e começa o cargo
            charIndex = 0;
            // Move o cursor para a linha de baixo
            cursor.style.display = 'none'; // Some o cursor de cima
            setTimeout(typeJob, 500); // Pausa antes de começar a segunda linha
        }
    }

    // Função para digitar o Cargo
    function typeJob() {
        if (charIndex < jobText.length) {
            jobElement.textContent += jobText.charAt(charIndex);
            charIndex++;
            setTimeout(typeJob, 50); // Digita um pouco mais rápido
        }
    }

    // Iniciar a digitação após 1 segundo
    setTimeout(typeName, 1000);


    // --- 2. DARK / LIGHT MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Verificar preferência salva
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Trocar ícone e salvar preferência
        if (body.classList.contains('light-mode')) {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- 3. Extra (Ano e Scroll) ---
    const copyrightTag = document.querySelector('.copyright');
    if (copyrightTag) {
        const currentYear = new Date().getFullYear();
        copyrightTag.innerHTML = `&copy; ${currentYear} - Desenvolvido por <a href="https://github.com/Wallace-Pereira1" target="_blank">Wallace Pereira</a>`;
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- 4. Efeito Lanterna Paralax (Mouse Tracking) ---
    // Atualiza as variáveis CSS --x e --y com a posição do mouse
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        document.body.style.setProperty('--x', `${x}px`);
        document.body.style.setProperty('--y', `${y}px`);
    });
});