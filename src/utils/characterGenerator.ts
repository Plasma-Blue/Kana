const hiragana = [
  'あ', 'い', 'う', 'え', 'お',
  'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ',
  'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の',
  'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も',
  'や', 'ゆ', 'よ',
  'ら', 'り', 'る', 'れ', 'ろ',
  'わ', 'を', 'ん'
];

const katakana = [
  'ア', 'イ', 'ウ', 'エ', 'オ',
  'カ', 'キ', 'ク', 'ケ', 'コ',
  'サ', 'シ', 'ス', 'セ', 'ソ',
  'タ', 'チ', 'ツ', 'テ', 'ト',
  'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
  'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
  'マ', 'ミ', 'ム', 'メ', 'モ',
  'ヤ', 'ユ', 'ヨ',
  'ラ', 'リ', 'ル', 'レ', 'ロ',
  'ワ', 'ヲ', 'ン'
];

const romajiMap: { [key: string]: string } = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'wo', 'ん': 'n',
  'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
  'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
  'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
  'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
  'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
  'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
  'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
  'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
  'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
  'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n'
};

export const dakuon = [
  'が', 'ぎ', 'ぐ', 'げ', 'ご',
  'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
  'だ', 'ぢ', 'づ', 'で', 'ど',
  'ば', 'び', 'ぶ', 'べ', 'ぼ',
  'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
  'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
  'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
  'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
  'バ', 'ビ', 'ブ', 'ベ', 'ボ',
  'パ', 'ピ', 'プ', 'ペ', 'ポ'
];

export const youon = [
  'きょ', 'しょ', 'ちょ', 'にょ', 'ひょ', 'みょ', 'りょ',
  'きゅ', 'しゅ', 'ちゅ', 'にゅ', 'ひゅ', 'みゅ', 'りゅ',
  'きゃ', 'しゃ', 'ちゃ', 'にゃ', 'ひゃ', 'みゃ', 'りゃ',
  'キョ', 'ショ', 'チョ', 'ニョ', 'ヒョ', 'ミョ', 'リョ',
  'キュ', 'シュ', 'チュ', 'ニュ', 'ヒュ', 'ミュ', 'リュ',
  'キャ', 'シャ', 'チャ', 'ニャ', 'ヒャ', 'ミャ', 'リャ'
];

const additionalRomaji: { [key: string]: string } = {
  'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
  'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
  'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
  'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
  'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
  'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
  'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
  'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
  'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
  'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
  'きょ': 'kyo', 'しょ': 'sho', 'ちょ': 'cho', 'にょ': 'nyo', 'ひょ': 'hyo', 'みょ': 'myo', 'りょ': 'ryo',
  'きゅ': 'kyu', 'しゅ': 'shu', 'ちゅ': 'chu', 'にゅ': 'nyu', 'ひゅ': 'hyu', 'みゅ': 'myu', 'りゅ': 'ryu',
  'きゃ': 'kya', 'しゃ': 'sha', 'ちゃ': 'cha', 'にゃ': 'nya', 'ひゃ': 'hya', 'みゃ': 'mya', 'りゃ': 'rya',
  'ギョ': 'kyo', 'ジョ': 'sho', 'ヂョ': 'cho', 'ビョ': 'nyo', 'ピョ': 'myo',
  'ギュ': 'kyu', 'ジュ': 'shu', 'ヂュ': 'chu', 'ビュ': 'nyu', 'ピュ': 'myu',
  'ギャ': 'kya', 'ジャ': 'sha', 'ヂャ': 'cha', 'ビャ': 'nya', 'ピャ': 'mya'
};

Object.assign(romajiMap, additionalRomaji);

// 添加辅助函数来检查是否为拗音组合
export function isYouonPair(char1: string, char2: string): boolean {
  const smallYouon = ['ょ', 'ゅ', 'ゃ', 'ョ', 'ュ', 'ャ'];
  const validFirst = ['き', 'し', 'ち', 'に', 'ひ', 'み', 'り',
                     'キ', 'シ', 'チ', 'ニ', 'ヒ', 'ミ', 'リ',
                     'ぎ', 'じ', 'ぢ', 'び', 'ぴ',
                     'ギ', 'ジ', 'ヂ', 'ビ', 'ピ'];
  
  return validFirst.includes(char1) && smallYouon.includes(char2);
}

// 修改 generateCharacters 函数来处理拗音
export function generateCharacters(settings: Settings): string {
  let availableChars: string[] = [];
  
  if (settings.hiragana) {
    availableChars = availableChars.concat(hiragana);
    if (settings.dakuon) availableChars = availableChars.concat(hiragana_dakuon);
    if (settings.youon) availableChars = availableChars.concat(hiragana_youon);
  }
  
  if (settings.katakana) {
    availableChars = availableChars.concat(katakana);
    if (settings.dakuon) availableChars = availableChars.concat(katakana_dakuon);
    if (settings.youon) availableChars = availableChars.concat(katakana_youon);
  }
  
  // 如果没有选择任何选项，默认使用平假名
  if (availableChars.length === 0) {
    availableChars = hiragana;
  }

  // 使用 Fisher-Yates 洗牌算法打乱数组
  const shuffled = [...availableChars];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // 取前 n 个字符（n = settings.count）并拼接
  const count = Math.min(settings.count, shuffled.length);
  return shuffled.slice(0, count).join('');
}

