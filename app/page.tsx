import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check, Code2, Github,
  Globe2, Layers3, Mail, MapPin, Smartphone, Sparkles, Terminal, Workflow,
} from 'lucide-react';

const skills = [
  { name: 'React Native', detail: 'Cross-platform mobile apps' },
  { name: 'JavaScript', detail: 'Application logic & APIs' },
  { name: 'React.js', detail: 'Component-based UI' },
  { name: 'HTML & CSS', detail: 'Responsive interfaces' },
  { name: 'REST API integration', detail: 'Connected app experiences' },
  { name: 'Firebase', detail: 'Push notifications' },
  { name: 'LiveKit & Twilio', detail: 'Video calling features' },
  { name: 'Git & Bitbucket', detail: 'Version control' },
];

const projects = [
  { n: '01', name: 'Where2', category: 'EVENT MANAGEMENT', color: 'mint', description: 'An event-planning app for international students to vote on events and see who is attending.', contribution: 'Built the app UI from scratch for iOS and Android and integrated onboarding APIs.', tags: ['React Native', 'iOS + Android', 'API integration'] },
  { n: '02', name: 'Maweidi', category: 'HEALTHCARE', color: 'blue', description: 'A healthcare app for Qatar with doctor appointments, lab-test bookings, hospitals, pharmacy products and medical equipment.', contribution: 'Implemented app screens and integrated APIs for core healthcare flows.', tags: ['Mobile UI', 'Healthcare', 'REST APIs'] },
  { n: '03', name: 'Wits', category: 'QUIZ & GAMING', color: 'violet', description: 'A multiplayer quiz game with multiple modules and real-prize gameplay.', contribution: 'Worked on the LiveKit video-call module, UI fixes, bug fixes, iOS notifications, API integration and store publishing.', tags: ['LiveKit', 'Notifications', 'App release'] },
  { n: '04', name: 'Audivi', category: 'MEMORY & JOURNALING', color: 'orange', description: 'An Expo app for preserving memories through audio, video and photos, with collaborator access and public/private sharing.', contribution: 'Handled UI improvements, bug fixes and app-crash troubleshooting.', tags: ['Expo', 'Media', 'Bug fixing'] },
  { n: '05', name: 'Manna Fortunes', category: 'COMMUNITY & REWARDS', color: 'pink', description: 'An Expo app built around lucky draws for clubs in different countries.', contribution: 'Worked on UI fixes, new functionality, Expo notifications and cloud functions.', tags: ['Expo', 'Push notifications', 'Cloud functions'] },
  { n: '06', name: 'DoctRing', category: 'DIGITAL HEALTHCARE', color: 'mint', description: 'A two-sided medical booking platform for online consultations and home visits.', contribution: 'Integrated Twilio video calling, Google Maps for home-visit appointments and Firebase push notifications.', tags: ['Twilio', 'Google Maps', 'Firebase'] },
  { n: '07', name: 'OstaadG', category: 'SERVICE BOOKING', color: 'blue', description: 'A two-app service-booking platform connecting clients with tradespeople such as plumbers, carpenters and electricians.', contribution: 'Worked on location display and Firebase push notifications.', tags: ['Maps & location', 'Firebase', 'Booking'] },
  { n: '08', name: 'MetaBuddy', category: 'DOCUMENTATION', color: 'violet', description: 'A production app for a photography company that helps reduce paperwork by storing photos, videos and documentation locally.', contribution: 'Contributed to local data storage and digitizing documentation workflows.', tags: ['Production app', 'Local storage', 'Workflow'] },
];

