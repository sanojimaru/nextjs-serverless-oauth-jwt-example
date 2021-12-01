interface App {
    log: void;
}

global.window.App = {
    log: console.log('debgu'),
};
export default App;
