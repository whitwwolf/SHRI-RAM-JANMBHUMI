import HTMLFlipBook from 'react-pageflip';
import { Page } from './Page';
import { BookContent } from '../data/content';
import { motion } from 'motion/react';

export default function Flipbook() {
  return (
    <div className="flex justify-center items-center w-full max-w-5xl mx-auto flex-1 py-4">
      {/* @ts-ignore - react-pageflip types are slightly outdated for React 18+ */}
      <HTMLFlipBook
        width={450}
        height={600}
        size="stretch"
        minWidth={315}
        maxWidth={500}
        minHeight={400}
        maxHeight={700}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        usePortrait={true}
        drawShadow={true}
        autoCenter={true}
        className="flipbook-container shadow-2xl mx-auto"
        style={{ margin: '0 auto' }}
      >
        {BookContent.map((page, index) => (
          <Page
            key={index}
            number={index}
            isCover={page.isCover}
            isBackCover={page.isBackCover}
          >
            {page.isCover ? (
              <div className="flex flex-col items-center justify-center h-full text-center border-[12px] border-orange-500 bg-white p-6 rounded-lg relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] mix-blend-multiply"></div>
                
                {/* Decorative Corners */}
                <div className="absolute top-3 left-3 w-16 h-16 border-t-4 border-l-4 border-orange-600 rounded-tl-2xl"></div>
                <div className="absolute top-3 right-3 w-16 h-16 border-t-4 border-r-4 border-orange-600 rounded-tr-2xl"></div>
                <div className="absolute bottom-3 left-3 w-16 h-16 border-b-4 border-l-4 border-orange-600 rounded-bl-2xl"></div>
                <div className="absolute bottom-3 right-3 w-16 h-16 border-b-4 border-r-4 border-orange-600 rounded-br-2xl"></div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="z-10 flex flex-col items-center"
                >
                  <div className="mb-6 text-orange-500">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15 8H21L16 12.5L18 19L12 15.5L6 19L8 12.5L3 8H9L12 2Z" />
                    </svg>
                  </div>
                  <p className="text-orange-700 text-sm font-bold tracking-widest uppercase mb-6 drop-shadow-sm">
                    {page.topText}
                  </p>
                  <h1 className="text-5xl font-serif font-extrabold mb-4 text-red-700 drop-shadow-md leading-tight">
                    {page.title}
                  </h1>
                  <h2 className="text-2xl font-serif text-orange-600 font-semibold mb-10 drop-shadow-sm">
                    {page.subtitle}
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
                  <div className="text-5xl text-orange-500 opacity-80">ॐ</div>
                </motion.div>
              </div>
            ) : page.isBackCover ? (
              <div className="flex flex-col items-center justify-center h-full text-center border-[12px] border-orange-500 bg-white p-6 rounded-lg relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] mix-blend-multiply"></div>
                
                {/* Decorative Corners */}
                <div className="absolute top-3 left-3 w-16 h-16 border-t-4 border-l-4 border-orange-600 rounded-tl-2xl"></div>
                <div className="absolute top-3 right-3 w-16 h-16 border-t-4 border-r-4 border-orange-600 rounded-tr-2xl"></div>
                <div className="absolute bottom-3 left-3 w-16 h-16 border-b-4 border-l-4 border-orange-600 rounded-bl-2xl"></div>
                <div className="absolute bottom-3 right-3 w-16 h-16 border-b-4 border-r-4 border-orange-600 rounded-br-2xl"></div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="z-10 flex flex-col items-center"
                >
                  <div className="text-6xl text-orange-500 opacity-80 mb-8">ॐ</div>
                  <h1 className="text-4xl font-serif font-extrabold mb-6 text-red-700 drop-shadow-md">
                    {page.title}
                  </h1>
                  <p className="text-xl font-serif text-orange-600 font-medium italic mb-12 drop-shadow-sm">
                    "{page.quote}"
                  </p>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-12"></div>
                  <p className="text-md text-red-800 font-bold drop-shadow-sm uppercase tracking-wider">
                    {(page as any).authors}
                  </p>
                </motion.div>
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-serif font-bold text-red-800 mb-1 mt-2">
                  {page.title}
                </h2>
                {page.subtitle && (
                  <h3 className="text-md font-serif text-orange-600 mb-3 font-medium italic">
                    {page.subtitle}
                  </h3>
                )}
                {page.image && (
                  <div className={`w-full flex-1 min-h-[180px] max-h-[260px] mb-4 rounded-md overflow-hidden shadow-md border-2 border-orange-200 relative ${(page as any).imageFit === 'contain' ? 'bg-white p-2' : ''}`}>
                    <img
                      src={page.image}
                      alt={page.title}
                      className={`w-full h-full animate-ken-burns ${(page as any).imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="prose prose-orange prose-sm max-w-none flex-grow overflow-y-auto pr-2">
                  <p className="text-gray-900 leading-relaxed text-justify font-serif text-[15px] font-medium">
                    {page.text}
                  </p>
                </div>
              </div>
            )}
          </Page>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
