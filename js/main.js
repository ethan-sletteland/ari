toggleNav = () => {
    let nav = document.getElementsByTagName("nav")[0]
    const isVisible = nav.style.display === 'block'
    nav.style.display = (isVisible) ? 'none' : 'block'
}