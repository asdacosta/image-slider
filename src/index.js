import './style.css';
import './imgs/bg.mp4';

const importAllImages = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();
