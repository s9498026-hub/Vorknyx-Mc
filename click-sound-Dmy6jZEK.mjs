//#region node_modules/.nitro/vite/services/ssr/assets/click-sound-Dmy6jZEK.js
var ctx = null;
/** Light robotic "pipik" blip played on clicks. */
function playClick() {
	if (typeof window === "undefined") return;
	try {
		const AC = window.AudioContext ?? window.webkitAudioContext;
		if (!AC) return;
		ctx ??= new AC();
		if (ctx.state === "suspended") ctx.resume();
		const now = ctx.currentTime;
		const blip = (start, freq, dur, gainPeak) => {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "square";
			osc.frequency.setValueAtTime(freq, now + start);
			osc.frequency.exponentialRampToValueAtTime(freq * 1.6, now + start + dur);
			gain.gain.setValueAtTime(1e-4, now + start);
			gain.gain.exponentialRampToValueAtTime(gainPeak, now + start + .008);
			gain.gain.exponentialRampToValueAtTime(1e-4, now + start + dur);
			osc.connect(gain).connect(ctx.destination);
			osc.start(now + start);
			osc.stop(now + start + dur + .02);
		};
		blip(0, 880, .05, .05);
		blip(.055, 1450, .06, .035);
	} catch {}
}
//#endregion
export { playClick as t };
