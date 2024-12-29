import { Icon } from "@iconify/react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Hero({ data }) {
  const { imgUrl, name, heading, typingText, description, btnText, btnUrl } = data;
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hs-text-box">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                <span>{name}</span>
              </h6>

              <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                {heading}
              </h1>
              <h2 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                {typingText}
              </h2>
              <p className="text" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                {description}
              </p>
              <div
                className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-btn"
                >
                  <span>{btnText}</span>{" "}
                  <i className="d-flex">
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
              </div>
            </div>experience
          </div>
          <div className="col-lg-6">
            <div className="hs-banner">
              <img src={imgUrl} title alt="Admin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
