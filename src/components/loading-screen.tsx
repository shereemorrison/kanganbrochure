import { Scissors } from "lucide-react"
import bendigoLogo from "../assets/bendigoLogo.png"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[var(--background-color)] flex items-center justify-center z-50">
      <div className="text-center fade-in-up">
        {/* Kangan Logo */}
        <div className="mb-8">
          <img src={bendigoLogo || "/placeholder.svg"} alt="Kangan Institute" className="h-16 mx-auto mb-4" />
        </div>

        <div className="scissors-animation text-[var(--border-color)] text-8xl mb-8">
          <Scissors className="w-24 h-24 mx-auto" />
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-[var(--darkest)]">CELEBRATE</h1>

        <h2 className="text-2xl md:text-3xl font-light text-[var(--border-color)] mb-8">HAIRDRESSING</h2>

        {/* Centered loading indicator */}
        <div className="flex justify-center mb-4">
          <div className="w-64 h-2 bg-[var(--lightest)] border border-[var(--border-color)]/20 rounded-full">
            <div className="loading-progress h-full bg-[var(--border-color)] rounded-full"></div>
          </div>
        </div>

        <p className="text-[var(--darkest)] text-sm">Loading Digital Brochure...</p>
      </div>
    </div>
  )
}
