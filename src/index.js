// capture-photo.js
class CapturePhoto {
	constructor(containerId) {
		this.container = document.getElementById(containerId);
		if (!this.container) {
			throw new Error("Container not found");
		}
		this.init();
	}

	init() {
		this.video = document.createElement("video");
		this.canvas = document.createElement("canvas");
		this.captureButton = document.createElement("button");
		this.downloadButton = document.createElement("a");

		this.captureButton.textContent = "Capture Photo";
		this.downloadButton.textContent = "Download Photo";
		this.downloadButton.style.display = "none";

		this.container.appendChild(this.video);
		this.container.appendChild(this.captureButton);
		this.container.appendChild(this.downloadButton);

		navigator.mediaDevices
			.getUserMedia({ video: true })
			.then((stream) => {
				this.video.srcObject = stream;
				this.video.play();
			})
			.catch((err) => console.error("Error accessing camera:", err));

		this.captureButton.addEventListener("click", () => this.capture());
	}

	capture() {
		this.canvas.width = this.video.videoWidth;
		this.canvas.height = this.video.videoHeight;
		this.canvas.getContext("2d").drawImage(this.video, 0, 0);

		const imageDataUrl = this.canvas.toDataURL("image/png");
		this.downloadButton.href = imageDataUrl;
		this.downloadButton.download = "captured-photo.png";
		this.downloadButton.style.display = "block";
	}
}

export const installCapturePhoto = (options) => new CapturePhoto(options);

export default CapturePhoto;
