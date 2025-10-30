import Navbar from '@/Components/Navbar'


export default function Home() {
  return (
    <>

      <div>
        <div>
          <Navbar />
        </div>

        <main>
          <div id="home" className="max-w-7xl mx-auto">
            <div className="absolute lg:left-65 md:left-65 left-5 lg:top-70 md:top-70 top-60 text-teal-100">
              <h1 className="lg:text-5xl md:text-5xl text-3xl font-mono font-extrabold">Thinking</h1>
              <h1 className="lg:text-9xl md:text-8xl text-6xl font-mono font-extrabold">Out of the Box</h1>
              <button className="border py-3 px-9 rounded-lg mt-10 cursor-pointer backdrop-blur-md hover:scale-110"><a>Explore</a></button>
            </div>
          </div>
          <div id="hero" className="">
            <img src="https://images.unsplash.com/photo-1502318217862-aa4e294ba657?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715" alt="space hero" className="w-full h-screen"></img>
          </div>
        </main>


      </div>
    </>
  );
}
