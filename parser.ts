import { default as $peggy } from 'npm:peggy'
const { generate } = $peggy;
const rawCode = new TextDecoder('utf-8').decode(await Deno.readFile('./parser.peggy'));
const parser = generate(rawCode, {
    trace: true
})
export default parser;