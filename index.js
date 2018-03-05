var dispDiv = document.getElementById("display"),
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgSrc = null,
    stInp = document.getElementById("stickerUrl"),
    stC = document.getElementById("cursor"),
    stH = 100,
    stickerH = document.getElementById("stickerHeight");
    
    

document.getElementById("bgcolor").addEventListener("change", function(){
    dispDiv.style.backgroundColor = this.value;
});

st1.addEventListener("click", function(){
    imgSrc = this.src;
    stC.src = imgSrc;
});

st2.addEventListener("click", function(){
    imgSrc = this.src;
    stC.src = imgSrc;
});

dispDiv.addEventListener("click", function(ev){
    var newImg = document.createElement("img");
    newImg.src = imgSrc;
    newImg.className = "displayStickers";
    dispDiv.appendChild(newImg);
    newImg.style.left = ev.pageX+"px";
    newImg.style.top = ev.pageY+"px";
    newImg.style.height = stH + "px";
});

stInp.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        var newSticker = document.createElement("img");
        newSticker.src = stInp.value;
        newSticker.className = "stickers";
        document.getElementById("stickers").appendChild(newSticker);
        stInp.value = "";
        newSticker.addEventListener("click", function(){
            imgSrc = this.src;
            stC.src= imgSrc;
        })
    }
});

dispDiv.addEventListener("mousemove", function(ev){
    stC.style.top = ev.pageY+"px";
    stC.style.left = ev.pageX+"px";
});

stickerH.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        stH = stickerH.value;
        stickerH.value = "";
    }
});