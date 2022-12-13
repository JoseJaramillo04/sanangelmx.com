import "../../css/contact.css";
import ContactInfo from "../ContactInfo";

function Contact() {
  return (
    <div className="contact-screen">
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4332.611055419583!2d-98.25892628462411!3d26.148537998861535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866509b03570790f%3A0xc46d0e558d68b57!2sSanAngel%20Productos%20Mexicanos%20LLC!5e1!3m2!1sen!2smx!4v1670717538057!5m2!1sen!2smx"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="multi-section">
        <ContactInfo />
        <form
          className="content"
          action="https://formsubmit.co/accounting@sanangelmx.com"
          method="POST"
        >
          <h4>Get in Touch with Us</h4>
          <span>
            We will reply faster via phone number or{" "}
            <a
              href="https://business.google.com/message?args=CiIIAxITODQwOTk5NTY2MjYyMzAwODA1OBoEZ21ibCIDR01NEtoDCgJNUxLTAwpYdHlwZS5nb29nbGVhcGlzLmNvbS9nb29nbGUuaW50ZXJuYWwuY29tbXVuaWNhdGlvbnMuaW5zdGFudG1lc3NhZ2luZy52MS5DaGF0SW50ZW50QXBpQXJncxL2AgoXCAMSEzg0MDk5OTU2NjI2MjMwMDgwNTgyPgo3dHlwZS5nb29nbGVhcGlzLmNvbS9jaGF0LmJvdC5wbGF0Zm9ybS5DdXN0b21TZXNzaW9uRGF0YRIDCgECUARiB3dlYnZpZXdqOGh0dHA6Ly9yYm0uZ29vZy9yYm1tLWF1dG9wdXNoL2NvbnZlcnNhdGlvbnMvY29udmVyc2F0aW9ucisIAxITODQwOTk5NTY2MjYyMzAwODA1OBoEZ21ibCIMOTY4NjEwNTU0NTQwiAGAowWVAZqZGT-gAcW90uAEsgGVARKSASIgU2FuQW5nZWwgUHJvZHVjdG9zIE1leGljYW5vcyBMTEMqbmh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tb3M4d3NSQklSejAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvZTFnbFVzRzlkS00vczEyMC1wLWstbm8tbnMtbmQvcGhvdG8uanBnEnAKBExCUEkSaApCdHlwZS5nb29nbGVhcGlzLmNvbS9tYXBzX3RhY3RpbGUuc2hhcmVkLkxpZ2h0ZXJCdXNpbmVzc1Byb2ZpbGVJbmZvEiIKIFNhbkFuZ2VsIFByb2R1Y3RvcyBNZXhpY2Fub3MgTExDGhoKGLWlvxScqb8Utam_FMepvxTPqb8U1qm_FA&hl=en&gl=MX&v=1&chtn=AFxPQEfmDl-kq-BRDQoINXtzgVqUoBbCAQ&timestamp=1670384409767"
              className="red"
            >
              Message
            </a>{" "}
            but we will still reply to your email if not in a hurry, so let us
            know how we can help you!
          </span>
          <label htmlFor="input-field-name">Your name</label>
          <input
            type="hidden"
            name="_subject"
            value="Website Inquiry- SanAngelmx.com"
          />
          <input
            type="text"
            name="name"
            id="input-field-name" // Set the value of the input field to the value stored in the state variable
            onChange={(event) => {}} // Update the state variable when the value of the input field changes
          />
          <label htmlFor="input-field-email">Your Email *</label>
          <input
            type="email"
            name="email"
            id="input-field-email" // Set the value of the input field to the value stored in the state variable
            onChange={(event) => {}} // Update the state variable when the value of the input field changes
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            required
          />
          <label htmlFor="input-field-msg">Your Message *</label>
          <textarea
            name="message"
            id="input-field-msg" // Set the value of the input field to the value stored in the state variable
            onChange={(event) => {}} // Update the state variable when the value of the input field changes
            required
          />
          <button type="submit" className="msg-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
