// change this Component to a class!
class Category extends React.Component {
    constructor() {
        super()
    }

    render(){

        const NavLinks = data.map((link, index) => 
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">{link.icon}</i>{link.title}
            </li>
        )

        return (
            <div className="row">
                <ul class="cat-nav center-align">
                    {NavLinks}
                </ul>
            </div>
        )
    }
}


