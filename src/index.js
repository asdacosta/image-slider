import './style.css';
import './imgs/bg.mp4';

const importAllImages = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();

const getContainers = (function () {
  // For prevImgLogic & nextImgLogic
  const firstImgAtLoadContainer = document.querySelector('.slide1');
  const secondImgAtLoadContainer = document.querySelector('.slide2');
  const thirdImgAtLoadContainer = document.querySelector('.slide3');
  // For changeHeader
  const header = document.querySelector('h1');
  // For changeImgWithBottomCircles
  const circles = document.querySelectorAll('.circles > span');

  return {
    firstImgAtLoadContainer,
    secondImgAtLoadContainer,
    thirdImgAtLoadContainer,
    header,
    circles,
  };
})();

const changeHeader = function () {
  const currentImgClass = document.querySelector('.slide2 img').className;

  switch (currentImgClass) {
    case 'Ever':
      getContainers.header.textContent = 'Chef Ever';
      break;
    case 'Costa':
      getContainers.header.textContent = 'Chef Costa';
      break;
    case 'Silvanus':
      getContainers.header.textContent = 'Chef Silvanus';
      break;
    default:
      console.log('Ever Costa Silvanus not found');
  }
};

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

      changeHeader();
      colorSelectedCircle();
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

      changeHeader();
      colorSelectedCircle();
    });
  })();
})();

const changeImgWithBottomCircles = (function () {
  function triggerFirstCircle() {
    switch (getContainers.firstImgAtLoadContainer.className) {
      case 'slide1':
        getContainers.firstImgAtLoadContainer.classList.replace('slide1', 'slide2');
        break;
      case 'slide3':
        getContainers.firstImgAtLoadContainer.classList.replace('slide3', 'slide2');
        break;
      default:
        console.log('Already there!');
    }
    switch (getContainers.secondImgAtLoadContainer.className) {
      case 'slide2':
        getContainers.secondImgAtLoadContainer.classList.replace('slide2', 'slide3');
        break;
      case 'slide1':
        getContainers.secondImgAtLoadContainer.classList.replace('slide1', 'slide3');
        break;
    }
    switch (getContainers.thirdImgAtLoadContainer.className) {
      case 'slide2':
        getContainers.thirdImgAtLoadContainer.classList.replace('slide2', 'slide1');
        break;
      case 'slide3':
        getContainers.thirdImgAtLoadContainer.classList.replace('slide3', 'slide1');
        break;
    }
  }

  function triggerSecondCircle() {
    switch (getContainers.firstImgAtLoadContainer.className) {
      case 'slide2':
        getContainers.firstImgAtLoadContainer.classList.replace('slide2', 'slide1');
        break;
      case 'slide3':
        getContainers.firstImgAtLoadContainer.classList.replace('slide3', 'slide1');
        break;
    }
    switch (getContainers.secondImgAtLoadContainer.className) {
      case 'slide1':
        getContainers.secondImgAtLoadContainer.classList.replace('slide1', 'slide2');
        break;
      case 'slide3':
        getContainers.secondImgAtLoadContainer.classList.replace('slide3', 'slide2');
        break;
      default:
        console.log('Already there!');
    }
    switch (getContainers.thirdImgAtLoadContainer.className) {
      case 'slide2':
        getContainers.thirdImgAtLoadContainer.classList.replace('slide2', 'slide3');
        break;
      case 'slide1':
        getContainers.thirdImgAtLoadContainer.classList.replace('slide1', 'slide3');
        break;
    }
  }

  function triggerThirdCircle() {
    switch (getContainers.firstImgAtLoadContainer.className) {
      case 'slide1':
        getContainers.firstImgAtLoadContainer.classList.replace('slide1', 'slide3');
        break;
      case 'slide2':
        getContainers.firstImgAtLoadContainer.classList.replace('slide2', 'slide3');
        break;
    }
    switch (getContainers.secondImgAtLoadContainer.className) {
      case 'slide2':
        getContainers.secondImgAtLoadContainer.classList.replace('slide2', 'slide1');
        break;
      case 'slide3':
        getContainers.secondImgAtLoadContainer.classList.replace('slide3', 'slide1');
        break;
    }
    switch (getContainers.thirdImgAtLoadContainer.className) {
      case 'slide1':
        getContainers.thirdImgAtLoadContainer.classList.replace('slide1', 'slide2');
        break;
      case 'slide3':
        getContainers.thirdImgAtLoadContainer.classList.replace('slide3', 'slide2');
        break;
      default:
        console.log('Already there!');
    }
  }

  getContainers.circles.forEach((circle) => {
    circle.addEventListener('click', () => {
      if (circle.className === 'circle1') {
        triggerFirstCircle();
        colorSelectedCircle();
      } else if (circle.className === 'circle2') {
        triggerSecondCircle();
        colorSelectedCircle();
      } else if (circle.className === 'circle3') {
        triggerThirdCircle();
        colorSelectedCircle();
      }
    });
  });
})();

const colorSelectedCircle = function () {
  getContainers.circles.forEach((circle, index) => {
    circle.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';

    const slidesImgs = document.querySelectorAll('.slides img');
    slidesImgs.forEach((img) => {
      const imgContainer = img.parentElement;

      if (imgContainer.className === 'slide2') {
        if (img.className === 'Ever' && index === 0) {
          circle.style.backgroundColor = 'white';
        } else if (img.className === 'Costa' && index === 1) {
          circle.style.backgroundColor = 'white';
        } else if (img.className === 'Silvanus' && index === 2) {
          circle.style.backgroundColor = 'white';
        }
      }
    });
  });
};
