import React from 'react';

interface Props {
  isDarkMode: boolean;
}

export function Header({ isDarkMode }: Props) {
  return (
    <header className="text-center mb-12">
      <h1 className={`text-4xl font-bold ${
        isDarkMode ? 'text-white' : 'text-indigo-900'
      } mb-2 transition-colors`}>
        Kana
      </h1>
      <p className={`${
        isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
      } transition-colors`}>
        Practice Hiragana & Katakana Recognition
      </p>
    </header>
  );
}