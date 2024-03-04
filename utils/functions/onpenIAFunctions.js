const giveColor = async ({ object }) => {
  switch (object) {
    case "pomme":
      return "rouge"
    case "banane":
      return "jaune"
    case "ciel":
      return "bleu"
    case "feuille":
      return "verte"
    case "clémentine":
      return "orange"
    default:
      return "Je ne connais pas la couleur de cet objet"
  }
}

const getMusic = async ({ notes, tempo }) => {

  const query = {
    length: notes.length,
    notes: notes,
    tempo: tempo
  }

  let response = {}
  await fetch('http://192.168.1.39/playtone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })
  .then(response => response.json())
  .then(data => {
    response = {data, query}
  })
  .catch((error) => {
    response = {error, query}
  });
  return response
}

const manageResponse = async ({ name, params }) => {
  switch (name) {
    case "giveColor":
      return await giveColor(params)
    case "getMusic":
      return await getMusic(params)
    default:
      return "Je ne connais pas cette fonction"
  }
}

export default manageResponse;