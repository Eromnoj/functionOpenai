import { getColorTools, getMusicTools } from "../utils/tools/openIATools.js";
import { functionRequestIA } from "../utils/requests/openIARequests.js";
import manageResponse from "../utils/functions/onpenIAFunctions.js";

export const getOpenAI = async (req, res) => {
  res.status(200).send({ message: "Hello World!" });
}

export const guessColor = async (req, res) => {
  let messages = [
    {
      role: "system",
      content: "Tu es un assitant qui me donne la couleur d'un objet depuis l'utilisation d'une fonction. Tu ne sors pas de ce cadre. Ne fais pas de supposition quant à ce que peuvent être les objets. Tu ne peux pas non plus me poser de question. Tu dois te contenter de répondre à mes questions.",
    }
  ]

  messages.push({
    role: "user",
    content: req.body.message
  })

  const tools = getColorTools

  const functionData = await functionRequestIA({messages, tools})
  const functionResponse = await manageResponse(functionData)
  res.status(200).send({response: functionResponse});
}


export const getMusic = async (req, res) => {
  let messages = [
    {
      role: "system",
      content: "Tu es un assitant qui me donne les notes et leur type (blanche, noire, croche, etc) des 10 à 15 secondes les plus reconnaissables d'un air de musique Le morceau peut être défini par son titre original où bien par le contexte dans lequel il a été rendu célébre (film, serait, spectacle). Tu dois respecter le tempo et la partition originale. Lorsque je te demande de jouer, ou que je veux entendre (ou n'importe quelle expression se rapportant à l'écoute où au fait de jouer de la musique) un air, une musique, un titre ou quoi que ce soit qui peut être musical, tu me renvoies la partition de cette manière: Les notes doivent être dans un array au format anglosaxon et le plus précis possible, sous ce format là : C0 C#0 Db0 D0 D#0 Eb0 E0 F0 F#0 Gb0, etc et allant jusqu'à G8 G#8 A8 A#8 B8... Les silences seront représentés par le symbole X. Leur type sera indiquer en milliseconde pour chaque note et silence dans un autre array d'entier, la durée en milliseconde de chaque note devra respecter le tempo de partition originale. Ne fais pas de supposition quant à ce que peuvent être les notes, tu dois me donner le morceau de partition exact qui correspond à ma demande. Je veux un minimum de 10 secondes de musique et un maximum de 15 secondes.  Il doit y avoir exactement le même nombre d'items dans les deux arrays. Tu ne peux pas non plus me poser de question. Tu dois te contenter de répondre à mes questions. tu ne sors pas de ce cadre. Tu es le plus précis possible.",
    }
  ]

  messages.push({
    role: "user",
    content: req.body.message
  })

  const tools = getMusicTools

  const functionData = await functionRequestIA({messages, tools})
  const functionResponse = await manageResponse(functionData)
  res.status(200).send({response: functionResponse});
}
