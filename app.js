
const min = 10
const max = 70

const word = big => {
	const alpha = "abcdefghijklmnopqrstuvwxyz-1234567890 "
	let w = ""
	for(let i=0; i<big; i++){
		w += alpha.substr(Math.floor(Math.random()*alpha.length),1)
	}
	return w
}

const run = async () => {
	const str = word(10+(Math.floor(Math.random()*max)))
	console.log(str)
	await setTimeout(run, 50+Math.floor(Math.random()*400))
}
run()
