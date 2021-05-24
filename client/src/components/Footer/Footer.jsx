import React from "react";

const Footer = () => (
  <footer className="d-flex justify-content-stretch">
    <div className="crf-footer--category">
      <div className="container">
        <div className="row row d-md-flex justify-content-between flex-sm-column flex-lg-row">
          <div className="crf-footer--links active">
            <div className="crf-footer--header text-primary">
              Customer Support
            </div>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Order Tracker</a>
              </li>
              <li>
                <a href="#">Returns &amp; Refunds</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
              <li>
                <a href="#">Store Locator</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="crf-footer--links">
            <div className="crf-footer--header text-primary">Company Info</div>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">Students</a>
              </li>
              <li>
                <a href="#">Mobile Apps</a>
              </li>
            </ul>
          </div>
          <div className="crf-footer--links">
            <div className="crf-footer--header text-primary">
              Privacy &amp; Terms
            </div>
            <ul>
              <li>
                <a href="#">Privacy &amp; Security</a>
              </li>
              <li>
                <a href="#">Statement</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div className="crf-footer--links crf-footer--social">
            <div className="crf-footer--header text-primary d-lg-block d-none d-sm-none">
              Follow Us
            </div>
            <ul className="d-lg-block d-none d-sm-none">
              <li>
                <a href="#" className="crf-footer--icon twitter"></a>
              </li>
              <li>
                <a href="#" className="crf-footer--icon facebook"></a>
              </li>
              <li>
                <a href="#" className="crf-footer--icon pinterest"></a>
              </li>
              <li>
                <a href="#" className="crf-footer--icon instagram"></a>
              </li>
              <li>
                <a href="#" className="crf-footer--icon googleplus"></a>
              </li>
            </ul>
            <div className="crf-footer--newsletter">
              <div className="crf-footer--header">Email Updates</div>
              <div className="crf-footer--subheader">
                Exclusive sales, special offers, and more.
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
              />
              <button className="btn btn-primary">Sign up</button>
            </div>
          </div>
          <div className="crf-footer--links crf-footer-m--social d-block d-lg-none">
            <div className="crf-footer--header text-primary">Follow Us</div>
            <ul>
              <li>
                <a href="#" className="crf-footer--icon twitter"></a>
              </li>
              <li>
                <a href="#" className="crf-footer--icon facebook"></a>
              </li>
              <li>
                <a href="#" className="crf-footer--icon pinterest"></a>
              </li>
              <li>
                <a href="#" className="crf-footer--icon instagram"></a>
              </li>
              <li>
                <a href="#" className="crf-footer--icon googleplus"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="crf-footer--logo d-flex">
      <div className="container justify-content-start align-items-center d-flex flex-column">
        <img src="https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/logos/pluralsight-white.png" />
        <div>
          This site is created for demonstrative purposes only and does not
          offer any real products or services.
        </div>
      </div>
    </div>
    <div className="crf-footer--copyright text-primary">@Pluralsight 2018</div>
  </footer>
);
export default Footer;
