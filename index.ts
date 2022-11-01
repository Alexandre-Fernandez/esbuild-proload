import load from "@proload/core"
import typescript from "@proload/plugin-typescript"

async function run() {
	load.use([typescript])
	const result = await load("test")
	console.log(result)
}
run()
