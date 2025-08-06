"use client"

import { useState } from "react"
import { GraduationCap, Users, Trophy, Clock, Film, Sparkles, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import TeachersTab from "@/components/tabs/teachers-tab"
import CelebrateTab from "@/components/tabs/celebrate-tab"
import AwardsTab from "@/components/tabs/awards-tab"
import DecadesTab from "@/components/tabs/decades-tab"
import MovieTab from "@/components/tabs/movie-tab"
import celebrate from "@/assets/celebrate.jpg"
import bendigoLogo from "../assets/bendigoLogo.png"

export default function MainBrochure() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const iconSections = [
    {
      id: 'celebrate',
      icon: Sparkles,
      title: 'EVENT DETAILS',
      subtitle: 'Main celebration content',
      color: 'from-orange-400 to-red-400',
      component: CelebrateTab
    },
    {
      id: 'teachers',
      icon: Users,
      title: 'TEACHERS',
      subtitle: 'Meet our educators',
      color: 'from-blue-500 to-purple-500',
      component: TeachersTab
    },
    {
      id: 'awards',
      icon: Trophy,
      title: 'AWARDS',
      subtitle: 'Recognition & achievements',
      color: 'from-yellow-500 to-orange-500',
      component: AwardsTab
    },
    {
      id: 'decades',
      icon: Clock,
      title: 'HISTORY OF HAIRDRESSING',
      subtitle: 'Through the decades',
      color: 'from-green-500 to-blue-500',
      component: DecadesTab
    },
    {
      id: 'movie',
      icon: Film,
      title: 'MOVIE',
      subtitle: 'Coming soon...',
      color: 'from-purple-500 to-pink-500',
      component: MovieTab,
      locked: true
    }
  ]

  const handleIconClick = (section: { id: string; locked?: boolean }) => {
    if (section.locked) return
    setActiveSection(section.id)
  }

  const handleBackToLanding = () => {
    setActiveSection(null)
  }

  const activeComponent = iconSections.find(section => section.id === activeSection)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with celebrate.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${celebrate.src || celebrate})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50" />
      </div>
      
      {/* Header */}
      <header className="relative z-20 bg-black/20 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 bg-[hsl(var(--border-color)_/_0.2)]">
                <GraduationCap className="text-xl text-[hsl(var(--border-color))]" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white drop-shadow-lg">
                  CELEBRATE HAIRDRESSING
                </h1>
                <p className="text-sm text-white/90 drop-shadow">
                  Bendigo TAFE Digital Brochure
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
            <img src={bendigoLogo || "/placeholder.svg"} alt="Kangan Institute" className="h-16 mx-auto mb-4" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Interactive Spread Out Icon Layout */}
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Positioning */}
          <div className="relative h-[600px] w-full">
            {iconSections.map((section, index) => {
              const Icon = section.icon
              
              const positions = [
                { top: '15%', left: '15%' },   // CELEBRATE - top left
                { top: '10%', right: '10%' },  // TEACHERS - top right  
                { top: '55%', left: '5%' },    // AWARDS - middle left
                { top: '50%', right: '5%' },   // HISTORY - middle right
                { top: '75%', right: '25%' }   // MOVIE - bottom right area
              ]
              
              const position = positions[index] || { top: '50%', left: '50%' }
              
              return (
                <motion.div
                  key={section.id}
                  className="absolute"
                  style={{
                    ...position,
                    transform: position.transform || 'none'
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div
                    onClick={() => handleIconClick(section)}
                    className={`
                      relative group transition-all duration-500 ease-out
                      ${section.locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:scale-110'}
                    `}
                    style={{
                      animation: `float${index} 4s ease-in-out infinite`,
                      animationDelay: `${index * 0.8}s`
                    }}
                  >
                    {/* Enhanced Glow Effect */}
                    {!section.locked && (
                      <div className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-150 bg-[hsl(var(--border-color)_/_0.3)]" />
                    )}
                    
                    {/* Main Icon Circle with glassmorphism using CSS variables */}
                    <div className={`
                      relative w-28 h-28 rounded-full flex items-center justify-center
                      backdrop-blur-lg border-2 shadow-2xl transition-all duration-500
                      ${section.locked 
                        ? 'bg-gray-400/20 border-gray-400/40' 
                        : 'bg-[hsl(var(--lightest)_/_0.2)] border-[hsl(var(--border-color)_/_0.4)] hover:shadow-3xl'
                      }
                    `}>
                      {section.locked && (
                        <div className="absolute inset-0 rounded-full bg-gray-500/30" />
                      )}
                      <Icon className={`
                        w-14 h-14 transition-all duration-300 drop-shadow-lg group-hover:scale-110
                        ${section.locked ? 'text-gray-400' : 'text-[hsl(var(--border-color))]'}
                      `} />
                      {section.locked && (
                        <div className="absolute -top-3 -right-3 text-2xl drop-shadow-lg">🔒</div>
                      )}
                    </div>
                    
                    {/* Floating Label with app styling */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 transition-all duration-300 pointer-events-none opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      <div className="backdrop-blur-md rounded-xl px-6 py-3 shadow-2xl border text-center min-w-max bg-[hsl(var(--lightest)_/_0.95)] border-[hsl(var(--border-color)_/_0.3)]">
                        <div className="font-bold text-base whitespace-nowrap drop-shadow-sm text-[hsl(var(--text-on-white))]">
                          {section.title}
                        </div>
                        <div className="text-sm whitespace-nowrap mt-1 opacity-80 text-[hsl(var(--text-on-white))]">
                          {section.subtitle}
                        </div>
                      </div>
                    </div>
                    
                    {/* Subtle pulse ring for active state */}
                    <div className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping border-[hsl(var(--border-color)_/_0.4)]" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* Floating animation keyframes and custom backdrop class */}
      <style>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(3px); }
          66% { transform: translateY(6px) translateX(-3px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(8px) translateX(-4px); }
          66% { transform: translateY(-6px) translateX(4px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-8px) translateX(2px); }
          66% { transform: translateY(10px) translateX(-2px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(6px) translateX(-3px); }
          66% { transform: translateY(-8px) translateX(3px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-6px) translateX(4px); }
          66% { transform: translateY(8px) translateX(-4px); }
        }
        
        .sheet-backdrop {
          background-color: var(--background-color);
          opacity: 1 !important;
        }
        
        .sheet-background {
          background-color: var(--background-color);
        }
        
        .sheet-header {
          background-color: var(--lightest);
          border-color: var(--border-color);
        }
        
        .back-button {
          background-color: var(--border-color);
          border-color: var(--border-color);
          color: white;
        }
        
        .header-title {
          color: var(--text-on-white);
        }
        
        .header-subtitle {
          color: var(--text-on-white);
          opacity: 0.8;
        }
      `}</style>

      {/* Sheet-like Content Overlay - Full Screen Coverage */}
      <AnimatePresence>
        {activeSection && activeComponent && (
          <motion.div
            className="fixed inset-0 z-[99999] flex flex-col"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              duration: 0.6
            }}
          >
            {/* Sheet Background */}
            <div className="absolute inset-0 sheet-backdrop" />
            
            {/* Sheet Header */}
            <div className="relative z-[100001] shadow-lg border-b-2 flex-shrink-0 sheet-header">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      onClick={handleBackToLanding}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 shadow-md border back-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span className="text-sm font-medium">Back to Navigation</span>
                    </motion.button>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[hsl(var(--border-color))]">
                        <GraduationCap className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h1 className="text-xl font-black header-title">
                          CELEBRATE HAIRDRESSING
                        </h1>
                        <p className="text-sm header-subtitle">
                          {activeComponent.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sheet Handle */}
                  <div className="w-12 h-1 rounded-full opacity-30 bg-[hsl(var(--border-color))]" />
                </div>
              </div>
            </div>
            
            {/* Sheet Content - Full Height */}
            <motion.div
              className="flex-1 overflow-y-auto relative z-[100001]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                delay: 0.2, 
                duration: 0.4,
                exit: { delay: 0, duration: 0.2 }
              }}
            >
              <activeComponent.component />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