// 确保所有拗音组合都有正确的罗马音映射
const youonRomaji: { [key: string]: string } = {
  'きょ': 'kyo', 'しょ': 'sho', 'ちょ': 'cho', 'にょ': 'nyo', 'ひょ': 'hyo', 'みょ': 'myo', 'りょ': 'ryo',
  'きゅ': 'kyu', 'しゅ': 'shu', 'ちゅ': 'chu', 'にゅ': 'nyu', 'ひゅ': 'hyu', 'みゅ': 'myu', 'りゅ': 'ryu',
  'きゃ': 'kya', 'しゃ': 'sha', 'ちゃ': 'cha', 'にゃ': 'nya', 'ひゃ': 'hya', 'みゃ': 'mya', 'りゃ': 'rya',
  'ぎょ': 'gyo', 'じょ': 'jo', 'ぢょ': 'jo', 'びょ': 'byo', 'ぴょ': 'pyo',
  'ぎゅ': 'gyu', 'じゅ': 'ju', 'ぢゅ': 'ju', 'びゅ': 'byu', 'ぴゅ': 'pyu',
  'ぎゃ': 'gya', 'じゃ': 'ja', 'ぢゃ': 'ja', 'びゃ': 'bya', 'ぴゃ': 'pya',
  // 片假名拗音
  'キョ': 'kyo', 'ショ': 'sho', 'チョ': 'cho', 'ニョ': 'nyo', 'ヒョ': 'hyo', 'ミョ': 'myo', 'リョ': 'ryo',
  'キュ': 'kyu', 'シュ': 'shu', 'チュ': 'chu', 'ニュ': 'nyu', 'ヒュ': 'hyu', 'ミュ': 'myu', 'リュ': 'ryu',
  'キャ': 'kya', 'シャ': 'sha', 'チャ': 'cha', 'ニャ': 'nya', 'ヒャ': 'hya', 'ミャ': 'mya', 'リャ': 'rya',
  'ギョ': 'gyo', 'ジョ': 'jo', 'ヂョ': 'jo', 'ビョ': 'byo', 'ピョ': 'pyo',
  'ギュ': 'gyu', 'ジュ': 'ju', 'ヂュ': 'ju', 'ビュ': 'byu', 'ピュ': 'pyu',
  'ギャ': 'gya', 'ジャ': 'ja', 'ヂャ': 'ja', 'ビャ': 'bya', 'ピャ': 'pya'
};

Object.assign(romajiMap, youonRomaji);

// 添加辅助函数来检查是否为拗音的第二个字符
export function isYouonSecondChar(char: string): boolean {
  const smallYouon = ['ょ', 'ゅ', 'ゃ', 'ョ', 'ュ', 'ャ'];
  return smallYouon.includes(char);
}

// 修改 getRomaji 函数
export function getRomaji(text: string): string {
  // 如果是拗音的第二个字符，返回空字符串
  if (text.length === 1 && isYouonSecondChar(text)) {
    return '';
  }
  return romajiMap[text] || text;
}

// 分离平假名和片假名的浊音和拗音
const hiragana_dakuon = [
  'が', 'ぎ', 'ぐ', 'げ', 'ご',
  'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
  'だ', 'ぢ', 'づ', 'で', 'ど',
  'ば', 'び', 'ぶ', 'べ', 'ぼ',
  'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'
];

const katakana_dakuon = [
  'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
  'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
  'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
  'バ', 'ビ', 'ブ', 'ベ', 'ボ',
  'パ', 'ピ', 'プ', 'ペ', 'ポ'
];

const hiragana_youon = [
  'きょ', 'しょ', 'ちょ', 'にょ', 'ひょ', 'みょ', 'りょ',
  'きゅ', 'しゅ', 'ちゅ', 'にゅ', 'ひゅ', 'みゅ', 'りゅ',
  'きゃ', 'しゃ', 'ちゃ', 'にゃ', 'ひゃ', 'みゃ', 'りゃ',
  'ぎょ', 'じょ', 'ぢょ', 'びょ', 'ぴょ',
  'ぎゅ', 'じゅ', 'ぢゅ', 'びゅ', 'ぴゅ',
  'ぎゃ', 'じゃ', 'ぢゃ', 'びゃ', 'ぴゃ'
];

const katakana_youon = [
  'キョ', 'ショ', 'チョ', 'ニョ', 'ヒョ', 'ミョ', 'リョ',
  'キュ', 'シュ', 'チュ', 'ニュ', 'ヒュ', 'ミュ', 'リュ',
  'キャ', 'シャ', 'チャ', 'ニャ', 'ヒャ', 'ミャ', 'リャ',
  'ギョ', 'ジョ', 'ヂョ', 'ビョ', 'ピョ',
  'ギュ', 'ジュ', 'ヂュ', 'ビュ', 'ピュ',
  'ギャ', 'ジャ', 'ヂャ', 'ビャ', 'ピャ'
];