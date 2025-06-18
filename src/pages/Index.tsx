import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import TrendingContent from "@/components/TrendingContent";
import EventCarousel from "@/components/EventCarousel";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import StatsSection from "@/components/StatsSection";
import StudentDiscountPreview from "@/components/StudentDiscountPreview";
import GradientSeparator from "@/components/GradientSeparator";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax effects for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowY1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      }
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-black text-white overflow-x-hidden"
    >
      {/* Enhanced Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Grid pattern with animation */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />

        {/* Animated border lines */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent"
          animate={{
            background: [
              "linear-gradient(90deg, transparent, rgba(209, 58, 255, 0.2), transparent)",
              "linear-gradient(90deg, transparent, rgba(255, 77, 160, 0.3), transparent)",
              "linear-gradient(90deg, transparent, rgba(209, 58, 255, 0.2), transparent)",
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent"
          animate={{
            background: [
              "linear-gradient(90deg, transparent, rgba(255, 77, 160, 0.2), transparent)",
              "linear-gradient(90deg, transparent, rgba(209, 58, 255, 0.3), transparent)",
              "linear-gradient(90deg, transparent, rgba(255, 77, 160, 0.2), transparent)",
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-purple/20 to-transparent"
          animate={{
            background: [
              "linear-gradient(180deg, transparent, rgba(209, 58, 255, 0.2), transparent)",
              "linear-gradient(180deg, transparent, rgba(255, 77, 160, 0.3), transparent)",
              "linear-gradient(180deg, transparent, rgba(209, 58, 255, 0.2), transparent)",
            ]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-purple/20 to-transparent"
          animate={{
            background: [
              "linear-gradient(180deg, transparent, rgba(255, 77, 160, 0.2), transparent)",
              "linear-gradient(180deg, transparent, rgba(209, 58, 255, 0.3), transparent)",
              "linear-gradient(180deg, transparent, rgba(255, 77, 160, 0.2), transparent)",
            ]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Enhanced animated glow spots with parallax */}
        <motion.div
          style={{ y: glowY1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-30"
          animate={{
            background: [
              "radial-gradient(circle, rgba(209, 58, 255, 0.2), transparent)",
              "radial-gradient(circle, rgba(255, 77, 160, 0.3), transparent)",
              "radial-gradient(circle, rgba(209, 58, 255, 0.2), transparent)",
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            background: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          style={{ y: glowY2 }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-30"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255, 77, 160, 0.2), transparent)",
              "radial-gradient(circle, rgba(209, 58, 255, 0.3), transparent)",
              "radial-gradient(circle, rgba(255, 77, 160, 0.2), transparent)",
            ],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            background: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }
          }}
        />

        {/* Additional floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <Navbar />

      <motion.div
        variants={sectionVariants}
        className="relative z-10 w-full overflow-x-hidden"
      >
        <Hero />
        <motion.div
          variants={sectionVariants}
          className="w-full overflow-x-hidden"
        >
          <NewsTicker />

          {/* Separator after NewsTicker */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="container mx-auto px-4 py-8"
          >
            <GradientSeparator thickness="medium" opacity="medium" />
          </motion.div>

          <EventCarousel />

          {/* Separator after EventCarousel */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="container mx-auto px-4 py-8"
          >
            <GradientSeparator thickness="medium" opacity="medium" />
          </motion.div>

          <TrendingContent />
        </motion.div>
      </motion.div>

      {/* Separator before StudentDiscountPreview */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-12"
      >
        <GradientSeparator thickness="thick" opacity="high" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <StudentDiscountPreview />
      </motion.div>

      {/* Separator before Timeline */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-12"
      >
        <GradientSeparator thickness="thick" opacity="high" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Timeline />
      </motion.div>

      {/* Separator before StatsSection */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-12"
      >
        <GradientSeparator thickness="thick" opacity="high" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <StatsSection />
      </motion.div>

      {/* Separator before Footer */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-12"
      >
        <GradientSeparator thickness="thick" opacity="high" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Index;
