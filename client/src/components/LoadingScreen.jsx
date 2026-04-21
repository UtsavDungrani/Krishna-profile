const logo = '/assets/logo-bg.png'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <img
        src={logo}
        alt="Krishna Profile"
        className="h-24 sm:h-28 w-auto mb-5 animate-pulse"
      />
      <div className="h-10 w-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      <p className="mt-4 text-gray-600 font-medium tracking-wide">Loading...</p>
    </div>
  )
}
