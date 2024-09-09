import "./contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ContactUs = () => {
  return (
    <div className='bg_contact' id='contact'>
      <section className='contact-us'>
        <AnimatePresence>
          <motion.div
            className='contact-info'
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2>Contact Information</h2>
            <p>
              <FaMapMarkerAlt className='iconc' /> Lakowe, Lagos, Nigeria
            </p>
            <a className='phone item' href='tel:+2347033967980'>
              <FaPhone className='iconc' />
              <span>+234 703 396 7980</span>
            </a>
            <a className='time item' href='mailto:crimsonoaksng@gmail.com'>
              <FaEnvelope className='iconc' />
              <span>crimsonoaksng@gmail.com</span>
            </a>
            <div className='business-hours'>
              <h2>Business Hours</h2>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className='social-media'>
              <h2>Follow Us</h2>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                <FaFacebook className='iconc' /> Facebook
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                <FaXTwitter className='iconc' /> Twitter
              </a>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='iconc' /> Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            className='contact-form'
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2>Send Us a Message</h2>
            <form>
              <div className='form-group'>
                <label>Name:</label>
                <input type='text' name='name' required />
              </div>
              <div className='form-group'>
                <label>Email:</label>
                <input type='email' name='email' required />
              </div>
              <div className='form-group'>
                <label>Message:</label>
                <textarea name='message' rows='5' required></textarea>
              </div>
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default ContactUs;
