import foto from './foto/Dev.png'
import foto1 from './foto/ilkom2.jpg'
import foto2 from './foto/ilkom3.jpg'
import foto3 from './foto/ilkom4.jpg'
import fotoj from './foto/Ti.jpg'
import fotoj1 from './foto/Si.jpg'
import fotoj2 from './foto/TK.jpeg'
import fotoj3 from './foto/CS.jpg'
import fotok from './foto/LogoUPI.png'
import fotok1 from './foto/LogoITB.png'
import fotok2 from './foto/LogoUI.png'
import fotok3 from './foto/LogoIPB.png'

function DetailJurusan() {
    return (
        <div class="bg-gray-100 h-full  ">
            <section class="bg-gray-100 w-full h-screen bg-[url('./component/foto/Ilkom.png')] bg-[length:1300px_790px] bg-no-repeat overflow-hidden ">
                <div class="mt-24 mx-auto flex justify-end mr-10">
                    <div class="w-60 h-8">
                        <div class="flex space-x-5 items-center justify-center flex-1 h-full py-3 bg-transparent ring ring-white rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            <p class="text-lg font-semibold leading-loose text-center text-white">Tambah ke Favorit</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-rows-2 justify-center mt-20">
                    <div class="inline-flex space-x-4 items-center mx-auto">
                        <div class="relative">
                            <div class="w-16 h-16 bg-blue-400 rounded-full">
                            <svg className="w-14 mx-auto pt-1" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                        </div>
                        <p class="text-5xl font-bold leading-loose text-white">Ilmu Komputer</p>
                    </div>
                    <div class="grid grid-cols-3 mx-auto">
                        <p class="text-3xl font-semibold leading-loose text-center text-white">Penjuruan<br />IPA</p>
                        <p class="text-3xl font-semibold leading-loose text-center text-white">Pelajaran Terkait<br />TIK</p>
                        <p class="text-3xl font-semibold leading-loose text-center text-white">Kategori Jurusan<br />Komputer & Teknologi</p>
                    </div>
                </div>
            </section>
            <div class="pt-12 px-24">
                <div class="mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                    <p class="text-2xl font-bold text-center text-white">Apa itu Ilmu Komputer?</p>
                </div>
                <blockquote class="py-8 bg-white rounded-2xl px-5">
                    <p class="text-lg text-center " >Ilmu Komputer adalah sebuah ilmu yang mempelajari baik tentang komputasi,
                        perangkat keras (hardware) maupun perangkat lunak (software). Ilmu komputer
                        mencakup beragam topik yang berkaitan dengan komputer, mulai dari analisis abstrak
                        algoritma sampai subyek yang lebih konkret seperti bahasa pemrograman, perangkat
                        lunak, termasuk perangkat keras. Berbeda dengan Teknik Informatika yang lebih
                        menekankan pada sisi penerapannya, program studi Ilmu Komputer lebih fokus pada
                        'sains' dari bidang komputer itu sendiri</p>
                </blockquote>

                <div class="mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                    <p class="text-2xl font-bold text-center text-white">Kenapa Ilmu Komputer ?</p>
                </div>
                <blockquote class="py-8 bg-white rounded-2xl">
                    <p class="text-lg text-center mx-12" >Perkembangan zaman semakin cepat dikarenakan adanya perubahan teknologi
                        yang drastis. Maka dari itu tenaga Ilmu Komputer sangat dibutuhkan di lapangan
                        kerja karena segala kebutuhan manusia sudah dapat dipermudah karena adanya teknologi.</p>
                </blockquote>

                <div class="mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                    <p class="text-2xl font-bold text-center text-white">Mata Kuliah</p>
                </div>
                <blockquote class="grid grid-cols-2 py-8 bg-white rounded-2xl">
                    <p class="text-lg px-20 my-1" >1. Mobile Programming </p>
                    <p class="text-lg px-20 my-1" >6. Sistem Instrumentasi</p>
                    <p class="text-lg px-20 my-1" >2. Sistem Otomasi</p>
                    <p class="text-lg px-20 my-1" >7. Sistem Operasi</p>
                    <p class="text-lg px-20 my-1" >3. Teknologi Mikrotik</p>
                    <p class="text-lg px-20 my-1" >8. Metode Numerik</p>
                    <p class="text-lg px-20 my-1" >4. Matematika komputasi</p>
                    <p class="text-lg px-20 my-1" >9. Analisis Perencanaan Sistem</p>
                    <p class="text-lg px-20 my-1" >5. Aljabar Linear Matriks</p>
                </blockquote>

                <div class="mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                    <p class="text-2xl font-bold text-center text-white">Profesi Lulusan Ilmu Komputer</p>
                </div>
                <blockquote class=" py-8 bg-white rounded-2xl">
                    <div class="grid grid-cols-4 ">
                        <div class="grid grid-rows-2 ">
                            <p class=" text-medium font-medium text-center">Developer Software, Aplikasi</p>
                            <img src={foto} class="w-32 h-32 object-cover -mt-12 mx-auto bg-black bg-opacity-30 rounded-full " />
                        </div>
                        <div class="grid grid-rows-2 ">
                            <p class=" text-medium font-medium text-center">Web Developer</p>
                            <img src={foto1} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                        <div class="grid grid-rows-2 ">
                            <p class=" mb-4text-medium font-medium text-center">Front End Developer</p>
                            <img src={foto2} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                        <div class="grid grid-rows-2">
                            <p class="  text-medium font-medium text-center">Full Stack Developer</p>
                            <img src={foto3} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                    </div>
                </blockquote>
                <div class="mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                    <p class="text-2xl font-bold text-center text-white">Jurusan Terkait</p>
                </div>
                <blockquote class=" py-8 bg-white rounded-2xl">
                    <div class="grid grid-cols-4">
                        <div class="grid grid-rows-2">
                            <p class=" text-medium font-medium text-center">Teknik Informatika</p>
                            <img src={fotoj} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                        <div class="grid grid-rows-2 ">
                            <p class=" text-medium font-medium text-center">Cyber Security</p>
                            <img src={fotoj1} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                        <div class="grid grid-rows-2 ">
                            <p class=" mb-4text-medium font-medium text-center">Sistem Informasi</p>
                            <img src={fotoj2} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                        <div class="grid grid-rows-2">
                            <p class="  text-medium font-medium text-center">Teknik Komputer</p>
                            <img src={fotoj3} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                    </div>
                </blockquote>
                <div class="pb-12">
                    <div class=" mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                        <p class="text-2xl font-bold text-center text-white">Kampus Terkait</p>
                    </div>
                    <blockquote class=" py-12 bg-white rounded-2xl">
                        <div class="grid grid-cols-4">
                            <div class="grid grid-rows-2">
                                <p class=" text-medium font-medium text-center">Universitas Pendidikan Indonesia</p>
                                <img src={fotok} class="w-32 h-32 -mt-12 object-cover mx-auto shadow-xl rounded-full"/>
                            </div>
                            <div class="grid grid-rows-2 ">
                                <p class=" text-medium font-medium text-center">Institut Teknologi Bandung</p>
                                <img src={fotok1} class="w-32 h-32 -mt-12 object-cover mx-auto shadow-xl rounded-full" />
                            </div>
                            <div class="grid grid-rows-2 ">
                                <p class=" mb-4text-medium font-medium text-center">Universitas Indonesia</p>
                                <img src={fotok2} class="w-32 h-32 -mt-12 object-cover mx-auto shadow-xl rounded-full" />
                            </div>
                            <div class="grid grid-rows-2">
                                <p class="  text-medium font-medium text-center">Institut Pertanian Bogor</p>
                                <img src={fotok3} class="w-32 h-32 -mt-12 mx-auto object-cover shadow-xl rounded-full" />
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
export default DetailJurusan;