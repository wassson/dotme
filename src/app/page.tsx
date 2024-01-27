import Article from "@/components/Article";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen p-3 bg-neutral-900 text-white">
      <Navbar />
      <div className="grid lg:grid-cols-7">
        <div className="col-start-3 col-span-3 mt-8">
          <div className="mb-6 pb-6">
            <div className="mb-3">
              <h2 className="text-xl">Hey! I'm Austin</h2>
            </div>
            <p className="font-md text-neutral-300 text-pretty">
              I am a software engineer obsessed with the fine details of <span className="px-1.5 py-0.5 text-sm text-neutral-300 bg-black rounded">code</span> and <span className="px-1.5 py-0.5 text-sm text-neutral-300 bg-black rounded">design</span>.
              I have both artist brain and engineer blood, and I love to create in any medium.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-neutral-600 mb-1"># read</h3>
            <Article title="How to read a git diff" date="Jan 24, 2023"/>
            <Article title="How to build a custom VSCode theme" date="Jan 24, 2023"/>
            <Article title="Everything there is to know about building REST APIs" date="Jan 24, 2023"/>
            <Article title="A tutorial on GitHub webhooks" date="Jan 24, 2023"/>
          </div>
          <div className="mb-6">
            <h3 className="text-neutral-600 mb-1"># stack</h3>
            <div className="mb-2">
              <div className="flex justify-between">
                <h4 className="text-md font-medium">Ruby on Rails</h4>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between">
                <h4 className="text-md font-medium">NextJS</h4>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between">
                <h4 className="text-md font-medium">Typescript</h4>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between">
                <h4 className="text-md font-medium">Neovim <span className="text-neutral-500">/ Alacritty</span></h4>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between">
                <h4 className="text-md font-medium">Raycast</h4>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-neutral-600 mb-2"># photos </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative h-64 col-span-2">
                <Image 
                  src="/images/antelope-canyon.jpg"
                  fill={true}
                  alt="Antelope Canyon"
                  style={{objectFit: "cover"}}
                  className="rounded-xl grayscale hover:grayscale-0"
                />
              </div>
              <div className="relative h-64 col-span-2">
                <Image 
                  src="/images/lake.jpg"
                  fill={true}
                  alt="Antelope Canyon"
                  style={{objectFit: "cover"}}
                  className="rounded-xl grayscale hover:grayscale-0"
                />
              </div>
              <div className="relative col-span-1 h-64">
                <Image 
                  src="/images/sedona-square.jpg"
                  fill={true}
                  alt="Antelope Canyon"
                  style={{objectFit: "cover"}}
                  className="rounded-xl grayscale hover:grayscale-0"
                />
              </div>
              <div className="relative col-span-1 h-64">
                <Image 
                  src="/images/chocolate-falls.jpg"
                  fill={true}
                  alt="Antelope Canyon"
                  style={{objectFit: "cover"}}
                  className="rounded-xl grayscale hover:grayscale-0"
                />
              </div>
              <div className="relative h-64 col-span-2">
                <Image 
                  src="/images/deer-wide.jpg"
                  fill={true}
                  alt="Antelope Canyon"
                  style={{objectFit: "cover"}}
                  className="rounded-xl grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
