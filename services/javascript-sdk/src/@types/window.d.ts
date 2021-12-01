import App from '../app'

declare global {
  interface Window {
    App: App;
  }
}
