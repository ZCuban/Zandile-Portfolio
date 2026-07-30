# Zandile-Portfolio
Personal Virtual CV — a responsive portfolio site showcasing my BSc IT coursework, projects.
My personal portfolio website, built as part of my post-graduation profile development. It works as a living CV — an overview of my education, skills, and academic projects as a final-year BSc Information Technology student at North-West University.

Live site: https://<your-username>.github.io/zandile-portfolio/ (update once deployed)
Overview
The site is a single-page portfolio with the following sections:

Hero — an animated network-topology diagram summarising key stats (grad year, average, certifications, projects), a nod to the network simulation work in my coursework
About — background, focus areas, and quick facts
Skills — grouped by programming languages, cybersecurity, databases/mobile, and networking tools
Projects — four academic builds, each linking to its own repository
Certifications — cybersecurity certifications with issuer and date
Experience — work and extracurricular involvement
Contact — email, phone, and social links
Tech stack
HTML5 / CSS3 (no framework — hand-written grid layout, custom properties for theming)
Vanilla JavaScript (SVG animateMotion for the topology diagram; no external JS libraries)
Google Fonts: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (data/labels)
Hosted on GitHub Pages
Project structure
.

├── index.html          # entire site — markup, styles, and script in one file

├── assets/

│   └── Zandile-Cuban_Mayisela_Resume.pdf   # downloadable CV

└── README.md
Running locally
No build step required — it's a static file.

git clone https://github.com/<your-username>/zandile-portfolio.git

cd zandile-portfolio

# open index.html directly in a browser, or serve it:

python3 -m http.server 8000

Then visit http://localhost:8000.
Deployment
Deployed via GitHub Pages from the main branch root. See PORTFOLIO-SETUP.md for the full setup and placeholder checklist.
Design notes
The visual direction is grounded in my own coursework rather than a generic template: the hero's network-topology diagram mirrors the kind of layout I've built in Cisco Packet Tracer, and the monospace type used for skill tags and metadata nods to a technical/terminal aesthetic. Colour palette is a deep ink navy with a signal-blue accent (network/circuit inspired) and a restrained amber highlight for certifications.
Contact
📧 mbarlycuban@gmail.com 📍 Ivory Park, Midrand, Gauteng
