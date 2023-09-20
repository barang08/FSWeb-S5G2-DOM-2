import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });
// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click", function (e) {
    alert("Bana tıkladın!")
});

const anaSayfaItem = document.querySelector("nav a");
anaSayfaItem.addEventListener("click", function (event) {
    anaSayfaItem.style.color = "red"
})

/* document.querySelector("img").addEventListener("mouseover", function (e) {
    e.target.style.border = "8px solid orange"
})

document.querySelector("img").addEventListener("mouseout", function (e) {
    e.target.style.border = "none"
}) */

document.querySelector(".main-navigation").addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "purple";
});

document.querySelector(".main-navigation").addEventListener("mouseout", function (e) {
    e.target.style.backgroundColor = "transparent";
});

document.querySelector(".logo-heading").addEventListener("click", function (e) {
    e.target.style.color = "red"
})





document.querySelector(".form").addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "gold";
    e.target.style.display = "inline";
});


document.querySelector(".form").addEventListener("mouseout", function (e) {
    e.target.style.backgroundColor = "transparent"
})

window.addEventListener("load", function (e) {
    console.log("Yükleme Tamamlandı!")
})

const imgs = document.querySelectorAll("img")

imgs.forEach((img) => {
    img.addEventListener("mouseover", function (e) {
        img.style.border = "8px solid orange"
    })
    img.addEventListener("mouseout", function (e) {
        img.style.border = "none"
    })

    img.addEventListener("wheel", function (e) {
        e.target.style.transform = "rotate(45deg)"
    })
    img.addEventListener("wheel", function (e) {
        e.target.style.transform = "rotate(45deg)"
    })


})

document.addEventListener("keydown", function (e) {
    if (e.type === "keydown" && e.key === "Enter") {
        document.querySelector("body").style.backgroundColor = "pink"

    }
})

window.addEventListener("scroll", function (e) {
    console.log("Sayfa scroll edildi.")
})





