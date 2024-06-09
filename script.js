function downloadCV() {
    
        
        var url = "CV_MMB.pdf";

        
        var link = document.createElement("a");
        link.href = url;
        link.download = "CV_MMB.pdf";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

function showImg() {
    var password = prompt("Veuillez entrer le mot de passe :");
    if (password === "Zero_trust") {
        var url = "image.html";
        window.open(url, "_blank");
    } else {
        alert("Mot de passe incorrect. Vous n'êtes peut-être pas le bienvenu.");
    }
}

