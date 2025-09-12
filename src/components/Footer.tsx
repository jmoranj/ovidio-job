import GitHubIcon from "./icons/GitHubIcon"

export default function Footer() {
  return (
    <footer className="flex mt-auto mx-40 justify-between border-t-1 border-white/20 py-10">
      <div className="flex flex-col justify-start text-white">
        <a href="https://github.com/jmoranj" target="_blank" className="flex items-center gap-2">
          <GitHubIcon size={20} />
          @jmoranj
        </a>
        <a href="https://github.com/eduard0vieira" target="_blank" className="flex items-center gap-2">
          <GitHubIcon size={20} />
          @eduard0vieira
        </a>
      </div>
      <div className="flex flex-col justify-start gap-2">
        <p className="text-white text-2l">©2025 Ovidio Activity</p>
      </div>
    </footer>
  )
}