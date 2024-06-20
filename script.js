    function changeImage() {
        // Changer l'image de 'image1.jpg' à 'image2.jpg'
        document.getElementById('random-image').src = './img/Youlose.jpg';

        // Lire l'audio pendant les 6.9 secondes d'attente
        const audio = document.getElementById('audio-element');
        audio.play();

        // Arrêter le programme et actualiser la page après 6.9 secondes ou 2 secondes
        setTimeout(function() {
            location.reload();
        }, 
        6900);
        // 2000);
    }

    function startImageChange() {
        // Définir un temps aléatoire (entre 1 et 10 secondes par exemple)
        // const randomTime = Math.random() * 1000 + 500; // entre 1000ms (1s) et 500ms (0.5s)
        const randomTime = Math.random() * 30000 + 5000; // entre 5000ms (5s) et 30000ms (30s)

        // Programmer le changement d'image
        setTimeout(changeImage, randomTime);
    }

    // Commencer le cycle de changement d'image
    startImageChange();