import React from 'react';
import Dev from "./foto/Dev.png"
import Dokter from './foto/Dokter.png';
import Akuntan from './foto/Akuntan.png';
import DataAnalis from './foto/DataAnalis.png';
import DigitalMarketing from './foto/DigitalMarketing.png';
import Guru from './foto/Guru.png';

const CProfesi = () => {
    return (
        <div>
            <section class="bg-gray-100 w-full h-full bg-right bg-[url('component/foto/BgProfesi.png')] bg-[length:1500px_720px] bg-no-repeat overflow-hidden  grid grid-cols-2">
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-xl text-center sm:text-left my-48 ">
                        <h3 class=" text-6xl font-extrabold grid grid-cols-2">
                            <h3 class="text-white">Cari</h3><h3 class="text-cyan-300 -ml-28">Profesimu</h3>
                        </h3>
                        <h3 class="text-xl font-semibold text-white mt-5 ml-1">
                            Cari Profesi yang kamu sukai. Pastikan sesuai dengan minat dan bakat
                        </h3>

                    </div>
                </div>
                <form action="" class="self-center p-8 md:p-12 lg:px-16 lg:py-24 mt-12">
                    <div>
                        <div class="relative">
                            <input
                                class="w-full outline-none rounded-full border-gray-200 p-4 pr-12 pl-10 text-sm shadow-sm"
                                placeholder="Nama Profesi"
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
                        <h3 class="text-xl text-white font-bold mb-5">Kategori</h3>
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
                        <h3 class="text-xl text-white font-bold mb-5">Range Gaji</h3>
                        <div class="relative grid grid-cols-2 gap-10 text-center">
                            <input
                                class="w-full outline-none text-center rounded-full border-gray-200 p-4 text-sm shadow-sm"
                                placeholder="Min"
                            />
                            <input
                                class="w-full outline-none text-center rounded-full border-gray-200 p-4 text-sm shadow-sm"
                                placeholder="Max"
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
      
              <div class="hover:scale-105 ">
                <img
                  alt="Edit"
                  src={Dev}
                  class="mx-auto w-96 h-64 rounded-3xl object-cover "
                />

                <blockquote
                  class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                >

                  <p class="text-3xl font-bold text-black m-5 mb-0">Developer Software</p>
                  <p class="text-lg font-bold text-black m-5 my-1">4,1jt - 6,4jt | Digital, Komputer</p>
                  <p class="text-sm font-normal text-black m-5 my-1">
                    Mengembangkan, menciptakan, dan memodifikasi
                    software apliasi komputer atau program. Menganalisa
                    kebutuhan pengguna, merancang dan mengembangkan solusi
                    software
                  </p>
                  <a href="/Cari_Profesi/Developer" class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                    Selengkapnya
                  </a>
                </blockquote>
              </div>

              <div class="hover:scale-105 ">
                <img
                  alt="Edit"
                  src={Dokter}
                  class="mx-auto w-96 h-64 rounded-3xl object-cover "
                />

                <blockquote
                  class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                >

                  <p class="text-3xl font-bold text-black m-5 mb-0">Dokter</p>
                  <p class="text-lg font-bold text-black m-5 my-1">4,1jt - 6,4jt | Kesehatan</p>
                  <p class="text-sm font-normal text-black m-5 my-1">
                  Melakukan pemeriksaan kesehatan pada pasien yang sedang sakit atau konsultasi agar 
                  didapatkan diagnosa mengenai penyakit yang dialami oleh pasien
                  </p>
                  <a href="/Cari_Profesi/Dokter" class="self-end mr-3">
                  <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                    Selengkapnya
                  </p>
                  </a>
                </blockquote>
              </div>

              <div class="hover:scale-105 ">
                <img
                  alt="Edit"
                  src={Akuntan}
                  class="mx-auto w-96 h-64 rounded-3xl object-cover "
                />

                <blockquote
                  class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                >

                  <p class="text-3xl font-bold text-black m-5 mb-0">Akuntan</p>
                  <p class="text-lg font-bold text-black m-5 my-1">4,1jt - 10jt | Keuangan</p>
                  <p class="text-sm font-normal text-black m-5 my-1">
                  memonitor dan mencatat aliran keuangan yang ada dalam sebuah perusahaan. Tugas lainya
                  untuk memverifikasi keakuratan 
                  dan memonitor transaksi tersebut agar sesuai dengan ketentuan perusahaan.
                  </p>
                  <a href="/Cari_Profesi/Akuntan" class="self-end mr-3">
                  <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold m-3">
                    Selengkapnya
                  </p>
                  </a>
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
                src={DataAnalis}
                class="mx-auto w-96 h-64 rounded-3xl object-cover "
              />

              <blockquote
                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
              >

                <p class="text-3xl font-bold text-black m-5 mb-0">Data Scientist</p>
                <p class="text-lg font-bold text-black m-5 my-1">7,1jt - 10jt | Statistik, Komputer</p>
                <p class="text-sm font-normal text-black m-5 my-1">
                  Menganalisis berbagai macam data dalam jumlah besar (big data) yang 
                  terakumulasi di suatu perusahaan. Data Scientist merupakan salah satu  
                  profesi di bidang interdisipliner
                </p>
                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                  Selengkapnya
                </p>
              </blockquote>
            </div>

            <div class="hover:scale-105 ">
              <img
                alt="Edit"
                src={Guru}
                class="mx-auto w-96 h-64 rounded-3xl object-cover "
              />

              <blockquote
                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
              >

                <p class="text-3xl font-bold text-black m-5 mb-0">Guru</p>
                <p class="text-lg font-bold text-black m-5 my-1">3,1jt - 6,4jt | Pendidikan</p>
                <p class="text-sm font-normal text-black m-5 my-1">
                  Menjaga, mengarahkan dan membimbing peserta didik untuk tumbuh dan berkembang
                  sesuai dengan potensi yang dimiliki. Guru juga sebagai motivator
                  peserta didiknya supaya memiliki motivasi belajar
                </p>
                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                  Selengkapnya
                </p>
              </blockquote>
            </div>

            <div class="hover:scale-105 ">
              <img
                alt="Edit"
                src={DigitalMarketing}
                class="mx-auto w-96 h-64 rounded-3xl object-cover "
              />

              <blockquote
                class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
              >

                <p class="text-3xl font-bold text-black m-5 mb-0">Digital Marktering</p>
                <p class="text-lg font-bold text-black m-5 my-1">5,1jt - 8,4jt | Digital</p>
                <p class="text-sm font-normal text-black m-5 my-1">
                  Bertanggung jawab dalam membangun brand awarness dan berkomunikasi dengan
                  konsumen, selain itu digital marketing ini menggunakan chanel digital
                  seperti e-mail, website dan media sosial.
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
export default CProfesi;