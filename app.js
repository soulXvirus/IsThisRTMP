const spawn = require('child_process').spawn;

const keyRTMP = process.env.KEYRTMP //You Can Change the RTMP url as per your need. For Ex: Telegram, YouTube, Twitch etc.

const urlSrc = process.env.URLSRC // Your Video File you want To loop through.

let ffmpeg = spawn('ffmpeg', ['-re', '-stream_loop', '-1', '-i', `${ urlSrc }`, '-c:v', 'libx264', '-preset', 'veryfast',
	'-framerate', '60', '-maxrate', '3000k', '-bufsize', '6000k', '-pix_fmt', 'yuv420p', '-g', '50', '-c:a', 'aac', '-b:a', '128k',
	'-ac', '2', '-ar', '44100', '-f', 'flv', `${ keyRTMP }`
]);
ffmpeg.on('exit', (statusCode) => {
	if (statusCode === 0) {
		console.log('Stream Completed')
	}
})

ffmpeg
	.stderr
	.on('data', (task) => {
		console.log('Task:', new String(task))
	})
