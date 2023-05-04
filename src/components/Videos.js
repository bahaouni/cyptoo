import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Videos.css";
const API_KEY = "AIzaSyDxpZECD5kAKD0kaGaH3skviz_8yRt2lNI";

const Videos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part: "snippet",
                    q: "cryptocurrency news",
                    type: "video",
                    key: API_KEY
                }
            })
            .then(response => {
                setVideos(response.data.items);
            })
            .catch(error => {
                console.log("Error fetching videos:", error);
            });
    }, []);

    if (videos.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="videos-container">
            {videos.map(video => (
                <div className="video"  key={video.id.videoId}>
                    <h2>{video.snippet.title}</h2>
                    <iframe
                        title={video.snippet.title}
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>
            ))}
        </div>
    );
};

export default Videos;
