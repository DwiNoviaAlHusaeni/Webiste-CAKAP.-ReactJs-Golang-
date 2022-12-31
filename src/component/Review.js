import React from 'react';

const Review = () => {
    return (
        <div>
            <section class="bg-gray-100">
                <div class="mx-auto max-w-screen-xl p-5 ">
                    <div class=" bg-white rounded-3xl">
                        <h2 class="font-bold text-4xl flex justify-center p-5 text-black">Apa Kata temanmu tentang CAKAP?</h2>
                        <div class="grid grid-cols-2 p-5 pb-14">
                        <img
                alt="Edit"
                src="https://multisite.bandung.go.id/kelurahan-isola/wp-content/uploads/sites/79/2021/04/Villa-Isola-Bandung.jpg"
                class="mx-auto rounded-3xl w-96 h-96 object-cover "
              />
              <div class="py-10 pr-5 self-center">
                        <p class=" text-2xl font-bold pb-2 mx-5 text-black">
                            Keren aku jadi tahu banyak tentang kampus dan sekarang aku sudah 
                            masuk UPI karena rekomendasi dari Aplikasi CAKAP pokonya keren banget
                            dah Aplikasi CAKAP
                        </p>
                        <p class=" text-xl font-bold py-2 mx-5 text-black">
                            Rudi Oktaviansyah
                        </p>
                        <p class=" text-xl font-bold pt-2 mx-5 text-cyan-500">
                            Mahasiswa
                        </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default Review;