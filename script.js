/*==================================
TOKO BESI SUKSES BAJA V4
==================================*/


// ================================
// SEARCH PRODUK
// ================================

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function(){

    const keyword = this.value.toLowerCase();

    cards.forEach(card=>{

        const produk = card.dataset.produk.toLowerCase();

        if(produk.includes(keyword)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});



// ================================
// TANYAKAN PRODUK
// ================================

const nomorWA="6282110851293";

document.querySelectorAll(".btn-tanya").forEach(button=>{

button.addEventListener("click",function(){

const card=this.closest(".card");

const produk=card.dataset.produk;

const pesan=`Halo Admin 👋

Saya ingin bertanya mengenai produk:

📦 ${produk}

Mohon informasi:

• Harga terbaru
• Stok tersedia
• Ukuran yang tersedia

Terima kasih 🙏`;

const url="https://wa.me/"+nomorWA+"?text="+encodeURIComponent(pesan);

window.open(url,"_blank");

});

});



// ================================
// HEADER SCROLL
// ================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="#084726";

header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

header.style.background="#0B5D32";

header.style.boxShadow="none";

}

});
/*==================================
BACK TO TOP
==================================*/

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});

if(backTop){

    backTop.addEventListener("click",(e)=>{

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*==================================
ANIMASI SCROLL
==================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card,.item,.galeri-item").forEach(el=>{

    observer.observe(el);

});


/*==================================
LIGHTBOX GALERI
==================================*/

// Membuat lightbox otomatis

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
<span class="close-lightbox">&times;</span>
<img class="lightbox-img">
`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector(".lightbox-img");

document.querySelectorAll(".galeri-item img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click",(e)=>{

    if(

        e.target===lightbox ||

        e.target.classList.contains("close-lightbox")

    ){

        lightbox.style.display="none";

    }

});


/*==================================
LOADING SELESAI
==================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

console.log("TOKO BESI V4 READY 🚀");
/*==================================
MENU MOBILE
==================================*/

// Membuat tombol menu otomatis

const menuButton = document.createElement("div");

menuButton.className = "menu-toggle";

menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';

document.querySelector("header .container").appendChild(menuButton);

const nav = document.querySelector("nav");

menuButton.addEventListener("click",()=>{

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuButton.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        menuButton.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});


/*==================================
TUTUP MENU SAAT KLIK
==================================*/

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuButton.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});


/*==================================
SLIDER HERO
==================================*/

const heroImage=document.querySelector(".hero-img");

const heroImages=[

"img/banner.jpg",
"img/galeri1.jpg",
"img/galeri2.jpg",
"img/galeri3.jpg",
"img/galeri4.jpg"

];

let heroIndex=0;

setInterval(()=>{

heroIndex++;

if(heroIndex>=heroImages.length){

heroIndex=0;

}

heroImage.style.opacity="0";

setTimeout(()=>{

heroImage.src=heroImages[heroIndex];

heroImage.style.opacity="1";

},300);

},5000);


/*==================================
EFEK HOVER CARD
==================================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});


/*==================================
COPYRIGHT TAHUN OTOMATIS
==================================*/

const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML="© "+new Date().getFullYear()+" TOKO BESI SUKSES BAJA • All Rights Reserved.";

}


/*==================================
WEBSITE READY
==================================*/

console.log("TOKO BESI SUKSES BAJA V4 FINAL 🚀");

/*================ POPUP RESMI =================*/
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("officialPopup");
    if (!popup) return;
    const today = new Date().toDateString();
    if (localStorage.getItem("officialPopup") !== today) {
        document.body.style.overflow = "hidden";
        popup.classList.add("show");
        setTimeout(closeOfficialPopup, 5000);
    }
});
