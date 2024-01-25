import "./sidebar.scss";
import { motion } from "framer-motion";

const rightNavVariants = {
    initial: {
        opacity: 0,
        x: 0
    },
    animate: {
        opacity: 1, 
        x: 0,
        duration: 1,
        transition: {
            delay: 1,
            duration: 2,
            staggerChildren: 1,
            ease: "easeInOut"
        }
    }
}

const RightNav = () => {
    return (  
        <motion.div 
            className="rightNav"
            initial="initial"  // Corrected: Set initial to "initial"
            animate="animate"  // Corrected: Set animate to "animate"
            variants={rightNavVariants}
        >
           <motion.a variants={rightNavVariants} href="#">HomerRivera@dev.com</motion.a>
        </motion.div>
    );
}
 
export default RightNav;
