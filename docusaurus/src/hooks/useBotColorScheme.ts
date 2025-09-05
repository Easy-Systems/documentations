import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { applyBotColorScheme } from '../utils/colorSchemes';

export function useBotColorScheme() {
  const location = useLocation();

  useEffect(() => {
    applyBotColorScheme(location.pathname);
  }, [location.pathname]);

  return null;
}