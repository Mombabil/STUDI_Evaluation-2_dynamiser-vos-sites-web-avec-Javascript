function choicePlayer1 (){
    let player1 = document.getElementById('select-player-1')
    let imgPlayer1 = document.getElementById('imgPlayer1')

    player1.addEventListener('change', (action1) => {
        switch(action1.target.value){
            case 'Orayon-1':
                imgPlayer1.src='images/orayon.png'
                break
            case 'Shachoca-1':
                imgPlayer1.src='images/shachoca.png'
                break
            case 'Hakoou-1':
                imgPlayer1.src='images/hakoou.png'
                break
            case 'Vengorogo-1':
                imgPlayer1.src='images/vengorogo.png'
                break
            case 'Mombabil-1':
                imgPlayer1.src='images/mombabil.png'
                break
            case 'Flote-1':
                imgPlayer1.src='images/flote.png'
                break
            case 'Aamog-1':
                imgPlayer1.src='images/aamog.png'
                break
        }
        if(action1.target.value !== ''){
            player1.disabled = true
        }
        lifeBar1()
    })
}
function choicePlayer2 (){
    let player2 = document.getElementById('select-player-2')
    let imgPlayer2 = document.getElementById('imgPlayer2')

    player2.addEventListener('change', (action2) => {
        switch(action2.target.value){
            case 'Orayon-2':
                imgPlayer2.src='images/orayon.png'
                break
            case 'Shachoca-2':
                imgPlayer2.src='images/shachoca.png'
                break
            case 'Hakoou-2':
                imgPlayer2.src='images/hakoou.png'
                break
            case 'Vengorogo-2':
                imgPlayer2.src='images/vengorogo.png'
                break
            case 'Mombabil-2':
                imgPlayer2.src='images/mombabil.png'
                break
            case 'Flote-2':
                imgPlayer2.src='images/flote.png'
                break
            case 'Aamog-2':
                imgPlayer2.src='images/aamog.png'
                break
        }
        if(action2.target.value !== ''){
            player2.disabled = true
        }
        lifeBar2()
    })
}
function lifeBar1 (){
    let canvasP1 = document.getElementById('lifePlayer1')
    let ctxP1

    if(canvasP1.getContext){
        ctxP1 = canvasP1.getContext('2d')
    }else{
        alert('Votre navigateur est trop ancien et ne peut pas afficher le code Javascript, merci de mettre a jour votre navigateur')
    }
    ctxP1.fillStyle = 'green'
    ctxP1.fillRect(0,0, 440, 43)


}
function lifeBar2(){
    let canvasP2 = document.getElementById('lifePlayer2')
    let ctxP2

    if(canvasP2.getContext){
        ctxP2 = canvasP2.getContext('2d')
    }else{
        alert('Votre navigateur est trop ancien et ne peut pas afficher le code Javascript, merci de mettre a jour votre navigateur')
    }
    ctxP2.fillStyle = 'green'
    ctxP2.fillRect(0,0, 440, 43)
}
function loadPlayer1(){
    let load = document.getElementById('loadPlayer1')
    let de = document.getElementById('de')
    let loadEnnemy = document.getElementById('loadPlayer2')
    let attackEnnemy = document.getElementById('attackPlayer2')

    loadEnnemy.disabled = true
    attackEnnemy.disabled = true

    load.addEventListener('click', (action) =>{
        let random = Math.floor(Math.random() * (6 - 0)) +1 
        switch(random){
            case 1:
                de.src='images/de1.jpg'
                break
            case 2:
                de.src='images/de2.jpg'
                break
            case 3:
                de.src='images/de3.jpg'
                break
            case 4:
                de.src='images/de4.jpg'
                break
            case 5:
                de.src='images/de5.jpg'
                break
            case 6:
                de.src='images/de6.jpg'
                break
        }
    })
}
function loadPlayer2(){
    let load = document.getElementById('loadPlayer2')
    let de = document.getElementById('de')
    let loadEnnemy = document.getElementById('loadPlayer1')
    let attackEnnemy = document.getElementById('attackPlayer1')

    loadEnnemy.disabled = true
    attackEnnemy.disabled = true

    load.addEventListener('click', (action) =>{
        let random = Math.floor(Math.random() * (6 - 0)) +1 
        switch(random){
            case 1:
                de.src='images/de1.jpg'
                break
            case 2:
                de.src='images/de2.jpg'
                break
            case 3:
                de.src='images/de3.jpg'
                break
            case 4:
                de.src='images/de4.jpg'
                break
            case 5:
                de.src='images/de5.jpg'
                break
            case 6:
                de.src='images/de6.jpg'
                break
        }
    })
}

//Si le joueur n'a pas initialisé la partie, en selectionnant les deux joueurs, un message d'erreur apparait
function error(){
    alert('Vous devez d\'abord choisir les joueurs avant de lancer les dés')
}
choicePlayer1()
choicePlayer2()
loadPlayer2()
