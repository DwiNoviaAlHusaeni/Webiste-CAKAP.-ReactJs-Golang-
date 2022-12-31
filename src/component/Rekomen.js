import React from 'react';
import UPI from "./foto/UPI.png"
import Ilkom from "./foto/Ilkom.png"
import Dev from "./foto/Dev.png"
import LogoITB from './foto/LogoITB.png';
import ITB1 from './foto/ITB1.png';
import LogoUI from './foto/LogoUI.png'
import UI1 from './foto/UI1.png';
import Kedokteran from './foto/Kedokteran.png';
import Akuntansi from './foto/Akuntansi.png';
import Dokter from './foto/Dokter.png';
import Akuntan from './foto/Akuntan.png';

const Rekomen = () => {
  return (
    <div>
      <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl p-5 ">
          <div class="grid grid-flow-col ">
            <h2 class="text-4xl font-bold tracking-tight self-center justify-self-start">
              Rekomendasi Kampus
            </h2>
            <a href="/Cari_Kampus/" class="self-end hover:scale-105 text-base text-cyan-500 font-semibold justify-self-end mr-5">
              Lihat semua
            </a>
            
          </div>

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
                  <p class="text-sm text-cyan-500 font-semibold self-end m-5">
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

                <blockquote
                  class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5"
                >
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
          <div class="grid grid-flow-col ">
            <h2 class="text-4xl font-bold tracking-tight self-center justify-self-start">
              Rekomendasi Jurusan
            </h2>
            <a href="/Cari_Jurusan/" class="self-end hover:scale-105 text-base text-cyan-500 font-semibold justify-self-end mr-5">
              Lihat semua
            </a>
            
          </div>

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

          <a href="/Cari_Jurusan/Kedokteran">
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
          </a>

          <a href="/Cari_Jurusan/Akutansi">
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
          </a>

        </div>
        </div>
      </section>
      <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl p-5 ">
          <div class="grid grid-flow-col ">
            <h2 class="text-4xl font-bold tracking-tight self-center justify-self-start">
              Rekomendasi Profesi
            </h2>
            <a href="/Cari_Profesi/" class="self-end hover:scale-105 text-base text-cyan-500 font-semibold justify-self-end mr-5">
              Lihat semua
            </a>
            
          </div>

          <div
            class="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3"
          >
            <a href="/Cari_Profesi/Developer">
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
                <p class="text-sm text-cyan-500 hover:text-cyan-600 cursor-pointer font-semibold self-end m-3">
                  Selengkapnya
                </p>
              </blockquote>
            </div>
            </a>

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
    </div>
  );
}
export default Rekomen;