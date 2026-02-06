import './Nav.css';

function Nav(props)
{
    let {navigation:n}=props;
    return(
        <nav>
            <ul>
                {
                    Object.keys(n).map
                    (
                        elem =>
                        {
                            return <li key={elem}><a href={n[elem]}>{elem}</a></li>
                        }
                    )
                }
            </ul>
        </nav>
    );
}
export default Nav;