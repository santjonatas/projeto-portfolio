// ----- FUNÇÕES -----
// funções informações
    // função formação
    function entrarMouseBotaoAbaFormacao(){
        formacao.style.color = '#025959'
    }
    function sairMouseBotaoAbaFormacao(){
        formacao.style.color = 'white'
    }
    // função contact
    function entrarMouseBotaoAbaContact(){
        contact.style.color = '#025959'
    }
    function sairMouseBotaoAbaContact(){
        contact.style.color = 'white'
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
        sobre_mim.style.backgroundImage = 'linear-gradient(to left, #000d28, #001f3b, #023b4b)'
        sobre_mim.style.boxShadow = '0px 0px 17px #24917d'
    }
    function sairMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to left, #011526, #012E40, #025959)'
        sobre_mim.style.boxShadow = '0px 0px 7px #24917d'
    }
    function clicarMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to left, #011546, #012E50, #025969)'
    }
    // currículo
    function entrarMouseBotaoCurriculo(){
        botao_curriculo.style.border = 'solid 2px #00aa9b'
        botao_curriculo.style.color = '#00aa9b'
        botao_curriculo.style.fontSize = '22px'
        botao_curriculo.style.boxShadow = '0px 0px 17px #24917d'
    }
    function sairMouseBotaoCurriculo(){
        botao_curriculo.style.border = 'solid 2px #00aa8b'
        botao_curriculo.style.color = '#00aa8b'
        botao_curriculo.style.boxShadow = '0px 0px 7px #24917d'
    }
    // foto de perfil
    function entrarMouseBotaoPerfil(){
        gradient.style.boxShadow = '0px 0px 37px #24917d' 
    }
    function sairMouseBotaoPerfil(){
        gradient.style.boxShadow = '0px 0px 27px #24917d'
    }

// funções do botão da aba lateral
function entrarMouseBotaoAbaLateral(){
    aba_do_botao_da_aba_lateral.style.backgroundColor = '#012E40'
    aba_do_botao_da_aba_lateral.style.borderRadius = '4px'
    aba_do_botao_da_aba_lateral.style.boxShadow = '0px 0px 10px #24917d'
}

function sairMouseBotaoAbaLateral(){
    aba_do_botao_da_aba_lateral.style.backgroundColor = '#01101d'
    aba_do_botao_da_aba_lateral.style.borderRadius = '0px'
    aba_do_botao_da_aba_lateral.style.boxShadow = 'none'
}

