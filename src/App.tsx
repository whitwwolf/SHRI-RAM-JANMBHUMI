/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Flipbook from './components/Flipbook';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Optional: Try to auto-play, though browsers usually block it without user interaction
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-orange-50/50 flex flex-col py-6 px-4 sm:px-6 lg:px-8 relative">
      
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="https://archive.org/download/om-namah-shivaya/Om%20Namah%20Shivaya.mp3" type="audio/mpeg" />
      </audio>
      
      <button 
        onClick={toggleAudio}
        className="fixed top-6 right-6 z-50 bg-orange-100 p-3 rounded-full shadow-lg text-orange-800 hover:bg-orange-200 transition-colors"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Header */}
      <div className="w-full max-w-5xl mx-auto text-center mb-6 pt-4 border-b-2 border-orange-200/60 pb-6">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-orange-800 uppercase tracking-wider">
          DES's JS Kothari Business School Mumbai
        </h2>
        <div className="flex items-center justify-center gap-4 my-3">
          <div className="h-[1px] w-16 bg-orange-400"></div>
          <p className="text-lg md:text-xl font-medium text-orange-600">
            Indian Knowledge System (IKS) Day 2026
          </p>
          <div className="h-[1px] w-16 bg-orange-400"></div>
        </div>
        <p className="text-sm text-orange-700/80 italic">
          Celebrating India's Ancient Wisdom and Cultural Heritage
        </p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <Flipbook />
        
        <div className="mt-6 text-center text-orange-800/60 text-sm">
          <p>Drag the corners or click the edges to turn pages.</p>
        </div>
      </div>
    </div>
  );
}

