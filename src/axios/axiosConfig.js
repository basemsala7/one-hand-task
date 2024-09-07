import axios from "axios";

axios.defaults.baseURL = "https://one-hand";
axios.defaults.headers.post["Content-Type"] = "application/json";

// axios.defaults.headers.common['"X-Secret-Key'] = SECRATE_KEY;
