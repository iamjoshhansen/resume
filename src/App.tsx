// import viteLogo from '/vite.svg'
import './App.scss'

export default function App() {
  return (
    <>
      {/* <img src={viteLogo} class="logo" alt="Vite logo" /> */}
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
            Offering 15 years of progressive experience in owning web-based projects from concept and design through
            testing, implementation and client updates. Consistent at producing exceptionally clean, strong and secure
            code. Successful at satisfying client desires and producing robust, sophisticated applications.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul class="two columns">
            <li>JavaScript/HTML/CSS Expertise</li>
            <li>Application Development</li>
            <li>Responsive Web Design</li>
            <li>UI Component Library Development</li>
            <li>Continuous Integration and <span class="no-break">Continuous Deployment (CD/CD)</span></li>
            <li>Proficient with relational and NoSQL databases</li>
            <li>Agile Development</li>
            <li>Accessibility (ARIA attributes, focus intent, etc)</li>
            <li>Handling translation pipeline (implementing globalization, handling translation files)</li>
          </ul>
        </section>

        <section>
          <h2>Tools</h2>
          <ul class="mid-aligned-terms">
            <li>
              <strong>Front-End</strong>
              Angular, React, SolidJS, Vue.js, jQuery
            </li>
            <li>
              <strong>Back-End</strong>
              Express, NestJS, GraphQL, Socket.io
            </li>
            <li>
              <strong>Infrastructure</strong>
              Docker, Kubernetes
            </li>
            <li>
              <strong>Unit Testing</strong>
              Mocha, Protractor
            </li>
            <li>
              <strong>Browser automation</strong>
              Puppeteer
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
              <li>Architected and engineered the <strong>IBM global internal home page</strong> which won the Nielsen Norman Group's top ten <a href="https://www.nngroup.com/news/item/2017-intranet-design-awards/" target="_blank">2017 Best Intranet Design Awards</a>.</li>
              <li>Re-engineered the intranet framework (AWF) for IBM, winning an <strong>Outstanding Technical Achievement Award</strong> which has been extended into use by several IBM clients</li>
              <li>Created the <strong>email generation tool</strong> for all client-facing communication, allowing richly designed email content to be created within minutes.</li>
              <li>Invented an <strong>instant search results system</strong>, displaying results from each of the top company categories</li>
              <li>Integrated the email generation tool into IBM's translation process, which allowed for effortless globalization of IBM's outgoing communication.</li>
              {/* <li>Built the <strong>Adaptive Workplace Foundation</strong>, allowing developers to go from nothing to an extendable, scalable, and customizable intranet framework within 20 minutes, rather than months.</li> */}
              <li>Replaced antiquated notification system with <strong>real-time, customizable, corporate communications</strong></li>
              <li>Extensive work developing nascent, <strong>reusable UI components</strong>, speeding design and implementation</li>
              {/* <li>Experienced in <strong>Agile leadership</strong></li> */}
              <li>Incorporated <strong>mobile-first methodology</strong> in all IBM work, ensuring a good experience on all devices.</li>
              {/* <li>Collaborated with other developers on code reviews, bug fixes, and feature development.</li> */}
              {/* <li>Optimized existing code base for better performance and scalability.</li> */}
              {/* <li>Developed automated scripts to facilitate deployment of web applications in different environments.</li> */}
              {/* <li>Implemented caching strategies to reduce page loading time.</li> */}
              <li>Ensured compliance with industry standards for accessibility.</li>
              <li>Analyzed user behavior patterns through analytics tools like Google Analytics and Splunk.</li>
              {/* <li>Managed both back-end and front-end aspects of development process.</li> */}
              {/* <li>Communicated issues, risks and concerns to management and offered solutions and mitigation strategies.</li> */}
            </ul>
          </div>

          <div class="experience">
            <h3 class="who">Front End Developer</h3>
            <div class="where">Alpha Cube, Inc</div>
            <div class="when">Jul 2008 - Feb 2013</div>
            <ul class="what">
              <li>Created reusable Ul components and implemented them in multiple projects.</li>
              <li>Wrote the component library for the company for use in rapid prototyping projects.</li>
              <li>Collaborated with design team to develop wireframes, storyboards, user flows, and site maps.</li>
              <li>Implemented HTML5, CSS3, JavaScript and jQuery for front end development of web applications.</li>
              <li>Debugged Ul related issues using browser developer tools such as Chrome DevTools or Firebug.</li>
              <li>Developed responsive designs that adapts to different screen sizes and devices.</li>
              <li>Tested cross-browser compatibility across various browsers such as Google Chrome, Firefox, Safari.</li>
              <li>Worked closely with product managers to understand project scope and deliverables.</li>
              <li>Developed custom web application interfaces with HTML and CSS to meet client requirements.</li>
              <li>Converted PSD mockups into pure hand-written HTML and CSS pages.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Hobbies</h2>
          <ul class="two columns">
            <li>Reading sci-fi &amp; fantasy</li>
            <li>Biking</li>
            <li>Camping</li>
            <li>DIY Smart Home via Raspberry Pi, which is currently running my sprinkler system</li>
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
