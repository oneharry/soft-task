const Display =() => {
    return (
        <div className="bg-light rounded-start">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5>Reporting</h5>
                    <p>All project in current month</p>
                </div>
                <div  className="position-relative w-0 px-2 h-25 rounded bg-primary text-light">
                        <i className="fs-2 bi-plus"></i>
                    </div>
            </div>
            <hr></hr>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-between">
                <div className="d-flex justify-content-around w-md-50 align-items-center">
                    <div className="d-flex mx-1 align-items-center">
                    <span>All</span>
                    <div className="p-2 bg-white rounded border border-primary">50</div>
                    </div>
                    <div className="d-flex mx-1 align-items-center">
                    <span>Started</span>
                    <div className="w-50 p-2 bg-white rounded">20</div>
                    </div>
                    <div className="d-flex mx-1 align-items-center">
                    <span>Approval</span>
                    <div className="p-2 bg-white rounded">12</div>
                    </div>
                    <div className="d-flex mx-1 align-items-center">
                    <span>Finished</span>
                    <div className="p-2 bg-white rounded">17</div>
                    </div>
                </div>
                <div className="d-flex w-50 w-md-50 ml-6 justify-content-around align-items-center mt-4 mt-md-0">
                    <div className="bg-white p-2 rounded d-flex align-items-center">
                    <i className="fs-2 bi-sliders"></i>
                    <span>More</span>
                    </div>
                    <div className="bg-white p-2 rounded d-flex align-items-center">
                    <i className="fs-2 bi-file-ruled"></i>
                    </div>
                    <div className="bg-white p-2 rounded d-flex align-items-center">
                        <i className="fs-2 bi-list"></i>
                    </div>
                    
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-around">
                <div className="card  px-4 mx-1 my-4  rounded">
                    <div className="position-relative w-25 h-100 rounded-circle bg-primary text-light">
                        <i className="fs-2 bi-phone"></i>
                    </div>
                    
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-start">App Development</h5>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-x-circle"></i><span className="px-2">Marketing Team</span></p>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-alarm"></i><span className="px-2">1 Week Left</span></p>
                        <hr></hr>
                        <div className="d-flex">
                            <div className="mx-2">
                                <p>Team members</p>
                                <div className="d-flex justify-content-around align-items-center">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <i className="fs-2 bi-plus-circle"></i>
                                </div>
                            </div>
                            <div className="mx-1">
                                <p>Progress</p>
                                <p>34%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card  px-4 mx-1 my-4  rounded">
                    <div className="position-relative w-25 h-100 rounded-circle bg-success text-light">
                        <i className="fs-2 bi-laptop"></i>
                    </div>
                    
                    <div className="card-body d-flex flex-column ">
                        <h5 className="card-title text-start">Web Instructors</h5>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-x-circle"></i><span className="px-2">Marketing Team</span></p>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-alarm"></i><span className="px-2">4 Weeks Left</span></p>
                        <hr></hr>
                        <div className="d-flex">
                            <div className="mx-2">
                                <p>Team members</p>
                                <div className="d-flex justify-content-around align-items-center">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                
                                <i className="fs-2 bi-plus-circle"></i>
                                </div>
                            </div>
                            <div className="mx-1">
                                <p>Progress</p>
                                <p>14%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card  px-4 mx-1 my-4  rounded">
                    <div className="position-relative w-25 h-100 rounded-circle bg-primary text-light">
                        <i className="fs-2 bi-calendar2-range"></i>
                    </div>
                    
                    <div className="card-body d-flex flex-column ">
                        <h5 className="card-title text-start">Web3 Managers</h5>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-x-circle"></i><span className="px-2">Marketing Team</span></p>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-alarm"></i><span className="px-2">5 days Left</span></p>
                        <hr></hr>
                        <div className="d-flex">
                            <div className="mx-2">
                                <p>Team members</p>
                                <div className="d-flex justify-content-around align-items-center">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <i className="fs-2 bi-plus-circle"></i>
                                </div>
                            </div>
                            <div className="mx-1">
                                <p>Progress</p>
                                <p>28%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card  px-4 mx-1 my-4  rounded">
                    <div className="position-relative w-25 h-100 rounded-circle bg-warning text-light">
                        <i className="fs-2 bi-pie-chart-fill"></i>
                    </div>
                    
                    <div className="card-body d-flex flex-column ">
                        <h5 className="card-title text-start">Data Analysist</h5>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-x-circle"></i><span className="px-2">Marketing Team</span></p>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-alarm"></i><span className="px-2">2 Weeks Left</span></p>
                        <hr></hr>
                        <div className="d-flex">
                            <div className="mx-2">
                                <p>Team members</p>
                                <div className="d-flex justify-content-around align-items-center">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <i className="fs-2 bi-plus-circle"></i>
                                </div>
                            </div>
                            <div className="mx-1">
                                <p>Progress</p>
                                <p>22%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card  px-4 mx-1 my-4  rounded">
                    <div className="position-relative w-25 h-100 rounded-circle bg-secondary text-light">
                        <i className="fs-2 bi-hdd-stack"></i>
                    </div>
                    
                    <div className="card-body d-flex flex-column ">
                        <h5 className="card-title text-start">Pay Stack</h5>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-x-circle"></i><span className="px-2">Big Data Dev</span></p>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-alarm"></i><span className="px-2">14 Weeks Left</span></p>
                        <hr></hr>
                        <div className="d-flex">
                            <div className="mx-2">
                                <p>Team members</p>
                                <div className="d-flex justify-content-around align-items-center">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <i className="fs-2 bi-plus-circle"></i>
                                </div>
                            </div>
                            <div className="mx-1">
                                <p>Progress</p>
                                <p>55%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card  px-4 mx-1 my-4  rounded">
                    <div className="position-relative w-25 h-100 rounded-circle bg-primary text-light">
                        <i className="fs-2 bi-kanban"></i>
                    </div>
                    
                    <div className="card-body d-flex flex-column ">
                        <h5 className="card-title text-start">Data Managers</h5>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-x-circle"></i><span className="px-2">Over Look</span></p>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-alarm"></i><span className="px-2">15 Weeks Left</span></p>
                        <hr></hr>
                        <div className="d-flex">
                            <div className="mx-2">
                                <p>Team members</p>
                                <div className="d-flex justify-content-around align-items-center">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <i className="fs-2 bi-plus-circle"></i>
                                </div>
                            </div>
                            <div className="mx-1">
                                <p>Progress</p>
                                <p>29%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card  px-4 mx-1 my-4  rounded">
                    <div className="position-relative w-25 h-100 rounded-circle bg-primary text-light">
                        <i className="fs-2 bi-camera-video"></i>
                    </div>
                    
                    <div className="card-body d-flex flex-column ">
                        <h5 className="card-title text-start">Cinematography</h5>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-x-circle"></i><span className="px-2">Main stream</span></p>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-alarm"></i><span className="px-2">2 Days Left</span></p>
                        <hr></hr>
                        <div className="d-flex">
                            <div className="mx-2">
                                <p>Team members</p>
                                <div className="d-flex justify-content-around align-items-center">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <i className="fs-2 bi-plus-circle"></i>
                                </div>
                            </div>
                            <div className="mx-1">
                                <p>Progress</p>
                                <p>4%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card  px-4 mx-1 my-4  rounded">
                    <div className="position-relative w-25 h-100 rounded-circle bg-danger text-light">
                        <i className="fs-2 bi-headset"></i>
                    </div>
                    
                    <div className="card-body d-flex flex-column ">
                        <h5 className="card-title text-start">Feed Back</h5>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-x-circle"></i><span className="px-2">Customer Relations</span></p>
                        <p className="card-subtitle mb-2 text-start text-muted"><i className="fs-2 bi-alarm"></i><span className="px-2">3 Weeks Left</span></p>
                        <hr></hr>
                        <div className="d-flex">
                            <div className="mx-2">
                                <p>Team members</p>
                                <div className="d-flex justify-content-around align-items-center">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="20" height="20" className="rounded-circle" />
                                <i className="fs-2 bi-plus-circle"></i>
                                </div>
                            </div>
                            <div className="mx-1">
                                <p>Progress</p>
                                <p>32%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display;