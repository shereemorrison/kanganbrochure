"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import hairdressing from "@/assets/hairdressing.jpg"
import hairdressingstudent from "@/assets/hairdressingstudent.jpeg"
import salon from "@/assets/salon.jpeg"
import students from "@/assets/students.jpeg"
import barber from "@/assets/barber.jpeg"
import scissors from "@/assets/scissors.jpg"
import colormix from "@/assets/colormix.jpg"
import curls from "@/assets/curls.jpg"

const decades = [
  {
    id: "70s",
    title: "1970's",
    description:
      "The era of feathered hair, shags, and the iconic Farrah Fawcett look. Natural textures and layered cuts dominated the decade.",
    features: [
      "Feathered hair and center parts",
      "Long, layered shag cuts",
      "Natural textures and movement",
      "Blow-dry styling techniques",
    ],
    images: [hairdressing, scissors],
  },
  {
    id: "80s",
    title: "1980's",
    description:
      "Big hair, bold styles, and dramatic volume defined this decade. Perms, crimping, and hairspray were essential tools.",
    features: [
      "Voluminous permed styles",
      "Crimped and teased textures",
      "Bold geometric cuts",
      "Dramatic color contrasts",
    ],
    images: [barber, salon],
  },
  {
    id: "90s",
    title: "1990's",
    description:
      "Grunge-inspired cuts, face-framing layers, and the iconic 'Rachel' cut. Natural textures made a comeback.",
    features: [
      "Choppy, layered cuts",
      "Face-framing highlights",
      "Sleek, straight styles",
      "Natural, effortless looks",
    ],
    images: [colormix, curls],
  },
  {
    id: "2000s",
    title: "2000's",
    description:
      "Pin-straight hair, chunky highlights, and experimental colors. The flat iron became an essential styling tool.",
    features: [
      "Ultra-straight, sleek styles",
      "Chunky blonde highlights",
      "Side-swept bangs",
      "Bold color experimentation",
    ],
    images: [students, hairdressingstudent],
  },
  {
    id: "2010s",
    title: "2010's",
    description:
      "Beach waves, ombre colors, and effortless styling. Social media influenced new trends and techniques.",
    features: ["Beachy, tousled waves", "Ombre and balayage coloring", "Long bob (lob) cuts", "Messy, textured styles"],
    images: [students, scissors],
  },
  {
    id: "2020s",
    title: "2020's",
    description:
      "Sustainable styling, creative colors, and personalized cuts. Technology and eco-consciousness shape modern hairdressing.",
    features: [
      "Sustainable styling practices",
      "Creative, artistic coloring",
      "Personalized, custom cuts",
      "Technology-assisted styling",
    ],
    images: [
      "https://images.unsplash.com/photo-1595475884218-d7fd1c2d9095?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
    ],
  },
]

export default function DecadesTab() {
  const [selectedDecade, setSelectedDecade] = useState("70s")

  const currentDecade = decades.find((d) => d.id === selectedDecade) || decades[0]

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
          HISTORY OF <span className="text-[var(--border-color)]">HAIRDRESSING</span>
        </motion.h1>

        {/* Decade Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {decades.map((decade) => (
            <Button
              key={decade.id}
              variant={selectedDecade === decade.id ? "default" : "outline"}
              className={`px-6 py-3 font-bold transition-all duration-300 ${
                selectedDecade === decade.id
                  ? "bg-[var(--border-color)] text-[var(--lightest)] hover:bg-[var(--border-color)]/80"
                  : "bg-[var(--lightest)] text-[var(--darkest)] border-[var(--border-color)] hover:bg-[var(--border-color)] hover:text-[var(--lightest)]"
              }`}
              onClick={() => setSelectedDecade(decade.id)}
            >
              {decade.title}
            </Button>
          ))}
        </motion.div>

        {/* Decade Content */}
        <motion.div
          key={selectedDecade}
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[var(--border-color)]">{currentDecade.title}</h2>
            <p className="text-xl text-[var(--text-on-white)] mb-8">{currentDecade.description}</p>
            <ul className="space-y-3 text-[var(--text-on-white)]">
              {currentDecade.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--border-color)] rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentDecade.images.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${currentDecade.title} hairstyle ${index + 1}`}
                className="rounded-lg w-full h-48 object-cover shadow-lg border border-[var(--border-color)]/20"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
