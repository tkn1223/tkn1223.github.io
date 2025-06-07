function activateGallery() {
    // クラスの定義
    let currentClass = "current";

    let thumbnails = document.querySelectorAll(".gallery-thumbs img");
    let mainImage = document.querySelector(".gallery-photo img");

    // 更新される画像情報
    let gelleryInfo = document.querySelector("#gallery-info");
    let title       = gelleryInfo.querySelector(".title");
    let description = gelleryInfo.querySelector(".description");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            let newImageSrc = thumbnail.dataset.largeVersion;
            // クリックされたサムネイル画像をメイン画像に設定
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", thumbnail.getAttribute("alt"));

            // 選択された画像（オレンジ枠）を変更する
            document.querySelector(`.${currentClass}`).classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            // 画像の情報を更新する
            title.innerHTML       = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}