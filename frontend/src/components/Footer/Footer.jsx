import './Footer.sass';
import githubLogo from '/images/github.svg'
import mailbLogo from '/images/mail.svg'
import linkedinLogo from '/images/linkedin.svg'

function Footer(){

    return (
        <div className='footer'>
            <button className='footer__buttons github'><a href="https://github.com/luacsoulet"><img src={githubLogo}alt="Github logo" /></a></button>
            <button className='footer__buttons mail'>
            <a href="mailto:lucasmagalhaes45200@gmail.com"><img src={mailbLogo} alt="Maillogo" /></a></button>
            <button className='footer__buttons linkedin'>
            <a href="https://www.linkedin.com/in/magalhaes-lucas/"><img src={linkedinLogo}alt="Linkedin logo" /></a></button>
        </div>
    )
}

export default Footer;