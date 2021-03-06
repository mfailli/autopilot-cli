const ora = require('ora')
const ta = require('../lib/twilio-assistant');

module.exports = async (args) => {

  if (!args.hasOwnProperty('assistant')) {
    console.log(`The '--assistant' argument is required`)
    return
  }
  //const spinner = ora().start()

  try {
    const sid = args.assistant,
          profile = args.credentials || "default";

    const result = await ta.resetAssistant(sid,profile)

    //spinner.stop()
    //TODO: maybe include name of deleted assistant
    console.log(`\nReset assistant with SID: ${args.assistant}`)

  } catch (err) {
    //spinner.stop()
    
    console.error(`ERROR: ${err}`)
  }
}