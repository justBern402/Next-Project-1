import Navbar from '@/Components/Navbar'

export default function About() {

    return (
        <>
        
        <Navbar />

            <section class="py-16 px-6 md:px-12 lg:px-20">

                <h1 class="font-extrabold text-center lg:mt-30 md:mt-30 mt-20 text-4xl md:text-5xl mb-12 tracking-wide text-teal-400">
                    Our experiment and discoveries!
                </h1>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div
                        class="bg-teal-100 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                        <img src="https://images.unsplash.com/photo-1631803923305-d8bc720defa1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071" alt="" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />

                        <div class="p-5 text-center">
                            <h2 class="text-xl font-bold text-black">Organism</h2>
                            <p class="text-sm text-gray-600 mt-2">Experiment and studies about organisms benefits in earths surface.</p>
                        </div>
                    </div>

                    <div
                        class="bg-teal-100 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                        <img src="https://images.unsplash.com/photo-1707863080558-31e3e3e3ad86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="" class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />

                        <div class="p-5 text-center">
                            <h2 class="text-xl font-bold text-black">Cloning Molecules</h2>
                            <p class="text-sm text-gray-600 mt-2">Defining molecules for studies and other usage for science advancement</p>
                        </div>
                    </div>

                    <div
                        class="bg-teal-100 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                        <img src="https://images.unsplash.com/photo-1757428179254-cfe561fc24a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />

                        <div class="p-5 text-center">
                            <h2 class="text-xl font-bold text-black">Water Gasses</h2>
                            <p class="text-sm text-gray-600 mt-2">Turning water into gas matter, a research for new components</p>
                        </div>
                    </div>

                    <div
                        class="bg-teal-100 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                        <img src="https://images.unsplash.com/photo-1656955191769-8e040e820f2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />

                        <div class="p-5 text-center">
                            <h2 class="text-xl font-bold text-black">Living Forest</h2>
                            <p class="text-sm text-gray-600 mt-2">Finding forest heart beat and its unique characteristics</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}