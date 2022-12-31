import foto from './foto/gizi.jpg'
import foto1 from './foto/kesmes.jpg'
import foto2 from './foto/farmasi.jpg'
import foto3 from './foto/keperawatan.jpg'

function DetailProfesi2() {
    return (
        <div class="bg-gray-100 h-full  ">
            <section class="bg-gray-100 w-full h-screen bg-[url('./component/foto/Dokter.png')] bg-[length:1300px_790px] bg-no-repeat overflow-hidden ">
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
                        <p class="text-5xl font-bold leading-loose text-white">Dokter</p>
                    </div>
                    <div class="grid grid-cols-3 mx-auto">
                        <p class="text-3xl font-semibold leading-loose text-center text-white">Range Gaji<br />4.8jt - 8.3jt</p>
                        <p class="text-3xl font-semibold leading-loose text-center text-white">Jenjang Minimal<br />S1</p>
                        <p class="text-3xl font-semibold leading-loose text-center text-white">Kategori<br />Kesehatan</p>
                    </div>
                </div>
            </section>
            <div class="pt-12 px-24">
                <div class="mt-12 flex items-center justify-center py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                    <p class="text-2xl font-bold text-center text-white">Apa itu Dokter?</p>
                </div>
                <blockquote class="py-8 bg-white rounded-2xl">
                    <p class="text-lg text-center " >
                        Dokter adalah seorang tenaga kesehatan (dokter) yang menjadi tempat 
                        kontak pertama pasien dengan dokternya untuk menyelesaikan semua masalah 
                        kesehatan yang dihadapi tanpa memandang jenis penyakit, organologi, 
                        golongan usia, dan jenis kelamin, sedini dan sedapat mungkin, secara menyeluruh
                    </p>
                </blockquote>

                <div class="mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                    <p class="text-2xl font-bold text-center text-white">Tugas dan Tanggung Jawab</p>
                </div>
                <blockquote class="py-8 bg-white rounded-2xl">
                    <p class="text-lg text-justify mx-12" >1. Melakukan Pemeriksaan Kesehatan Pada Pasien</p>
                    <p class="text-lg text-justify mx-12 my-2" >2. Mewawancarai Dan Memberikan Layanan Konsultasi Pada Pasien</p>
                    <p class="text-lg text-justify mx-12 my-2" >3. Menetapkan Diagnosis</p>
                    <p class="text-lg text-justify mx-12 my-2" >4. Melakukan Tindakan Medis Yang Diperlukan</p>
                    <p class="text-lg text-justify mx-12 my-2" >5. Menulis Resep Obat Dan Alat Kesehatan</p>
                </blockquote>

                <div class="mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                    <p class="text-2xl font-bold text-center text-white">Pengetahuan dan Keahlian</p>
                </div>
                <blockquote class="grid grid-cols-2 py-8 bg-white rounded-2xl">
                    <p class="text-lg px-20 my-1" >1. Kemampuan berpikir logis </p>
                    <p class="text-lg px-20 my-1" >2. Kemampuan berpikir sistematis</p>
                    <p class="text-lg px-20 my-1" >3. Kemampuan melakukan analisis</p>
                    <p class="text-lg px-20 my-1" >4. Kemampuan manajerial</p>
                    <p class="text-lg px-20 my-1" >5. Kemampuan problem solving</p>
                    <p class="text-lg px-20 my-1" >6. Keterampilan komunikasi</p>
                    <p class="text-lg px-20 my-1" >7. Keterampilan rekayasa informatika</p>
                    <p class="text-lg px-20 my-1" >8. Penguasaan bahasa asing</p>
                    <p class="text-lg px-20 my-1" >9. Pemahaman bahasa pemrograman</p>
                </blockquote>
                <div class="pb-12">
                <div class="mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-auto " style={{ width: 500, height: 50, }}>
                    <p class="text-2xl font-bold text-center text-white">Jurusan Terkait</p>
                </div>
                <blockquote class=" py-8 bg-white rounded-2xl">
                    <div class="grid grid-cols-4">
                        <div class="grid grid-rows-2">
                            <p class=" text-medium font-medium text-center">Gizi</p>
                            <img src={foto} class="w-32 h-32 -mt-12 mx-auto obect-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                        <div class="grid grid-rows-2 ">
                            <p class=" text-medium font-medium text-center">Kesehatan Masyarakat</p>
                            <img src={foto1} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                        <div class="grid grid-rows-2 ">
                            <p class=" mb-4text-medium font-medium text-center">Farmasi</p>
                            <img src={foto2} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                        <div class="grid grid-rows-2">
                            <p class="  text-medium font-medium text-center">Keperawatan</p>
                            <img src={foto3} class="w-32 h-32 -mt-12 mx-auto object-cover bg-black bg-opacity-30 rounded-full" />
                        </div>
                    </div>
                </blockquote>
                </div>
            </div>
        </div>
    )
}
export default DetailProfesi2;