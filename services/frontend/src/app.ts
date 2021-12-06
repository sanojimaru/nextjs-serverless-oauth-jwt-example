interface App {
  log: () => void;
  test: () => void;
}

declare global {
  interface Window {
    app: App;
  }
}

const app: App = {
  log: () => console.log('debug'),
  test: () => console.log('test'),
};

window.app = app;
export default app;
