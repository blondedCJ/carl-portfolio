import { motion } from "framer-motion";
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Connect from './components/Connect';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import Capstone from './components/Capstone';
import Recommendations from './components/Recommendations';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 pt-15">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
        >
          <Profile />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          {[
            { component: <About />, className: "col-span-1 md:col-span-4" },
            { component: <Experience />, className: "col-span-1 md:col-span-2 md:row-span-2" },
            { component: <TechStack />, className: "col-span-1 md:col-span-4" },
            { component: <Connect />, className: "col-span-1 md:col-span-2" },
            { component: <Certifications />, className: "col-span-1 md:col-span-4 md:row-span-2" },
            { component: <Hobbies />, className: "col-span-1 md:col-span-2" },
            { component: <Capstone />, className: "col-span-1 md:col-span-6" },
            { component: <Recommendations />, className: "col-span-1 md:col-span-6 mb-20" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.className} space-y-2`}
            >
              {item.component}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
