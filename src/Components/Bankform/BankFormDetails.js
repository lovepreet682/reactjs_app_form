import React, { useEffect, useState } from 'react'
import axios from 'axios';
function BankFormDetails() {
    const [form, setFrom] = useState({
        files: "",
        records: "",
        agents: ""
    })
    const [tenants, setTenants] = useState([]);
    const [tenant_Id, setTenant_Id] = useState("");
    const [source, setSource] = useState([]);
    const [source_Id, setSource_Id] = useState("");
    const [vendor_Name, setvendor_Name] = useState([]);
    const [vendorSelected, setvendorSelected] = useState(false);

    const handleVendorNameSelect = (e) => {
        const checkVendorSelectId = e.target.value;
        if (checkVendorSelectId !== "") {
            setvendorSelected(true);
        } else {
            setvendorSelected(false);
        }
    }

    //fetching tenants Data
    useEffect(() => {
        const getTenants = async () => {
            try {
                const response = await axios.get("https://maurvrojdonxrpy3olqpkejjki0xabfo.lambda-url.us-east-1.on.aws/getTenants?Source=psi_tenants");
                setTenants(response.data);
            } catch (error) {
                console.error('Error fetching tenants:', error);
            }
        };
        getTenants();
    }, []);

    //fetching source Name Data
    useEffect(() => {
        if (tenant_Id !== "") {
            const apiUrl = 'https://maurvrojdonxrpy3olqpkejjki0xabfo.lambda-url.us-east-1.on.aws/getSourceTypes?Source=psi_source_tenant_mappings';
            const requestData = {
                ID: tenant_Id
            };

            const getSourceName = async () => {
                try {
                    const response = await axios.post(apiUrl, requestData);
                    setSource(response.data);
                } catch (error) {
                    console.error('Error in POST request:', error);
                }
            };
            getSourceName();
        }
    }, [tenant_Id]);

    //Fetching Vendor Name Data
    useEffect(() => {
        if (source_Id !== "") {
            const apiUrl = "https://maurvrojdonxrpy3olqpkejjki0xabfo.lambda-url.us-east-1.on.aws/getVendorTypes?Source=psi_tenant_source_vendor_mappings";
            const requestData = {
                ID: source_Id
            };

            const getVendorName = async () => {
                try {
                    const response = await axios.post(apiUrl, requestData);
                    setvendor_Name(response.data);
                }
                catch (error) {
                    console.log("Error in the POST Request", error)
                }
            }
            getVendorName();
        };
    }, [source_Id]);


    const handleTenantChange = (e) => {
        const selectedTenantId = e.target.value;
        setTenant_Id(selectedTenantId);
        setSource_Id("");
        setvendor_Name([]);
        setvendorSelected("")
    }

    const handleSourceNameId = (e) => {
        const selectedvendorId = e.target.value;
        setSource_Id(selectedvendorId);
    }

    //handle the form by using handleForm
    const handleForm = (e) => {
        const { name, value } = e.target;
        setFrom({ ...form, [name]: value });
    }

    return (
        <>
            <div className="bankForm">
                <div className="container ">
                    <h3 className='pt-4 text-center'>Please Entry Your Details</h3>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label htmlFor="selectBank" className="form-label"> Tenant Name</label>
                                <select className="form-select" onChange={handleTenantChange} id="selectBank" name='selectBank'>
                                    <option value="">Select Tenant</option>

                                    {tenants.map((getData) => (
                                        <option key={getData.tenantID} value={getData.tenantID}>
                                            {getData.tenantName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Select Source Type</label>
                                <select className="form-select" onChange={handleSourceNameId} required aria-label="Default select example" name='selectSource'>
                                    <option selected> Source Type</option>
                                    {source && source.map((data) => (
                                        <option key={data.sourceID} value={data.sourceID}>
                                            {data.sourceName}
                                        </option>
                                    ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Select Vendor Name</label>

                                <select className="form-select" aria-label="Default select example" name='vendorName' onChange={handleVendorNameSelect}>

                                    <option selected>Vendor Name</option>
                                    {vendor_Name && vendor_Name.map((data) => (
                                        <option key={data.vendorID} value={data.vendorID}>
                                            {data.vendorName}
                                        </option>
                                    ))
                                    }
                                </select>
                            </div>
                        </div>


                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Select VendorInput Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected> VendorInput Type</option>
                                    {vendorSelected && (
                                        <>
                                            <option value="ATR">ATR</option>
                                            <option value="CTR">CTR</option>
                                        </>
                                    )}
                                </select>

                            </div>
                        </div>


                        <div className="col-md-6 col-lg-5 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Number of files</label>
                                <input type="number" placeholder='Number of files' name='files' value={form.files} onChange={handleForm} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-5 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Number of records</label>
                                <input type="number" placeholder='Number of records' name='records' value={form.records} onChange={handleForm} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-5 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Number of agents</label>
                                <input type="number" placeholder='Number of agents' name='agents' value={form.agents} onChange={handleForm} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <a href='/Success' className='btn btn-danger'>Submit Here</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BankFormDetails