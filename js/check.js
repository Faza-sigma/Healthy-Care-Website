document.getElementById('check-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    var bmi = weight / ((height/100)**2).toFixed(2);
    if (bmi <= 18.5) {
        hasil = "kekurangan berat badan";
    }else if (bmi > 18.5 && bmi <= 24.9) {
        hasil = "normal";
    }else if (bmi > 24.9 && bmi <= 29.9) {
        hasil = "kelebihan berat badan";
    }else {
        hasil = "obesitas";
    }
    document.getElementById('result').textContent = `Skor BMI kamu adalah ${bmi.toFixed(2)} dan kamu ${hasil}`;
});

