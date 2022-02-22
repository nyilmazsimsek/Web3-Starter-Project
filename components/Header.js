import headerStyle from "../styles/Header.module.css"

const Header = () => {

    return(
        <div>
            <h1 className={headerStyle.title}>
                <span>Your Header </span>
            </h1>
            <h1 className={headerStyle.spantitle} > 
            <span > Your Game</span>
            </h1>

            <p className={headerStyle.description}> Your Description</p>
        </div>
    )
}

export default Header