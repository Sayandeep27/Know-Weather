import React from 'react'

function ShowTemp({text}) {
    return (
        <div class="container my-5">
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">

                        <div class="card-body border border-dark  text-center bg-light">
                            <h5 class="card-title bg-light fw-bold">Description</h5>
                            <p class="card-text bg-light">{text.description}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body border border-dark text-center bg-light">
                            <h5 class="card-title bg-light fw-bold">Temp</h5>
                            <p class="card-text bg-light">{text.temp}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body border border-dark text-center bg-light">
                            <h5 class="card-title bg-light fw-bold">Temp Min</h5>
                            <p class="card-text bg-light">{text.temp_min}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">

                        <div class="card-body border border-dark text-center bg-light">
                            <h5 class="card-title bg-light fw-bold">Temp Max</h5>
                            <p class="card-text bg-light">{text.temp_max}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body border border-dark text-center bg-light">
                            <h5 class="card-title bg-light fw-bold">Humidity</h5>
                            <p class="card-text bg-light">{text.humidity}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body border border-dark text-center bg-light">
                            <h5 class="card-title bg-light fw-bold">Sunrise</h5>
                            <p class="card-text bg-light">{text.sunrise}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">

                        <div class="card-body border border-dark text-center bg-light">
                            <h5 class="card-title bg-light fw-bold">Sunset</h5>
                            <p class="card-text bg-light">{text.sunset}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body border border-dark text-center bg-light">
                            <h5 class="card-title bg-light fw-bold">Country</h5>
                            <p class="card-text bg-light">{text.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShowTemp;