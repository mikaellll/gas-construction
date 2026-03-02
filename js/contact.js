// Email validation for contact page
function criteria() { 
    const form = document.getElementById('form');
    const validChars = ['.', '@', '_','-'];
    let email = document.getElementById('email').value;    
    let msg = document.getElementById('msg');
    let firstAt = email.indexOf('@');
    let lastAt = email.lastIndexOf('@');
    let lastDot = email.lastIndexOf('.');
    let firstChar = email.charAt(0);
    
    let state = true;
    
    email = email.trim().toLowerCase();
    msg.innerHTML = '';

    if(firstChar=='@' || firstChar=='.' ||firstChar=='_' || firstChar=='-' ||  !isNaN(firstChar)){
        msg.innerHTML = "Premier caractère invalide pour l'adresse email";
        state = false;
    }
    else if(email.length<8){
        msg.innerHTML = "Votre email est trop court !";
        state = false;
    }
    else if((firstAt<2) || (firstAt!=lastAt)){
        msg.innerHTML = "Erreur dans le @";
        state = false;
    }
    else if(lastDot-lastAt<3){
        msg.innerHTML = "Erreur dans le nom de domaine";
        state = false;
    }
    else if(email.length-lastDot<3){
        msg.innerHTML = "Erreur dans l'extension (.com)";
        state = false;
    }
    else {
        for(var i=0; i<email.length && state == true; i++){
       
            if((email.charCodeAt(i)>=97 && email.charCodeAt(i)<=122)){
                continue;
            }
            else if ((email.charCodeAt(i)>=48 && email.charCodeAt(i)<=57)) {
                continue;
            }
            else if (validChars.indexOf(email.charAt(i))!=-1){
                continue;
            }
            else {
                msg.innerHTML = "Veuillez utiliser des caractères valides";
                state = false;
            }
         }
    }

    if (state == true) {
        msg.innerHTML = 'Merci ! Votre demande de devis a été envoyée avec succès. <br> Nous vous recontacterons très rapidement !';
        msg.style.color = '#28a745';
        document.getElementById('email').classList.remove("invalid");
    }
    else {
        msg.style.color = '#ff0000';
        document.getElementById('email').classList.add("invalid");
    }   
}    

const form = document.getElementById('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    criteria();
});

// SEARCH
const search = document.getElementById('search');
const searchBar = document.getElementById('searchBar');

search.addEventListener('click', function (){
    searchBar.classList.toggle('show');
    searchBar.classList.toggle('hide');
});

document.addEventListener('keydown', (event) => {
    var keyName = event.key;
    if ((keyName == 'Escape' && searchBar.classList.contains('show') == true)) {
        searchBar.classList.toggle('show');
        searchBar.classList.toggle('hide');    
    }
});
