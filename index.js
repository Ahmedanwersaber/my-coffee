let menu=document.querySelector('#menu-bars');
let header=document.querySelector('header');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');

}
window.onscroll= ()=>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

// animated

var typed = new Typed('.typing-text',{
    strings : ['front end developer ','web designer','web developer'],
    loop: true,
    typeSpeed:150
});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "zzxxccvn223@gmail.com",
        Password : "ahmedanwer",
        To : 'zzxxccvn223@gmail.com',
        From :document.getElementById("email").value,
        Subject : "new contact from your portfolio",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
