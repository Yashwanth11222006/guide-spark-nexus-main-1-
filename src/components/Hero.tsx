
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 pt-20 sm:pt-24 md:pt-20 w-full overflow-x-hidden">
      <motion.div 
        className="w-full max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink leading-tight px-2">
            Guide Bazaar
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-3 md:mb-4 text-white font-medium px-3 sm:px-4">
            Your Smart Student Companion{' '}
            <motion.span
              className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl filter drop-shadow-lg"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              ✈️
            </motion.span>
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 text-white/70 leading-relaxed px-3 sm:px-4">
            Explore finance, join events, network with startups, and grow your future in one unified platform.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-3 sm:px-4 w-full max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <Link to="/marketplace" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-purple to-brand-pink hover:opacity-90 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl md:rounded-2xl group w-full sm:w-auto min-h-[48px] sm:min-h-[50px]"
            >
              Explore Now
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/community" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-brand-purple/50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl md:rounded-2xl backdrop-blur-sm w-full sm:w-auto min-h-[48px] sm:min-h-[50px]"
            >
              Join Community
              <Users className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-3 sm:px-4 w-full"
          variants={itemVariants}
        >
          {[
            { icon: TrendingUp, title: "Finance Tools", desc: "Smart financial planning and investment tracking" },
            { icon: Users, title: "Events & Networking", desc: "Connect with peers and industry professionals" },
            { icon: Users, title: "Startup Ecosystem", desc: "Discover opportunities and build your career" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-brand-purple/50 transition-all duration-300 group w-full"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand-purple mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:text-brand-pink transition-colors" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
