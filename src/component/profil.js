function Profil() {
    return (
        <div class="bg-gray-100 h-full py-24">
            <blockquote class="mx-12  bg-white rounded-2xl">
                <p class="pt-8 mx-12 text-5xl font-bold text-left text-blue-300">Edit Profil</p>
                <p class="pt-8 mx-12 text-xl mb-2 ">Nama Lengkap</p>
                <div class="mx-10 bg-white border">
                    <form class="">
                        <div class="relative">
                            <input
                                class="h-4  border-gray-200 w-full text-lg placeholder-gray-300 focus:z-10 p-4 py-5"
                                placeholder="Masukkan nama lengkap Anda"
                                type="text"
                            />
                        </div>
                    </form>
                </div>
                <p class="pt-8 mx-12 text-xl mb-2 ">Email</p>
                <div class="mx-10 bg-white border">
                    <form class="">
                        <div class="relative">
                            <input
                                class="h-4  border-gray-200 w-full text-lg placeholder-gray-300 focus:z-10 p-4 py-5"
                                placeholder="Masukkan alamat email aktif Anda"
                                type="text"
                            />
                        </div>
                    </form>
                </div>
                <p class="pt-8  mx-12 text-xl mb-2 ">Nomor Telepon</p>
                <div class="mx-10 bg-white border">
                    <form class="">
                        <div class="relative">
                            <input
                                class="h-4  border-gray-200 w-full text-lg placeholder-gray-300 focus:z-10 p-4 py-5"
                                placeholder="Masukkan nomor telepon Anda"
                                type="text"
                            />
                        </div>
                    </form>
                </div>
                <div class="mt-12 px-8 pb-12">
                    <button
                        type="submit"
                        class="h-10 w-32 mt-12 flex items-center justify-center px-9 py-6 bg-blue-400 rounded-full mx-2"
                    >
                        <p class="py-2 text-xl font-bold text-center text-white">Simpan</p>
                    </button>
                </div>
            </blockquote>
        </div>
    )
}
export default Profil;