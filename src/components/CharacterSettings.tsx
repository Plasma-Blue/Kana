import React from 'react';

interface Settings {
  count: number;
  hiragana: boolean;
  katakana: boolean;
  dakuon: boolean;
  youon: boolean;
}

interface Props {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
  onSave: () => void;
  isDarkMode: boolean;
}

export function CharacterSettings({ settings, setSettings, onSave, isDarkMode }: Props) {
  return (
    <div>
      <h2 className={`text-xl font-semibold ${
        isDarkMode ? 'text-white' : 'text-indigo-900'
      } mb-4 transition-colors`}>
        Settings
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } mb-1 transition-colors`}>
            Character Count
          </label>
          <input
            type="number"
            min="1"
            max="50"
            value={settings.count}
            onChange={(e) => setSettings(prev => ({
              ...prev,
              count: Math.min(50, Math.max(1, parseInt(e.target.value) || 1))
            }))}
            className={`w-full px-3 py-2 border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            } rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
          />
        </div>

        <div className="space-y-2">
          <label className={`block text-sm font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } mb-2 transition-colors`}>
            Character Types
          </label>
          <div className="space-y-2">
            <label className={`flex items-center ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors`}>
              <input
                type="checkbox"
                checked={settings.hiragana}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  hiragana: e.target.checked
                }))}
                className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
              />
              Hiragana (ひらがな)
            </label>
            
            <label className={`flex items-center ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors`}>
              <input
                type="checkbox"
                checked={settings.katakana}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  katakana: e.target.checked
                }))}
                className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
              />
              Katakana (カタカナ)
            </label>

            <label className={`flex items-center ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors`}>
              <input
                type="checkbox"
                checked={settings.dakuon}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  dakuon: e.target.checked
                }))}
                className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
              />
              Dakuon (濁音: が、ざ、だ、ば、ぱ)
            </label>

            <label className={`flex items-center ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors`}>
              <input
                type="checkbox"
                checked={settings.youon}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  youon: e.target.checked
                }))}
                className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
              />
              Youon (拗音: きょ、しゃ、ちゅ)
            </label>
          </div>
        </div>

        <button
          onClick={onSave}
          className={`w-full ${
            isDarkMode 
              ? 'bg-indigo-500 hover:bg-indigo-400' 
              : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white rounded-md py-2 transition-colors mt-6`}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}