# ReviewCraft - React Real Project

Proyecto React + Vite + Tailwind. Mini SaaS generador de QR de reseñas.

## Instalar
npm install
npm run dev

## Build
npm run build

## Estructura
src/
  components/
    GeneratorForm.jsx -> formulario con validación
    CardPreview.jsx -> carta A5 con 3 plantillas
  lib/qr.js -> util QR
  App.jsx -> layout principal + logica de descarga canvas HD

No depende de HTML raro, es 100% React.

Para producción: reemplazar getQrUrl por qrcode.react y html2canvas para PDF.
