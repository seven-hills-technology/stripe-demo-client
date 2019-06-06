import axiosStatic from "axios";

declare const API_URL: string;

export const axios = axiosStatic.create({baseURL: API_URL});

axios.interceptors.request.use(async config => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.W4vibuwLu6X9qqRRgrbCZCORLj1yvtkBH66zZO4M6Mc';
    if (authToken != null) {
        config.headers.authorization = `Bearer ${authToken}`;
    }
    return config;
});