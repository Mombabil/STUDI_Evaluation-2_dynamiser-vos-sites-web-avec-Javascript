//choix des joueurs, en selectionnant un joueur, la barre de vie de chaques joueurs s'initialise a 100
function choicePlayer(){
    // choix joueur 1
    let player1 = document.getElementById('select-player-1')
    let imgPlayer1 = document.getElementById('imgPlayer1')

    //On choisi le joueur et on affiche son stuff, une fois le choix fait, 
    //la liste devient disabled et le joueur ne peut plus changer de personnage
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
    // choix joueur 2
    let player2 = document.getElementById('select-player-2')
    let imgPlayer2 = document.getElementById('imgPlayer2')

    //On choisi le joueur et on affiche son stuff, une fois le choix fait, 
    //la liste devient disabled et le joueur ne peut plus changer de personnage
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
//Lorsque l'utilisateur a choisi son joueur, la barre de vie de son personnage se remplit a 100%
//barre de vie joueur 1
function lifeBar1(){
    let life = document.getElementById('lifePlayer1')
    life.value = 100
}
function lifeBar2(){
    let life = document.getElementById('lifePlayer2')
    life.value = 100
}

//Le dé change de face lorsque l'on clique sur charger et la valeur augmente tant que le dé ne vaut pas 1
//Si le dé vaut 1, on change de joueur
//Si le joueur clique sur attaquer, le cumul de ses lancé est déduit des points de vie de l'adversaire
function loadPlayer(){
    let load1 = document.getElementById('loadPlayer1')
    let attack1 = document.getElementById('attackPlayer1')
    let de = document.getElementById('de')
    let load2 = document.getElementById('loadPlayer2')
    let attack2 = document.getElementById('attackPlayer2')
    let puissance1 = document.getElementById('puissance1')
    let puissance2 = document.getElementById('puissance2')
    let count = 0

    let imgPlayer1 = document.getElementById('imgPlayer1')
    let imgPlayer2 = document.getElementById('imgPlayer2')


    load2.disabled = true
    attack2.disabled = true

    //ACTIONS SUR LES BOUTONS CHARGER
    // lancement du dé joueur 1
    load1.addEventListener('click', (action) =>{
        
        //on envoie une alerte si aucun joueur n'est selectionné
        let player1 = document.getElementById('select-player-1')
        if(player1.value ===''){
            alert('Selectionner d\'abord un joueur')
            return
        }
        //comme le joueur un attaque en premier, il faut mettre l'alerte pour les 2 joueurs
        let player2 = document.getElementById('select-player-2')
        if(player2.value ===''){
            alert('Selectionner d\'abord un joueur')
            return
        }

        let random = Math.floor(Math.random() * (6 - 0)) +1 
        //selon le resultat, on affiche la face du dé correspondant
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
        count = count + random
        //on incrémente les valeurs de chaques clics sur le bouton CHARGER et on les affichent
        if(random === 1){
            count = 0
            load1.disabled = true
            attack1.disabled = true
            load2.disabled = false
            attack2.disabled = false
            random = 0

        }
        puissance1.innerText = count
    })
    // lancement du dé joueur 2
    load2.addEventListener('click', (action) =>{

        //on envoie une alerte si aucun joueur n'est selectionné
        let player2 = document.getElementById('select-player-2')
        if(player2.value ===''){
            alert('Selectionner d\'abord un joueur')
            return
        }

        let random = Math.floor(Math.random() * (6 - 0)) +1 
        //selon le resultat, on affiche la face du dé correspondant
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
        count = count + random
        //on incrémente les valeurs de chaques clics sur le bouton CHARGER et on les affichent
        if(random === 1){
            count = 0
            load2.disabled = true
            attack2.disabled = true
            load1.disabled = false
            attack1.disabled = false

        }
        puissance2.innerText = count
    })

    //ACTIONS SUR LES BOUTON ATTAQUER
    //attaque du joueur 1
    let remainingLifeP2 = 100
    attack1.addEventListener('click', (action) =>{

        //on envoie une alerte si aucun joueur n'est selectionné
        let player1 = document.getElementById('select-player-1')
        if(player1.value ===''){
            alert('Selectionner d\'abord un joueur')
            return
        }
        //comme le joueur un attaque en premier, il faut mettre l'alerte pour les 2 joueurs
        let player2 = document.getElementById('select-player-2')
        if(player2.value ===''){
            alert('Selectionner d\'abord un joueur')
            return
        }

        let life = document.getElementById('lifePlayer2')
        remainingLifeP2 = remainingLifeP2 - puissance1.innerText
        life.value = remainingLifeP2
        puissance1.innerText = 0
        count = 0
        load2.disabled = false
        attack2.disabled = false
        load1.disabled = true
        attack1.disabled = true

    })
    //attaque du joueur 2
    let remainingLifeP1 = 100
    attack2.addEventListener('click', (action) =>{

        //on envoie une alerte si aucun joueur n'est selectionné
        let player2 = document.getElementById('select-player-2')
        if(player2.value ===''){
            alert('Selectionner d\'abord un joueur')
            return
        }

        let life = document.getElementById('lifePlayer1')
        remainingLifeP1 = remainingLifeP1 - puissance2.innerText
        life.value = remainingLifeP1
        puissance2.innerText = 0
        count = 0
        load1.disabled = false
        attack1.disabled = false
        load2.disabled = true
        attack2.disabled = true

    })
}

choicePlayer()
loadPlayer()

