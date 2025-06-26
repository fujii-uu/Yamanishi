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


document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      tabContents.forEach(content => content.classList.remove('active'));
      tabContents[index].classList.add('active');
    });
  });
});

