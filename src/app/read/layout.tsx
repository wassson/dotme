import Navbar from "@/components/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-screen min-h-screen p-3 bg-neutral-900 text-white">  
        <Navbar />
        <div className="grid lg:grid-cols-7">
          <div className="col-start-3 col-span-3 mt-8">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}