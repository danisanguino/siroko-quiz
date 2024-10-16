export async function copyToClipboard() {
  
  const text = document.getElementById("result-code").innerText;

  try {
    await navigator.clipboard.writeText(text);
    document.getElementById("message-copy").innerText = "CÓDIGO COPIADO!";
  } catch (err) {
    document.getElementById("message-copy").innerText = "Error!!";
  }
}