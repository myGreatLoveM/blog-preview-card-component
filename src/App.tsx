import articleImage from './images/illustration-article.svg'
import avatarImage from './images/image-avatar.webp'

function App() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-yellow-400'>
      <section className='relative group'>
        <div className='relative bg-white p-4 rounded-2xl border border-black flex flex-col gap-4 max-w-[365px] z-20'>
          <img src={articleImage} alt='img' className='rounded-md' />
          <div className='bg-yellow-400 text-black rounded px-3 py-1 text-sm w-fit font-bold'>
            Learning
          </div>
          <p className='text-sm font-semibold text-gray-700'>
            Published 24 Dec 2023
          </p>
          <h2 className='hover:text-yellow-400 text-2xl font-bold cursor-pointer transition-colors'>
            HTML & CSS foundations
          </h2>
          <p className='text-gray-400 '>
            These languages are the backgbon of every website, defining
            structure, content, and presentation
          </p>
          <div className='flex items-center gap-4'>
            <img src={avatarImage} alt='avatar' className='w-8 h-8' />
            <p className='font-semibold text-sm'>Greg Hooper</p>
          </div>
        </div>

        <div className='absolute bg-black h-full w-full rounded-2xl top-2 left-2 z-10 group-hover:top-[14px] group-hover:left-[12px] transition-all'/>
      </section>
    </main>
  )
}

export default App
