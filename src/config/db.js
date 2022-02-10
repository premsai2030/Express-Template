const development = {
  "url": "mongodb://localhost:27017/person"
}

const production = {
  "url": "place your own url here"
}

export default process.env.NODE_ENV ? production : development;
