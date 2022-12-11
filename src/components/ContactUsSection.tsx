import "../css/contactUsSection.css";

function ContactUsSection() {
  return (
    <div className="contact-section">
      <h2>Contact us</h2>
      <div className="contact-content">
        <div className="business-hours">
          <h3>Business Hours:</h3>
          <span>M-F: 8:00am-7:30pm</span>
          <span>Saturday: 8:00am-4:30pm</span>
          <span>Sunday: Closed</span>
          <div className="btn-row">
            <a href="tel:+1956-992-8831">
              <button>Call now</button>
            </a>
            <a href="https://business.google.com/message?args=CiIIAxITODQwOTk5NTY2MjYyMzAwODA1OBoEZ21ibCIDR01NEtoDCgJNUxLTAwpYdHlwZS5nb29nbGVhcGlzLmNvbS9nb29nbGUuaW50ZXJuYWwuY29tbXVuaWNhdGlvbnMuaW5zdGFudG1lc3NhZ2luZy52MS5DaGF0SW50ZW50QXBpQXJncxL2AgoXCAMSEzg0MDk5OTU2NjI2MjMwMDgwNTgyPgo3dHlwZS5nb29nbGVhcGlzLmNvbS9jaGF0LmJvdC5wbGF0Zm9ybS5DdXN0b21TZXNzaW9uRGF0YRIDCgECUARiB3dlYnZpZXdqOGh0dHA6Ly9yYm0uZ29vZy9yYm1tLWF1dG9wdXNoL2NvbnZlcnNhdGlvbnMvY29udmVyc2F0aW9ucisIAxITODQwOTk5NTY2MjYyMzAwODA1OBoEZ21ibCIMOTY4NjEwNTU0NTQwiAGAowWVAZqZGT-gAcW90uAEsgGVARKSASIgU2FuQW5nZWwgUHJvZHVjdG9zIE1leGljYW5vcyBMTEMqbmh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tb3M4d3NSQklSejAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvZTFnbFVzRzlkS00vczEyMC1wLWstbm8tbnMtbmQvcGhvdG8uanBnEnAKBExCUEkSaApCdHlwZS5nb29nbGVhcGlzLmNvbS9tYXBzX3RhY3RpbGUuc2hhcmVkLkxpZ2h0ZXJCdXNpbmVzc1Byb2ZpbGVJbmZvEiIKIFNhbkFuZ2VsIFByb2R1Y3RvcyBNZXhpY2Fub3MgTExDGhoKGLWlvxScqb8Utam_FMepvxTPqb8U1qm_FA&hl=en&gl=MX&v=1&chtn=AFxPQEfmDl-kq-BRDQoINXtzgVqUoBbCAQ&timestamp=1670384409767">
              <button className="msg">
                <img
                  src={require("../assets/icons/message.png")}
                  alt="message icon"
                />
                Message
              </button>
            </a>
          </div>
          <span className="btn-msg">Messaging via google</span>
        </div>
        <div className="google-maps">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.478608929802!2d-98.25892628462411!3d26.148537998861535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866509b03570790f%3A0xc46d0e558d68b57!2sSanAngel%20Productos%20Mexicanos%20LLC!5e0!3m2!1sen!2smx!4v1670379991236!5m2!1sen!2smx"
            width="600"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="located-info">
        <img
          src={require("../assets/images/Terminal-market.jpg")}
          alt="sky-view of the McAllen Produce Terminal Market"
        />
        <div className="located-text">
          <span>Located on the</span>
          <span>
            McAllen Produce Terminal Market on the border town of McAllen, Texas
          </span>
          <span>2501 W. Military Hwy. Ste B-15, B-14, B-11, B-43, B-46</span>
          <span>McAllen, TX 78503</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
