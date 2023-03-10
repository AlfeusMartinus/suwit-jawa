function getpilihanComputer () {
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getRules (comp , player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar (){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if ((new Date().getTime() - waktuMulai) > 1000 ) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', gambar[i++] + '.png');
        if (i == gambar.length) {
            i = 0; 
        }
        console.log();
    },100);
}


const utkGambar = document.querySelectorAll('li img');

let win = 1;
let lose = 1;

utkGambar.forEach(function(take){
    take.addEventListener('click', function() {
        const pilihanKomputer = getpilihanComputer();
        const pilihanPlayer = take.className;
        const hasil = getRules(pilihanKomputer, pilihanPlayer);
        
        putar();
        
        setTimeout(function(){
            const areaKomputer = document.querySelector('.img-komputer');
            areaKomputer.setAttribute('src', pilihanKomputer + '.png');
    
            const tHasil = document.querySelector('.info');
            tHasil.innerHTML = hasil;
            const skorComp = document.querySelector('.skorComp');
			const skorPlayer = document.querySelector('.skorPlayer');
            if(hasil == 'MENANG!'){
				skorPlayer.innerHTML = win++;
			}
			if(hasil == 'KALAH!'){
				skorComp.innerHTML = lose++;	
			}
        }, 1000);

    });
})



