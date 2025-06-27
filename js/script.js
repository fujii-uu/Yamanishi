document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainPhoto = document.getElementById("main-photo");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
      // メイン画像を切り替え
      const newSrc = this.getAttribute("data-large");
      mainPhoto.src = newSrc;

      // active クラスの切り替え
      thumbnails.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      contents[index].classList.add('active');
    });
  });
});

