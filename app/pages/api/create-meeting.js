import axios from "axios";


export default function handler(req, res) {
    if (req.method === "POST"){
        createMeeting(req, res)
    }

}

async function createMeeting(req, res) {
    let token = process.env.REACT_APP_VIDEOSDK_TOKEN
    const config = {
        headers: {
            authorization: `${token}`,
            "Content-Type": "application/json",
        },
    };

    let data = {
        region: "sg001",
        userMeetingId: "unicorn",
    };

    let resp = await axios.post(
        "https://api.videosdk.live/v1/meetings",
        JSON.stringify(data),
        config
    );

    console.log(resp.data);

    return res.status(200).json(resp.data);
}
