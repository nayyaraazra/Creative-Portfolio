/* ===== Settings you can edit ===== */
// Contact form: create a free form at formspree.io (send to your email), then paste its URL here,
// e.g. 'https://formspree.io/f/abcdwxyz'. While empty, the form opens the visitor's email app instead.
const FORM_ENDPOINT = '';
const TO_EMAIL = 'nayyaraazra468@gmail.com';

const SKILLS_FRONT = ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Figma'];
const SKILLS_BACK = ['Laravel', 'Django', 'MySQL', 'Python', 'Kotlin', 'Jetpack Compose'];

const FILTERS = [['all', 'All'], ['web', 'Web'], ['mobile', 'Mobile'], ['ai', 'AI'], ['ux', 'UX'], ['desktop', 'Desktop']];
const gh = (href, title) => ({ href, title, icon: 'fab fa-github' });
const demo = (href, title = 'Live demo') => ({ href, title, icon: 'fas fa-external-link-alt' });

// Add or edit projects here. Leave links empty ([]) until a repo or demo is ready.
// Optional screenshot per project: add  image: 'images/floodroute.webp', alt: 'Route map with flood zones'
// (1200x600, WebP or JPG, under 150 KB). Without "image", the card shows its icon.
const PROJECTS = [
  { cat: 'web', label: 'Full-Stack · Marketplace', title: 'Kulaan.id', icon: 'fa-store', grad: 'from-indigo-900 to-purple-900',
    desc: 'Catalog platform for local UMKM sellers and buyers, with order management and two-step seller verification.',
    tags: ['Laravel', 'Vue.js', 'MySQL'], 
    links: [gh('https://github.com/nayyaraazra/praktikum-rpl-A-7', 'View code')],
    image: 'images/kulaan.png', alt: 'Kulaan.id homepage with product cards and search bar' },
  { cat: 'web', label: 'Algorithm Visualizer', title: 'Flood Logistic Routes System', icon: 'fa-route', grad: 'from-sky-900 to-indigo-900',
    desc: 'Computes flood-emergency logistics routes with algorithmic search and live Open-Meteo weather data.',
    tags: ['React', 'JavaScript', 'Tailwind'],
    links: [gh('https://github.com/nayyaraazra/flood-logistics-optimization-app', 'View code'), demo('https://flood-logistics-optimization-app.vercel.app/')],
    image: 'images/floodroute.png', alt: 'Route map with flood zones' },
  { cat: 'ux', label: 'UX Design · Competition', title: 'SarehAsih', icon: 'fa-universal-access', grad: 'from-pink-900 to-rose-900',
    desc: 'Mobile app concept connecting special-school teachers and parents. GEMASTIK XIX 2026 Finalist (Top 20).',
    tags: ['Figma', 'UX Research', 'Usability Testing'], links: [], note: 'Private project · details on request',
    image: 'images/sarehasih.png', alt: 'SarehAsih app screens with teacher and parent dashboards' },
  { cat: 'ai', label: 'AI · Graph Search', title: 'MBDA*', icon: 'fa-project-diagram', grad: 'from-violet-900 to-fuchsia-900',
    desc: 'Modified Bidirectional A* that guides users out of political filter bubbles through bridge accounts.',
    tags: ['Python', 'NetworkX', 'Streamlit'],
    links: [gh('https://github.com/searchylia/Kecerdasan-Buatan-MBDA-Mitigate-Filter-Bubble', 'View code')],
    image: 'images/mbda.png', alt: 'MBDA graph search visualization with nodes and edges' },
  { cat: 'web', label: 'City Guide App', title: 'SoloInfo', icon: 'fa-map-marked-alt', grad: 'from-teal-900 to-emerald-900',
    desc: 'Local discovery site for Solo’s food, destinations, and events, with search, category filters, and sorting.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [gh('https://github.com/nayyaraazra/nayyaraazra.github.io', 'View code'), demo('https://nayyaraazra.github.io/')], 
    image: 'images/soloinfo.png', alt: 'SoloInfo homepage with search bar and category cards' },
  { cat: 'desktop', label: 'EdTech · Desktop', title: 'StudyQuest', icon: 'fa-graduation-cap', grad: 'from-amber-900 to-orange-900',
    desc: 'Gamified study planner with prioritized scheduling, progress tracking, and clean MVC architecture.',
    tags: ['Java', 'JavaFX', 'SQLite'],
    links: [gh('https://github.com/nayyaraazra/PBO-Project-SmartStudentPlanner', 'View code')],
    image: 'images/studyquest.png', alt: 'StudyQuest dashboard with task list and progress chart' },
  { cat: 'web', label: 'Full-Stack · Coursework', title: 'CS50W Django Apps', icon: 'fa-layer-group', grad: 'from-green-900 to-teal-900',
    desc: 'Commerce, Network, and Mail: three Django and JavaScript apps built through CS50W coursework.',
    tags: ['Django', 'JavaScript', 'SQLite'],
    links: [gh('https://github.com/nayyaraazra/Commerce', 'Commerce code'), gh('https://github.com/nayyaraazra/Social-Network-App', 'Network code'), gh('https://github.com/nayyaraazra/Mail', 'Mail code')] },
  { cat: 'mobile', label: 'Android App', title: 'TechStack ID', icon: 'fa-mobile-alt', grad: 'from-blue-900 to-cyan-900',
    desc: 'Android app from a mobile development lab, with bottom navigation, ViewModel, LazyColumn lists, and search/filter.',
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM'], links: [] },
  { cat: 'web', label: 'Web App', title: 'MISSION CTRL', icon: 'fa-rocket', grad: 'from-slate-800 to-indigo-900',
    desc: 'Space mission planner that pulls NASA data and handles scheduling across WIB and Eastern Time.',
    tags: ['JavaScript', 'REST API', 'NASA APOD'], links: [] },
  { cat: 'web', label: 'Web App', title: 'Mood-Based Playlist Generator', icon: 'fa-music', grad: 'from-fuchsia-900 to-pink-900',
    desc: 'Web app that turns your current mood into a generated playlist.',
    tags: ['JavaScript', 'HTML', 'CSS'], links: [] }
];

/* ===== Skills, filters, project cards ===== */
const chip = t => `<span class="px-3 py-1 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700">${t}</span>`;
document.getElementById('skills-front').innerHTML = SKILLS_FRONT.map(chip).join('');
document.getElementById('skills-back').innerHTML = SKILLS_BACK.map(chip).join('');

const card = p => `
<article class="glass-card rounded-xl overflow-hidden group reveal" data-cat="${p.cat}">
  <div class="h-48 bg-gray-800 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br ${p.grad} group-hover:scale-110 transition-transform duration-500 flex items-center justify-center"><i class="fas ${p.icon} text-5xl text-white/20"></i>${p.image ? `<img src="${p.image}" alt="${p.alt || p.title + ' screenshot'}" loading="lazy" onerror="this.remove()" class="absolute inset-0 w-full h-full object-cover">` : ''}</div>
    ${p.links.length ? `<div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-center justify-center gap-4">
      ${p.links.map(l => `<a href="${l.href}" target="_blank" rel="noopener" title="${l.title}" aria-label="${p.title}: ${l.title}" class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><i class="${l.icon}"></i></a>`).join('')}</div>` : ''}
  </div>
  <div class="p-6">
    <span class="text-xs font-mono text-accent mb-2 block">${p.label}</span>
    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">${p.title}</h3>
    <p class="text-gray-400 text-sm mb-4">${p.desc}</p>
    <div class="flex flex-wrap gap-2">${p.tags.map(t => `<span class="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">${t}</span>`).join('')}</div>
    ${p.note ? `<p class="text-xs text-gray-500 mt-4"><i class="fas fa-lock mr-1"></i>${p.note}</p>` : ''}
  </div>
</article>`;

const grid = document.getElementById('project-grid');
grid.innerHTML = PROJECTS.map(card).join('');

const filterBar = document.getElementById('filters');
const used = new Set(PROJECTS.map(p => p.cat));
filterBar.innerHTML = FILTERS.filter(([k]) => k === 'all' || used.has(k))
  .map(([k, l], i) => `<button type="button" class="chip" data-filter="${k}" aria-pressed="${i === 0}">${l}</button>`).join('');
filterBar.addEventListener('click', e => {
  const b = e.target.closest('[data-filter]');
  if (!b) return;
  filterBar.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c === b));
  grid.querySelectorAll('article').forEach(a => a.classList.toggle('hidden', b.dataset.filter !== 'all' && a.dataset.cat !== b.dataset.filter));
});

