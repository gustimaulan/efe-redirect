addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Temporarily bypassing all redirects
  // TESTING MODE: Just passing all requests through
  return fetch(request)
  
  /* Original redirect code (commented out during testing)
  const url = new URL(request.url)
  
  if (url.hostname === 'efeindonesia.id' || url.hostname.endsWith('.efeindonesia.id')) {
    if (url.hostname !== 'page.efeindonesia.id') {
      const searchParams = url.search
      const newUrl = `https://page.efeindonesia.id/${searchParams}`
      return Response.redirect(newUrl, 301)
    }
  }
  
  return fetch(request)
  */
}