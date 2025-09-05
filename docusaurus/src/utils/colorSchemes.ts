// Color schemes for each bot
export const botColorSchemes = {
  easythreads: {
    // Brand: EasyThreads
    primary: '#87EDED',
    primaryLight: '#aef3f3',
    primaryDark: '#4A9EDF',
    secondary: '#4A9EDF',
    accent: '#87EDED',
    gradient: 'linear-gradient(150deg, #87EDED, #4A9EDF)',
    background: 'rgba(135, 237, 237, 0.10)',
    border: 'rgba(135, 237, 237, 0.20)',
    shadow: 'rgba(135, 237, 237, 0.18)',
    name: 'EasyThreads'
  },
  easyyaudab: {
    // Brand: EasyYaudab
    primary: '#F1A6EC',
    primaryLight: '#f5bff1',
    primaryDark: '#35E4C6',
    secondary: '#35E4C6',
    accent: '#F16AEC',
    gradient: 'linear-gradient(150deg, rgb(241, 106, 236), rgb(53, 228, 198))',
    background: 'rgba(241, 166, 236, 0.10)',
    border: 'rgba(241, 166, 236, 0.20)',
    shadow: 'rgba(241, 166, 236, 0.18)',
    name: 'EasyYaudab'
  },
  easylevel: {
    // Brand: EasyLevel
    primary: '#B8E284',
    primaryLight: '#c9eaa3',
    primaryDark: '#298592',
    secondary: '#298592',
    accent: '#B8E284',
    gradient: 'linear-gradient(150deg, #B8E284, #298592)',
    background: 'rgba(184, 226, 132, 0.10)',
    border: 'rgba(184, 226, 132, 0.20)',
    shadow: 'rgba(184, 226, 132, 0.18)',
    name: 'EasyLevel'
  },
  easyvoice: {
    // Brand: EasyVoice
    primary: '#8D9AFF',
    primaryLight: '#a8b1ff',
    primaryDark: '#B281EC',
    secondary: '#8FCFFB',
    accent: '#B281EC',
    gradient: 'linear-gradient(150deg, rgb(143, 207, 251), rgb(178, 129, 236))',
    background: 'rgba(141, 154, 255, 0.10)',
    border: 'rgba(141, 154, 255, 0.20)',
    shadow: 'rgba(141, 154, 255, 0.18)',
    name: 'EasyVoice'
  },
  default: {
    primary: '#37e8ee',
    primaryLight: '#abfcff',
    primaryDark: '#5050e6',
    secondary: '#8d9aff',
    accent: '#abfcff',
    gradient: 'linear-gradient(90deg, #FFF27E, #91FBD5, #8DC8FF, #F7C7FF, #FF9595)',
    background: 'rgba(55, 232, 238, 0.08)',
    border: 'rgba(55, 232, 238, 0.16)',
    shadow: 'rgba(55, 232, 238, 0.14)',
    name: 'EasySystems'
  }
};

export type BotType = keyof typeof botColorSchemes;

export function getBotFromPath(pathname: string): BotType {
  // Normalize (strip trailing slashes)
  const p = pathname.replace(/\/$/, '');

  // Generic matcher: supports /<locale?>/docs(/category)?/<bot>(/|end|#|?)
  const match = p.match(/(?:^|\/)docs(?:\/category)?\/(easythreads|easyyaudab|easylevel|easyvoice)(?:[\/#?]|$)/);
  if (match) {
    return match[1] as BotType;
  }
  return 'default';
}

export function getBotColorScheme(pathname: string) {
  const bot = getBotFromPath(pathname);
  return botColorSchemes[bot];
}

export function applyBotColorScheme(pathname: string) {
  const scheme = getBotColorScheme(pathname);
  
  // Apply CSS custom properties
  const root = document.documentElement;
  root.style.setProperty('--bot-primary', scheme.primary);
  root.style.setProperty('--bot-primary-light', scheme.primaryLight);
  root.style.setProperty('--bot-primary-dark', scheme.primaryDark);
  root.style.setProperty('--bot-secondary', scheme.secondary);
  root.style.setProperty('--bot-accent', scheme.accent);
  root.style.setProperty('--bot-gradient', scheme.gradient);
  root.style.setProperty('--bot-background', scheme.background);
  root.style.setProperty('--bot-border', scheme.border);
  root.style.setProperty('--bot-shadow', scheme.shadow);
  root.style.setProperty('--bot-name', `"${scheme.name}"`);
  
  // Add bot class to body for additional styling
  document.body.className = document.body.className.replace(/bot-\w+/g, '');
  document.body.classList.add(`bot-${getBotFromPath(pathname)}`);
}
