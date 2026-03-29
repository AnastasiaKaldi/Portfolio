import { useState } from "react";

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showLicensing, setShowLicensing] = useState(false);

  const handleClosePopUp = () => {
    setShowPrivacyPolicy(false);
    setShowLicensing(false);
  };

  return (
    <>
      <footer className="relative border-t border-cream/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Logo */}
            <span className="font-display text-xl font-semibold text-cream/80">
              AK
            </span>

            {/* Links */}
            <div className="flex items-center gap-4 md:gap-8">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-xs uppercase tracking-[0.15em] text-cream/25 hover:text-cream/60 transition-colors duration-300"
              >
                Privacy
              </button>
              <button
                onClick={() => setShowLicensing(true)}
                className="text-xs uppercase tracking-[0.15em] text-cream/25 hover:text-cream/60 transition-colors duration-300"
              >
                Licensing
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-cream/5">
            <p className="text-[11px] text-cream/15 tracking-wider">
              &copy; {new Date().getFullYear()} Anastasia Kaldi. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="popup-overlay" onClick={handleClosePopUp}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
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
              projects that you view, what websites or search terms referred you
              to the Site, and information about how you interact with the Site.
            </p>
            <h2 className="font-bold mt-4 underline">
              How We Use Your Personal Information
            </h2>
            <p>We use the Personal Information that we collect to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Communicate with you</li>
              <li>Provide you with information or updates relating to our services</li>
              <li>Customize and optimize the content and user experience of the Site</li>
              <li>Screen our submissions for potential risk or fraud</li>
            </ul>
            <h2 className="font-bold mt-4 underline">Your Rights</h2>
            <p>
              If you are a European resident, you have the right to access
              personal information we hold about you and to ask that your
              personal information be corrected, updated, or deleted.
            </p>
            <h2 className="font-bold mt-4 underline">Changes</h2>
            <p>
              We may update this privacy policy from time to time to reflect
              changes to our practices or for other operational, legal, or
              regulatory reasons.
            </p>
            <button onClick={handleClosePopUp} className="close-button mt-4">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Licensing Modal */}
      {showLicensing && (
        <div className="popup-overlay" onClick={handleClosePopUp}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h1 className="font-bold text-2xl">Licensing</h1>
            <p className="mt-3">
              All content displayed on this portfolio website, including but not
              limited to text, images, graphics, and videos, is protected by
              intellectual property laws. The content is the property of the
              website owner unless otherwise stated.
            </p>
            <p className="mt-3">
              Unless explicitly stated otherwise, you may not reproduce, modify,
              distribute, or republish any content from this website without
              prior written permission from the website owner.
            </p>
            <p className="mt-3">
              If you are interested in using any of the content displayed on
              this website, please contact the website owner for licensing
              inquiries.
            </p>
            <button onClick={handleClosePopUp} className="close-button mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
