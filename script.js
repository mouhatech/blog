function downloadCV() {
    
        
        var url = "CV_MMB.pdf";

        
        var link = document.createElement("a");
        link.href = url;
        link.download = "CV_MMB.pdf";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }



function showProjects() {
    var url = "projet.html";
    
    window.open(url, "_blank");
}