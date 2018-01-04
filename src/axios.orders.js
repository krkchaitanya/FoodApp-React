import axios from "axios";

const instance=axios.create({
    baseURL:'https://reactdata-fa74c.firebaseio.com/ '
});

export default instance;