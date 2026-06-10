function showPage(pageId){

    document.querySelector("header").style.display = "none";

    const pages =
    document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
    .getElementById(pageId)
    .classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function showHome(){

    const pages =
    document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.querySelector("header").style.display="flex";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function hubungiKami(){

    window.open(
    "https://wa.me/6289616818833",
    "_blank");

}

document.addEventListener("DOMContentLoaded",()=>{

const form =
document.getElementById("formReservasi");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const nama =
document.getElementById("nama").value;

const telepon =
document.getElementById("telepon").value;

const tanggal =
document.getElementById("tanggal").value;

const jumlah =
document.getElementById("jumlah").value;

const paket =
document.getElementById("paketPilihan").value;

const pembayaran =
document.querySelector(
'input[name="payment"]:checked'
).value;

const pesan =
`Halo, saya ingin reservasi Wisata Petik Melon.

Nama : ${nama}
No HP : ${telepon}
Tanggal : ${tanggal}
Jumlah Pengunjung : ${jumlah}
Paket : ${paket}
Pembayaran : ${pembayaran}`;

window.open(
`https://wa.me/6289616818833?text=${encodeURIComponent(pesan)}`,
"_blank"
);

});

});