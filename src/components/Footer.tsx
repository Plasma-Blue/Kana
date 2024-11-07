import React from 'react';
import { Github } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

export function Footer({ isDarkMode }: Props) {
  return (
    <footer className={`text-center mt-8 ${
      isDarkMode ? 'text-gray-400' : 'text-gray-600'
    } space-y-2`}>
      <p className="text-sm">
        Made with <span className="text-red-500">♥</span> by{' '}
        <a 
          href="https://cursor.sh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-600 transition-colors"
        >
          Cursor
        </a>
      </p>
      <p className="text-sm">
        <a 
          href="https://github.com/your-username/your-repo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-600 transition-colors inline-flex items-center gap-1 justify-center"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </p>
    </footer>
  );
} 