/* ===== Scroll reveal ===== */
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('active'); io.unobserve(en.target); }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ===== Mobile menu ===== */
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const setMenu = open => { menu.classList.toggle('hidden', !open); btn.setAttribute('aria-expanded', open); };
btn.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

/* ===== Contact form ===== */
const form = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');
const statusEl = document.getElementById('form-status');
const say = (msg, kind) => { statusEl.textContent = msg; statusEl.className = 'text-sm min-h-[1.25rem] ' + (kind === 'err' ? 'text-red-400' : 'text-green-400'); };
form.querySelectorAll('.field').forEach(f => f.addEventListener('blur', () => f.classList.add('touched')));

form.addEventListener('submit', async e => {
  e.preventDefault();
  const data = new FormData(form);
  if (data.get('_gotcha')) return;
  if (!form.checkValidity()) { form.querySelectorAll('.field').forEach(f => f.classList.add('touched')); say('Please fill in your name, a valid email, and a message.', 'err'); return; }
  const name = data.get('name').trim(), email = data.get('email').trim(), message = data.get('message').trim();

  if (!FORM_ENDPOINT) {
    const subject = encodeURIComponent('Portfolio message from ' + name);
    const body = encodeURIComponent(message + '\n\n' + name + ' <' + email + '>');
    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
    say('Opening your email app. If nothing opens, write to ' + TO_EMAIL + '.');
    return;
  }
  sendBtn.disabled = true; sendBtn.textContent = 'Sending...';
  try {
    const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
    if (!r.ok) throw new Error(r.status);
    form.reset(); form.querySelectorAll('.field').forEach(f => f.classList.remove('touched'));
    say('Message sent. Thank you, I’ll reply soon.');
  } catch (err) {
    say('Could not send your message. Please email ' + TO_EMAIL + ' directly.', 'err');
  } finally { sendBtn.disabled = false; sendBtn.textContent = 'Send Message'; }
});
