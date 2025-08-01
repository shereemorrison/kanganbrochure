"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

const teachers = [
  { name: "Teacher 1", years: "2015-Present", specialty: "Traditional Cutting & Styling" },
  { name: "Teacher 2", years: "2015-Present", specialty: "Color Theory & Chemistry" },
  { name: "Teacher 3", years: "2015-Present", specialty: "Advanced Techniques" },
  { name: "Teacher 4", years: "2015-Present", specialty: "Modern Styling & Trends" },
  { name: "Teacher 5", years: "2010-Present", specialty: "Creative Design & Innovation" },
  { name: "Teacher 6", years: "2015-Present", specialty: "Business & Industry Relations" },
]

export default function TeachersTab() {
  return (
    <motion.div
      className="relative min-h-screen bg-[var(--background-color)]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <motion.h1
          className="text-5xl md:text-7xl font-black mb-16 text-center text-[var(--darkest)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          OUR <span className="text-[var(--border-color)]">TEACHERS</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              className="bg-[var(--lightest)] p-6 rounded-lg text-center border border-[var(--border-color)]/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-[var(--background-color)] border-2 border-[var(--border-color)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <User style={{ color: "hsl(8, 79%, 72%)" }} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(8, 79%, 72%)" }}>
                {teacher.name}
              </h3>
              <p className="text-[var(--border-color)] mb-2">{teacher.years}</p>
              <p className="text-sm" style={{ color: "hsl(8, 79%, 72%)" }}>
                {teacher.specialty}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-xl text-[var(--darkest)]/80 max-w-3xl mx-auto">
            Our dedicated teaching staff has shaped generations of hairdressing professionals, bringing decades of
            industry experience and passion for education to every classroom.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
