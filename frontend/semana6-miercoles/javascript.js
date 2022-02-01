function changeAttr() {
    this.style.color = this.dataset.color;
    this.textContent = this.dataset.text;
}

const buttones = document.querySelectorAll('button');

buttones.forEach((x) => {
    x.onclick = changeAttr;
});