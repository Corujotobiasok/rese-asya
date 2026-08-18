import { QRCodeSVG } from 'qrcode.react'

export default function CardPreview({ data, template, cardRef }) {
  const safeLink = data.link || 'https://google.com'
  const name = data.name || 'TU COMERCIO'
  const cta = data.cta || '¿Te gustó? ¡Dejanos 5 estrellas!'

  const templates = {
    minimal: {
      card: 'bg-white text-zinc-900 border border-zinc-200',
      pill: 'bg-zinc-900 text-white',
      stars: 'text-zinc-900',
      footer: 'text-zinc-400',
      qr: 'bg-white',
    },

    bold: {
      card: 'bg-zinc-950 text-white border border-yellow-400',
      pill: 'bg-yellow-400 text-zinc-950',
      stars: 'text-yellow-400',
      footer: 'text-zinc-500',
      qr: 'bg-white',
    },

    cafe: {
      card: 'bg-[#FFFBF2] text-[#3D2B1F] border border-[#F5E6CC]',
      pill: 'bg-[#3D2B1F] text-[#FFFBF2]',
      stars: 'text-[#FF8A00]',
      footer: 'text-[#A68B6A]',
      qr: 'bg-white',
    },
  }

  const t = templates[template] || templates.minimal

  return (
    <div className="w-full flex justify-center p-6">
      <div
        ref={cardRef}
        className={`
          relative
          w-full
          max-w-[420px]
          aspect-[1/1.414]
          rounded-2xl
          p-8
          flex
          flex-col
          justify-between
          overflow-hidden
          shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]
          ${t.card}
        `}
      >
        {/* HEADER */}
        <div className="text-center">

          <div className="flex justify-center">
            <div
              className={`
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                text-xs
                font-black
                tracking-[0.15em]
                uppercase
                ${t.pill}
              `}
            >
              {name}
            </div>
          </div>

          <h2
            className="
              mt-8
              text-3xl
              sm:text-4xl
              leading-[0.95]
              font-black
              tracking-tight
            "
          >
            {cta}
          </h2>

          <div
            className={`
              flex
              justify-center
              gap-1.5
              mt-5
              text-2xl
              ${t.stars}
            `}
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        {/* QR */}
        <div className="w-full flex justify-center my-8">
          <div
            className={`
              rounded-2xl
              p-4
              shadow-sm
              ${t.qr}
            `}
          >
            <QRCodeSVG
              value={safeLink}
              size={190}
              level="H"
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center">

          <p className="text-xs font-bold tracking-[0.15em] uppercase opacity-60">
            Escaneá y dejá tu reseña
          </p>

          <div className="h-px w-full bg-current opacity-10 my-4" />

          <p
            className={`
              text-xs
              font-medium
              tracking-wide
              ${t.footer}
            `}
          >
            studioveco.netlify.app
          </p>

        </div>
      </div>
    </div>
  )
}