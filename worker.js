addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Check if redirects are enabled via environment variable
  if (REDIRECT_ENABLED === "true") {
    const url = new URL(request.url)
    
    if (url.hostname === 'efeindonesia.id' || url.hostname.endsWith('.efeindonesia.id')) {
      if (url.hostname !== 'efeindonesia.com') {
        const searchParams = url.search
        const newUrl = `https://efeindonesia.com/${searchParams}`
        return Response.redirect(newUrl, 301)
      }
    }
  }
  
  // If redirects are disabled or no redirect condition matched
  return fetch(request)
}