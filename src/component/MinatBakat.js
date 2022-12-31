import minat from "./foto/minat.jpeg"
import bakat from "./foto/bakat.jpeg"

function MinatBakat (){
  return(
    <div>
    <section class="bg-gray-100 bg-center pt-16 pb-10">
        <div class="mx-auto max-w-screen-xl p-5 ">
          <div class="mt-5 grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-2">
          <div class=" -mr-16 ">
          <img alt="Edit" src={minat} class="mx-auto w-auto h-52 rounded-3xl object-cover "/>
          <blockquote class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5 mx-32 ">
            <p class="m-10 mt-10 font-bold text-2xl text-center">Tes Minat</p>
            <p class="text-sm font-normal text-black m-5 -mt-1 text-center">
              Tes Bakat dan Minat merupakan rangkaian tes dan analisa yg menggambarkan kemampuan kognitif, 
              karakteristik minat bakat serta kepribadian siswa terhadap suatu bidang atau jurusan tertentu.
            </p>
            <p class="text-sm font-normal text-black m-5 -mt-1 text-center">
              <i>Aptitude and Interest Tests are a series of tests and analyzes that describe cognitive abilities, 
              characteristics of interests, talents and personality of students in a particular field or department.</i>
            </p>
            <a
              class="m-9 inline-block rounded-full border border-cyan-600 bg-cyan-600 px-8 py-1 text-center text-xl font-semibold self-center text-white hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring active:text-cyan-600"
              href="/Minat_dan_Bakat/Not_Found_Minat"
            >
              Mulai
            </a>
          </blockquote>
        </div>

        <div class=" -ml-16">
          <img alt="Edit" src={bakat} class="mx-auto w-auto h-52 rounded-3xl object-cover "/>
            <blockquote class="bg-white -mt-6 flex flex-col justify-between rounded-lg pt-5 mx-32">
              <p class="m-10 mt-10 font-bold text-2xl text-center">Tes Bakat</p>
              <p class="text-sm font-normal text-black m-5 -mt-1 text-center">
                Tes Bakat dan Minat merupakan rangkaian tes dan analisa yg menggambarkan kemampuan kognitif, 
                karakteristik minat bakat serta kepribadian siswa terhadap suatu bidang atau jurusan tertentu.
              </p>
              <p class="text-sm font-normal text-black m-5 -mt-1 text-center">
                <i>Aptitude and Interest Tests are a series of tests and analyzes that describe cognitive abilities, 
                characteristics of interests, talents and personality of students in a particular field or department.</i>
              </p>
              <a
                class="m-9 inline-block rounded-full border border-cyan-600 bg-cyan-600 px-8 py-1 text-center text-xl font-semibold self-center text-white hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring active:text-cyan-600"
                href="/Minat_dan_Bakat/Not_Found_Bakat"
              >
                Mulai
              </a>
            </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default MinatBakat;