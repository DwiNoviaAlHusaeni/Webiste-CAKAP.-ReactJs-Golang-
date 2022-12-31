import React from 'react';
import Hero from './foto/Hero.png'
import Kampus from './foto/college 1.png'
import Jurusan from './foto/coding 1.png'
import Profesi from './foto/engineer 1.png'
import Minat from './foto/search 1.png'

const Header = () => {
    return (
        <div>
            <section class="bg-gray-100 w-full h-full bg-[url('component/foto/HeroBg.png')] bg-[length:1400px_700px] bg-no-repeat overflow-hidden  sm:grid sm:grid-cols-2">
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-xl text-center sm:text-left my-48 ">
                        <h3 class="text-6xl font-extrabold text-white ">
                            CARI KAMPUS.
                        </h3>
                        <h3 class="text-5xl font-medium text-white ">
                            Impianmu
                        </h3>

                    </div>
                </div>

                <img
                    alt="Student"
                    src={Hero}
                    class="w-96 object-cover my-40 mx-auto scale-125"
                />
            </section>

            <div class=" w-auto flex justify-center bg-gray-100 ">
                <div class="-mt-36 mb-10 space-y-4 rounded-3xl justify-center content-center p-8 shadow-2xl bg-white w-auto grid grid-flow-col gap-x-4">
                    <div class="hover:scale-105">
                        <a href="/Cari_Kampus">
                        <blockquote
                            class="grid grid-flow-col bg-gradient-to-r from-cyan-600 to-cyan-400 self-center rounded-3xl p-1 "
                        >
                            <img src={Kampus} class="scale-50"/>
                            <div class="font-bold text-xl flex justify-center items-center text-white mr-6">
                                KAMPUS
                            </div>
                        </blockquote>
                        </a>
                    </div>

                    <div class="hover:scale-105">
                    <a href="/Cari_Jurusan">
                    <blockquote
                            class="grid grid-flow-col bg-gradient-to-r from-cyan-600 to-cyan-400 self-center rounded-3xl p-1 -mt-4"
                        >
                            
                            <img src={Jurusan} class="scale-50"/>
                            <div class="font-bold text-xl flex justify-center items-center text-white mr-6">
                                JURUSAN
                            </div>
                        </blockquote>
                        </a>
                    </div>
                    <div class="hover:scale-105">
                    <a href="/Cari_Profesi">
                    <blockquote
                            class="grid grid-flow-col bg-gradient-to-r from-cyan-600 to-cyan-400 self-center rounded-3xl -mt-4"
                        >
                            <img src={Profesi} class="scale-50"/>
                            <div class="font-bold text-xl flex justify-center items-center text-white mr-6">
                                PROFESI
                            </div>
                        </blockquote>
                        </a>

                    </div>
                    <div class="hover:scale-105">
                    <a href="/Minat_dan_Bakat">
                    <blockquote
                            class="grid grid-flow-col bg-gradient-to-r from-cyan-600 to-cyan-400 self-center rounded-3xl -mt-4"
                        >
                            <img src={Minat} class="scale-50"/>
                            <div class="font-bold text-lg flex justify-center items-center text-white mr-4 ">
                                TES MINAT
                            </div>
                        </blockquote>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;