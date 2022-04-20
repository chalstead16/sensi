const getQuotes = () => {
  return fetch('https://api.goprogram.ai/inspiration')
  .then(response => {
    if(!response.ok) {
      throw new Error('hmm..something went wrong...')
    } else {
      return response.json()
    }
  })
}

export default getQuotes;