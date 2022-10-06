import axios from "axios";
const VIDEOSDK_TOKEN = process.env.REACT_APP_VIDEOSDK_TOKEN;

export const getToken = () => VIDEOSDK_TOKEN;

export const createMeeting = async ({ token }) => {
    const url = `/api/create-meeting`;
    const options = {
        url: url,
        method: "POST",
        headers: { Authorization: token, "Content-Type": "application/json" },
    };

    let resp = await axios(options)

    console.log(resp.data)

    return resp.data;
};

export const validateMeeting = async ({ meetingId, token }) => {
    const url = `/api/validate-meeeting`;

    const options = {
        url: url,
        method: "POST",
        headers: { Authorization: token, "Content-Type": "application/json" },
    };

    let resp = await axios(options)

    console.log(resp.data)
    return resp.data ? resp.data.meetingId === meetingId : false;
};
