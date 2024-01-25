import "./navbar.scss";
import { motion } from "framer-motion";

const navVariants = {
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

const NavBar = () => {
    const navMenu = ["Home","About","Project","Contact"]

    return ( 
        <motion.div 
            className="navBar"
            variants={navVariants}
            initial="initial"
            animate="animate"  // Corrected: "animate" instead of "amimate"
        >
            <motion.div variants={navVariants} className="navLogo">
                <a href="#">H</a>
            </motion.div>
            <motion.div variants={navVariants} className="navLinks">
                {navMenu.map(navLink =>(
                    <a href={`#${navLink}`} key={navLink} >
                        {navLink}
                    </a>
                ))}
            </motion.div>
        </motion.div>
     );
}
 
export default NavBar;
