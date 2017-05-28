$(function(){
    let b = baffle('.headline', {
        characters: '██░ ▓▓</▒ ▓<▒▓> ░▓█ ▓░▒▓▓ ▒▓░█ █/░ ░▒░▒ >█░░',
        speed: 75
    });
    b.start();
    b.reveal(3000);
});