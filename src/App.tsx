// import viteLogo from '/vite.svg'
import { pipe, pipeWith } from 'pipe-ts';
import './App.scss'
import { filter, map } from './pipe-utils';
import { JSX } from 'solid-js/jsx-runtime';

export default function App() {

  function formatKeyValue(line:string) {
    const [key,val] = line.split(':',2).map(item => item.trim());
    if (typeof val === 'undefined') {
      return preventSingleOrphans(key);
    }
    return <><strong>{key}:</strong> <span>{preventSingleOrphans(val)}</span></>;
  }

  function split (separator='\n') {
    return function* (md:string) {
      for (const line of md.split(separator)) {
        yield line;
      }
    }
  }

  function removeEmpty() {
    return pipe(
      filter((item:string) => item.length > 0)
    );
  }

  function toLineItemContent() {
    return pipe(
      map((item:string) => item.trim()),
      filter(item => item.startsWith('- ')),
      map(item => item.substring(2).trim())
    );
  }

  function toArray() {
    return function <T>(arr:Iterable<T>) {
      return [...arr];
    }
  }

  function preventSingleOrphans(content:string) {
    const items = content.split(' ');
    const theLastTwo = items.splice(items.length-2,2);
    return <>{ items.join(' ') } <span class="no-break">{theLastTwo.join(' ')}</span></>;
  }

  const asListItems = (md:string): JSX.Element[] => pipeWith(
    md,
    split(),
    removeEmpty(),

    toLineItemContent(),

    map(formatKeyValue),
    map(content => <li>{content}</li>),

    toArray(),
  )

  const asParagraphs = (md:string): JSX.Element[] => pipeWith(
    md,
    split(),
    removeEmpty(),
    map(preventSingleOrphans),
    map(content => <p>{content}</p>),
    toArray(),
  );

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
          {
            asParagraphs(`
              I am a Full Stack Developer with a strong focus on quality user experience, a deep background in UI development, and recognized for consistent value delivery.
              With 16 years of experience in web development, I am skilled in creating nearly anything that can be imagined on the web. As a seasoned and pragmatic problem-solver, I have created both applications and the libraries for building them, envisioning and delivering what is needed for success.
              I have a strong passion for team culture and recognize its crucial role in consistently delivering value. I prioritize user experience across all levels of accessibility, maintainability of code, and cultivating a positive work environment.
            `)
          }
        </section>

        <section>
          <h2>Skills</h2>
          <ul class="two columns">
            {asListItems(`
              - Application Development
              - Creation of a Component Library
              - Development within an existing Component Library
              - JavaScript / HTML / CSS Expertise
              - Solving and implementing responsive design
              - Continuous Integration and Continuous Deployment (CD/CD)
              - Proficient with relational and NoSQL databases
              - Agile Methodologies
              - Accessibility
              - Implementation according to international law
            `)}
          </ul>
        </section>

        <section>
          <h2>Tools</h2>
          <ul class="mid-aligned-terms">
            {
              asListItems(`
                - Front-End: Angular, React, SolidJS, Vue.js, jQuery
                - Back-End: Express, NestJS, GraphQL, Socket.io
                - Infrastructure: Docker, Kubernetes
                - Unit Testing: Mocha, Protractor
                - Browser automation: Puppeteer
              `)
            }
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
              <li>Replaced antiquated notification system with <strong>real-time, customizable, corporate communications</strong></li>
              <li>Extensive work developing nascent, <strong>reusable UI components</strong>, speeding design and implementation</li>
              <li>Incorporated <strong>mobile-first methodology</strong> in all IBM work, ensuring a good experience on all devices.</li>
              <li>Ensured compliance with industry standards for accessibility.</li>
              <li>Analyzed user behavior patterns through analytics tools like Google Analytics and Splunk.</li>
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
              {asListItems(`
                - Created reusable Ul components and implemented them in multiple projects.
                - Wrote the component library for the company for use in rapid prototyping projects.
                - Collaborated with design team to develop wireframes, storyboards, user flows, and site maps.
                - Implemented HTML5, CSS3, JavaScript and jQuery for front end development of web applications.
                - Debugged Ul related issues using browser developer tools such as Chrome DevTools or Firebug.
                - Developed responsive designs that adapts to different screen sizes and devices.
                - Tested cross-browser compatibility across various browsers such as Google Chrome, Firefox, Safari.
                - Worked closely with product managers to understand project scope and deliverables.
                - Developed custom web application interfaces with HTML and CSS to meet client requirements.
                - Converted PSD mockups into pure hand-written HTML and CSS pages.
              `)}
            </ul>
          </div>
        </section>

        <section>
          <h2>Hobbies</h2>
          <ul class="two columns">
            {asListItems(`
              - Reading sci-fi & fantasy
              - Biking
              - Camping
              - DIY Smart Home via Raspberry Pi, which is currently running my sprinkler system
              - Board Games
              - Game development
            `)}
          </ul>
        </section>
      </main>

      <footer>
        <p>References available upon request.</p>
      </footer>
    </>
  )
}
