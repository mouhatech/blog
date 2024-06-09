document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');

    // Ajouter les photos ici
    const photos = [
        'soft.jpg',
        'soft1.jpg',
        'tech0.jpg',
        'tech2.jpg',
        'soft2.jpg',
        'tech1.jpg',
        'tech3.jpg',
        'tech4.jpg',
        'tech5.jpg',
        'tech6.jpg',
        'tech7.jpg',
        'tech8.jpg',
        'tech9.jpg',
        'tech10.jpg',
        
        // Ajoutez autant de photos que nécessaire
    ];

    photos.forEach(function(photo) {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = 'Photo professionnelle';
        img.classList.add('photo');
        gallery.appendChild(img);
    });
});
