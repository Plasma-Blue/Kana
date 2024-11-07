import React, { useState, useRef, useEffect } from 'react';
import { Play, Square, Settings, AlignCenter, Sun, Moon, RefreshCcw } from 'lucide-react';
import { CharacterSettings } from './components/CharacterSettings';
import { Timer } from './components/Timer';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { generateCharacters, getRomaji, isYouonPair } from './utils/characterGenerator';
import { Footer } from './components/Footer';

function App() {
  const [characters, setCharacters] = useState('');
  const [showRomaji, setShowRomaji] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [settings, setSettings] = useState({
    count: 5,
    hiragana: true,
    katakana: false,
    dakuon: false,
    youon: false
  });
  const startTime = useRef<number | null>(null);
  const [showRefresh, setShowRefresh] = useState(false);
  const [times, setTimes] = useState<number[]>([]);
  const [averageTime, setAverageTime] = useState(0);
  const [isFirstStart, setIsFirstStart] = useState(true);

  useEffect(() => {
    generateNew();
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleStart = () => {
    startTime.current = Date.now();
    setIsRunning(true);
    setShowRomaji(false);
    setIsFirstStart(false);
  };

  const handleStop = () => {
    if (startTime.current) {
      const currentTime = (Date.now() - startTime.current) / 1000;
      const newTimes = [...times, currentTime];
      setTimes(newTimes);
      const newAverage = newTimes.reduce((a, b) => a + b, 0) / newTimes.length;
      setAverageTime(newAverage);
    }
    setIsRunning(false);
    setShowRefresh(true);
  };

  const generateNew = () => {
    setCharacters(generateCharacters(settings));
    setShowRefresh(false);
    if (!isFirstStart) {
      startTime.current = Date.now();
      setIsRunning(true);
      setShowRomaji(false);
    }
  };

  const toggleRomaji = () => {
    setShowRomaji(!showRomaji);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const characterArray = characters.split('');
  const romajiArray = new Array(characterArray.length).fill('');

  for (let i = 0; i < characterArray.length - 1; i++) {
    if (isYouonPair(characterArray[i], characterArray[i + 1])) {
      const romaji = getRomaji(characterArray[i] + characterArray[i + 1]);
      romajiArray[i] = romaji;
      romajiArray[i + 1] = romaji;
      i++;
    }
  }

  for (let i = 0; i < characterArray.length; i++) {
    if (romajiArray[i] === '') {
      romajiArray[i] = getRomaji(characterArray[i]);
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-100 to-purple-100'
    } p-6`}>
      <div className="max-w-2xl mx-auto">
        <Header isDarkMode={isDarkMode} />

        <div className={`${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-2xl shadow-xl p-8 mb-8 transition-colors duration-200`}>
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowSettings(true)}
              className={`${
                isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'
              } transition-colors`}
              title="Settings"
            >
              <Settings className="w-6 h-6" />
            </button>
            <button
              onClick={toggleTheme}
              className={`${
                isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-indigo-600 hover:text-indigo-800'
              } transition-colors`}
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          <div className="text-center">
            <div className="h-[180px] flex flex-col justify-center relative">
              <div className="flex justify-center flex-wrap gap-x-4 gap-y-8">
                {characterArray.map((char, index) => {
                  const isYouonFirst = index < characterArray.length - 1 && 
                    isYouonPair(characterArray[index], characterArray[index + 1]);
                  const isYouonSecond = index > 0 && 
                    isYouonPair(characterArray[index - 1], characterArray[index]);
                  
                  return (
                    <div key={index} className="relative w-8">
                      {showRomaji && romajiArray[index] && (
                        <div className={`absolute -top-6 ${
                          isYouonFirst ? 'left-0 right-[-3rem]' :
                          isYouonSecond ? 'left-[-3rem] right-0' :
                          'left-0 right-0'
                        } text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        } font-mono ${
                          isYouonSecond ? 'opacity-0' : ''
                        }`}>
                          {romajiArray[index]}
                        </div>
                      )}
                      <div className={`text-4xl ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      } font-japanese`}>
                        {char}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              {isFirstStart ? (
                <button
                  onClick={handleStart}
                  className={`${
                    isDarkMode ? 'bg-indigo-500 hover:bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white rounded-full p-4 transition-colors`}
                  title="Start"
                >
                  <Play className="w-6 h-6" />
                </button>
              ) : (
                <button
                  onClick={isRunning ? handleStop : generateNew}
                  className={`${
                    isDarkMode ? 'bg-indigo-500 hover:bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white rounded-full p-4 transition-colors`}
                  title={isRunning ? "Stop" : "Refresh"}
                >
                  {isRunning ? (
                    <Square className="w-6 h-6" />
                  ) : (
                    <RefreshCcw className="w-6 h-6" />
                  )}
                </button>
              )}
              <button
                onClick={toggleRomaji}
                className={`${
                  isDarkMode ? 'bg-indigo-500 hover:bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white rounded-full p-4 transition-colors`}
                title="Show/Hide Romaji"
              >
                <AlignCenter className="w-6 h-6" />
              </button>
            </div>

            <Timer 
              isRunning={isRunning} 
              startTime={startTime.current} 
              isDarkMode={isDarkMode}
              shouldReset={showRefresh === false && !isRunning}
              averageTime={averageTime}
              characterCount={settings.count}
            />
          </div>
        </div>

        <Modal isOpen={showSettings} onClose={() => setShowSettings(false)} isDarkMode={isDarkMode}>
          <CharacterSettings
            settings={settings}
            setSettings={setSettings}
            onSave={() => {
              setShowSettings(false);
              generateNew();
            }}
            isDarkMode={isDarkMode}
          />
        </Modal>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;