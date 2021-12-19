// selecting all required elements
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = () => { //oncle windows loaded
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i; // passing i value to newIndex variable
        let clickImageIndex;

        gallery[i].onclick = () => { // Képre kattintva megnyílik nagyban
            clickImageIndex = newIndex;
            console.log(i);
            function preview(){
                currentImg.textContent = newIndex + 1;
                let imgUrl = gallery[newIndex].querySelector("img").src; // Azt a képet nyitja meg, amire kattintunk
                previewImg.src = imgUrl; // Az adott kép(amire kattintottunk) url-jét összepárosítjuk a previewImg forrásával
            }
            // Previous and next button
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if (newIndex == 0) {
                prevBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none";
            }

            prevBtn.onclick = () => {
                newIndex--; // decrement newIndex value
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++; // increment newIndex value
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block";
                }
            }


            preview() // preview fv meghívása
            previewBox.classList.add("show");
            shadow.style.display = "block";

            closeIcon.onclick = () => { // X-re kattintva bezárul a kép
                newIndex = clickImageIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "hidden";
            }
        }
    }
}