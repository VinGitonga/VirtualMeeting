import axios from "axios";

export default function handler(req, res){
    if (req.method === "POST") validate(req, res)
}

async function validate(req, res){
    let meetingId = req.body.meetingId
    let token = process.env.REACT_APP_VIDEOSDK_TOKEN

    let config = {
        method: "POST",
        url: `https://api.videosdk.live/v1/meetings/${meetingId}`,
        headers: {
            authorization: `${token}`
        }
    }

    let resp = await axios(config)
    console.log(resp.data)

    return res.status(200).json(resp.data)
}
