/* eslint-disable react/no-unescaped-entities */
import "./experience.css";
export default function experience() {
  return (
    <>
      <div id="experience" className="experience-container">
        <div className="experience-header">
          <h1>Non-Technical Experience</h1>
        </div>
        <div className="work-container">
          <div className="exp-card-container">
            <h1 className="tenren">Ten Ren's Tea Time</h1>
            <h3>Supervisor</h3>
            <p>April 2017 - September 2020</p>
            <ul>
              <li>
                Supervised up to 6 employees in a fast-paced environment;
                established a team-oriented work environment to minimize
                conflict between employees
              </li>
              <li>
                Ensured accuracy for all customer transactions through OPUS POS
                systems
              </li>
              <li>
                Implemented cost-control methods through employee scheduling and
                inventory management
              </li>
              <li>
                Oversaw training program for all new employees; trained,
                mentored, and evaluated each trainee
              </li>
            </ul>
          </div>
          <div className="exp-card-container">
            <h1 className="cardinal">Cardinal Real Estate Management Group</h1>
            <h3>Intern</h3>
            <p>June 2016 - August 2016</p>
            <ul>
              <li>
                Assisted property managers in day-to-day property operations,
                including managing leases, handling maintenance requests, and
                ensuring property compliance
              </li>
              <li>
                Contacted contractors to receive bids and subsequently connected
                them with clients
              </li>
              <li>
                Supported financial analysis tasks such as rent collection,
                budgeting, and contributed to financial reporting.
              </li>
              <li>
                Provided exceptional customer service to tenants or clients,
                addressing inquiries and concerns promptly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
