// ===== NAVBAR: toggle & active section =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const navItems = document.querySelectorAll('#navLinks li');

navToggle.addEventListener('click', () => {
     const open = mainNav.classList.toggle('nav-open');
     navToggle.classList.toggle('active', open);
     navToggle.setAttribute('aria-expanded', open);
});

navItems.forEach(li => {
     li.querySelector('a').addEventListener('click', () => {
          mainNav.classList.remove('nav-open');
          navToggle.classList.remove('active');
          navToggle.setAttribute('aria-expanded', false);
     });
});

function updateActiveNav() {
     const y = window.scrollY + 140;
     let current = navItems[0].dataset.section;
     navItems.forEach(li => {
          const sec = document.getElementById(li.dataset.section);
          if (sec && sec.offsetTop <= y) current = li.dataset.section;
     });
     navItems.forEach(li => li.classList.toggle('active-nav', li.dataset.section === current));
}

updateActiveNav();
window.addEventListener('scroll', updateActiveNav, { passive: true });

// ===== SKILLS =====
const skills = [
     { icon: 'https://imgs.search.brave.com/OB3KC1IycYcxgT0YAuprgRfPMTC0xAbXGxSkl5Za3yw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/Mzg2LzAwNS9zbWFs/bC90aGUtaHRtbDUt/bG9nby13aXRoLXRo/ZS1udW1iZXItNS1p/bi10aGUtY2VudGVy/LWZyZWUtcG5nLnBu/Zw', name: 'HTML5' },
     { icon: 'https://imgs.search.brave.com/6GMF8HwVKaCfbJzgPKGsx0SmGf4YMvEVi1aFlZP8BxQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQyLzIvY3NzLTMt/bG9nby1wbmdfc2Vl/a2xvZ28tNDI2MDgz/LnBuZw', name: 'CSS3' },
     { icon: 'https://imgs.search.brave.com/sR12cGfJZzDbqjyg4TAiZoqWEDh66vsw0rWA9nQpjAw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2phdmFzY3JpcHQt/cG5nL2phdmFzY3Jp/cHQtdmVjdG9yLWxv/Z28teWVsbG93LXBu/Zy10cmFuc3BhcmVu/dC1qYXZhc2NyaXB0/LXZlY3Rvci0xMi5w/bmc', name: 'JavaScript' },
     { icon: 'https://imgs.search.brave.com/eIoQJ768sZe7kdOvQMMqz22Nr-YeYcsmbUx4mC4S0d0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvUmVh/Y3QtTG9nby1QTkcu/cG5n', name: 'React JS' },
     { icon: 'https://imgs.search.brave.com/Fh4DXCDEK20AAANNX74U6_4541WQmq7hSQ8LbD2pqhc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5vZGUtanMtaWNv/bi1zdmctZG93bmxv/YWQtcG5nLTExNzQ5/MjUucG5nP2Y9d2Vi/cCZ3PTI1Ng', name: 'Node.js' },
     { icon: 'https://imgs.search.brave.com/fzEGW05T2x0M5Ag3GZswX8C57sskLVVwlcjBo4W_U50/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MzMyLzE1MC9zbWFs/bC9qYXZhLXByb2dy/YW1taW5nLWxhbmd1/YWdlLWphdmEtbG9n/by1mcmVlLXBuZy5w/bmc', name: 'Java' },
     { icon: 'https://imgs.search.brave.com/AU2hqEZi6P-WkXNU8Kv_QuAUx0h8I_MhENe-YodeIIE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbXlzcWwvbXlz/cWxfUE5HMjMucG5n', name: 'MySQL' },
     { icon: 'assets/selenium.png', name: 'Selenium' },
];

const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(skill => {
     skillsGrid.innerHTML += `
        <div class="stacks_img_container">
          <div class="stackImg">
            <img class="stacks" src="${skill.icon}" alt="${skill.name}" />
            <h2>${skill.name}</h2>
          </div>
        </div>`;
});

