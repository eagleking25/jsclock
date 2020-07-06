window.addEventListener('load', () => {
    let sec = document.querySelector('.sec-hand');
    let min = document.querySelector('.min-hand');
    let hrs = document.querySelector('.hrs-hand');
    setInterval(() => {
        const date = new Date();
        sec.style.transform = `rotate(${date.getSeconds()*360/60+90}deg)`;
        min.style.transform = `rotate(${date.getMinutes()*360/60+90}deg)`;
        hrs.style.transform = `rotate(${date.getHours()*360/12+90}deg)`;
        console.log(date.getHours());
    }, 1000);
})