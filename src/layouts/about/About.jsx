import { FaCheckCircle, FaCheckDouble } from "react-icons/fa";
import "./About.css";
import Img1 from "../../assets/images/elayout.jpg";
import Img2 from "../../assets/images/dotted-bg.png";

// import { FaDownload } from "react-icons/fa6";
// import Doc1 from "../../assets/doc/AA Apartments Brochure - June 2024- (1).pdf";
import { motion, AnimatePresence } from "framer-motion";
const About = () => {
  // const Doc = "AA-Apartment.pdf";

  return (
    <div className='about_container' id='about'>
      <img src={Img2} alt='' className='banner-three__dotted' />
      <section className='about_section'>
        <AnimatePresence>
          <div className='header'>About Nathan’s Bay</div>

          <div className='contents'>
            <motion.div
              className='about_img'
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className='box_img'></div>
              <div className='img'>
                <img src={Img1} alt='' />
                {/* <a className='rectangle' href={Doc1} download={Doc} security='true'>
                  <FaDownload className='icon2' />
                </a> */}
              </div>
            </motion.div>
            <motion.div
              className='article'
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <p>
                <span>N</span>estled in the serene environment of Lakowe, Lagos, Nathan&apos;s Bay
                is a premium waterfront estate offering breathtaking views, exceptional amenities,
                and a unique blend of nature and luxury. Our vision is to redefine modern living by
                providing affordable plots of land with free foundations, ensuring that your journey
                to owning a dream home is hassle-free and rewarding.
              </p>
              <p>
                Whether you&apos;re looking to build your ideal residence or make a valuable
                investment, Nathan&apos;s Bay offers a secure, eco-friendly community with
                world-class facilities, from a state-of-the-art gymhouse to a beautiful swimming
                pool and recreational spaces for you and your family.
              </p>
              <p>
                With a Certificate of Occupancy (C of O) and prime location near Lagos&apos; most
                notable landmarks, Nathan&apos;s Bay is not just a place to live, but a lifestyle to
                experience.
              </p>
            </motion.div>
          </div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default About;
