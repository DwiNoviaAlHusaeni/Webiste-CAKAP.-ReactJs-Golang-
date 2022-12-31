import React from 'react';
import Ilkom from "./foto/Ilkom.png"
import Kedokteran from './foto/Kedokteran.png';
import Akuntansi from './foto/Akuntansi.png';
import Farmasi from './foto/Farmasi.png';
import Matematika from './foto/Matematika.png';
import Manajemen from './foto/Manajemen.png';

const CJurusan = () => {
    return (
        <div>
            <section class="bg-gray-100 w-full h-full bg-right bg-[url('component/foto/BgJurusan.png')] bg-[length:1500px_720px] bg-no-repeat overflow-hidden  grid grid-cols-2">
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-xl text-center sm:text-left my-48 ">
                        <h3 class=" text-6xl font-extrabold grid grid-cols-2">
                            <h3 class="text-white">Cari</h3><h3 class="text-cyan-300 -ml-28">Jursanmu</h3>
                        </h3>
                        <h3 class="text-xl font-semibold text-white mt-5 ml-1">
                            Cari Jurusan yang kamu sukai. Pastikan sesuai dengan minat dan bakat
                        </h3>

                    </div>
                </div>
                <form action="" class="self-center p-8 md:p-12 lg:px-16 lg:py-24 mt-12">
                    <div>
                        <div class="relative">
                            <input
                                class="w-full outline-none rounded-full border-gray-200 p-4 pr-12 pl-10 text-sm shadow-sm"
                                placeholder="Nama Jurusan/Program Studi"
                            />

                        </div>
                    </div>

                    <div class="flex items-center justify-center">

                        <button
                            class="my-5 inline-block rounded-full bg-blue-500 px-7 py-2 text-2xl font-bold text-white"
                        >
                            CARI
                        </button>
                    </div>
                </form>
            </section>
            <div class="grid grid-cols-2 bg-gradient-to-r from-cyan-600 to-cyan-400 p-5 py-8">
                <form action="" class="text-center mx-36">
                    <div>
                        <h3 class="text-xl text-white font-bold mb-5">Penjuruan</h3>
                        <div class="relative">
                            <input
                                class="w-full outline-none rounded-full border-gray-200 p-4 pr-12 pl-10 text-sm shadow-sm"
                                placeholder="Semua Penjuruan"
                            />

                        </div>
                    </div>

                </form>
                <form action="" class="text-center mx-36">
                    <div>
                        <h3 class="text-xl text-white font-bold mb-5">Pelajaran</h3>
                        <div class="relative">
                            <input
                                class="w-full outline-none rounded-full border-gray-200 p-4 pr-12 pl-10 text-sm shadow-sm"
                                placeholder="Semua Pelajaran"
                            />

                        </div>
                    </div>

                </form>
            </div>
            <section class="bg-gray-100">
                <div class="mx-auto max-w-screen-xl p-5 ">

                    <div
                        class="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3"
                    >
                        <a href="/Cari_Jurusan/Ilkom">
                        <div class="hover:scale-105 ">
                            <img
                                alt="Edit"
                                src={Ilkom}
                                class="mx-auto w-96 h-64 rounded-3xl object-cover "
                            />

                            <blockquote
                                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                            >

                                <p class="text-3xl font-bold text-black m-5 mb-0">Ilmu Komputer</p>
                                <p class="text-lg font-bold text-black m-5 my-1">IPA | TIK</p>
                                <p class="text-sm font-normal text-black m-5 my-1">
                                    Program Studi Ilmu Komputer adalah Program
                                    studi yang mempelajari apa saja mengenai komputer
                                </p>
                                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                                    Selengkapnya
                                </p>
                            </blockquote>
                        </div>
                        </a>

                        <div class="hover:scale-105 ">
              <img
                alt="Edit"
                src={Kedokteran}
                class="mx-auto w-96 h-64 rounded-3xl object-cover "
              />

              <blockquote
                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
              >

                <p class="text-3xl font-bold text-black m-5 mb-0">Ilmu Kedokteran</p>
                <p class="text-lg font-bold text-black m-5 my-1">IPA | KESEHATAN</p>
                <p class="text-sm font-normal text-black m-5 my-1">
                  Program Studi Ilmu Kedokteran adalah Program
                  studi yang mempelajari apa saja mengenai kedokteran
                </p>
                <p class="text-sm text-cyan-500 hover:text-cyan-600 font-semibold self-end m-3 mr-5 cursor-pointer">
                  Selengkapnya
                </p>
              </blockquote>
            </div>

            <div class="hover:scale-105 ">
              <img
                alt="Edit"
                src={Akuntansi}
                class="mx-auto w-96 h-64 rounded-3xl object-cover "
              />

              <blockquote
                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
              >

                <p class="text-3xl font-bold text-black m-5 mb-0">Akuntansi</p>
                <p class="text-lg font-bold text-black m-5 my-1">IPS | SOSIAL</p>
                <p class="text-sm font-normal text-black m-5 my-1">
                  Program Studi Akuntansi adalah Program
                  studi yang mempelajari apa saja mengenai perhitungan
                </p>
                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                  Selengkapnya
                </p>
              </blockquote>
            </div>
                    </div>
                </div>
            </section>
            <section class="bg-gray-100">
                <div class="mx-auto max-w-screen-xl p-5 ">

                    <div
                        class="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3"
                    >
                        <div class="hover:scale-105 ">
                            <img
                                alt="Edit"
                                src={Farmasi}
                                class="mx-auto w-96 h-64 rounded-3xl object-cover "
                            />

                            <blockquote
                                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                            >

                                <p class="text-3xl font-bold text-black m-5 mb-0">Farmasi</p>
                                <p class="text-lg font-bold text-black m-5 my-1">IPA | KESEHATAN</p>
                                <p class="text-sm font-normal text-black m-5 my-1">
                                    Program Studi Farmasi adalah Program
                                    studi yang mempelajari apa saja mengenai senyawa obat
                                </p>
                                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                                    Selengkapnya
                                </p>
                            </blockquote>
                        </div>

                        <div class="hover:scale-105 ">
                            <img
                                alt="Edit"
                                src={Matematika}
                                class="mx-auto w-96 h-64 rounded-3xl object-cover "
                            />

                            <blockquote
                                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                            >

                                <p class="text-3xl font-bold text-black m-5 mb-0">Matematika</p>
                                <p class="text-lg font-bold text-black m-5 my-1">MTK | LOGIKA</p>
                                <p class="text-sm font-normal text-black m-5 my-1">
                                    Program Studi Matematika adalah Program
                                    studi yang mempelajari apa saja mengenai perhitungan
                                </p>
                                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                                    Selengkapnya
                                </p>
                            </blockquote>
                        </div>

                        <div class="hover:scale-105 ">
                            <img
                                alt="Edit"
                                src={Manajemen}
                                class="mx-auto w-96 h-64 rounded-3xl object-cover "
                            />

                            <blockquote
                                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                            >

                                <p class="text-3xl font-bold text-black m-5 mb-0">Manajemen</p>
                                <p class="text-lg font-bold text-black m-5 my-1">IPS | HUMANIORA</p>
                                <p class="text-sm font-normal text-black m-5 my-1">
                                    Program Studi Manajemen adalah Program
                                    studi yang mempelajari apa saja mengenai Pengelolaan
                                </p>
                                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                                    Selengkapnya
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}
export default CJurusan;