addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    
    // Check if it's the domain we want to redirect
    if (url.hostname === 'efeindonesia.id' || url.hostname.endsWith('.efeindonesia.id')) {
      // Skip if it's already the target domain
      if (url.hostname !== 'page.efeindonesia.id') {
        // Get only the query parameters
        const searchParams = url.search
        
        // Create the new URL with the target domain and query parameters
        const newUrl = `https://page.efeindonesia.id/${searchParams}`
        
        return Response.redirect(newUrl, 301)
      }
    }
    
    // Pass through for non-matching requests
    return fetch(request)
  }