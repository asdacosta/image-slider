import './style.css';
import './imgs/bg.mp4';

const importAllImages = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();

const getContainers = (function () {
  const firstImgAtLoadContainer = document.querySelector('.slide1');
  const secondImgAtLoadContainer = document.querySelector('.slide2');
  const thirdImgAtLoadContainer = document.querySelector('.slide3');

  return { firstImgAtLoadContainer, secondImgAtLoadContainer, thirdImgAtLoadContainer };
})();

const nextImgLogic = (function () {
  const nextSwitches = (function () {
    function changeFirstDivToNextClass(imgDivClass) {
      switch (imgDivClass) {
        case 'slide1':
          getContainers.firstImgAtLoadContainer.classList.replace('slide1', 'slide3');
          break;
        case 'slide2':
          getContainers.firstImgAtLoadContainer.classList.replace('slide2', 'slide1');
          break;
        case 'slide3':
          getContainers.firstImgAtLoadContainer.classList.replace('slide3', 'slide2');
          break;
        default:
          console.log("Can't find class :/");
      }
    }

    function changeSecondDivToNextClass(imgDivClass) {
      switch (imgDivClass) {
        case 'slide1':
          getContainers.secondImgAtLoadContainer.classList.replace('slide1', 'slide3');
          break;
        case 'slide2':
          getContainers.secondImgAtLoadContainer.classList.replace('slide2', 'slide1');
          break;
        case 'slide3':
          getContainers.secondImgAtLoadContainer.classList.replace('slide3', 'slide2');
          break;
        default:
          console.log("Can't find class :/");
      }
    }

    function changeThirdDivToNextClass(imgDivClass) {
      switch (imgDivClass) {
        case 'slide1':
          getContainers.thirdImgAtLoadContainer.classList.replace('slide1', 'slide3');
          break;
        case 'slide2':
          getContainers.thirdImgAtLoadContainer.classList.replace('slide2', 'slide1');
          break;
        case 'slide3':
          getContainers.thirdImgAtLoadContainer.classList.replace('slide3', 'slide2');
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

  const moveToNext = (function () {
    const nextIcon = document.querySelector('.right');
    nextIcon.addEventListener('click', () => {
      const firstImgDivClass = getContainers.firstImgAtLoadContainer.className;
      const secondImgDivClass = getContainers.secondImgAtLoadContainer.className;
      const thirdImgDivClass = getContainers.thirdImgAtLoadContainer.className;

      nextSwitches.changeFirstDivToNextClass(firstImgDivClass);
      nextSwitches.changeSecondDivToNextClass(secondImgDivClass);
      nextSwitches.changeThirdDivToNextClass(thirdImgDivClass);
    });
  })();
})();

const prevImgLogic = (function () {
  const prevSwitches = (function () {
    function changeFirstDivToPrevClass(imgDivClass) {
      switch (imgDivClass) {
        case 'slide1':
          getContainers.firstImgAtLoadContainer.classList.replace('slide1', 'slide2');
          break;
        case 'slide2':
          getContainers.firstImgAtLoadContainer.classList.replace('slide2', 'slide3');
          break;
        case 'slide3':
          getContainers.firstImgAtLoadContainer.classList.replace('slide3', 'slide1');
          break;
        default:
          console.log("Can't find class :/");
      }
    }

    function changeSecondDivToPrevClass(imgDivClass) {
      switch (imgDivClass) {
        case 'slide1':
          getContainers.secondImgAtLoadContainer.classList.replace('slide1', 'slide2');
          break;
        case 'slide2':
          getContainers.secondImgAtLoadContainer.classList.replace('slide2', 'slide3');
          break;
        case 'slide3':
          getContainers.secondImgAtLoadContainer.classList.replace('slide3', 'slide1');
          break;
        default:
          console.log("Can't find class :/");
      }
    }

    function changeThirdDivToPrevClass(imgDivClass) {
      switch (imgDivClass) {
        case 'slide1':
          getContainers.thirdImgAtLoadContainer.classList.replace('slide1', 'slide2');
          break;
        case 'slide2':
          getContainers.thirdImgAtLoadContainer.classList.replace('slide2', 'slide3');
          break;
        case 'slide3':
          getContainers.thirdImgAtLoadContainer.classList.replace('slide3', 'slide1');
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

  const moveToPrev = (function () {
    const prevIcon = document.querySelector('.left');
    prevIcon.addEventListener('click', () => {
      const firstImgDivClass = getContainers.firstImgAtLoadContainer.className;
      const secondImgDivClass = getContainers.secondImgAtLoadContainer.className;
      const thirdImgDivClass = getContainers.thirdImgAtLoadContainer.className;

      prevSwitches.changeFirstDivToPrevClass(firstImgDivClass);
      prevSwitches.changeSecondDivToPrevClass(secondImgDivClass);
      prevSwitches.changeThirdDivToPrevClass(thirdImgDivClass);
    });
  })();
})();
