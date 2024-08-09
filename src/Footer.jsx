/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showLicensing, setShowLicensing] = useState(false);

  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true);
  };

  const handleLicensingClick = () => {
    setShowLicensing(true);
  };

  const handleClosePopUp = () => {
    setShowPrivacyPolicy(false);
    setShowLicensing(false);
  };

  return (
    <section>
      <div className="footer">
        <footer className="footercont rounded-lg shadow m-4 p-2 border border-white">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#" className="flex items-center mb-4 sm:mb-0">
                {/* <RiEarthFill className="w-8 h-8 mr-3 text-orange-700" /> */}

                <span
                  className="ody self-center text-2xl font-semibold whitespace-nowrap text-purple-800 mx-2"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  AK
                </span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <button
                    onClick={handlePrivacyPolicyClick}
                    className="footer-link px-3 text-white"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLicensingClick}
                    className="footer-link text-white"
                  >
                    Licensing
                  </button>
                </li>
              </ul>
            </div>
            <hr className="my-6  sm:mx-auto lg:my-8" />
            <span className="block text-sm text-white sm:text-center">
              {" "}
              &copy; 2023{" "}
              <a href="/" className="hover:underline">
                Anastasia™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>

        {showPrivacyPolicy && (
          <div className="popup-overlay">
            <div className="popup">
              <h1 className="font-bold text-2xl">Privacy Policy</h1>
              <h2 className="font-bold mt-4 underline">
                Personal Information We Collect
              </h2>
              <p>
                When you visit the Site, we automatically collect certain
                information about your device, including information about your
                web browser, IP address, time zone, and some of the cookies that
                are installed on your device. Additionally, as you browse the
                Site, we collect information about the individual web pages or
                projects that you view, what websites or search terms referred
                you to the Site, and information about how you interact with the
                Site. We refer to this automatically collected information as
                "Device Information."
              </p>
              <p>
                We collect Device Information using the following technologies:
                <ul>
                  <li>
                    <b>Cookies:</b> Data files that are placed on your device or
                    computer and often include an anonymous unique identifier.
                    For more information about cookies, and how to disable
                    cookies, visit{" "}
                    <a href="http://www.allaboutcookies.org">
                      http://www.allaboutcookies.org
                    </a>
                    .
                  </li>
                  <li>
                    <b>Log files:</b> Track actions occurring on the Site and
                    collect data including your IP address, browser type,
                    Internet service provider, referring/exit pages, and
                    date/time stamps.
                  </li>
                  <li>
                    <b>Web beacons, tags, and pixels:</b> Electronic files used
                    to record information about how you browse the Site.
                  </li>
                </ul>
              </p>

              <h2 className="font-bold mt-4 underline">
                How We Use Your Personal Information
              </h2>
              <p>We use the Personal Information that we collect to:</p>
              <ul>
                <li>Communicate with you</li>
                <li>
                  Provide you with information or updates relating to our
                  services
                </li>
                <li>
                  Customize and optimize the content and user experience of the
                  Site
                </li>
                <li>Screen our submissions for potential risk or fraud</li>
                <li>
                  When in line with the preferences you have shared with us,
                  provide you with information or advertising relating to our
                  services
                </li>
              </ul>

              <h2 className="font-bold mt-4 underline">
                Sharing Your Personal Information
              </h2>
              <p>
                We may share your Personal Information with third parties to
                help us use your Personal Information, as described above. For
                example, we use [Third Party Tools] to power certain aspects of
                our website. We also use Google Analytics to help us understand
                how our customers use the Site. You can read more about how
                Google uses your Personal Information{" "}
                <a href="https://www.google.com/intl/en/policies/privacy/">
                  here
                </a>
                . You can also opt-out of Google Analytics{" "}
                <a href="https://tools.google.com/dlpage/gaoptout">here</a>.
              </p>
              <p>
                Finally, we may also share your Personal Information to comply
                with applicable laws and regulations, to respond to a subpoena,
                search warrant, or other lawful requests for information we
                receive, or to otherwise protect our rights.
              </p>

              <h2 className="font-bold mt-4 underline">Your Rights</h2>
              <p>
                If you are a European resident, you have the right to access
                personal information we hold about you and to ask that your
                personal information be corrected, updated, or deleted. If you
                would like to exercise this right, please contact us through the
                contact information below.
              </p>

              <h2 className="font-bold mt-4 underline">Data Retention</h2>
              <p>
                When you submit a form or contact us through the Site, we will
                maintain your Submission Information for our records unless and
                until you ask us to delete this information.
              </p>

              <h2 className="font-bold mt-4 underline">Changes</h2>
              <p>
                We may update this privacy policy from time to time to reflect
                changes to our practices or for other operational, legal, or
                regulatory reasons.
              </p>

              <h2 className="font-bold mt-4 underline">Contact Us</h2>
              <p>
                For more information about our privacy practices, if you have
                questions, or if you would like to make a complaint, please
                contact us by email at <span>[Your Contact Email Address]</span>
                .
              </p>

              <button onClick={handleClosePopUp} className="close-button mt-2">
                Close
              </button>
            </div>
          </div>
        )}

        {showLicensing && (
          <div className="popup-overlay">
            <div className="popup">
              <h1 className="font-bold text-2xl">Licensing</h1>
              <p className="mt-3">
                All content displayed on this portfolio website, including but
                not limited to text, images, graphics, and videos, is protected
                by intellectual property laws. The content is the property of
                the website owner unless otherwise stated.
              </p>
              <p>
                Unless explicitly stated otherwise, you may not reproduce,
                modify, distribute, or republish any content from this website
                without prior written permission from the website owner.
                Unauthorized use of the content may violate copyright,
                trademark, and other applicable laws.
              </p>
              <p>
                If you are interested in using any of the content displayed on
                this website, please contact the website owner for licensing
                inquiries. Depending on the intended use, licensing fees or
                specific usage terms may apply.
              </p>

              <button onClick={handleClosePopUp} className="close-button">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Footer;
