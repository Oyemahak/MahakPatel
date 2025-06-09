import React from "react";

const WorkedFor = () => {
  return (
    <section id="worked-for">
      <h2>Worked For</h2>
      <div className="worked-for-container">
        <div className="worked-for-grid">
          <div className="company-14 tooltip">
            <img src="/assets/images/company1.png" alt="Citi Bank" />
            <span className="tooltiptext">
              Led UX design for internal B2B dashboards. Focused on usability
              improvements, interaction design, and system flows as a core contributor
            </span>
          </div>
          <div className="company-23 tooltip">
            <img src="/assets/images/company2.png" alt="Accenture" />
            <span className="tooltiptext">
              Worked on front-end development and prototyping for enterprise tools. Built
              interfaces with attention to detail, performance, and accessibility
            </span>
          </div>
          <div className="company-23 tooltip">
            <img src="/assets/images/company3.png" alt="Dazzling Smiles" />
            <span className="tooltiptext">
              Designed and developed a full custom WordPress website. Managed everything
              from layout to optimization for a responsive dental service site
            </span>
          </div>
          <div className="company-14 tooltip">
            <img src="/assets/images/company4.png" alt="CanSTEM Education" />
            <span className="tooltiptext">
              Redesigned web platforms and managed digital service delivery. Conducted UX
              research, improved SEO, and enhanced user engagement for an educational
              client
            </span>
          </div>
        </div>

        {/* Mobile carousel version */}
        <div className="carousel-arrows">
          <button className="arrow-left" disabled>&#10094;</button>
          <div className="worked-for-mobile">
            <img
              className="mobile-companies-img"
              src="/assets/images/accenture.png"
              alt="Accenture"
            />
            <img
              className="mobile-companies-img active"
              src="/assets/images/citi.png"
              alt="Citi Bank"
            />
            <img
              className="mobile-companies-img"
              src="/assets/images/dazzling-smile.png"
              alt="Dazzling Smiles"
            />
            <img
              className="mobile-companies-img"
              src="/assets/images/canstem.png"
              alt="CanSTEM Education"
            />
          </div>
          <button className="arrow-right">&#10095;</button>
        </div>
      </div>
    </section>
  );
};

export default WorkedFor;