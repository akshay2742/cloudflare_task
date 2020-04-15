let jsondata;
fetch('https://cfw-takehome.developers.workers.dev/api/variants')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .then(function (json) {
        jsondata = json;
    })
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
