// ----- FUNÇÕES -----
// funções informações
    // função formação
    function entrarMouseBotaoAbaFormacao(){
        formacao.style.backgroundImage = 'linear-gradient(to left, #3637E5, #7037E6)'
        formacao.style.display = 'inline-block'
        formacao.style.webkitBackgroundClip = 'text'
        formacao.style.color = 'transparent'
    }
    function sairMouseBotaoAbaFormacao(){
        formacao.style.color = 'white'
    }
    // função contact
    function entrarMouseBotaoAbaContact(){
        contact.style.backgroundImage = 'linear-gradient(to left, #3637E5, #7037E6)'
        contact.style.display = 'inline-block'
        contact.style.webkitBackgroundClip = 'text'
        contact.style.color = 'transparent'
    }
    function sairMouseBotaoAbaContact(){
        contact.style.color = 'white'
    }
    // função tema escuro
    function entrarMouseBotaoLua(){
        aba_tema.style.backgroundColor = '#333333'
    }

    function sairMouseBotaoLua(){
        aba_tema.style.backgroundColor = ''
    }

    // função github
    function entrarMouseBotaoAbaGithub(){
        github.style.boxShadow = '0px 0px 10px rgb(211, 211, 211)'
        github.style.borderRadius = '50px'
    }
    function sairMouseBotaoAbaGithub(){
        github.style.boxShadow = 'none'
        github.style.borderRadius = ''
    }
    //função linkedin
    function entrarMouseBotaoAbaLinkedin(){
        linkedin.style.boxShadow = '0px 0px 10px rgb(211, 211, 211)'
        linkedin.style.borderRadius = '7px'
    }
    function sairMouseBotaoAbaLinkedin(){
        linkedin.style.boxShadow = 'none'
        linkedin.style.borderRadius = ''
    }
    //função instagram
    function entrarMouseBotaoAbaInstagram(){
        instagram.style.boxShadow = '0px 0px 10px rgb(211, 211, 211)'
        instagram.style.borderRadius = '12px'
    }
    function sairMouseBotaoAbaInstagram(){
        instagram.style.boxShadow = 'none'
        instagram.style.borderRadius = ''
    }

// funções do menu principal
    // sobre mim
    function entrarMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to right,  #376EE6, #3637E5, #7037E6)'
        sobre_mim.style.boxShadow = '0px 0px 15px #3637E5'
    }
    function sairMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to right, #22448E, #22228E, #46228E)'
        sobre_mim.style.boxShadow = '0px 0px 5px #1C6572'
    }
    function clicarMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to right, #0D1A37, #0D0D37, #1B0D37)'
        aba_sobre_mim.scrollIntoView({ behavior: "smooth"})
    }
    function desclicarMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to right,  #376EE6, #3637E5, #7037E6)'
    }
    // currículo
    function entrarMouseBotaoCurriculo(){
        botao_curriculo.style.border = 'solid 3px #376EE6'
        botao_curriculo.style.color = '#376EE6'
        botao_curriculo.style.boxShadow = '0px 0px 15px #3637E5'
    }
    function sairMouseBotaoCurriculo(){
        botao_curriculo.style.border = 'solid 3px #22448E'
        botao_curriculo.style.color = '#22448E'
        botao_curriculo.style.boxShadow = '0px 0px 5px #1C6572'
    }
    function clicarMouseBotaoCV(){
        botao_curriculo.style.border = 'solid 3px #0D1A37'
        botao_curriculo.style.color = '#0D1A37'
    }
    function desclicarMouseBotaoCV(){
        botao_curriculo.style.border = 'solid 3px #376EE6'
        botao_curriculo.style.color = '#376EE6'
    }
    // foto de perfil
    function entrarMouseBotaoPerfil(){
        gradient.style.boxShadow = '0px 0px 27px #1C6572' 
    }
    function sairMouseBotaoPerfil(){
        gradient.style.boxShadow = '0px 0px 17px #1C6572'
    }

// ----- VARIÁVEIS -----
// body
let corpo = document.getElementById('corpo')

// variável cabecalho e menu
let cabecalho_e_menu = document.getElementById('cabecalho-e-menu')
    //variável cabecalho
    let cabecalho = document.getElementById('cabecalho')
    //div botao e portifolio
    let botao_e_portfolio = document.getElementById('aba-botao-aba-lateral-e-portfolio')
    // variável div das navegações
    let informacoes = document.getElementById('informacoes')
    let formacao = document.getElementById('formacao')
    let contact = document.getElementById('contact')
    let github =  document.getElementById('github')
    let linkedin = document.getElementById('linkedin')
    let instagram = document.getElementById('instagram')
    // variável dos temas
    let aba_tema = document.getElementById('aba-tema')
    let botao_lua = document.getElementById('botao-lua')

// variável do menu principal
const menu_principal = document.querySelector('.menu')
    let inicio_da_pag = document.getElementById('inicio-da-pagina')
    // sobre mim
    let sobre_mim = document.getElementById('botao-sobre-mim')
    let texto_sobre_mim = document.getElementById('sobre-mim')
    let aba_sobre_mim = document.getElementById('aba-sobre-mim')
    let botao_curriculo = document.getElementById('botao-curriculo')
    //foto de perfil
    let foto_perfil =  document.getElementById('foto-perfil')
    let gradient = document.getElementById('gradient')

// ----- EVENTOS -----

// eventos dos botões de navegação do header 'informações'
    // formação
    formacao.addEventListener('mouseenter', entrarMouseBotaoAbaFormacao)
    formacao.addEventListener('mouseout', sairMouseBotaoAbaFormacao)
    // contact
    contact.addEventListener('mouseenter', entrarMouseBotaoAbaContact)
    contact.addEventListener('mouseout', sairMouseBotaoAbaContact)
    // github
    github.addEventListener('mouseenter', entrarMouseBotaoAbaGithub)
    github.addEventListener('mouseout', sairMouseBotaoAbaGithub)
    // linkedin
    linkedin.addEventListener('mouseenter', entrarMouseBotaoAbaLinkedin)
    linkedin.addEventListener('mouseout', sairMouseBotaoAbaLinkedin)
    //instagram
    instagram.addEventListener('mouseenter', entrarMouseBotaoAbaInstagram)
    instagram.addEventListener('mouseout', sairMouseBotaoAbaInstagram)

// eventos tema
    // tema escuro
    botao_lua.addEventListener('mouseenter', entrarMouseBotaoLua)
    botao_lua.addEventListener('mouseout', sairMouseBotaoLua)

// eventos menu principal
    // sobre mim
    sobre_mim.addEventListener('mouseenter', entrarMouseBotaoSobreMim)
    sobre_mim.addEventListener('mouseout', sairMouseBotaoSobreMim)
    sobre_mim.addEventListener('mousedown', clicarMouseBotaoSobreMim)
    sobre_mim.addEventListener('mouseup', desclicarMouseBotaoSobreMim)
    // currículo
    botao_curriculo.addEventListener('mouseenter', entrarMouseBotaoCurriculo)
    botao_curriculo.addEventListener('mouseout', sairMouseBotaoCurriculo)
    botao_curriculo.addEventListener('mousedown', clicarMouseBotaoCV)
    botao_curriculo.addEventListener('mouseup', desclicarMouseBotaoCV)
    // foto de perfil
    foto_perfil.addEventListener('mouseenter', entrarMouseBotaoPerfil)
    foto_perfil.addEventListener('mouseout', sairMouseBotaoPerfil) 