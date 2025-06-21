export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-96 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500/30 rotate-45 animate-bounce delay-500"></div>
      <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-purple-500/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-500/30 rotate-45 animate-bounce delay-1500"></div>
    </div>
  )
}
