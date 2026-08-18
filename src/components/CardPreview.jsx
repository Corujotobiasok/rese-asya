import { QRCodeSVG } from 'qrcode.react'

export default function CardPreview({ data, template, cardRef }) {
  const safeLink = data?.link || 'https://google.com'
  const name = data?.name || 'TU COMERCIO'
  const cta = data?.cta || '¿Te gustó? ¡Dejanos 5 estrellas!'

  const templates = {
    minimal: {
      card: 'bg-white text-zinc-900 border border-zinc-200',
      pill: 'bg-zinc-900 text-white',
      stars: 'text-zinc-900',
      footer: 'text-zinc-400',
      qrContainer: 'bg-white border border-zinc-100',
      instruction: 'text-zinc-500',
    },

    bold: {
      card: 'bg-zinc-950 text-white border border-yellow-400',
      pill: 'bg-yellow-400 text-zinc-950',
      stars: 'text-yellow-400',
      footer: 'text-zinc-500',
      qrContainer: 'bg-white',
      instruction: 'text-zinc-400',
    },

    cafe: {
      card: 'bg-[#FFFBF2] text-[#3D2B1F] border border-[#F5E6CC]',
      pill: 'bg-[#3D2B1F] text-[#FFFBF2]',
      stars: 'text-[#FF8A00]',
      footer: 'text-[#A68B6A]',
      qrContainer: 'bg-white border border-[#F5E6CC]',
      instruction: 'text-[#8C765E]',
    },
  }

  const t = templates[template] || templates.minimal

  return (
    <div className="w-full flex justify-center p-4 sm:p-6">
      <div
        ref={cardRef}
        className={`
          relative
          w-full
          max-w-[420px]
          aspect-[1/1.414]
          rounded-2xl
          p-7
          sm:p-8
          flex
          flex-col
          justify-between
          overflow-hidden
          shadow-[0_20px_80px_-20px_rgba(0,0,0,0.30)]
          ${t.card}
        `}
      >

        {/* =========================
            HEADER
        ========================== */}
        <div className="text-center">

          {/* COMERCIO */}
          <div className="flex justify-center">
            <div
              className={`
                inline-flex
                items-center
                justify-center
                max-w-full
                px-4
                py-2
                rounded-full
                text-xs
                font-black
                tracking-[0.14em]
                uppercase
                truncate
                ${t.pill}
              `}
            >
              {name}
            </div>
          </div>

          {/* CTA */}
          <h2
            className="
              mt-7
              text-3xl
              sm:text-4xl
              leading-[0.95]
              font-black
              tracking-tight
              text-balance
            "
          >
            {cta}
          </h2>

          

        </div>


        {/* =========================
            QR CODE
        ========================== */}
        <div className="w-full flex flex-col justify-center items-center my-6">

          <div
            className={`
              flex
              items-center
              justify-center
              rounded-2xl
              p-4
              shadow-sm
              ${t.qrContainer}
            `}
          >

            <QRCodeSVG
              value={safeLink}
              size={190}
              level="H"
              bgColor="#FFFFFF"
              fgColor="#000000"
              includeMargin={false}
            />

          </div>
          
          {/* GOOGLE REVIEWS */}
          <div className="flex justify-center mt-1 mb-[-40px]">
            <img
              src="/google.png"
              alt="Google Reviews - 5 estrellas"
              className="
                w-[100px]
                sm:w-[50px]
                h-auto
                object-contain
                select-none
              "
              draggable="false"
            />
          </div>

        </div>


        {/* =========================
            FOOTER
        ========================== */}
        <div className="text-center">

          {/* INSTRUCCIÓN */}
          <p
            className={`
              text-xs
              sm:text-sm
              font-bold
              tracking-[0.12em]
              uppercase
              ${t.instruction}
            `}
          >
            Escaneá y dejá tu reseña
          </p>

          {/* SEPARADOR */}
          <div
            className="
              h-px
              w-full
              bg-current
              opacity-10
              my-4
            "
          />

          {/* BRAND */}
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