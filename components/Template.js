import Header from './Header'

const Template = props => (
    <div>
        <Header />
        {props.children}
    </div>
)

export default Template