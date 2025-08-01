"use client"

import { motion } from "framer-motion"
import { Trophy, Star } from "lucide-react"
import students from "@/assets/students.jpeg"

const winners = [
  { name: "Student 1", year: "2023", achievement: "Outstanding Student Achievement" },
  { name: "Student 2", year: "2022", achievement: "Creative Excellence Award" },
  { name: "Student 3", year: "2021", achievement: "Technical Mastery Recognition" },
  { name: "Student 4", year: "2020", achievement: "Innovation in Styling" },
]

const criteria = ["Technical Excellence", "Creative Innovation", "Professional Development", "Industry Contribution"]

export default function AwardsTab() {
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
          CELEBRATING <span className="text-[var(--border-color)]">OUR</span> STUDENTS
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="space-y-8">
              {winners.map((winner, index) => (
                <motion.div
                  key={winner.name}
                  className="flex items-center space-x-6 bg-[var(--lightest)] p-6 rounded-lg border border-[var(--border-color)]/20"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl text-[var(--border-color)]">
                    <Trophy />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "hsl(8, 79%, 72%)" }}>
                      {winner.name}
                    </h3>
                    <p className="text-[var(--border-color)]">{winner.year}</p>
                    <p className="text-sm" style={{ color: "hsl(8, 79%, 72%)" }}>
                      {winner.achievement}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.img
              src={students}
              alt="Professional salon equipment"
              className="rounded-lg shadow-xl w-full h-64 object-cover mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />

            <motion.div
              className="bg-[var(--lightest)] p-8 rounded-lg border border-[var(--border-color)]/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[var(--border-color)]">Award Criteria</h3>
              <ul className="space-y-3">
                {criteria.map((criterion) => (
                  <li key={criterion} className="flex items-center space-x-3">
                    <Star className="text-[var(--border-color)] w-4 h-4" />
                    <span style={{ color: "hsl(8, 79%, 72%)" }}>{criterion}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
