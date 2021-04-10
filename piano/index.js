var synth = T("OscGen", {
	wave: "saw",
	mul: 0.25,
}).play()

function playNote(freq) {
	console.log(freq)
	synth.noteOnWithFreq(Number(freq), 100)
}
const keys = document.getElementsByClassName("key")
var i = 0
for (let el of keys) {
	i++
	el.addEventListener("click", () => playNote(el.attributes.f.value))
}
document.body.addEventListener("keypress", (e) =>
	e.key < 8 ? playNote(keys[e.key].attributes.f.value) : console.log(i),
)
