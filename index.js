function play_nhac() {
  var music = document.getElementById("music")
  var play = document.getElementById("play_nhac")

  play.onclick = function () {
    if (music.paused) {
      music.play();
      play.src = "anh/OGNoel-removebg-preview.png"
    } else {
      music.pause();
      play.src = "anh/OGNoel-removebg-preview.png"
    }
  }
};
play_nhac();

function chuyen() {
  document.addEventListener("DOMContentLoaded", function () {
    var playNhac = document.getElementById("toa");
    var play = document.querySelector(".play");
    var container = document.querySelector(".container");

    playNhac.onclick = function () {
      setTimeout(function () {

        play.style.display = "none";
        container.style.display = "block";
      }, 1000);
    };
  });
};
chuyen();


function text() {
  const textToDisplay = "Chúc bà 1 mùa giáng sinh an lành, \n Pha chút hạnh phúc, \n luôn nở nụ cười, và những điều tuyệt vời nhất \n Giáng sinh vui vẻ!";
  const textContainer = document.getElementById("text_1");
  const delayBetweenCharacters = 100; // Thời gian giữa mỗi ký tự (100ms)
  const initialDelay = 2000;
  let lineIndex = 0;
  let charIndex = 0;

  function displayText() {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        textContainer.innerHTML += currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(displayText, delayBetweenCharacters);
      } else {
        // Khi kết thúc một dòng, tạo một dòng mới
        textContainer.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(displayText, delayBetweenCharacters); // Thời gian giữa các dòng
      }
    }
  }

  const lines = textToDisplay.split('\n'); // Tách văn bản thành các dòng

  const toa = document.getElementById("toa");
  toa.addEventListener("click", function () {
    setTimeout(displayText, initialDelay);
    // Gọi hàm để hiển thị văn bản khi phần tử "toa" được click
  });
}
text();




const snowflakeCount = 100;

    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '&#10052;';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
      snowflake.style.fontSize = `${10 + Math.random() * 20}px`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(snowflake);
    }

    for (let i = 0; i < snowflakeCount; i++) {
      createSnowflake();
    }








