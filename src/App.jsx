import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Reveal from './components/Reveal.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import {
  activities,
  education,
  experience,
  professionalSkills,
  projects,
  skillGroups,
  socialLinks,
} from './data/portfolio.js'
import './App.css'

function SkillCard({ group, index }) {
  return (
    <Reveal delay={index * 90} className="skill-card">
      <div className="skill-card-header"><span className="skill-card-number">{group.number}</span><span className="skill-card-arrow" aria-hidden="true">↗</span></div>
      <h3>{group.title}</h3>
      <p>{group.intro}</p>
      <div className="tag-list skill-tags">
        {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </Reveal>
  )
}

function TimelineItem({ item, index }) {
  return (
    <Reveal delay={index * 75} className="timeline-item">
      <div className="timeline-marker"><span /></div>
      <div className="timeline-content">
        <span className="timeline-period">{item.period}</span>
        <h3>{item.title}</h3>
        <p className="timeline-place">{item.place}</p>
        <p className="timeline-description">{item.description}</p>
      </div>
    </Reveal>
  )
}

function ContactIcon({ type }) {
  if (type === 'email') {
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="m4.5 7 7.5 5.5L19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  }
  if (type === 'linkedin') {
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M5.2 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3zM9 10h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6V20h-3v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H9z"/></svg>
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.5 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.7 1 .7 1.9v3.3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"/></svg>
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Web', 'React', 'Java']
  const filteredProjects = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="section section-about" id="about">
          <div className="container about-grid">
            <Reveal>
              <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Developer by study." accent="Curious by nature." number="01" />
            </Reveal>
            <Reveal className="about-copy" delay={100}>
              <p className="about-lead">I’m a Computer Science undergraduate with a strong interest in full-stack development and the little details that make digital products feel good to use.</p>
              <p>I enjoy learning by doing: taking an idea, breaking it into smaller problems, and working through the process of making it real. I’m interested in both the interface people see and the logic that makes it work.</p>
              <a className="text-link" href="#journey">A little more about my journey <span aria-hidden="true">↘</span></a>
            </Reveal>
          </div>
          <div className="container about-note-row">
            <div className="about-note"><span className="about-note-symbol">✳</span><span><strong>Always learning</strong><small>One project at a time</small></span></div>
            <p>Good software is more than code.<br /><span>It solves a problem for someone.</span></p>
          </div>
        </section>

        <section className="section section-skills" id="skills">
          <div className="container">
            <Reveal>
              <SectionHeading eyebrow="WHAT I WORK WITH" title="My current" accent="toolkit." description="A growing set of technologies I use to learn, experiment and build." number="02" />
            </Reveal>
            <div className="skills-grid">
              {skillGroups.map((group, index) => <SkillCard key={group.number} group={group} index={index} />)}
            </div>
            <Reveal className="soft-skills" delay={120}>
              <div><span className="eyebrow"><span className="eyebrow-dot" /> BEYOND THE CODE</span><h3>How I work</h3></div>
              <div className="soft-skills-list">{professionalSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </Reveal>
          </div>
        </section>

        <section className="section section-projects" id="projects">
          <div className="container">
            <Reveal>
              <div className="projects-heading-row">
                <SectionHeading eyebrow="SELECTED WORK" title="A few things" accent="I’ve built." description="Small projects, practical problems, and plenty of lessons along the way." number="03" />
                <a className="text-link projects-github-link" href="https://github.com/onelipremarathne" target="_blank" rel="noreferrer">More on GitHub <span aria-hidden="true">↗</span></a>
              </div>
            </Reveal>
            <div className="project-filters" role="group" aria-label="Filter projects">
              {filters.map((filter) => (
                <button key={filter} type="button" className={activeFilter === filter ? 'is-active' : ''} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
                  {filter}<span>{filter === 'All' ? projects.length : projects.filter((project) => project.category === filter).length}</span>
                </button>
              ))}
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project, index) => <Reveal key={project.number} delay={index * 65}><ProjectCard project={project} /></Reveal>)}
            </div>
          </div>
        </section>

        <section className="section section-journey" id="journey">
          <div className="container">
            <Reveal>
              <SectionHeading eyebrow="THE JOURNEY SO FAR" title="Learning, working," accent="growing." description="The experiences that have helped shape how I approach technology and teamwork." number="04" />
            </Reveal>
            <div className="journey-columns">
              <div className="timeline-column">
                <div className="timeline-heading"><span className="timeline-heading-icon">01</span><h3>Education</h3></div>
                <div className="timeline-list">{education.map((item, index) => <TimelineItem key={item.title} item={item} index={index} />)}</div>
              </div>
              <div className="timeline-column">
                <div className="timeline-heading"><span className="timeline-heading-icon">02</span><h3>Experience</h3></div>
                <div className="timeline-list">{experience.map((item, index) => <TimelineItem key={item.title} item={item} index={index} />)}</div>
                <Reveal className="experience-takeaway" delay={120}>
                  <span className="takeaway-quote">“</span>
                  <p>Working with people taught me that clear communication and attention to detail matter just as much as getting the task done.</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-activities" id="activities">
          <div className="container">
            <Reveal>
              <SectionHeading eyebrow="OUTSIDE THE CLASSROOM" title="People, projects" accent="& purpose." description="Some of the communities where I get to collaborate, contribute and keep learning." number="05" />
            </Reveal>
            <div className="activities-grid">
              {activities.map((activity, index) => (
                <Reveal key={activity.title} delay={index * 75} className="activity-card">
                  <div className="activity-card-top"><span className="activity-initials">{activity.initials}</span><span className="activity-arrow" aria-hidden="true">↗</span></div>
                  <h3>{activity.title}</h3>
                  <span className="activity-role">{activity.role}</span>
                  <p>{activity.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="container contact-layout">
            <Reveal className="contact-copy">
              <span className="eyebrow"><span className="eyebrow-dot" /> HAVE A PROJECT OR IDEA?</span>
              <h2>Let’s make<br /><span className="text-accent">something useful.</span></h2>
              <p>I’m always happy to connect about technology, collaboration, opportunities or an interesting idea. Drop me a message.</p>
              <a className="button button-primary contact-email-button" href="mailto:oneli.premarathne@gmail.com">Say hello <span aria-hidden="true">↗</span></a>
            </Reveal>
            <Reveal className="contact-links" delay={130}>
              <a href="mailto:oneli.premarathne@gmail.com" className="contact-link-card"><span className="contact-link-icon"><ContactIcon type="email" /></span><span><small>WRITE ME AN EMAIL</small><strong>oneli.premarathne@gmail.com</strong></span><span className="contact-link-arrow" aria-hidden="true">↗</span></a>
              <a href="https://www.linkedin.com/in/oneli-premarathne/" target="_blank" rel="noreferrer" className="contact-link-card"><span className="contact-link-icon"><ContactIcon type="linkedin" /></span><span><small>LET’S CONNECT</small><strong>LinkedIn</strong></span><span className="contact-link-arrow" aria-hidden="true">↗</span></a>
              <a href="https://github.com/onelipremarathne" target="_blank" rel="noreferrer" className="contact-link-card"><span className="contact-link-icon"><ContactIcon type="github" /></span><span><small>TAKE A LOOK AT MY CODE</small><strong>GitHub</strong></span><span className="contact-link-arrow" aria-hidden="true">↗</span></a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#top">oneli<span>.</span>me</a>
          <p>Built with curiosity, React & a lot of coffee-free debugging.</p>
          <span>© {new Date().getFullYear()} Oneli Premarathne</span>
        </div>
      </footer>
    </>
  )
}

export default App
