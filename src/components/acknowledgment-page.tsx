"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface AcknowledgmentPageProps {
  onEnterBrochure: () => void
}

export default function AcknowledgmentPage({ onEnterBrochure }: AcknowledgmentPageProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-[var(--background-color)] flex items-center justify-center z-40 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <div className="flex justify-center space-x-8 mb-8">
            {/* Aboriginal Flag */}
            <div className="w-32 h-20 rounded-lg overflow-hidden">
              <div className="h-full flex">
                <div className="w-1/2 bg-black"></div>
                <div className="w-1/2 bg-red-600"></div>
              </div>
            </div>

            {/* Torres Strait Islander Flag */}
            <div className="w-32 h-20 rounded-lg bg-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col">
                <div className="h-1/3 bg-green-600"></div>
                <div className="h-1/3 bg-blue-600"></div>
                <div className="h-1/3 bg-green-600"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-xl">★</div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: "hsl(8, 79%, 72%)" }}>
          ACKNOWLEDGMENT OF COUNTRY
        </h1>

        <div
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
          style={{ color: "hsl(8, 79%, 72%)" }}
        >
          <p className="mb-6">
            We acknowledge the Dja Dja Wurrung people as the Traditional Custodians of the lands and waters where
            Bendigo TAFE is located.
          </p>
          <p className="mb-6">
            We pay our respects to Elders past and present, and extend that respect to all Aboriginal and Torres Strait
            Islander peoples.
          </p>
          <p>
            We recognize their continuing connection to country and culture, and their contribution to the life of this
            region.
          </p>
        </div>

        <Button
          onClick={onEnterBrochure}
          className="bg-[var(--border-color)] hover:bg-[var(--border-color)]/80 text-[var(--lightest)] font-bold py-4 px-12 text-xl rounded-none transition-all duration-300 transform hover:scale-105"
        >
          ENTER THE BROCHURE
        </Button>
      </div>
    </motion.div>
  )
}
