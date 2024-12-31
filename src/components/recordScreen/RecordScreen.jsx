import { useRef } from "react";

const RecordScreen = () => {
    const buttonRef = useRef(null);

    const handleButtonClick = async () => {
        if (!navigator.mediaDevices.getDisplayMedia) {
            // console.error("getDisplayMedia is not supported");
            return;
        }

        try {
            const media = await navigator.mediaDevices.getDisplayMedia({
                video: { frameRate: { ideal: 30 } },
            });
            const mediaRecorder = new MediaRecorder(media, {
                mimeType: "video/webm; codecs=vp8,opus",
            });

            mediaRecorder.start();

            const [video] = media.getVideoTracks();
            video.addEventListener("ended", () => {
                mediaRecorder.stop();
            });

            mediaRecorder.addEventListener("dataavailable", (event) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(event.data);
                link.download = "video.webm";
                link.click();
            });
        } catch (error) {
            // console.error("Error accessing media devices:", error);
        }
    };

    return (
        <button ref={buttonRef} onClick={handleButtonClick}>
            Record Screen
        </button>
    );
};

export default RecordScreen;
