import type { NextPage } from 'next'
import useAsciiImage from 'hooks/useAsciiImage'
import ClipboardCopy from 'components/ClipboardCopy'
import Text from 'components/Text'
import Header from 'components/Header';

const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';


const Home: NextPage = () => {
  const asciiImage = useAsciiImage(density, '/gloria48.jpg')

  return (
    <>
      <Header />
      <div className='flex flex-col pt-10 md:flex-row bg-stone-800 text-white'>
        <div className='px-4 h-screen w-full md:w-1/2 space-y-4'>
          <div className='relative p-3 border-2 rounded-xl bg-stone-700 border-stone-500 flex justify-center items-center'>
            <ClipboardCopy className='text-green-400 hover:text-green-500 absolute top-3 right-3' copyText={asciiImage.join('\n')} />
            <Text ascii={asciiImage} />
          </div>
        </div>
        <div className='h-screen bg-gren-200 w-full md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit nemo veniam beatae minima doloremque magni cumque aut iure ducimus, voluptatem nesciunt, culpa inventore ab, ipsa enim unde. Nemo, earum.</div>
        {/* <div className='w-full text-xs leading-none p-6 bg-green-200'>
          <div className='grid w-auto relative bg-red-200'>
            {
              asciiImage.map((line, index) => (
                <span className='flex' key={index}>{line}</span>
              ))
            }
          </div>
        </div>
        <div className='w-full p-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam laboriosam voluptates beatae. Ut perferendis ex rerum ullam recusandae sint magni fugit. Rerum a nemo ducimus provident, libero inventore aperiam!
        </div> */}
        </div>
      </>
  )
}

export default Home
