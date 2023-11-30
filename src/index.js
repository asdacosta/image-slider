import './style.css';
import './imgs/bg.mp4';

const importAllImages = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();

const selectElements = (function () {
  const firstImgAtLoadContainer = document.querySelector('.slide1');
  const secondImgAtLoadContainer = document.querySelector('.slide2');
  const thirdImgAtLoadContainer = document.querySelector('.slide3');

  return { firstImgAtLoadContainer, secondImgAtLoadContainer, thirdImgAtLoadContainer };
})();

const nextSwitches = (function () {
  function changeFirstDivToNextClass(imgDivClass) {
    switch (imgDivClass) {
      case 'slide1':
        selectElements.firstImgAtLoadContainer.classList.replace('slide1', 'slide3');
        break;
      case 'slide2':
        selectElements.firstImgAtLoadContainer.classList.replace('slide2', 'slide1');
        break;
      case 'slide3':
        selectElements.firstImgAtLoadContainer.classList.replace('slide3', 'slide2');
        break;
      default:
        console.log("Can't find class :/");
    }
  }

  function changeSecondDivToNextClass(imgDivClass) {
    switch (imgDivClass) {
      case 'slide1':
        selectElements.secondImgAtLoadContainer.classList.replace('slide1', 'slide3');
        break;
      case 'slide2':
        selectElements.secondImgAtLoadContainer.classList.replace('slide2', 'slide1');
        break;
      case 'slide3':
        selectElements.secondImgAtLoadContainer.classList.replace('slide3', 'slide2');
        break;
      default:
        console.log("Can't find class :/");
    }
  }

  function changeThirdDivToNextClass(imgDivClass) {
    switch (imgDivClass) {
      case 'slide1':
        selectElements.thirdImgAtLoadContainer.classList.replace('slide1', 'slide3');
        break;
      case 'slide2':
        selectElements.thirdImgAtLoadContainer.classList.replace('slide2', 'slide1');
        break;
      case 'slide3':
        selectElements.thirdImgAtLoadContainer.classList.replace('slide3', 'slide2');
        break;
      default:
        console.log("Can't find class :/");
    }
  }

  return {
    changeFirstDivToNextClass,
    changeSecondDivToNextClass,
    changeThirdDivToNextClass,
  };
})();

const next = (function () {
  const moveToNext = (function () {
    const nextIcon = document.querySelector('.right');

    nextIcon.addEventListener('click', () => {
      const firstImgDivClass = selectElements.firstImgAtLoadContainer.className;
      const secondImgDivClass = selectElements.secondImgAtLoadContainer.className;
      const thirdImgDivClass = selectElements.thirdImgAtLoadContainer.className;

      nextSwitches.changeFirstDivToNextClass(firstImgDivClass);
      nextSwitches.changeSecondDivToNextClass(secondImgDivClass);
      nextSwitches.changeThirdDivToNextClass(thirdImgDivClass);
    });
  })();
})();

const prevSwitches = (function () {
  function changeFirstDivToPrevClass(imgDivClass) {
    switch (imgDivClass) {
      case 'slide1':
        selectElements.firstImgAtLoadContainer.classList.replace('slide1', 'slide2');
        break;
      case 'slide2':
        selectElements.firstImgAtLoadContainer.classList.replace('slide2', 'slide3');
        break;
      case 'slide3':
        selectElements.firstImgAtLoadContainer.classList.replace('slide3', 'slide1');
        break;
      default:
        console.log("Can't find class :/");
    }
  }

  function changeSecondDivToPrevClass(imgDivClass) {
    switch (imgDivClass) {
      case 'slide1':
        selectElements.secondImgAtLoadContainer.classList.replace('slide1', 'slide2');
        break;
      case 'slide2':
        selectElements.secondImgAtLoadContainer.classList.replace('slide2', 'slide3');
        break;
      case 'slide3':
        selectElements.secondImgAtLoadContainer.classList.replace('slide3', 'slide1');
        break;
      default:
        console.log("Can't find class :/");
    }
  }

  function changeThirdDivToPrevClass(imgDivClass) {
    switch (imgDivClass) {
      case 'slide1':
        selectElements.thirdImgAtLoadContainer.classList.replace('slide1', 'slide2');
        break;
      case 'slide2':
        selectElements.thirdImgAtLoadContainer.classList.replace('slide2', 'slide3');
        break;
      case 'slide3':
        selectElements.thirdImgAtLoadContainer.classList.replace('slide3', 'slide1');
        break;
      default:
        console.log("Can't find class :/");
    }
  }

  return {
    changeFirstDivToPrevClass,
    changeSecondDivToPrevClass,
    changeThirdDivToPrevClass,
  };
})();
