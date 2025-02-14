'use client'
import './styles.css'; // Import your CSS file
import { motion } from "framer-motion";
function Journey() {
        return (
        <div className=" mx-4" id='journey'>
        <h1 className="text-2xl mt-4  text-center">JOURNEY</h1>
        
        <section className="design-section">
      <div className="timeline">
        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <motion.div
            className="timeline-component"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
          <div className="timeline-date">January-2020</div>
          <div className="timeline-content">
            <h3 className='text-xl'>HTML and CSS</h3>
            <p className='text-gray-400'>Learn HTML, and CSS5 from Youtube and W3school</p>
          </div>
        </motion.div>
        <motion.div
            className="timeline-component"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <div className="timeline-date">July-2020</div>
          <div className="timeline-content">
            <h3 className='text-xl'>Javascript</h3>
            <p  className='text-gray-400'>Intro to JavaScript: Learn from Thapa Technical.</p>
          </div>
        </motion.div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <motion.div
            className="timeline-component"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
        <div className="timeline-date">April-2021</div>
          <div className="timeline-content">
            <h3 className='text-xl'>React.js</h3>
            <p  className='text-gray-400'>Learn from One Month Long React Mentorship Program.</p>
          </div>
        </motion.div>
        <motion.div
            className="timeline-component"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
        <div className="timeline-date">November-2022</div>
          <div className="timeline-content">
            <h3 className='text-xl'>Tailwind CSS and Bootstrap</h3>
            <p  className='text-gray-400'>Learn from Official Documentation of Tailwind and Bootstrap.</p>
          </div>
        </motion.div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <motion.div
            className="timeline-component"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
        <div className="timeline-date">January-2023</div>
          <div className="timeline-content">
            <h3 className='text-xl'>Node.js and Express.js</h3>
            <p  className='text-gray-400'>Learn from Freecodecamp Youtube channel and Freecodecamp website.</p>
          </div>
        </motion.div>
        <motion.div
            className="timeline-component"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
        <div className="timeline-date">June-2023</div>
          <div className="timeline-content">
            <h3 className='text-xl'>Mongodb and Mongoose</h3>
            <p  className='text-gray-400'>Learn from Freecodecamp Youtube channel and Freecodecamp website.</p>
          </div>
        </motion.div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <motion.div
            className="timeline-component"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
        <div className="timeline-date">January-2024</div>
          <div className="timeline-content">
            <h3 className='text-xl'>Next.js</h3>
            <p  className='text-gray-400'>Learn from Official Documentation of Next.js.</p>
          </div>
        </motion.div>
        <motion.div
            className="timeline-component"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
        <div className="timeline-date">April-2024</div>
            <div className="timeline-content">
              <h3 className="text-xl">Machine Learning</h3>
              <p className="text-gray-400">Intro to Machine Learning: Learn from Coursera and Youtube.</p>
            </div>
        </motion.div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
      </div>
    </section>


    </div>
);
}

export default Journey;