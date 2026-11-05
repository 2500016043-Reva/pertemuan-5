// Membuat Input Angka 1 dan Angka 2
let inputAngka1 = document.createElement("input");
inputAngka1.type = "number";
inputAngka1.placeholder = "Angka pertama";

let inputAngka2 = document.createElement("input");
inputAngka2.type = "number";
inputAngka2.placeholder = "Angka kedua";

// Membuat Tombol Operasi (+, -, *, /)
let btnTambah = document.createElement("button");
btnTambah.textContent = "+";

let btnKurang = document.createElement("button");
btnKurang.textContent = "-";

let btnKali = document.createElement("button");
btnKali.textContent = "*";

let btnBagi = document.createElement("button");
btnBagi.textContent = "/";

// Membuat Elemen Tempat Menampilkan Hasil
let elemenHasil = document.createElement("h3");
elemenHasil.textContent = "Hasil: -";

// Menambahkan Event Listener (Fungsi Hitung) pada Tombol
btnTambah.onclick = function () {
  let num1 = parseFloat(inputAngka1.value);
  let num2 = parseFloat(inputAngka2.value);
  elemenHasil.textContent = "Hasil: " + (num1 + num2);
};

btnKurang.onclick = function () {
  let num1 = parseFloat(inputAngka1.value);
  let num2 = parseFloat(inputAngka2.value);
  elemenHasil.textContent = "Hasil: " + (num1 - num2);
};

btnKali.onclick = function () {
  let num1 = parseFloat(inputAngka1.value);
  let num2 = parseFloat(inputAngka2.value);
  elemenHasil.textContent = "Hasil: " + num1 * num2;
};

btnBagi.onclick = function () {
  let num1 = parseFloat(inputAngka1.value);
  let num2 = parseFloat(inputAngka2.value);

  // Cek agar tidak membagi dengan angka 0
  if (num2 === 0) {
    elemenHasil.textContent = "Hasil: Tidak bisa dibagi 0!";
  } else {
    elemenHasil.textContent = "Hasil: " + num1 / num2;
  }
};

// Menambahkan Elemen ke HTML
let outputDiv = document.getElementById("outputkalkulator");
outputDiv.appendChild(inputAngka1);
outputDiv.appendChild(inputAngka2);
outputDiv.appendChild(document.createElement("br"));
outputDiv.appendChild(btnTambah);
outputDiv.appendChild(btnKurang);
outputDiv.appendChild(btnKali);
outputDiv.appendChild(btnBagi);
outputDiv.appendChild(elemenHasil);

document.body.style.backgroundColor = "pink";
