// Zakodowany w base64 HTML (przykład)
const base64Html = "PGgxPkhlbGxvLCBXb3JsZCE8L2gxPjxwPlRoaXMgaXMgYSBzYW1wbGUgdGV4dCBkZWNvZGVkIGZyb20gYmFzZTY0LjwvcD4=";

// Funkcja do dekodowania base64
function decodeBase64(base64) {
  return decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

// Dekodowanie HTML i wstawianie do strony
document.addEventListener('DOMContentLoaded', () => {
  const decodedHtml = decodeBase64(base64Html);
  document.getElementById('content').innerHTML = decodedHtml;
});
