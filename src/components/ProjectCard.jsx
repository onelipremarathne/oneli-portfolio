function ExternalArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectVisual({ type, number }) {
  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="project-visual-top"><span /><span /><span /><small>PROJECT_{number}</small></div>
      {type === 'life-reset' && (
        <div className="mock-life-reset">
          <div className="mock-life-heading">
            <div>
              <small>YOUR DAILY SPACE</small>
              <strong>Life Reset<span>.</span></strong>
            </div>
            <div className="mock-life-streak">🔥 7 DAYS</div>
          </div>

          <div className="mock-life-xp">
            <div><span>LEVEL 03</span><span>240 / 300 XP</span></div>
            <div className="mock-life-xp-track"><span /></div>
          </div>

          <div className="mock-life-habits">
            <div className="mock-life-habit mock-life-complete">
              <span>✓</span>
              <div><strong>Morning routine</strong><small>DAILY HABIT</small></div>
            </div>
            <div className="mock-life-habit mock-life-complete">
              <span>✓</span>
              <div><strong>Read for 20 minutes</strong><small>DAILY HABIT</small></div>
            </div>
            <div className="mock-life-habit">
              <span>○</span>
              <div><strong>Evening reflection</strong><small>DAILY HABIT</small></div>
            </div>
          </div>

          <div className="mock-life-footer">
            <span>DAILY PROGRESS</span>
            <strong>2 / 3 completed</strong>
          </div>
        </div>
      )}
      {type === 'quiz' && (
        <div className="mock-quiz">
          <div className="mock-label">QUESTION 03 / 10</div>
          <div className="mock-question">Which tag creates a link?</div>
          <div className="mock-option mock-option-active">A. &lt;a&gt; <span>✓</span></div>
          <div className="mock-option">B. &lt;link&gt;</div>
          <div className="mock-progress"><span /></div>
        </div>
      )}
      {type === 'nic' && (
        <div className="mock-validation">
          <div className="mock-shield">✓</div>
          <small>NIC VALIDATION</small>
          <strong>200012345678</strong>
          <div className="mock-valid-pill"><span /> Format looks valid</div>
        </div>
      )}
      {type === 'banking' && (
        <div className="mock-terminal">
          <div><span className="terminal-prompt">$</span> java BankingSystem</div>
          <p>Welcome to Simple Banking</p>
          <p>1. Check balance</p>
          <p>2. Deposit funds</p>
          <p>3. Withdraw funds</p>
          <div className="terminal-cursor">_</div>
        </div>
      )}
      {type === 'dictionary' && (
        <div className="mock-dictionary">
          <div className="mock-search"><span>⌕</span> serendipity <b>↵</b></div>
          <strong>serendipity <i> /ˌser.ənˈdɪp.ə.ti/</i></strong>
          <small>noun</small>
          <p>The occurrence of events by chance in a happy or beneficial way.</p>
          <div className="mock-word-tags"><span>meaning</span><span>phonetics</span><span>examples</span></div>
        </div>
      )}
      {type === 'lifelink' && (
      <div className="mock-lifelink">
        <div className="mock-lifelink-icon">🩸</div>
        <small>BLOOD DONATION</small>
        <strong>LifeLink</strong>
        <p>Every donation connects a life.</p>
        <div className="mock-lifelink-stats">
          <span>DONATE</span>
          <span>CONNECT</span>
          <span>SAVE LIVES</span>
        </div>
      </div>
      )}
      <span className="project-visual-glow" />
    </div>
  )
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual type={project.visual} number={project.number} />
      <div className="project-card-body">
        <div className="project-card-meta"><span>{project.kind}</span><span className="project-number">{project.number}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              {project.githubLabel || 'GitHub'} <ExternalArrow />
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live demo <ExternalArrow />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
