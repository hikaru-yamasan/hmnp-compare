import { preloadObject } from '../preload';

declare global {
  interface Window {
    api: typeof preloadObject;
  }
}
