import './Footer.sass';
import githubLogo from '../../../public/images/github.svg'
import mailbLogo from '../../../public/images/mail.svg'
import linkedinLogo from '../../../public/images/linkedin.svg'

function Footer(){

    return (
        <div className='footer'>
            <button className='footer__buttons github'><img src={githubLogo}alt="Github logo" /></button>
            <button className='footer__buttons mail'><img src={mailbLogo} alt="Maillogo" /></button>
            <button className='footer__buttons linkedin'><img src={linkedinLogo}alt="Linkedin logo" /></button>
        </div>
    )
}

export default Footer;