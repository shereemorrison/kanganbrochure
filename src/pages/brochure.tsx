import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/loading-screen";
import AcknowledgmentPage from "@/components/acknowledgment-page";
import MainBrochure from "@/components/main-brochure";

type Stage = "loading" | "acknowledgment" | "brochure";

export default function Brochure() {
  const [currentStage, setCurrentStage] = useState<Stage>("loading");

  useEffect(() => {
    // Auto-advance from loading to acknowledgment after 3.5 seconds
    if (currentStage === "loading") {
      const timer = setTimeout(() => {
        setCurrentStage("acknowledgment");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [currentStage]);

  const handleEnterBrochure = () => {
    setCurrentStage("brochure");
  };

  return (
    <div className="min-h-screen bg-[var(--deep-black)] text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {currentStage === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        )}

        {currentStage === "acknowledgment" && (
          <motion.div
            key="acknowledgment"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <AcknowledgmentPage onEnterBrochure={handleEnterBrochure} />
          </motion.div>
        )}

        {currentStage === "brochure" && (
          <motion.div
            key="brochure"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <MainBrochure />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
