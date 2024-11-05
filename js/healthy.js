const tips = [
    "Minum air minimal 1 liter per hari.",
    "Tidur cukup selama 7-8 jam setiap malam.",
    "Jangan melewatkan sarapan.",
    "Konsumsi lebih banyak buah dan sayuran.",
    "Lakukan olahraga ringan setiap hari.",
    "Kurangi konsumsi gula berlebih.",
    "Periksa kesehatan secara rutin.",
    "Hindari begadang secara berlebihan.",
    "Pilih camilan sehat seperti kacang atau buah.",
    "Jaga postur tubuh yang baik saat duduk.",
    "Kurangi stres dengan meditasi.",
    "Hindari makanan berlemak sebelum tidur.",
    "Sarapan dengan protein tinggi.",
    "Minum teh hijau sebagai antioksidan.",
    "Gunakan tangga daripada lift.",
    "Hindari merokok dan alkohol.",
    "Konsumsi makanan tinggi serat.",
    "Perbanyak berjalan kaki.",
    "Kontrol porsi makan Anda.",
    "Minum air sebelum makan.",
    "Hindari makanan olahan.",
    "Jangan makan terlalu larut malam.",
    "Jangan bekerja terlalu keras tanpa istirahat.",
    "Lakukan peregangan setiap beberapa jam.",
    "Pilih minyak sehat seperti minyak zaitun.",
    "Hindari minuman manis.",
    "Cuci tangan sebelum makan.",
    "Makan malam ringan untuk tidur nyenyak.",
    "Kurangi konsumsi daging merah.",
    "Tetap terhidrasi saat berolahraga."
];

let tipIndex = 0;
function updateTip() {
    const marquee = document.getElementById('health-tips');
    marquee.textContent = tips[tipIndex];
    tipIndex = (tipIndex + 1) % tips.length;
}
setInterval(updateTip, 12 * 60 * 60 * 1000);
updateTip();

const profileSection = document.getElementById('profile-section');
const profilePic = document.getElementById('profile-pic');

profilePic.addEventListener('click', () => {
    profileSection.style.display = 'block';
});

function closeProfile() {
    profileSection.style.display = 'none';
}

// Grafik exp
const expValue = 1500; // exp ini bisa diperbarui sesuai perolehan user
const canvas = document.getElementById('exp-chart');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0, canvas.height - 50); 
ctx.lineTo(canvas.width, 50); 
ctx.strokeStyle = '#56ab2f';
ctx.lineWidth = 4;
ctx.stroke();
ctx.font = "16px Arial";
ctx.fillText(expValue, canvas.width - 50, 45); // print exp value
