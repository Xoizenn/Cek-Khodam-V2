document.getElementById('nicknameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nicknameInput = document.getElementById('nickname').value;
    const nickname = generateNickname(nicknameInput);

    document.getElementById('nicknameForm').style.display = 'none'; // menyembunyikan form

    document.getElementById('result').innerHTML = `
    <div>Selamat! <span id="result-name">${nicknameInput}</span> Khodam mu adalah:</div>
    <div id="selected-nickname">${nickname}</div>
    <div id="share-message">Khodam mu Keren! Screenshot dan berikan ke Teman-teman kamu.</div>
    <button style="margin-top: 20px;" onclick="window.location.reload();">Ulangi ⟳</button>`;

    
});

function generateNickname(name) {
    const Khodam = ["Titit Bengkok", "KingKong Bokong Kecil", "Bokong Licin",
     "Kambing Kepala Tuyul", "Sapi Autis Birahi", "Jaran Autis", "Boboiboy Sperma",
      "Kudanil Autis", "Kucing Ngaceng", "Kontol Jaran Ngaceng", "Babi Kontol Njepat",
       "Titit Licin", "Singo Stres Autis", "Dulet Silit", "Silit Sapi", "Skincare Silit",
        "Parfum Silit", "Deodorant Silit", "Bawok Lower", "Memek Asin", "Jaran Manuk Dowo",
         "Sempak Tipak Tai", "Sempak Melar 100cm", "Bokong Gudiken", "Jaran Ngentot",
        "Boyo Ndlogok", "Wedhos Lonte", "Kucing Lonte", "Lonte Selangkangan Ireng",
         "Manok Tugel", "Dokter Sunat Malpraktek", "Lonte Sipilis", "Raja Turok", "Penjahat Kelamin",
        "Maling Dildo", "Raja Kontol Ireng", "Memek Harum", "Gajah Silit Harum", "Kambing Rabies",
    "Bolongan Silit Ganda", "Lonte Autis", "Bolongan Bawok Ganda", "Jembut Dowo", "Jaran Rebonding Jembot",
    "Sapi Makan Jembut", "Genderuwo Kontole Dowo", "Jembot Kepang", "Turok Gedi", "Babi Iclik Rabies", "Singo Ngukrik2 Silit", "Tuyul Coli", "Genderuwo Jembuten"];
    const randomKhodam = Khodam[Math.floor(Math.random() * Khodam.length)];

    return `${randomKhodam}` + '✨';
}
