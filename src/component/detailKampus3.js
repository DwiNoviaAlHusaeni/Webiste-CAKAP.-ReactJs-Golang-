import snmptn from './foto/img/snmptn.png';
import sbmptn from './foto/img/sbmptn.png';
import logoITB from './foto/LogoITB.png';
import imgA from './foto/img/university.png';
import imgB from './foto/img/Vector.png';
import imgC from './foto/img/graduation-cap.png';
import imgD from './foto/img/map2.png';
import imgE from './foto/img/digram.png';
import imgF from './foto/img/padlock.png';

function DetailKampus3 (){
    return(
      <div>
        <section class="bg-gray-100 w-full h-screen bg-[url('./component/foto/ITB1.png')] bg-[length:1500px_720px] bg-no-repeat overflow-hidden ">
          <div class=" pl-24 pt-14 mt-96 sm:text-left grid grid-cols-1 gap-2">
            <img
              alt="Edit"
              src={logoITB}
              class="w-20 h-auto rounded-full items-end"
            />
            <h3 class=" text-3xl font-medium text-white mt-2">
              INSTITUT TEKNOLOGI BANDUNG
            </h3>
            <h3 class=" text-3xl font-bold text-white">ITB</h3>
          </div>
        </section>
        <section class="bg-white mb-10">
          <div class="p-5">
            <h2 class="text-4xl font-bold flex justify-center text-cyan-500 p-10">
              Informasi Umum
            </h2>
            <div class="mt-5 grid grid-cols-3 gap-10 px-10 ">
              <div>
                <blockquote class="bg-gradient-to-r from-blue-900 to-blue-600 px-5 py-20 rounded-3xl">
                  <img class="mx-auto" alt="" src={imgA}/>
                  <p class="text-center text-white text-2xl font-semibold mt-8 my-4">Tahun didirikan: 1959</p>
                  <p class="text-center text-white text-2xl font-semibold my-4">Akreditasi: A</p>
                  <p class="text-center text-white text-2xl font-semibold my-4">Status: Negeri</p>
                  <p class="text-center text-white text-2xl font-semibold my-4">Lokasi: Jawa Barat</p>
                </blockquote>
              </div>

              <div>
                <blockquote class="bg-gradient-to-r from-green-400 to-cyan-400 px-5 py-16 rounded-3xl">
                  <img class="mx-auto" alt="" src={imgB}/>
                  <div>
                    <p class="text-center text-white text-4xl font-bold mt-8">12</p>
                    <p class="text-center text-white text-xl">Fakultas</p>
                    <p class="text-center text-white text-4xl font-bold mt-4">130</p>
                    <p class="text-center text-white text-xl">Program Studi</p>
                  </div>
                  <div class="hover:scale-105 w-64 h-14 mx-auto mt-9">
                      <a href="https://www.itb.ac.id/">
                      <div class="flex items-center justify-center flex-1 h-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 shadow rounded-full">
                          <p class="text-xl font-bold leading-loose text-white">Lihat Selengkapnya</p>
                      </div>
                      </a>
                  </div>
                </blockquote>
              </div>

              <div>
                <blockquote class="bg-gradient-to-r from-blue-600 to-blue-900 px-5 py-20 rounded-3xl">
                  <img class="mx-auto" alt="" src={imgC}/>
                  <div>
                    <p class="text-center text-white text-4xl font-bold mt-10">1447</p>
                    <p class="text-center text-white text-xl">Dosen</p>
                    <p class="text-center text-white text-4xl font-bold mt-12">23.848</p>
                    <p class="text-center text-white text-xl">Mahasiswa</p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gray-100">
          <div class="p-5">
            <h2 class="text-4xl font-bold flex justify-center text-cyan-500 p-10">
              Tingkat Selektivitas
            </h2>

            <div class="mt-5 grid grid-cols-2 gap-10 px-10 ">
              <div class="mx-2">
                <div className="mt-8 mx-auto p-4 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl" style={{width: 400, height: 70,}}>
                  <p class="text-2xl font-bold text-center text-white">
                    Presentase Keseluruhan
                  </p>
                </div>
                <blockquote class="bg-white rounded-3xl py-6">
                  <img className="mx-auto p-auto" src={imgE} alt=""/>
                  <p className="text-xl mt-5 font-semibold text-center">Daya Tampung : -</p>
                  <p className="text-xl mt-4 font-semibold text-center">Jumlah Peminat : -</p>
                  <div className="hover:scale-105 mt-6 my-16 mx-auto bg-gradient-to-r from-green-500 to-green-400 rounded-3xl" style={{width: 286, height: 46,}}>
                    <p class="font-semibold text-xl text-white pt-2 text-center">Peluang diterima 0:0</p>
                  </div>
                </blockquote>
              </div>

              <div class="mx-2 ">
                <div className="mt-8 mx-auto p-4 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl" style={{width: 400, height: 70,}}>
                  <p class="text-2xl font-bold text-center text-white">
                     Presentase Berdasarkan Jurusan
                  </p>
                </div>
                <div>
                  <blockquote class="bg-white rounded-3xl py-20">
                    <img className="mx-auto p-auto py-6 pt-2" src={imgF} alt=""/>    
                    <div class="bg-gray-100 shadow rounded-3xl mx-auto" style={{width: 500, height: 250,}}> 
                      <p class="text-center font-bold text-2xl mx-auto px-4 pt-4">Ingin tahu keketatan berdasarkan jurusan?</p>
                      <p class="text-lg text-center text-black mt-8 mx-auto px-4">
                        Lihat selengkapnya persentasi selektivitas di jurusan Institut Teknologi Bandung. 
                        Cari tau peminat, daya tampung, dan tingkat keketatan jurusan impian kamu.
                      </p>
                      <a href="/Register">
                      <div className="hover:scale-105 mt-6 my-16 mx-auto bg-gradient-to-r from-green-500 to-green-400 rounded-3xl" style={{width: 286, height: 46,}}>
                        <p class="font-semibold text-xl text-white pt-2 text-center">Daftar Sekarang</p>
                      </div>
                      </a>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white">
          <div class = "p-5">
            <h2 class="m-4 text-4xl font-bold flex justify-center text-cyan-500 p-10">
              Informasi Pendaftaran
            </h2>
            <div class="mt-5 grid grid-cols-2 gap-10 px-20">
              <div>
                <blockquote class="bg-gray-100 rounded-3xl"style={{width: 510, height: 549,}}>    
                  <div className="mx-auto w-32 h-32 bg-white shadow rounded-full">
                    <img className="w-24 h-24 mx-auto" src={snmptn} alt=""/>
                  </div>
                  <div>
                    <p class="mx-14 mt-10 text-xl font-semibold">Jenis Seleksi : SNMPTN</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">Waktu Pelaksanaan : -</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">Biaya : Gratis</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">Daya Tampung : 30%</p>
                  </div>
                  <div class="mx-60">
                    <div class="mt-32 w-56 h-16 bg-gradient-to-r from-cyan-500 to-cyan-400 shadow rounded-full">
                      <a href="https://portal-snpmb.bppp.kemdikbud.go.id/">
                      <button class="hover:scale-105 mx-2">
                        <p class="mx-auto pt-3 w-48 h-9 text-2xl font-bold text-center text-white">Selengkapnya</p>
                      </button>
                      </a>
                    </div>
                  </div>
                </blockquote>
              </div>

              <div>
                <blockquote class="bg-gray-100 rounded-3xl"style={{width: 510, height: 549,}}>   
                  <div className="mx-auto w-32 h-32 bg-white shadow rounded-full">
                    <img className="p-auto mx-auto" src={sbmptn} alt=""/>
                  </div> 
                  <div>
                    <p class="mx-14 mt-10 text-xl font-semibold">Jenis Seleksi : SBMPTN</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">Waktu Pelaksanaan : -</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">Biaya : </p>
                    <p class="mx-14 mt-4 text-xl font-semibold">- Sainteks atau Soshum : Rp200.000</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">- Campuran : Rp300.000</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">Daya Tampung : 50%</p>
                  </div>
                  <div class="mx-60">
                    <div class="mt-9 w-56 h-16 bg-gradient-to-r from-cyan-500 to-cyan-400 shadow rounded-full">
                    <a href="https://portal-snpmb.bppp.kemdikbud.go.id/">
                      <button class="hover:scale-105 mx-2">
                        <p class="mx-auto pt-3 w-48 h-9 text-2xl font-bold text-center text-white">Selengkapnya</p>
                      </button>
                    </a>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
              <div>
                <blockquote class="bg-gray-100 rounded-3xl mx-auto mt-10"style={{width: 510, height: 549,}}>
                  <div className="mx-auto w-32 h-32 bg-white shadow rounded-full">
                    <img className="mt-4 mx-auto p-auto" src={logoITB} alt=""/>
                  </div> 
                  <div>
                    <p class="mx-14 mt-24 text-xl font-semibold">Jenis Seleksi : Mandiri ITB</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">Waktu Pelaksanaan : -</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">Biaya : Rp350.000</p>
                    <p class="mx-14 mt-4 text-xl font-semibold">Daya Tampung : 20%</p>
                  </div>
                  <div class="mx-60">
                    <div class="mt-14 w-56 h-16 bg-gradient-to-r from-cyan-500 to-cyan-400 shadow rounded-full">
                      <a href="https://admission.itb.ac.id/home/">
                      <button class="hover:scale-105 mx-2">
                        <p class="mx-auto pt-3 w-48 h-9 text-2xl font-bold text-center text-white">Selengkapnya</p>
                      </button>
                      </a>
                    </div>
                  </div>   
                </blockquote>
              </div>
          </div>
        </section>

        <section class="bg-gray-100">
          <div class = "p-5">
            <h2 class="text-4xl font-bold flex justify-center text-cyan-500 p-10">
              Informasi Biaya Kuliah
            </h2>
            <p class="text-lg text-black text-center">
              Biaya kuliah di Institut Teknologi Bandung tidak hanya dibedakan berdasarkan 
              jenis masuk dan fakultas saja, namun berdasarkan golongan. ITB telah menganut 
              sistem UKT atau Uang Kuliah Tunggal. UKT ini berbeda dengan sistem penetapan kuliah lain 
              karena menetapkan berdasarkan golongan.
            </p>
            <div className="mt-10 mx-auto p-4 bg-gradient-to-r from-green-600 to-cyan-400 rounded-xl" style={{width: 400, height: 70,}}>
              <p class="text-2xl font-bold text-center text-white">
                Jalur SNMPTN dan SBMPTN
              </p>
            </div>
            <div>
                <blockquote class="bg-white px-5 py-12 rounded-3xl mx-auto"style={{width: 1000, height: 400,}}>
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200 text-sm">
                    <thead class="bg-blue-800">
                      <tr>
                        <th
                          class="whitespace-nowrap px-4 py-2 font-medium text-white text-bold text-center"
                        >
                          Fakultas
                        </th>
                        <th
                          class="whitespace-nowrap px-4 py-2 font-medium text-white text-bold text-center"
                        >
                          Kelompok I-IV
                        </th>
                        <th
                          class="whitespace-nowrap px-4 py-2 font-medium text-white text-bold text-center"
                        >
                          Kelompok V-VII
                        </th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Fakultas Ilmu Pendidikan
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">500.000 - 3.690.000</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">4.100.000 - 5.740.000</td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Fakultas Pendidikan Ilmu Pengetahuan Sosial
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">500.000 - 4.450.000</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">4.520.000 - 5.170.000</td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Fakultas Pendidikan Bahasa dan Sastra
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">500.000 - 4.070.000</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">4.520.000 - 6.330.000</td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">500.000 - 4.920.000</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">5.460.000 - 8.190.000</td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Fakultas Pendidikan Teknologi dan Kejuruan
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">500.000 - 4.070.000</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">4.520.000 - 6.330.000</td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Fakultas Pendidikan Olahraga dan Kesehatan
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">500.000 - 4.100.000</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">4.520.000 - 6.330.000</td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Fakultas Pendidikan Ekonomi dan Bisnis
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">500.000 - 4.070.000</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">4.520.000 - 6.330.000</td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Fakultas Pendidikan Seni dan Desain
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">500.000 - 4.450.000</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">4.940.000 - 6.910.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>    
                </blockquote>
            </div>

            <div className="mt-10 mx-auto p-4 bg-gradient-to-r from-green-600 to-cyan-400 rounded-xl" style={{width: 400, height: 70,}}>
              <p class="text-2xl font-bold text-center text-white">
                Jalur Seleksi Mandiri
              </p>
            </div>
            <div>
                <blockquote class="bg-white px-5 py-12 rounded-3xl mx-auto"style={{width: 1000, height: 400,}}> 
                  <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 text-sm">
                      <thead class="bg-blue-800">
                        <tr>
                          <th
                            class="whitespace-nowrap px-4 py-2 font-medium text-white text-bold text-center"
                          >
                            Fakultas
                          </th>
                          <th
                            class="whitespace-nowrap px-4 py-2 font-medium text-white text-bold text-center"
                          >
                            Biaya Penyelenggaraan Pembelajaran
                          </th>
                          <th
                            class="whitespace-nowrap px-4 py-2 font-medium text-white text-bold text-center"
                          >
                            Biaya Pengembangan Fasilitas Dan Mutu Akademik
                          </th>
                          <th
                            class="whitespace-nowrap px-4 py-2 font-medium text-white text-bold text-center"
                          >
                            Dana Pengembangan Lembaga
                          </th>
                        </tr>
                      </thead>

                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Fakultas Ilmu Pendidikan
                          </td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">4.920.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">7.500.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">5.000.000 - 10.000.000</td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Fakultas Pendidikan Ilmu Pengetahuan Sosial
                          </td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">5.040.000 - 5.680.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">5.000.000 - 7.500.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">10.000.000 - 15.000.000</td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Fakultas Pendidikan Bahasa dan Sastra
                          </td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">5.420.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">7.500.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">10.000.000 - 15.000.000</td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam
                          </td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">6.560.000 - 7.560.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">7.500.000 - 15.000.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">15.000.000</td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Fakultas Pendidikan Teknologi dan Kejuruan
                          </td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">5.420.000 - 5.870.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">7.500.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">10.000.000 - 12.500.000</td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Fakultas Pendidikan Olahraga dan Kesehatan
                          </td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">4.920.000 - 5.870.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">5.000.000 - 7.500.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">5.000.000 - 15.000.000</td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Fakultas Pendidikan Ekonomi dan Bisnis
                          </td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">5.420.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">7.500.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">15.000.000</td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Fakultas Pendidikan Seni dan Desain
                          </td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">5.930.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">7.500.000</td>
                          <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-right">15.000.000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>   
                </blockquote>
            </div>
          </div>
        </section>

        <section class="bg-white">
          <div class = "p-5">
            <h2 class="text-4xl font-bold flex justify-center text-cyan-500 p-10">
              Lokasi Kampus
            </h2>
            <div
              class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
            >
              <div>
                <div class="max-w-xl text-center sm:text-left mx-24">
                  <div class="w-52 h-10 bg-gradient-to-r from-green-500 to-green-400 rounded-lg">
                    <h2 class="text-lg font-bold text-white text-center mt-10 md:text-xl">
                      Kampus Utama
                    </h2>
                  </div>
                  <p className="text-lg text-gray-900 mt-5">
                    Alamat : Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132<br/>
                    Nomor Telepon : 62222500935<br/>
                    Website : http://itb.ac.id/<br/>
                    E-Mail : humas@itb.ac.id<br/></p>
                </div>
              </div>
              <a href="https://www.google.com/maps/place/Bandung+Institute+of+Technology/@-6.89148,107.0503564,9z/data=!4m10!1m2!2m1!1sitb!3m6!1s0x2e68e65767c9b183:0x2478e3dcdce37961!8m2!3d-6.89148!4d107.6106591!15sCgNpdGIiA4gBAVoFIgNpdGKSAQp1bml2ZXJzaXR5mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJOTWsxUFUwVm5FQUXgAQA!16s%2Fm%2F06wc97_">
              <img
                alt=" "
                src={imgD}
                class="w-300 h-150 object-cover sm:rounded-tl-[30px] md:rounded-tl-[60px]"
              />
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
  export default DetailKampus3;