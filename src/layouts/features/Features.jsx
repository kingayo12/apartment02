import "./feauture.css";
import Img1 from "../../assets/images/plant.jpg";
import Img2 from "../../assets/images/elayout.jpg";
import Img3 from "../../assets/images/clubhouse.png";
import Img4 from "../../assets/images/pool.png";
import Img5 from "../../assets/images/sport.png";
import Img6 from "../../assets/images/road.png";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className='feature_container' id='features'>
      <section className='feature'>
        <div className='feature_header'>Estate Facilities</div>
        <div className='features'>
          <motion.div
            className='feature_1'
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4 }}
          >
            <div className='feature_img'>
              <img src={Img1} alt='' />{" "}
            </div>
            <div className='feaure_cotent'>
              <div className='title'>Eco Community</div>
              <small>
                Experience a serene environment that promotes sustainability and green living.
              </small>
            </div>
          </motion.div>
          <motion.div
            className='feature_1'
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className='feature_img'>
              <img src={Img2} alt='' />{" "}
            </div>
            <div className='feaure_cotent'>
              <div className='title'>Recreation Facilities</div>
              <small>
                Enjoy world-class recreational amenities tailored for your comfort and leisure.
              </small>
            </div>
          </motion.div>
          <motion.div
            className='feature_1'
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className='feature_img'>
              <img src={Img3} alt='' />
            </div>
            <div className='feaure_cotent'>
              <div className='title'>Club House</div>
              <small>
                Relax and socialize in a premium club house with exclusive access for residents
              </small>
            </div>
          </motion.div>
          <motion.div
            className='feature_1'
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className='feature_img'>
              {" "}
              <img src={Img4} alt='' />{" "}
            </div>
            <div className='feaure_cotent'>
              <div className='title'>Swimming Pool</div>
              <small>
                Take a dip in the luxurious swimming pool designed for your ultimate relaxation.
              </small>
            </div>
          </motion.div>
          <motion.div
            className='feature_1'
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className='feature_img'>
              {" "}
              <img src={Img5} alt='' />
            </div>
            <div className='feaure_cotent'>
              <div className='title'>Sport Arena</div>
              <small>
                Stay active and fit with access to a variety of sports facilities within the estate.
              </small>
            </div>
          </motion.div>
          <motion.div
            className='feature_1'
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className='feature_img'>
              <img src={Img6} alt='' />{" "}
            </div>
            <div className='feaure_cotent'>
              <div className='title'>Good Road Network</div>
              <small>
                Enjoy smooth and well-maintained roads that provide easy access to major highways.
              </small>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
