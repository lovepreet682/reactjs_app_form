import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardSectionDetails from './CardSectionDetails';
function CardShow() {
    return (
        <>
            <div id="cardShow" style={{backgroundColor:"#eee"}}>
                <div className="container">
                    <div className="row">
                        <div className='d-flex justify-content-center'>
                        <h2 className='headingSection text-center my-4 w-50 pb-2'>Our Developer Details </h2>
                        </div>
                        {
                            CardSectionDetails.map((data)=>{
                                const dataList=(
                                    
                                    <div className="col-md-4  d-flex justify-content-center align-items-center text-center mb-5">
                                    <div class="card" style={{width:"18rem"}}>
                                        <img src={data.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{data.heading}</h5>
                                            <p class="card-text">{data.para}</p>
                                            <div className="icons mb-3" style={{fontSize:"40px"}}>
                                                <a href="https://www.facebook.com/login/" target="_blank" rel="noreferrer"><FacebookIcon style={{fontSize:"3rem", marginRight:"10px", color:"#1877F2"}}/></a>
                                                <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><LinkedInIcon  style={{fontSize:"3rem", marginRight:"10px", color:"#0077B5"}}/></a>
                                                <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><WhatsAppIcon style={{fontSize:"3rem", marginRight:"10px",color:"25D366"}}/></a>
                                            </div>
                                            <a href="/" class="btn btn-danger">More Info</a>
                                        </div>
                                    </div>
                                </div>
                                );
                                return dataList;
                            })
                        }
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardShow