     const foodData = {
        breakfast: [
            { name: "Telur rebus dengan sayur", image: "url('../Image/Telur.png')" },
            { name: "Oatmeal dengan buah segar", image: "url('../Image/Oatmeal.png')" },
            { name : "Roti gandum dengan alpukat", image: "url('../Image/Roti.png')"},
            { name : "Yogurt rendah lemak dengan granola", image: "url('../Image/Yogurt.png')"},
            { name : "Smoothie sayuran hijau", image: "url('../Image/Smoothie.png')"},
        ],
        lunch: [
            { name: "Nasi merah dengan ayam panggang", image: "url('../Image/Nasi.png')" },
            { name: "Salad quinoa dengan alpukat", image: "url('../Image/Salad.png')" },
            { name : "Sup tomat dengan roti gandum", image: "url('../Image/Sup.png')"},
            { name : "Ikan bakar dengan brokoli", image: "url('../Image/Ikan.png')"},
            { name : "Tahu goreng dengan nasi merah", image: "url('../Image/Tahu.png')"},
        ],
        dinner: [
            { name: "Salmon panggang dengan kentang rebus", image: "url('../Image/Salmon.png')" },
            { name: "Sup ayam dengan sayuran hijau", image: "url('../Image/Sayur.png')" },
            { name : "Tumis sayuran dengan tempe", image: "url('../Image/Tempe.png')"},
            { name : "Sate ayam dengan lontong", image: "url('../Image/Sate.png')"},
            { name : "Daging sapi panggang dengan ubi jalar", image: "url('../Image/Daging.png')"},

        ],
        snack: [
            { name: "Kacang-kacangan tanpa garam", image: "url('../Image/Kacang.png')" },
            { name: "Smoothie buah segar", image: "url('../Image/Apel.png')" },
            { name : "Popcorn tanpa mentega", image: "url('../Image/Popcorn.png')"},
            { name : "Buah-buahan segar seperti pisang dan apel", image: "url('../Image/Buah.png')"},
            { name : "Roti gandum dengan selai kacang", image: "url('../Image/Gandum.png')"},
        ]
    };


    let currentIndex = {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        snack: 0
    };

   
    function nextSlide(category) {
        currentIndex[category] = (currentIndex[category] + 1) % foodData[category].length;
        const card = document.getElementById(`${category}-card`);
        const { name, image } = foodData[category][currentIndex[category]];
        card.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}: ${name}`;
        card.style.backgroundImage = image;
    }

    document.getElementById('breakfast-card').style.backgroundImage = foodData.breakfast[0].image;
    document.getElementById('lunch-card').style.backgroundImage = foodData.lunch[0].image;
    document.getElementById('dinner-card').style.backgroundImage = foodData.dinner[0].image;
    document.getElementById('snack-card').style.backgroundImage = foodData.snack[0].image;
