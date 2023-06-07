

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="input-group">
                        <form className="d-flex border px-2 rounded-pill">
                            <i className="fs-4 bi-search"></i>
                            <input className="form-control shadow-none border-0" type="search" aria-label="Search" />
                        </form>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 w-50 d-flex justify-content-between align-items-center mb-lg-0">
                        <li> 
                            <i className="fs-4 bi-bell"></i>
                        </li>
                        <li>
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none" >
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50" className="rounded-circle" />
                                <div class=" text-dark text-start px-1">
                                    <h6 className="my-0">Anna Newman</h6>
                                    <p className="my-0">Head HR</p>
                                </div>
            
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}

export default Navbar;