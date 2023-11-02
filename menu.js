window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('scrolling',window.scrollY > 0)
})