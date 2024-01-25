import "./hero.scss"
import { motion } from "framer-motion";

const heroVariant = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        duration: 1,
        transition: {
            duration:1,
            staggerChildren: 0.1,
        },
    },
}

const arrowVariants = {
    initial: {
        opacity: 0,
        x: 0
    },
    animate: {
        opacity: 1, 
        x: 0,
        duration: 1,
        transition: {
            delay: 2,
            duration: 2,
            staggerChildren: 1,
            ease: "easeInOut"
        }
    },
    scrollButton:{
        opacity: 0,
        y:10,
        
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

}

const Hero = () => {
    return ( 
        <div className="hero">
            <motion.div 
            className="hero-content"
            variants={heroVariant} 
            initial="initial" 
            animate="animate"
            >
                <motion.h2 variants={heroVariant}>Hello there, my name is</motion.h2>
                <motion.h1 variants={heroVariant}>Homer Rivera</motion.h1>
                <motion.h3 variants={heroVariant}>Front-End Developer!</motion.h3>
                <motion.p variants={heroVariant}>I'm not your average coder; I'm your friendly neighborhood web developer, swinging through the vast landscape of HTML, CSS and JavaScript. Turning coffee into codes, ideas into interfaces, and dreams into digital reality!</motion.p>
                <motion.div className="buttons">
                    <motion.button variants={heroVariant} >Recent Project</motion.button>
                    <motion.button variants={heroVariant} >Get In Touch</motion.button>
                </motion.div >
                <motion.div className="arrow"
                variants={arrowVariants} 
                initial="initial" 
                animate="animate">
                    <a href="#About">
                        <motion.img variants={arrowVariants} animate="scrollButton" src="/arrow-homer.png" alt="" />
                    </a>
                </motion.div>
            </motion.div>
        </div>
     );
}
 
export default Hero;