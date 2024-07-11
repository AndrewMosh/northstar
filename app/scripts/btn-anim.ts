const imageElements = Array.from(document.querySelectorAll<HTMLElement>('.btn-top'));

window.addEventListener('scroll', handleScroll);

function handleScroll() {
    const scrollPosition = window.pageYOffset;
    const translateY = `-${scrollPosition * 0.15}px`;

    imageElements.forEach(element => {
        element.style.transform = `translateY(${translateY})`;
    });
}
