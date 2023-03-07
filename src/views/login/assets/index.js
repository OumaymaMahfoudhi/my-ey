function Header(){
    return(
        <header>
                <nav className="nav">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/1200px-EY_logo_2019.svg.png"/>
                    <ul className="nav-item">
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li>
                    </ul>
                    <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="Avatar" class="avatar"></img>
                </nav>
            <h1> Our page containe many product that help you make easier your life</h1> 
      </header>
    )
}


function Footer(){
    return(
        <div className="footer">
        <footer> mahfoudhi page all rights is reserved</footer> 
        </div>
    )
}







function Mypage() {
    return(
        <div>
            <Header/>
            <h1>why love to learn React </h1>

            <ol>
                <li>single page application</li>
                <br />
                <li>can build mobile application </li>
                <br />
                <li>have a large community </li>
                <br />
                <li>based on component</li>
                <br />
                <li>used by many company</li>
            </ol>
        <Footer /> 

           

        </div>
    )
}


ReactDOM.render(<Mypage/> , document.getElementById("root"))