function clicarMouseBotaoAbaLateral(){
    let aba_lateral = document.createElement('div')
    aba_lateral.setAttribute('id', 'aba-lateral')
    aba_lateral.setAttribute('class', 'scroll')

    corpo.insertBefore(aba_lateral, cabecalho_e_menu)
    aba_lateral.style.width = '300px'
    aba_lateral.style.height = '925px'
    aba_lateral.style.overflowY = 'scroll'

    botao_e_portfolio.removeChild(aba_do_botao_da_aba_lateral)

    cabecalho.style.justifyContent = 'start'
    cabecalho.style.gap = '45%'
    botao_e_portfolio.style.marginLeft = '70px'

    let header_aba_lateral = document.createElement('div')
    header_aba_lateral.setAttribute('id', 'header-aba-lateral')
    header_aba_lateral.style.width = '100%'
    header_aba_lateral.style.height = '61px'
    aba_lateral.appendChild(header_aba_lateral)
    header_aba_lateral.style.backgroundColor = '#011526'
    /*
    header_aba_lateral.style.position = 'fixed'
    */
    header_aba_lateral.style.display = 'flex'
    header_aba_lateral.style.alignItems = 'center'

    // variáveis do botão fechar a aba lateral
    let botao_fechar_aba_lateral = document.createElement('img')
    botao_fechar_aba_lateral.setAttribute('src', './img/menu-icone.png')
    botao_fechar_aba_lateral.style.width = '25px'
    botao_fechar_aba_lateral.style.height = '25px'

    let aba_botao_fechar_aba_lateral = document.createElement('div')
    aba_botao_fechar_aba_lateral.setAttribute('id', 'aba-botao-fechar-aba-lateral')
    aba_botao_fechar_aba_lateral.style.width = '30px'
    aba_botao_fechar_aba_lateral.style.height = '30px'
    aba_botao_fechar_aba_lateral.style.backgroundColor = 'gray'
    aba_botao_fechar_aba_lateral.style.display = 'flex'
    aba_botao_fechar_aba_lateral.style.justifyContent = 'center'
    aba_botao_fechar_aba_lateral.style.alignItems = 'center'
    aba_botao_fechar_aba_lateral.style.borderRadius = '4px'
    aba_botao_fechar_aba_lateral.style.backgroundColor = '#025959'
    aba_botao_fechar_aba_lateral.style.marginLeft = '45px'
    header_aba_lateral.appendChild(aba_botao_fechar_aba_lateral)
    aba_botao_fechar_aba_lateral.appendChild(botao_fechar_aba_lateral)

    let portfolio = document.getElementById('portfolio')

    function entrarMouseBotaoAbaLateralDeFechar(){
        aba_botao_fechar_aba_lateral.style.backgroundColor = '#012E40'
        aba_botao_fechar_aba_lateral.style.boxShadow = '0px 0px 10px #24917d'

    }
    function sairMouseBotaoAbaLateralDeFechar(){
        aba_botao_fechar_aba_lateral.style.backgroundColor = '#025959'
        aba_botao_fechar_aba_lateral.style.boxShadow = '0px 0px 5px #24917d'
    }
    function clicarMouseBotaoAbaLateralParaFechar(){
        aba_botao_fechar_aba_lateral.style.backgroundColor = '#02735E'

        corpo.removeChild(aba_lateral)
        botao_e_portfolio.insertBefore(aba_do_botao_da_aba_lateral, portfolio)

        cabecalho.style.justifyContent = 'space-around'
        cabecalho.style.gap = '50%'
        botao_e_portfolio.style.marginLeft = '0px'
    }

    botao_fechar_aba_lateral.addEventListener('mouseenter', entrarMouseBotaoAbaLateralDeFechar)
    botao_fechar_aba_lateral.addEventListener('mouseout', sairMouseBotaoAbaLateralDeFechar)
    botao_fechar_aba_lateral.addEventListener('click', clicarMouseBotaoAbaLateralParaFechar)
}



// ----- VARIÁVEIS -----
// body
let corpo = document.getElementById('corpo')
// variáveis do botão da aba lateral
let botao_da_aba_lateral = document.getElementById('botao-aba-lateral')
    // div que contem o botao lateral
    let aba_do_botao_da_aba_lateral =  document.getElementById('aba-botao-aba-lateral')

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

// variável do menu principal
const menu_principal = document.querySelector('.menu')
    let inicio_da_pag = document.getElementById('inicio-da-pagina')
    // sobre mim
    let sobre_mim = document.getElementById('botao-sobre-mim')
    let texto_sobre_mim = document.getElementById('sobre-mim')
    let botao_curriculo = document.getElementById('botao-curriculo')
    //foto de perfil
    let foto_perfil =  document.getElementById('foto-perfil')
    let gradient = document.getElementById('gradient')

// ----- EVENTOS -----
// eventos do botão da aba lateral
botao_da_aba_lateral.addEventListener('mouseenter', entrarMouseBotaoAbaLateral)
botao_da_aba_lateral.addEventListener('mouseout', sairMouseBotaoAbaLateral)
botao_da_aba_lateral.addEventListener('click', clicarMouseBotaoAbaLateral)

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

// eventos menu principal
    // sobre mim
    sobre_mim.addEventListener('mouseenter', entrarMouseBotaoSobreMim)
    sobre_mim.addEventListener('mouseout', sairMouseBotaoSobreMim)
    sobre_mim.addEventListener('click', clicarMouseBotaoSobreMim)
    // currículo
    botao_curriculo.addEventListener('mouseenter', entrarMouseBotaoCurriculo)
    botao_curriculo.addEventListener('mouseout', sairMouseBotaoCurriculo)
    // foto de perfil
    foto_perfil.addEventListener('mouseenter', entrarMouseBotaoPerfil)
    foto_perfil.addEventListener('mouseout', sairMouseBotaoPerfil)