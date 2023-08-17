import React from 'react'

function DetailsSection() {
        return (
        <div>
            <div className='detailsSection'>
                <div className='container'>
                    <div className="row pt-4">
                        <div className="col-md-4">
                            <label for="exampleFormControlInput1" class="form-label">Country</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>--Select Country--</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="Canada">Canada</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Bangladesh">Bangladesh</option>
                                      <option value="China">China</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Kuwait">Kuwait</option>

                            </select>
                        </div>

                        <div className="col-md-4">
                            <label for="exampleFormControlInput1" class="form-label">State</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>--Select State--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <label for="exampleFormControlInput1" class="form-label">City</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>--Select City--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="d-grid gap-2 col-4 mx-auto">
                            <button class="btn btn-primary mt-4" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSection