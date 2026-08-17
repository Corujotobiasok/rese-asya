export const getQrUrl = (data) => `https://api.qrserver.com/v1/create-qr-code/?size=800x800&data=${encodeURIComponent(data)}&qzone=1&format=png&ecc=H`
export const downloadImage = async (url, filename) => {
  const res = await fetch(url);
  const blob = await res.blob();
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}
