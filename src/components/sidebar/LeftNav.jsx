import "./sidebar.scss"
import { motion } from "framer-motion";

const leftNavVariants = {
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


const LeftNav = () => {
    return ( 
        <motion.div 
        className="leftNav"
        initial="initial" 
        animate="animate" 
        variants={leftNavVariants}>
            <motion.ul variants={leftNavVariants}>
                <motion.li variants={leftNavVariants}>
                    <motion.a href="#">0</motion.a>
                    <motion.a href="#">0</motion.a>
                    <motion.a href="#">0</motion.a>
                    <motion.a href="#">0</motion.a>
                    <motion.a href="#">0</motion.a>
                </motion.li>
            </motion.ul>
        </motion.div>
     );
}
 
export default LeftNav;