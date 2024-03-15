import './App.scss'

export default function App() {
  return (
    <>
      <header>
        <h1>
          Josh
          <span class="last-name">Hansen</span>
        </h1>
        <section class="contact">
          <div>720.201.8771</div>
          <div>thisisjoshhansen@gmail.com</div>
          {/* <div>Erie, CO 80516</div> */}
          <a href="https://www.linkedin.com/in/this-is-josh-hansen/" target="_blank">linkedin.com/in/this-is-josh-hansen</a>
        </section>
      </header>

      <main>
        <section>
          <h2>Summary</h2>
          <p>
            I am a Full Stack Developer with a strong focus on quality user experience, a deep background in UI
            development, and recognized for consistent value&nbsp;delivery.
          </p>
          <p>
            With 16 years of experience in web development, I am skilled in creating nearly anything that can be
            imagined on the web. As a seasoned and pragmatic problem-solver, I have created both applications and the
            libraries for building them, envisioning and delivering what is needed
            for&nbsp;success.
          </p>
          <p>
            I have a strong passion for team culture and recognize its crucial role in consistently delivering value.
            I prioritize user experience across all levels of accessibility, maintainability of code, and cultivating a
            positive work&nbsp;environment.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul class="two columns">
            <li>Application Development</li>
            <li>Creation of a Component&nbsp;Library</li>
            <li>Development within an&nbsp;existing Component&nbsp;Library</li>
            <li>JavaScript / HTML / CSS Expertise</li>
            <li>Solving and implementing responsive&nbsp;design</li>
            <li>Continuous Integration and&nbsp;Continuous Deployment&nbsp;(CD/CD)</li>
            <li>Proficient with relational and NoSQL&nbsp;databases</li>
            <li>Agile Methodologies</li>
            <li>Accessibility</li>
            <li>Implementation according to international&nbsp;law</li>
          </ul>
        </section>

        <section>
          <h2>Tools</h2>
          <ul class="mid-aligned-terms">
            <li>
              <strong>Front-End:</strong>
              <span>Angular, React, SolidJS, Vue.js,&nbsp;jQuery</span>
            </li>
            <li>
              <strong>Back-End:</strong>
              <span>Express, NestJS, GraphQL,&nbsp;Socket.io</span>
            </li>
            <li>
              <strong>Infrastructure:</strong>
              <span>Docker, Kubernetes</span>
            </li>
            <li>
              <strong>Unit Testing:</strong>
              <span>Mocha, Protractor</span>
            </li>
            <li>
              <strong>Browser automation:</strong>
              <span>Puppeteer</span>
            </li>
          </ul>
        </section>

        <section>
          <h2>Experience</h2>

          <div class="experience">
            <h3 class="who">Full Stack Web Developer</h3>
            <div class="where">IBM</div>
            <div class="when">Feb 2013 - Present</div>
            <ul class="what">
              <li>
                Architected and engineered the <strong>IBM global internal home page</strong> which won the Nielsen
                Norman Group's top ten
                <a href="https://www.nngroup.com/news/item/2017-intranet-design-awards/" target="_blank">
                  2017 Best&nbsp;Intranet Design&nbsp;Awards
                </a>.
              </li>
              <li>
                Re-engineered the intranet framework (AWF) for IBM, winning an <strong>Outstanding Technical Achievement
                Award</strong> which has been extended into use by several IBM&nbsp;clients.
              </li>
              <li>
                Created the <strong>email generation tool</strong> for all client-facing communication, which was
                integrated into the translation process, which resulted in global-ready, richly formatted email
                content, and reduced developer content delivery time from hours to&nbsp;minutes.
              </li>
              <li>
                Invented an <strong>instant search results system</strong>, displaying results from each of the&nbsp;top
                company categories, and was an immediate improvement to user&nbsp;experience.
              </li>
              <li>
                Replaced antiquated notification system with <strong>real-time, customizable, corporate&nbsp;communications</strong>.
              </li>
              <li>
                Extensive work developing nascent, <strong>reusable UI components</strong>, speeding design and&nbsp;implementation.
              </li>
              <li>
                Incorporated <strong>mobile-first methodology</strong> in all IBM work, ensuring a good experience on all&nbsp;devices.
              </li>
              <li>
                Ensured compliance with industry standards for&nbsp;<strong>accessibility</strong>.
              </li>
              <li>
                Analyzed user behavior patterns through analytics tools like Google&nbsp;Analytics and&nbsp;Splunk.
              </li>
              {/* <li>Built the <strong>Adaptive Workplace Foundation</strong>, allowing developers to go from nothing to an extendable, scalable, and customizable intranet framework within 20 minutes, rather than months.</li> */}
              {/* <li>Experienced in <strong>Agile leadership</strong></li> */}
              {/* <li>Collaborated with other developers on code reviews, bug fixes, and feature development.</li> */}
              {/* <li>Optimized existing code base for better performance and scalability.</li> */}
              {/* <li>Developed automated scripts to facilitate deployment of web applications in different environments.</li> */}
              {/* <li>Implemented caching strategies to reduce page loading time.</li> */}
              {/* <li>Managed both back-end and front-end aspects of development process.</li> */}
              {/* <li>Communicated issues, risks and concerns to management and offered solutions and mitigation strategies.</li> */}
            </ul>
          </div>

          <div class="experience">
            <h3 class="who">Front End Developer</h3>
            <div class="where">Alpha Cube, Inc</div>
            <div class="when">Jul 2008 - Feb 2013</div>
            <ul class="what">
              <li>Architected and engineered the <strong>component library</strong> for use across company&nbsp;projects.</li>
              <li>Utilized my library in <strong>rapid prototyping</strong> projects.</li>
              <li>Developed responsive designs that adapts to different screen sizes and&nbsp;devices.</li>
              <li>Collaborated with design team to develop wire-frames, storyboards, user flows, and site&nbsp;maps.</li>
              <li>Debugged Ul related issues using browser developer tools such as Chrome DevTools or&nbsp;Firebug.</li>
              {/* <li>Tested cross-browser compatibility across various browsers such as Google Chrome, Firefox, and&nbsp;Safari.</li> */}
              <li>Worked closely with product managers to understand project scope and&nbsp;deliverables.</li>
              <li>Developed custom web application interfaces with HTML and CSS to meet client&nbsp;requirements.</li>
              <li>Converted PSD mockups into clean, hand-written HTML and CSS&nbsp;pages.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Hobbies</h2>
          <ul class="two columns">
            <li>Reading fantasy &amp; sci-fi</li>
            <li>Game development</li>
            <li>Biking</li>
            <li>Camping</li>
            <li>DIY Smart Home via Raspberry Pi, which is currently running my sprinkler&nbsp;system</li>
            <li>Board Games</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>References available upon request.</p>
      </footer>
    </>
  )
}
