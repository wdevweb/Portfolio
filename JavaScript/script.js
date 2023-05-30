//-------------------  -CLICOU NA LINHA
let linha = document.querySelector('#linha')
function clinha(){
    let zero = 0
    while(zero == 0){
        window.alert('Clicou! :)')
        zero ++
    }
    zero --
}

//------------------------- MUDAR REDE SOCIAL
let tits = document.getElementById('titsocial')

function mudarlinkedin(){
  let fundo = document.getElementById('card-p')
  let inf = document.getElementById('inf')
  let visita = document.getElementById('visitar')

  fundo.style.background = '#0275b4'
  fundo.style.transitionDuration = '2s'
  titsocial.innerHTML = 'LinkedIn'
  inf.innerHTML = 'William Barbosa'
  visita.style.opacity = 1
}

function mudarhome(){
  let fundo = document.getElementById('card-p')
  let inf = document.getElementById('inf')
  let visita = document.getElementById('visitar')

  fundo.style.background = '#8C7C6D'
  fundo.style.transitionDuration = '2s'
  titsocial.innerHTML = 'Contato'
  inf.innerHTML = 'wdevweb23@gmail.com <br> (32)998875518 <br> <img src="imagens/emailinc.png" alt="emailincone" id="i1"  class="igeral"> <img src="imagens/whatsappinc.png" alt="whatsappincone" id="i2" class="igeral"> <img src="imagens/telegraminc.png" alt="telegramincone" id="i3" class="igeral">'
  visita.style.opacity = 0
}

function mudargithub(){
  let fundo = document.getElementById('card-p')
  let inf = document.getElementById('inf')
  let visita = document.getElementById('visitar')

  fundo.style.background = 'black'
  fundo.style.transitionDuration = '2s'
  titsocial.innerHTML = 'GitHub'
  inf.innerHTML = 'wdevweb'
  visita.style.opacity = 1
}


function tirou(){
  let visita = document.getElementById('visitar')


  visita.style.opacity = 0
}


//----------------------  ANIMAÇÃO BOM DIA
function car(){
    var dia = document.getElementById('dia')
    var data = new Date()
    var hora = data.getHours()
    if((hora > 0 && hora < 6) || hora == 0){
        dia.innerHTML = 'Olá, Boa madrugada!'
    }else if((hora > 6 && hora < 12) || hora == 6){
        dia.innerHTML = 'Olá, Bom dia!'
    }else if((hora > 12 && hora < 18) || hora == 12){
        dia.innerHTML = 'Olá, Boa tarde!'
    }else if((hora > 18 && hora < 23) || hora == 23 || hora == 18){
        dia.innerHTML = 'Olá, Boa noite!'
    }
}

//-------------------- ANIMAÇÃO BOTÕES HABIILIDADES
function phtml(){
    var html = document.getElementById('psobre')

    html.innerHTML = '<h2>HTML5</h2><p>É uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.</p>'
}
function lhtml(){
    var html = document.getElementById('psobre')

    html.innerHTML = 'Passe por cima de cada botão para ver sobre!'
}

function pcss(){
    var html = document.getElementById('psobre')

    html.innerHTML = '<h2>CSS3</h2><p>CSS é a sigla para o termo em inglês Cascading Style Sheets que, traduzido para o português, significa Folha de Estilo em Cascatas.</p>'
}

function lcss(){
    var html = document.getElementById('psobre')

    html.innerHTML = 'Passe por cima de cada botão para ver sobre!'
}

function pjs(){
    var html = document.getElementById('psobre')

    html.innerHTML = '<h2>JavaScript</h2><p>A linguagem de programação Javascript permite ao desenvolvedor implementar diversos itens de alto nível de complexidade em páginas web.</p>'
}

function ljs(){
    var html = document.getElementById('psobre')

    html.innerHTML = 'Passe por cima de cada botão para ver sobre!'
}

function pwp(){
    var html = document.getElementById('psobre')

    html.innerHTML = '<h2>WordPress</h2><p> Uma plataforma para publicação e gerenciamento de blogs e sites.</p>'
}

function lwp(){
    var html = document.getElementById('psobre')

    html.innerHTML = 'Passe por cima de cada botão para ver sobre!'
}

function pps(){
  var html = document.getElementById('psobre')

  html.innerHTML = '<h2>PhotoShop</h2><p>Designer.</p>'
}
function lps(){
  var html = document.getElementById('psobre')

  html.innerHTML = 'Passe por cima de cada botão para ver sobre!'
}

function pcd(){
  var html = document.getElementById('psobre')

  html.innerHTML = '<h2>CorelDraw</h2><p>Designer.</p>'
}
function lcd(){
  var html = document.getElementById('psobre')

  html.innerHTML = 'Passe por cima de cada botão para ver sobre!'
}

function psql(){
  var html = document.getElementById('psobre')

  html.innerHTML = '<h2>MySQL</h2><p>Banco de dados.</p>'
}
function lsql(){
  var html = document.getElementById('psobre')

  html.innerHTML = 'Passe por cima de cada botão para ver sobre!'
}

// --------------------- MENU LENTO

const menuLinks = document.querySelectorAll('#menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

//----------------------- MUDAR LOGOS PROJETO DESIGNER GRAFICO

function logos(imagem) {
  var limg = []
  
  for (var i = 1; i <= 4; i++) {
    limg.push("imagens/DesignerGrafico/teste/" + imagem + i + ".png");
  }
  document.getElementById("if1").src = limg[0]
  document.getElementById("if2").src = limg[1]
  document.getElementById("if3").src = limg[2]
  document.getElementById("if4").src = limg[3]
}

function restaurarimg(){
  var foficial = "imagens/DesignerGrafico/LogosFundoOficial/FundoOficial.jpg"
  var ftransparente = "imagens/DesignerGrafico/LogosFundoOficial/FundoTransparente.png"
  var fpreto = "imagens/DesignerGrafico/LogosFundoOficial/FundoPreto.jpg"
  var fbranco = "imagens/DesignerGrafico/LogosFundoOficial/FundoBranco.jpg"
  document.getElementById("if1").src = foficial
  document.getElementById("if2").src = ftransparente
  document.getElementById("if3").src = fpreto
  document.getElementById("if4").src = fbranco

}

// PREVINIR LINK

const prevent = (e) =>{
  e.preventDefault()
}










$(document).ready(function(){
  $('#caixamaiormenu').hover(function(){
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');
  }, function(){
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
  });
});