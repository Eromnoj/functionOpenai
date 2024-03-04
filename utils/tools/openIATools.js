export const getColorTools = [
  {
    "type": "function",
    "function": {
      "name": "giveColor",
      "description": "Get the color of an object",
      "parameters": {
        "type": "object",
        "properties": {
          "object": {
            "type": "string",
            "description": "The object to get the color from",
          }
        },
        "required": ["object"],
      },
    }
  }
]

export const getMusicTools = [
  {
    "type": "function",
    "function": {
      "name": "getMusic",
      "description": "Return the notes of a music and the rythm of the notes",
      "parameters": {
        "type": "object",
        "properties": {
          "notes": {
            "type": "array",
            "description": "The notes of the music in a string array",
            "items": {
              "type": "string"
            },
          },
          "tempo": {
            "type": "array",
            "description": "The rythm in milliseconds for each note and silence",
            "items": {
              "type": "integer"
            },
          }
        },
        "required": ["notes", "tempo"],
      },
    }
  }
]