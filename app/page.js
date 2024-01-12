import Image from 'next/image'
import Pdfuploader from '@/components/Pdfuploader/Pdfuploader'

export default function Home() {
  return (
    <main>

      <div className="bg-sky-700 flex flex-col items-stretch pb-12">
        <header className="bg-white flex w-full items-center justify-between gap-5 pl-20 pr-8 py-9 max-md:max-w-full max-md:flex-wrap">
          <button className="text-sky-700 text-2xl font-extrabold self-start bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/9a484a50e8cf07cf71a6a4a49d198f5b46cf2305d075baa2cd4fcb7924f09778?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&')]-2000w">
            GenOne
          </button>
          <button className="text-sky-700 text-lg font-semibold self-center my-auto">
            ChatGO
          </button>
          <button className="text-sky-700 text-lg font-semibold w-[268px] mt-2 self-start">
            Saving Challenges
          </button>
          <button className="text-sky-700 text-lg font-semibold mt-2">
            Community Hub
          </button>
          <form className="border shadow-sm bg-sky-700 self-stretch flex w-[251px] shrink-0 max-w-full h-[39px] flex-col rounded-[30px]"> <button className="text-white text-lg text-center font-semibold mt-2">Translate</button></form>
        </header>

        <div className="w-full mt-36 mb-4 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a484a50e8cf07cf71a6a4a49d198f5b46cf2305d075baa2cd4fcb7924f09778?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[1.03] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-2 px-5 max-md:max-w-full max-md:mt-10">
                <div className="text-white text-7xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
                  Çiao!
                </div>
                <div className="text-white text-7xl font-bold self-stretch mt-9 max-md:max-w-full max-md:text-4xl">
                  Empower Your Financial Journey, Regardless of Language Barriers
                </div>
                <div className="text-white text-3xl font-semibold self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                  Translate Your Financial Documents with Precision and Ease
                </div>
                <Pdfuploader />
              </div>
            </div>
          </div>
        </div>
      </div >

    </main >

  )
}
