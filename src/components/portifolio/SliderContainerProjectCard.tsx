export default function SliderContainerProjectCard( { children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full my-5
    bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/10 rounded-xl p-4">
      <div className="flex gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide">
        {children}
      </div>
    </div>
  )
}