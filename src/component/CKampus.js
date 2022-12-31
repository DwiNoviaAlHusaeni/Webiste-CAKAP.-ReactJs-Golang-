import React from 'react';
import UPI from "./foto/UPI.png"
import LogoITB from './foto/LogoITB.png';
import ITB1 from './foto/ITB1.png';
import LogoUI from './foto/LogoUI.png'
import UI1 from './foto/UI1.png';
import LogoIPB from './foto/LogoIPB.png'
import IPB1 from './foto/IPB1.png'
import LogoUGM from './foto/LogoUGM.png'
import UGM1 from './foto/UGM1.png'
import LogoUNPAD from './foto/LogoUNPAD.png'
import UNPAD1 from './foto/UNPAD1.png'

const CKampus = () => {
    return (
        <div>
            <section class="bg-gray-100 w-full h-full bg-right bg-[url('component/foto/BgKampus.png')] bg-[length:1500px_720px] bg-no-repeat overflow-hidden  grid grid-cols-2">
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-xl text-center sm:text-left my-48 ">
                        <h3 class=" text-6xl font-extrabold grid grid-cols-2">
                            <h3 class="text-white">Cari</h3><h3 class="text-cyan-300 -ml-28">Kampusmu</h3>
                        </h3>
                        <h3 class="text-xl font-semibold text-white mt-5 ml-1">
                            Cari Kampus yang kamu sukai. Pastikan sesuai dengan minat dan bakat
                        </h3>

                    </div>
                </div>
                <form action="" class="self-center p-8 md:p-12 lg:px-16 lg:py-20 mt-12">
                    <div>
                        <div class="relative">
                            <input
                                class="w-full rounded-full outline-none border-gray-200 p-2 pr-12 pl-10 text-lg shadow-sm"
                                placeholder="Nama Kampus"
                            />

                        </div>
                    </div>

                    <div class="flex items-center justify-center">

                        <button
                            class="my-5 inline-block rounded-3xl bg-blue-500 px-7 py-1 text-xl font-bold text-white"
                        >
                            CARI
                        </button>
                    </div>
                </form>
            </section>
            <div class="grid grid-cols-2 bg-gradient-to-r from-cyan-600 to-cyan-400 p-5 py-8">
                <form action="" class="self-center mx-36">
                    <div>
                        <div class="relative">
                            <input
                                class="w-full outline-none rounded-full border-gray-200 p-2 pr-12 pl-10 text-md shadow-sm"
                                placeholder="Semua Lokasi"
                            />

                        </div>
                    </div>

                </form>
                <form action="" class="self-center mx-36">
                    <div>
                        <div class="relative">
                            <input
                                class="w-full rounded-full border-gray-200 p-2 pr-12 pl-10 text-md outline-none shadow-sm"
                                placeholder="Semua Jurusan"
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
                        <a href="/Cari_Kampus/UPI">
                        <div class="hover:scale-105 ">
                            <img
                                alt="Edit"
                                src={UPI}
                                class="mx-auto w-96 h-64 rounded-3xl object-cover "
                            />

                            <blockquote
                                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                            >
                                <div class="grid-cols-2 grid gap-2">
                                    <img
                                        alt="Edit"
                                        src="http://berita.upi.edu/wp-content/uploads/2019/11/LOGO-UPI.jpg"
                                        class=" scale-[0.3] -m-9 -mr-14  self-center"
                                    />
                                    <p class="text-lg font-bold text-black -ml-20 mr-5 self-center">UNIVERSITAS PENDIDIKAN INDONESIA (UPI)</p>
                                </div>
                                <p class="text-sm font-normal text-black m-5 -mt-1">
                                    Indonesia University of Education was established
                                    in 1954 as Teacher Education Collage. It is in Bandung,
                                    Indonesia. Indonesia University of Education is a multi-
                                    campus University, with one main campus and several others.
                                </p>
                                <p class="text-sm text-cyan-500 hover:text-cyan-600 font-semibold self-end m-5">
                                    Selengkapnya
                                </p>
                            </blockquote>
                        </div>
                        </a>
                
                <a href="/Cari_Kampus/ITB">
                    <div class="hover:scale-105 ">
                        <img
                            alt="Edit"
                            src={ITB1}
                            class="mx-auto w-96 h-64 rounded-3xl object-cover "
                        />
                        <blockquote class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5">
                            <div class="grid-cols-2 grid gap-2">
                                <img
                                alt="Edit"
                                src={LogoITB}
                                class=" scale-[0.3] -m-9 -mr-14  self-center"
                                />
                                <p class="text-lg font-bold text-black -ml-20 mr-5 self-center">INSTITUT TEKNOLOGI BANDUNG (ITB)</p>
                            </div>
                                <p class="text-sm font-normal text-black m-5 -mt-1">
                                    Institut Teknologi Bandung adalah sebuah perguruan tinggi 
                                    negeri yang berkedudukan di Kota Bandung. Nama ITB diresmikan 
                                    pada tanggal 2 Maret 1959. Sejak tanggal 14 Oktober 2013 ITB
                                    Menjadi Perguruan Tinggi Negeri Badan Hukum.
                                </p>
                            <p class="text-sm text-cyan-500 hover:text-cyan-600 font-semibold self-end m-5 cursor-pointer">
                            Selengkapnya
                            </p>
                        </blockquote>
                    </div>
                </a>

                <a href="/Cari_Kampus/UI">
                    <div class="hover:scale-105 ">
                        <img
                            alt="Edit"
                            src={UI1}
                            class="mx-auto w-96 h-64 rounded-3xl object-cover "
                        />

                        <blockquote
                            class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                        >
                            <div class="grid-cols-2 grid gap-2">
                                <img
                                alt="Edit"
                                src={LogoUI}
                                class=" scale-[0.3] -m-9 -mr-14  self-center"
                                />
                                <p class="text-lg font-bold text-black -ml-20 mr-5 self-center">UNIVERSITAS INDONESIA (UI)</p>
                            </div>
                            <p class="text-sm font-normal text-black m-5 -mt-1">
                                Universitas Indonesia disingkat sebagai UI, adalah sebuah perguruan tinggi di Indonesia.
                                Kampus utamanya terletak di bagian Utara dari Depok, Jawa Barat tepat di perbatasan antara 
                                Depok dengan wilayah Jakarta Selatan.
                            </p>
                            <p class="text-sm text-cyan-500 hover:text-cyan-600 font-semibold self-end m-5 cursor-pointer">
                                Selengkapnya
                            </p>
                        </blockquote>
                    </div>
                </a>
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
                                src={IPB1}
                                class="mx-auto w-96 h-64 rounded-3xl object-cover "
                            />

                            <blockquote
                                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                            >
                                <div class="grid-cols-2 grid gap-2">
                                    <img
                                        alt="Edit"
                                        src={LogoIPB}
                                        class=" scale-[0.3] -m-9 -mr-14  self-center"
                                    />
                                    <p class="text-lg font-bold text-black -ml-20 mr-5 self-center">INSTITUT PERTANIAN BOGOR (IPB)</p>
                                </div>
                                <p class="text-sm font-normal text-black m-5 -mt-1">
                                Institut Pertanian Bogor merupakah Perguruan Tinggi Negeri yang 
                                berlokasi di Bogor, Jawa Barat. IPB diresmikan pada tahun 1963, 
                                yang mana sebelum itu IPB merupakan sebuah fakultas pertanian di 
                                Universitas Indonesia.
                                </p>
                                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-5">
                                    Selengkapnya
                                </p>
                            </blockquote>
                        </div>

                        <div class="hover:scale-105 ">
                            <img
                                alt="Edit"
                                src={UGM1}
                                class="mx-auto w-96 h-64 rounded-3xl object-cover "
                            />

                            <blockquote
                                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                            >
                                <div class="grid-cols-2 grid gap-2">
                                    <img
                                        alt="Edit"
                                        src={LogoUGM}
                                        class=" scale-[0.3] -m-9 -mr-14  self-center"
                                    />
                                    <p class="text-lg font-bold text-black -ml-20 mr-5 self-center">UNIVERSITAS GADJAH MADA (UGM)</p>
                                </div>
                                <p class="text-sm font-normal text-black m-5 -mt-1">
                                Universitas Gadjah Mada adalah perguruan tinggi negeri di Daerah 
                                Istimewa Yogyakarta, Indonesia. Universitas Gadjah Mada merupakan 
                                perguruan tinggi pertama yang didirikan oleh Pemerintah Indonesia 
                                setelah Indonesia merdeka.
                                </p>
                                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-5">
                                    Selengkapnya
                                </p>
                            </blockquote>
                        </div>

                        <div class="hover:scale-105 ">
                            <img
                                alt="Edit"
                                src={UNPAD1}
                                class="mx-auto w-96 h-64 rounded-3xl object-cover "
                            />

                            <blockquote
                                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                            >
                                <div class="grid-cols-2 grid gap-2">
                                    <img
                                        alt="Edit"
                                        src={LogoUNPAD}
                                        class=" scale-[0.3] -m-9 -mr-14 self-center"
                                    />
                                    <p class="text-lg font-bold text-black -ml-20 mr-5 mt-5 self-center">UNIVERSITAS PADJADJARAN (UNPAD)</p>
                                </div>
                                <p class="text-sm font-normal text-black m-5 mt-7">
                                Universitas Padjadjaran adalah sebuah perguruan tinggi negeri di Jawa Barat, Indonesia. 
                                Kampus utama Unpad, terutama untuk Program Sarjana, berada di Jatinangor, Kabupaten 
                                Sumedang, Jawa Barat.

                                </p>
                                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold mt-8 self-end m-5">
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
export default CKampus;