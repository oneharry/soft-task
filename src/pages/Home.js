import Dashboard from "../components/dashboard";



const Home = () => {
    return (
        <div className="container-fluid ">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white text-dark">
                    <div className="position-relative d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3  mb-md-0 me-md-auto text-dark  text-decoration-none ">
                            <div className="badge w-25 h-25 rounded-circle bg-primary text-primary">.</div><span className="fs-5 d-none mx-1 d-sm-inline text-align-center">Compute</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center text-dark align-items-sm-start" id="menu">
                            <li className="nav-item ">
                                <a href="/" className="nav-link mb-2 align-middle text-dark">
                                    <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Board</span>
                                </a>
                            </li>
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link mb-2 align-middle text-dark">
                                    <i className="fs-4 bi-calendar4-event"></i> <span className="ms-1 d-none d-sm-inline">Plan Schedule</span> </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link mb-2 align-middle active ">
                                    <i className="fs-4 bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Reporting</span></a>
                            </li>
                            <li>
                                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link mb-2 text-dark align-middle ">
                                    <i className="fs-4 bi-chat-left"></i> <span className="ms-1 d-none d-sm-inline">Messages</span></a>
                            </li>
                            <li>
                                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link mb-2 text-dark align-middle">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Team Member</span> </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link text-dark mb-2 align-middle">
                                    <i className="fs-4 bi-globe-europe-africa"></i> <span className="ms-1 d-none d-sm-inline">Tools Plugin</span> </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link text-dark mb-1 align-middle">
                                    <i className="fs-4 bi-activity"></i> <span className="ms-1 d-none d-sm-inline">Roadmap</span> </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link text-dark align-middle">
                                    <i className="fs-4 bi-sliders"></i> <span className="ms-1 d-none d-sm-inline">Settings</span> </a>
                            </li>
                        </ul>
                        <hr></hr>
                        <div className="dropdown pb-3">
                            <a href="/" className="nav-link text-dark align-middle">
                                <i className="fs-4 bi-box-arrow-right"></i> <span className="ms-1 d-none d-sm-inline">Logout</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col py-3">
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default Home;