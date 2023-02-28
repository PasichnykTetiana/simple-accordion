let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling
        if (panel && panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else if (panel) {
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    });
}