const experience = [
  { company: 'ZerefLab', role: 'Software Engineer', date: 'Jun 2024 — Present', note: 'Working across software development projects. CV also lists WPF and ASP.NET WPF work.' },
  { company: 'TxLABZ', role: 'Software Engineer', date: 'Apr 2023 — Nov 2023', note: 'Contributed to healthcare, quiz, memory and rewards apps, including API integration, video calling, notifications, UI fixes and release support.' },
  { company: 'E-sparks', role: 'Associate Software Engineer', date: 'Jan 2022 — Mar 2023', note: 'Worked on service booking, medical appointments and documentation apps.' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home" aria-label="Haleema home"><span className="brand-mark">H<span>.</span></span><span>HALEEMA SADIA MAQSOOD</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="mailto:haleema.maqsood0007@gmail.com">Let&apos;s talk <ArrowUpRight size={15}/></a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse"/> SOFTWARE ENGINEER <span className="availability-sep">/</span> LAHORE, PAKISTAN</div>
          <h1>Building mobile<br/>experiences that<br/><span className="gradient-text">feel effortless.</span></h1>
          <p className="hero-sub">I&apos;m Haleema — a React Native developer who turns complex ideas into useful, thoughtful mobile experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button button-ghost" href="/Haleema-Sadia-Maqsood-CV.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={16}/></a></div>
          <div className="hero-meta"><span><MapPin size={14}/> Lahore, Pakistan</span><span><Code2 size={14}/> React Native · JavaScript</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative abstract mobile development illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="code-window"><div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>mobile-experience.tsx</span><span className="window-status">● LIVE</span></div><div className="code-content"><div className="code-line"><span className="line-no">01</span><span><b className="code-purple">const</b> <b className="code-blue">experience</b> = {'{'}</span></div><div className="code-line indent"><span className="line-no">02</span><span>platform: <b className="code-green">&apos;iOS + Android&apos;</b>,</span></div><div className="code-line indent"><span className="line-no">03</span><span>design: <b className="code-green">&apos;user-first&apos;</b>,</span></div><div className="code-line indent"><span className="line-no">04</span><span>poweredBy: <b className="code-green">&apos;React Native&apos;</b>,</span></div><div className="code-line indent"><span className="line-no">05</span><span>details: <b className="code-purple">true</b>,</span></div><div className="code-line"><span className="line-no">06</span><span>{'}'};</span></div><div className="code-line blank"><span className="line-no">07</span><span/></div><div className="code-line"><span className="line-no">08</span><span><b className="code-purple">export default</b> <b className="code-blue">experience</b>;</span></div></div><div className="window-bottom"><span><span className="tiny-green"/> Ready to build</span><span>UTF-8&nbsp;&nbsp; TypeScript</span></div></div>
          <div className="float-card float-card-top"><span className="float-icon mint-icon"><Smartphone size={17}/></span><span><b>Cross-platform</b><small>One thoughtful experience</small></span></div>
          <div className="float-card float-card-bottom"><span className="float-icon purple-icon"><Workflow size={17}/></span><span><b>From API to release</b><small>Build · Integrate · Ship</small></span><Check className="float-check" size={16}/></div>
          <div className="hero-spark spark-a"><Sparkles size={17}/></div><div className="hero-spark spark-b"><Braces size={20}/></div>
        </div>
        <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
      </section>

      <section className="stats-band"><div className="shell stats-grid"><div><strong>3<span>+</span></strong><small>Years in software</small></div><div><strong>08</strong><small>Featured projects</small></div><div><strong>iOS <span>&</span> Android</strong><small>Cross-platform delivery</small></div><div className="stats-note"><span className="stats-star">✳</span><p>Curious by nature.<br/>Focused on the details.</p></div></div></section>

      <section className="section shell about-section" id="about"><div className="section-kicker"><span>01</span> / A LITTLE ABOUT ME</div><div className="about-grid"><div><h2>Good software is<br/>more than <span className="serif-accent">working code.</span></h2></div><div className="about-copy"><p>I&apos;m a Software Engineer focused on React Native and mobile app development. I enjoy building interfaces from the ground up, connecting them to real-world services, and polishing the details that make an app reliable and easy to use.</p><p>My project experience spans healthcare, event management, quiz games, appointment booking, video calls, notifications and media-rich apps. I&apos;ve contributed from early UI implementation through integration, troubleshooting and app publishing.</p><div className="about-signature"><span className="signature-mark">H.</span><span><b>Haleema Sadia Maqsood</b><small>Software Engineer · React Native</small></span></div></div></div></section>

      <section className="section skills-section"><div className="shell"><div className="section-kicker"><span>02</span> / TOOLKIT</div><div className="section-heading-row"><h2>Tools I use to<br/><span className="serif-accent">make things happen.</span></h2><p>A practical toolkit for shipping mobile experiences — from the first component to the final release.</p></div><div className="skills-grid">{skills.map((skill, i) => <div className="skill-card" key={skill.name}><span className="skill-index">0{i + 1}</span><div><h3>{skill.name}</h3><p>{skill.detail}</p></div><ArrowUpRight size={16} className="skill-arrow"/></div>)}</div></div></section>

      <section className="section work-section" id="work"><div className="shell"><div className="section-kicker"><span>03</span> / SELECTED WORK</div><div className="section-heading-row work-heading"><h2>Projects with<br/><span className="serif-accent">purpose.</span></h2><p>A selection of products I&apos;ve helped build and improve. Each project highlights a different part of the mobile development process.</p></div><div className="projects-grid">{projects.map((project) => <article className={`project-card ${project.color}`} key={project.name}><div className="project-top"><span className="project-number">{project.n} / PROJECT</span><span className="project-symbol">{project.color === 'mint' ? <Smartphone size={21}/> : project.color === 'blue' ? <Layers3 size={21}/> : project.color === 'violet' ? <Braces size={21}/> : project.color === 'orange' ? <Sparkles size={21}/> : <Globe2 size={21}/>}</span></div><div className="project-visual"><div className="visual-ring ring-one"/><div className="visual-ring ring-two"/><div className="visual-core"><span>{project.name.slice(0,1)}</span></div><div className="visual-chip chip-one">{project.tags[0]}</div><div className="visual-chip chip-two">Mobile app</div></div><div className="project-body"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="contribution"><span>MY CONTRIBUTION</span><p>{project.contribution}</p></div><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><p className="project-footnote">Project descriptions are based on my contributions; product ownership and live links can be added where available.</p></div></section>

      <section className="section experience-section" id="experience"><div className="shell"><div className="section-kicker"><span>04</span> / THE JOURNEY</div><div className="section-heading-row"><h2>Experience that<br/><span className="serif-accent">keeps me growing.</span></h2><p>Learning through real products, collaboration and solving problems that matter to users.</p></div><div className="timeline">{experience.map((item, i) => <div className="timeline-item" key={item.company}><div className="timeline-marker"><span>{String(i + 1).padStart(2, '0')}</span></div><div className="timeline-main"><div className="timeline-title"><div><h3>{item.company}</h3><p>{item.role}</p></div><span className="timeline-date">{item.date}</span></div><p className="timeline-note">{item.note}</p></div></div>)}</div></div></section>

      <section className="section education-section"><div className="shell education-grid"><div><div className="section-kicker"><span>05</span> / EDUCATION</div><h2>Built on a strong<br/><span className="serif-accent">learning mindset.</span></h2></div><div className="education-list"><div className="education-item"><span className="education-year">2021</span><div><h3>Master of Computer Science</h3><p>Punjab University College of Information Technology (PUCIT)</p><span>CGPA 3.23</span></div></div><div className="education-item"><span className="education-year">2019</span><div><h3>ADP Computer Science</h3><p>University of Central Punjab</p><span>CGPA 3.58</span></div></div><div className="education-item"><span className="education-year">2017</span><div><h3>Intermediate · ICS</h3><p>Punjab College</p></div></div></div></div></section>

      <section className="contact-section" id="contact"><div className="shell contact-inner"><div className="section-kicker"><span>06</span> / WHAT&apos;S NEXT?</div><h2>Have a good idea?<br/><span className="serif-accent">Let&apos;s build it.</span></h2><p>I&apos;m always happy to talk about mobile products, engineering opportunities and interesting challenges.</p><a className="button button-primary contact-button" href="mailto:haleema.maqsood0007@gmail.com">Start a conversation <ArrowUpRight size={17}/></a><div className="contact-details"><a href="mailto:haleema.maqsood0007@gmail.com"><Mail size={16}/> haleema.maqsood0007@gmail.com</a><span><MapPin size={16}/> Lahore, Pakistan</span></div><div className="contact-decoration decoration-one"/><div className="contact-decoration decoration-two"/></div></section>

      <footer className="footer shell"><a className="brand" href="#home"><span className="brand-mark">H<span>.</span></span><span>HALEEMA SADIA MAQSOOD</span></a><span>Designed with care · Built with Next.js</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
