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
          <span>Lorem ipsum dolor sit amet, consectetur adipisci</span>
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
