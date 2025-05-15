// memunculkan bahwa javascript itu jalan
console.log("javascript is running");

// fungsi validasi form
function validasiForm() {
  // ambil DOM Input di Form
  const nameinput = document.getElementById("name-input");
  const email = document.getElementById("email");
  const destination = document.getElementById("destination");
  const form = document.getElementById("orderform");

  // if/else kondisi form
  if (
    nameinput.value === "" ||
    email.value === "" ||
    destination.value === ""
  ) {
    alert("inputan anda kosong");
  } else {
    alert("Thanks for Your order");
    form.reset();
  }
}

const listBanner = document.getElementsByClassName("banner-img");
let indexBanner = 0;
processBanner();

// fungsi next banner
function nextBanner() {
  indexBanner += 1;
  processBanner();
}

// Fungsi process banner
function processBanner() {
  console.log(listBanner);

  if (indexBanner >= listBanner.length) {
    indexBanner = 0;
  }

  // hide AllBanner
  for (let index = 0; index < listBanner.length; index++) {
    listBanner[index].style.display = "none";
  }

  // memanggil show banner
  showBanner(indexBanner);
}

// fungsi show banner
function showBanner(index) {
  listBanner[index].style.display = "block";
}

// Atur waktu next image
setInterval(nextBanner, 3000);
