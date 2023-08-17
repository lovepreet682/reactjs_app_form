import axios from "axios";

const API_URL="https://maurvrojdonxrpy3olqpkejjki0xabfo.lambda-url.us-east-1.on.aws/getTenants?Source=psi_tenants";



class API_call{
    tenantsCall(){
        return axios.get(API_URL);
    }
}
   
export default new API_call();