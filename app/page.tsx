'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Hey, I&#39;m Sangharsh
            </motion.h1>

            <motion.p 
                className="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Software engineer with over 4 years of experience currently working at <span
                className="highlight">Nagarro</span>,
                specializing in building scalable distributed systems with
                <span className="highlight"> Node.js</span>,
                <span className="highlight"> microservices</span>, and
                <span className="highlight"> advanced infrastructure solutions</span>.
            </motion.p>

            <p>
                I&#39;m passionate about creating robust, high-performance systems
                that push the boundaries of what&#39;s possible in distributed computing.
            </p>

            <motion.div 
                className="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <h2>Professional Focus</h2>
                <motion.div 
                    className="project"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <h3>Distributed Systems Engineering</h3>
                    <p>
                        Designing and implementing scalable backend architectures
                        that handle complex computational challenges with precision
                        and efficiency.
                    </p>
                </motion.div>
                <motion.div 
                    className="project"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <h3>Security & Performance Optimization</h3>
                    <p>
                        Leveraging CTF experience to develop innovative approaches
                        to system security and performance, turning potential
                        vulnerabilities into strengths.
                    </p>
                </motion.div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                Wanna collab on a project, form a team for a CTF competition or participate in hackathon
                <Link href="/contact"> Let&#39;s connect and explore
                    </Link>.
            </motion.p>
        </motion.main>
    )
}