import React, { useState, useEffect, useRef } from 'react';

interface Props {
  isRunning: boolean;
  startTime: number | null;
  isDarkMode: boolean;
  elapsedTime?: number;
  shouldReset?: boolean;
  averageTime?: number;
  characterCount?: number;
}

// 添加表情配置对象
const SPEED_EMOJIS = {
  superFast: ['🚀', '😆'],     // < 100ms
  fast: ['😊', '⭐️'],          // < 200ms
  normal: ['👍', '🙂'],        // < 500ms
  slow: ['😅', '🐢'],          // < 1000ms
  verySlow: ['😩', '⏰']       // >= 1000ms
};

// 随机选择表情的辅助函数
const getRandomEmoji = (emojis: string[]) => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

export function Timer({ isRunning, startTime, isDarkMode, elapsedTime = 0, shouldReset = false, averageTime = 0, characterCount = 1 }: Props) {
  const [time, setTime] = useState(elapsedTime);
  const [emoji, setEmoji] = useState<string>('');
  const [showEmoji, setShowEmoji] = useState(false);
  const timeoutRef = useRef<number>();

  const msPerChar = (averageTime * 1000) / characterCount;

  useEffect(() => {
    let intervalId: number;

    if (isRunning && startTime) {
      intervalId = window.setInterval(() => {
        const currentTime = (Date.now() - startTime) / 1000;
        setTime(currentTime);
      }, 10);
    } else if (!isRunning && startTime) {
      const finalTime = (Date.now() - startTime) / 1000;
      setTime(finalTime);
      
      // 清除之前的定时器
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // 根据每字符耗时随机选择表情
      const msPerChar = (finalTime * 1000) / characterCount;
      let selectedEmoji;
      if (msPerChar < 100) {
        selectedEmoji = getRandomEmoji(SPEED_EMOJIS.superFast);
      } else if (msPerChar < 200) {
        selectedEmoji = getRandomEmoji(SPEED_EMOJIS.fast);
      } else if (msPerChar < 400) {
        selectedEmoji = getRandomEmoji(SPEED_EMOJIS.normal);
      } else if (msPerChar < 800) {
        selectedEmoji = getRandomEmoji(SPEED_EMOJIS.slow);
      } else {
        selectedEmoji = getRandomEmoji(SPEED_EMOJIS.verySlow);
      }
      setEmoji(selectedEmoji);
      setShowEmoji(true);
      
      // 设置新的定时器
      timeoutRef.current = window.setTimeout(() => {
        setShowEmoji(false);
      }, 500);
    }

    if (shouldReset) {
      setTime(0);
      // 不要在重置时立即隐藏表情，让它自然消失
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, startTime, shouldReset, characterCount]);

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-6">
      {/* 主时间显示和统计信息在同一行 */}
      <div className="flex justify-between items-center">
        <div className={`text-sm font-mono ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          avg: {averageTime.toFixed(2)} s
        </div>

        <div className={`text-2xl font-mono ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        } relative min-h-[2rem] flex items-center`}>
          {time.toFixed(2)} s
          {/* 始终保持 emoji 容器存在，只改变其可见性 */}
          <span className={`absolute left-full ml-2 transition-opacity duration-300 ${
            showEmoji ? 'opacity-100 animate-bounce' : 'opacity-0'
          }`}>
            {emoji}
          </span>
        </div>

        <div className={`text-sm font-mono ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        } ${msPerChar < 200 ? 'text-green-500' : msPerChar > 500 ? 'text-yellow-500' : ''}`}>
          {msPerChar.toFixed(0)} ms/char
        </div>
      </div>
    </div>
  );
}