// ===== PROJECTS =====
const projects = [
     { id: 1, image: 'assets/pulse24x7.png', name: 'Pulse24x7', stack: 'React,Java,Tomcat', link: 'https://github.com/Aathesh-kumar/trade-show-team-project', group: true },
     { id: 2, image: 'assets/linked_list.jpeg', name: 'Linked List', stack: 'Java', link: 'https://github.com/Aathesh-kumar/Linked-List-Implementation' },
     { id: 3, image: 'assets/planet.png', name: 'Planet', stack: 'NodeJS', link: 'https://github.com/Aathesh-kumar/Planet' },
     { id: 4, image: 'assets/hotel.png', name: 'Hotel Room Booking System', stack: 'Java,Mysql', link: 'https://github.com/Aathesh-kumar/Hotel-Room-Booking-System-JDBC' },
     { id: 5, image: 'assets/sumplete.png', name: 'Sumplete', stack: 'HTML,CSS,JS', link: 'https://aatheshr-0xv3ggfm-8443.zcodecorp.in/JavaScriptassign/Mini%20Project/sumplete.html' },
     { id: 6, image: 'assets/word_game.png', name: 'Word Game', stack: 'HTML,CSS,JS', link: 'https://aatheshr-0xv3ggfm-8443.zcodecorp.in/JavaScriptassign/Task%20/typeTask.html' },
     { id: 7, image: 'assets/supercell.png', name: 'Supercell', stack: 'HTML,CSS', link: 'https://aatheshr-0xv3ggfm-8443.zcodecorp.in/test/project/homepage.html' },
     { id: 8, image: 'assets/Ramnath.png', name: 'Ramnath kovind', stack: 'HTML,CSS', link: 'https://cherry6628.github.io/RamNathKovindWebsite/', group: true },
     { id: 9, image: 'assets/fylo.png', name: 'Fylo', stack: 'HTML,CSS', link: 'https://aatheshr-0xv3ggfm-8443.zcodecorp.in/test/assignment013/recreate.html' },
     { id: 10, image: 'assets/slopey.png', name: 'Slopey', stack: 'Scratch', link: 'https://scratch.mit.edu/projects/1190078948/' },
     { id: 11, image: 'assets/stencil.png', name: 'Stencil Art', stack: 'Scratch', link: 'https://scratch.mit.edu/projects/1186826550/' },
];

const filters = ['All', 'Java', 'JavaScript', 'HTML&CSS', 'Scratch', 'Group'];
let activeFilter = 'All';

const filterList = document.getElementById('filterList');
const projectsGrid = document.getElementById('projectsGrid');

// Build filter buttons
filters.forEach(f => {
     const li = document.createElement('li');
     li.textContent = f;
     if (f === activeFilter) li.classList.add('active-filter');
     li.addEventListener('click', () => {
          activeFilter = f;
          document.querySelectorAll('#filterList li').forEach(el => el.classList.remove('active-filter'));
          li.classList.add('active-filter');
          renderProjects();
     });
     filterList.appendChild(li);
});

function matchesFilter(project, filter) {
     const normalizedFilter = String(filter).toLowerCase();
     if (normalizedFilter === 'all') return true;
     if (project.group === true && normalizedFilter !== 'gruop') return false;
     const items = project.stack.toLowerCase().split(',').map(s => s.trim());
     if (normalizedFilter === 'java') return items.includes('java');
     if (normalizedFilter === 'javascript') return items.includes('js') || items.includes('javascript') || items.includes('nodejs');
     if (normalizedFilter === 'html&css') return items.includes('html') && items.includes('css') && !items.includes('js') && !items.includes('javascript') && !items.includes('nodejs');
     if (normalizedFilter === 'scratch') return items.includes('scratch');
     if (normalizedFilter === 'gruop') return project.group === true;
     return true;
}

function renderProjects() {
     projectsGrid.innerHTML = '';
     const filtered = projects.filter(p => matchesFilter(p, activeFilter));
     filtered.forEach((p, i) => {
          const article = document.createElement('article');
          article.className = 'project-card project-card-enter';
          article.style.animationDelay = `${i * 60}ms`;
          article.innerHTML = `
          <img src="${p.image}" alt="${p.name}" />
          <h2>${p.name}</h2>
          <p>${p.stack}</p>
          <a href="${p.link}" target="_blank" rel="noreferrer">View Project</a>`;
          projectsGrid.appendChild(article);
     });
}

renderProjects();
