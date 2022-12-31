import foto from './foto/Kosong.png'
function Favorit() {
    return (
        <div class="py-24 bg-gray-100 h-full">
            <blockquote class="bg-white mx-12 py-12 rounded-2xl">
                <div class="grid grid-cols-2 mx-14 items-end">
                    <div class="font-bold text-7xl text-blue-400">
                        Favorit
                    </div>
                    <div class="flex flex-1 justify-center ml-44 ">

                        <form class="">
                            <div class="relative">
                                <input
                                    class="h-4 rounded-full ring ring-gray-200 border-gray-200 pr-40 text-sm placeholder-gray-300 focus:z-10 p-4"
                                    placeholder="Search..."
                                    type="text"
                                />

                                <button
                                    type="submit"
                                    class="absolute inset-y-0 -right-0.5 mr-px rounded-full px-2 text-white bg-blue-400"
                                >
                                    <span class="sr-only">Submit Search</span>
                                    <svg
                                        class="h-5 w-5"
                                        fill="currentColor"
                                        viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clip-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <blockquote class="bg-white h-96 mx-12 ring ring-blue-400 rounded-xl">
                        <div class="mt-12 mx-auto flex items-center justify-center py-3 bg-blue-400 rounded-xl ">
                            <p class="text-2xl font-bold text-center text-white">Jurusan Favoritmu</p>
                        </div>
                        <img src={foto} class="w-72 mx-auto my-3" />
                        <div class=" mx-auto flex items-center justify-center ">
                            <p class="text-xl font-semibold "> Kamu belum memiliki jurusan Favoritmu</p>
                        </div>
                        <div class="flex items-center justify-center">

                            <button
                                class="my-5 inline-block rounded-full bg-blue-400 px-7 py-2 text-2xl font-bold shadow-md text-white"
                            >
                                Cari Jurusan Disini
                            </button>
                        </div>
                    </blockquote>
                    <blockquote class="bg-white h-96 mx-12 ring ring-blue-400 rounded-xl">
                        <div class="mt-12 mx-auto flex items-center justify-center py-3 bg-blue-400 rounded-xl ">
                            <p class="text-2xl font-bold text-center text-white">Kampus Favoritmu</p>
                        </div>
                        <img src={foto} class="w-72 mx-auto my-3" />
                        <div class=" mx-auto flex items-center justify-center ">
                            <p class="text-xl font-semibold "> Kamu belum memiliki kampus Favoritmu</p>
                        </div>
                        <div class="flex items-center justify-center">

                            <button
                                class="my-5 inline-block rounded-full bg-blue-400 px-7 py-2 text-2xl font-bold shadow-md text-white"
                            >
                                Cari Kampus Disini
                            </button>
                        </div>
                    </blockquote>
                    <blockquote class="bg-white h-96 mx-12 ring ring-blue-400 rounded-xl">
                        <div class="mt-12 mx-auto flex items-center justify-center py-3 bg-blue-400 rounded-xl ">
                            <p class="text-2xl font-bold text-center text-white">Profesi Favoritmu</p>
                        </div>
                        <img src={foto} class="w-72 mx-auto my-3" />
                        <div class=" mx-auto flex items-center justify-center ">
                            <p class="text-xl font-semibold "> Kamu belum memiliki profesi Favoritmu</p>
                        </div>
                        <div class="flex items-center justify-center">

                            <button
                                class="my-5 inline-block rounded-full bg-blue-400 px-7 py-2 text-2xl font-bold shadow-md text-white"
                            >
                                Cari Profesi Disini
                            </button>
                        </div>
                    </blockquote>
                </div>
            </blockquote>
        </div>
    )
}
export default Favorit;