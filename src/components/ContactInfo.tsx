import Lottie from "lottie-react";
import "../css/contactInfo.css";
import PageBreak from "./PageBreak";

function ContactInfo() {
  return (
    <div className="contact-info">
      <h4>Contact Information</h4>
      <div className="address-data">
        <div className="address-row">
          <span className="address-title">Address:</span>
          <span className="address-content">
            2501 W. Military Hwy Ste B-15, McAllen, TX 78503, United States
          </span>
        </div>
        <div className="address-row">
          <span className="address-title">Phone:</span>
          <a href="tel:+1(956)561-6634" className="address-content">
            +1 (956)561-6634
          </a>
        </div>
        <div className="address-row last-row">
          <span className="address-title">Email:</span>
          <a
            href="mailto:sales@sanangelmx.com"
            className="address-content color-red email"
          >
            sales@sanangelmx.com
          </a>
        </div>
        <PageBreak />
        <div className="lottie-space">
          <Lottie
            animationData={require("../assets/animations/contact.json")}
            className="lottie-contact"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
