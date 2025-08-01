"use client"

import { useState } from "react"
import { GraduationCap } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import CelebrateTab from "@/components/tabs/celebrate-tab"
import TeachersTab from "@/components/tabs/teachers-tab"
import AwardsTab from "@/components/tabs/awards-tab"
import DecadesTab from "@/components/tabs/decades-tab"
import MovieTab from "@/components/tabs/movie-tab"
import bendigoLogo from "../assets/bendigoLogo.png"

export default function MainBrochure() {
  const [activeTab, setActiveTab] = useState("celebrate")

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      {/* Header - same background as tab bar */}
      <header className="relative z-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center">
                <GraduationCap style={{ color: "hsl(8, 79%, 72%)" }} className="text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-black" style={{ color: "hsl(8, 79%, 72%)" }}>
                  CELEBRATE HAIRDRESSING
                </h1>
                <p className="text-sm" style={{ color: "hsl(8, 79%, 72%)" }}>
                  Bendigo TAFE Digital Brochure
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <img src={bendigoLogo || "/placeholder.svg"} alt="Kangan Bendigo Institute" className="h-8" />
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation and Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="sticky top-0 z-10 bg-transparent border-b border-[var(--border-color)]/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <TabsList className="flex space-x-0 bg-transparent h-auto p-0 overflow-x-auto scrollbar-hide w-full justify-start">
              <TabsTrigger
                value="celebrate"
                className="whitespace-nowrap px-6 py-4 text-sm font-bold border-b-3 border-transparent data-[state=active]:border-[var(--border-color)] data-[state=active]:text-[var(--border-color)] data-[state=active]:bg-[var(--border-color)]/10 text-[var(--darkest)]/60 hover:text-[var(--darkest)] hover:bg-[var(--background-color)]/50 bg-transparent rounded-none transition-all duration-300"
              >
                CELEBRATE
              </TabsTrigger>
              <TabsTrigger
                value="teachers"
                className="whitespace-nowrap px-6 py-4 text-sm font-bold border-b-3 border-transparent data-[state=active]:border-[var(--border-color)] data-[state=active]:text-[var(--border-color)] data-[state=active]:bg-[var(--border-color)]/10 text-[var(--darkest)]/60 hover:text-[var(--darkest)] hover:bg-[var(--background-color)]/50 bg-transparent rounded-none transition-all duration-300"
              >
                TEACHERS
              </TabsTrigger>
              <TabsTrigger
                value="awards"
                className="whitespace-nowrap px-6 py-4 text-sm font-bold border-b-3 border-transparent data-[state=active]:border-[var(--border-color)] data-[state=active]:text-[var(--border-color)] data-[state=active]:bg-[var(--border-color)]/10 text-[var(--darkest)]/60 hover:text-[var(--darkest)] hover:bg-[var(--background-color)]/50 bg-transparent rounded-none transition-all duration-300"
              >
                AWARDS
              </TabsTrigger>
              <TabsTrigger
                value="decades"
                className="whitespace-nowrap px-6 py-4 text-sm font-bold border-b-3 border-transparent data-[state=active]:border-[var(--border-color)] data-[state=active]:text-[var(--border-color)] data-[state=active]:bg-[var(--border-color)]/10 text-[var(--darkest)]/60 hover:text-[var(--darkest)] hover:bg-[var(--background-color)]/50 bg-transparent rounded-none transition-all duration-300"
              >
                HISTORY OF HAIRDRESSING
              </TabsTrigger>
              <TabsTrigger
                value="movie"
                className="locked-section whitespace-nowrap px-6 py-4 text-sm font-bold border-b-3 border-transparent text-[var(--darkest)]/40 bg-transparent rounded-none cursor-not-allowed opacity-50"
                disabled
              >
                🔒 MOVIE
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <main className="relative">
          <TabsContent value="celebrate" className="mt-0">
            <CelebrateTab />
          </TabsContent>

          <TabsContent value="teachers" className="mt-0">
            <TeachersTab />
          </TabsContent>

          <TabsContent value="awards" className="mt-0">
            <AwardsTab />
          </TabsContent>

          <TabsContent value="decades" className="mt-0">
            <DecadesTab />
          </TabsContent>

          <TabsContent value="movie" className="mt-0">
            <MovieTab />
          </TabsContent>
        </main>
      </Tabs>
    </div>
  )
}
