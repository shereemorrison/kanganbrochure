"use client"

import { motion } from "framer-motion"
import celebrate from "@/assets/celebrate.jpg"

export default function CelebrateTab() {
  console.log("Celebrate image:", celebrate)

  return (
    <motion.div
      className="relative min-h-screen"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image with transparency */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: `url(${celebrate.src || celebrate})`,
        }}
      >
        <div className="absolute inset-0 bg-[var(--background-color)]/100"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl text-white font-black mb-8 leading-tight drop-shadow-lg">
              COME JOIN US TO CELEBRATE
              <br />
              <span className="text-white">HAIRDRESSING</span>
            </h1>
            <p className="text-xl text-white font-semibold mb-8 leading-relaxed drop-shadow-md">
              At Bendigo TAFE, we've been shaping the future of hairdressing for decades. From traditional techniques to
              cutting-edge trends, our program has evolved to meet the ever-changing demands of the beauty industry.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg text-white font-semibold drop-shadow-md">
                  Established program excellence since 1970s
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg text-white font-semibold drop-shadow-md">
                  Industry-leading facilities and equipment
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg text-white font-semibold drop-shadow-md">
                  Award-winning graduates nationwide
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-[var(--lightest)] p-8 rounded-lg border border-[var(--border-color)]/20">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(8, 79%, 72%)" }}>
              When
            </h3>
            <p style={{ color: "hsl(8, 79%, 72%)" }}>October 2025</p>
          </div>
          <div className="bg-[var(--lightest)] p-8 rounded-lg border border-[var(--border-color)]/20">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(8, 79%, 72%)" }}>
              Where
            </h3>
            <p style={{ color: "hsl(8, 79%, 72%)" }}>Building G, 154 Hargreaves Street Bendigo, VIC 3552</p>
          </div>
          <div className="bg-[var(--lightest)] p-8 rounded-lg border border-[var(--border-color)]/20">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(8, 79%, 72%)" }}>
              Contact
            </h3>
            <p style={{ color: "hsl(8, 79%, 72%)" }}>Julie Curnow </p>
            <p style={{ color: "hsl(8, 79%, 72%)" }}>Phone: 03 5434 1744 </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
