const infoCard = document.getElementById('infoCard');
const cardImg = document.getElementById('cardImg');
const cardTitle = document.getElementById('cardTitle');
const cardDesc = document.getElementById('cardDesc');

document.querySelectorAll('.departamento').forEach(depto => {
    depto.addEventListener('mouseenter', (event) => {
        const nombre = event.target.getAttribute('data-nombre');
        const imgSrc = event.target.getAttribute('data-img');
        const descripcion = event.target.getAttribute('data-descripcion');

        cardTitle.textContent = nombre;
        cardImg.src = imgSrc;
        cardDesc.textContent = descripcion;
        infoCard.style.display = 'block';
        const instance = Popper.createPopper(event.target, infoCard, {
            placement: 'top'
        });
    });
    depto.addEventListener('mouseleave', () => {
        infoCard.style.display = 'none';
    });
});


document.getElementById('year').textContent = "©"+ new Date().getFullYear();

