const imageEle = document.querySelector(".image-container");

const btnEle = document.querySelector(".btn");

btnEle.addEventListener("click",()=>{
    imgNum = 4;
    addImages();
})

function addImages() {
    for (let index = 0; index < imgNum; index++) {
         const newImgEle = document.createElement("img");
    newImgEle.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000
    )}`;
    imageEle.appendChild(newImgEle);
    }

   
}       