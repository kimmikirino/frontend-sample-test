import HeaderCss from './HeaderCss.scss'

const Header = () => (
    <div className="header">
        <p><strong>Teste Sciensa</strong></p>
        <p className="minor"><strong>Nome:</strong> Luisa Haddad</p>
        <p className="minor"><strong>E-mail:</strong> luisa.haddad@gmail.com</p>
        <style jsx>{HeaderCss}</style>
    </div>
)

export default Header