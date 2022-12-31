import foto from './foto/NotF.png'

function NotFound1() {
    return (
      <div class="grid h-screen pt-9 bg-gray-100 place-content-center">
        <h1 class="mt-6 mb-2 text- font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Tes Bakat
        </h1>
        <div class="mt-1 mb-1 text-center">
          <img 
            src = {foto}
            width="400"
            height="440"
          />

          <h1
            class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Coming Soon
          </h1>

          <p class="mt-4 text-gray-500">This page is stil in progress.</p>
        </div>
      </div>
    )
  }
  export default NotFound1;