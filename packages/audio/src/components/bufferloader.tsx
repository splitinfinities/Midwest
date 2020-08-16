export class BufferLoader {
	context: AudioContext;
	urlList: Array<string>;
	onload: Function;
	bufferList: Array<AudioBuffer>;
	loadCount: number;

	constructor (context: AudioContext, urlList: Array<string>, callback: Function) {
		this.context = context;
		this.urlList = urlList;
		this.onload = callback;
		this.bufferList = new Array();
		this.loadCount = 0;
	}

	loadBuffer (url, index) {
		// Load buffer asynchronously
		var request = new XMLHttpRequest();
		request.open("GET", url, true);
		request.responseType = "arraybuffer";


		request.onload = () => {
			// Asynchronously decode the audio file data in request.response
			this.context.decodeAudioData(
				request.response, (buffer) => {
					if (!buffer) {
						alert('error decoding file data: ' + url);
						return;
					}

					this.bufferList[index] = buffer;

					if (++this.loadCount == this.urlList.length) {
						this.onload(this.bufferList);
					}
				}, (error) => {
					console.error('decodeAudioData error', error);
				});
		}

		request.onerror = function() {
			alert('BufferLoader: XHR error');
		}

		request.send();
	}

	load() {
		this.urlList.forEach((url, i) => {
			this.loadBuffer(url, i);
		})
	}
}
