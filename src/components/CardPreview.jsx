import { QRCodeSVG } from 'qrcode.react'

export default function CardPreview({ data, template, cardRef }) {
  // =========================
  // DATOS
  // =========================
  const safeLink = data?.link?.trim() || 'https://google.com'
  const name = data?.name?.trim() || 'TU COMERCIO'
  const cta =
    data?.cta?.trim() || '¿Te gustó? ¡Dejanos 5 estrellas!'
  const logo = data?.logo || null

  // =========================
  // PLANTILLAS
  // =========================
  const templates = {
    minimal: {
      card: 'bg-white text-zinc-900 border border-zinc-200',
      footer: 'text-zinc-400',
      qrContainer: 'bg-white border border-zinc-100',
      instruction: 'text-zinc-500',
      logoFallback: 'text-zinc-900',
    },

    bold: {
      card: 'bg-zinc-950 text-white border border-yellow-400',
      footer: 'text-zinc-500',
      qrContainer: 'bg-white',
      instruction: 'text-zinc-400',
      logoFallback: 'text-white',
    },

    cafe: {
      card: 'bg-[#FFFBF2] text-[#3D2B1F] border border-[#F5E6CC]',
      footer: 'text-[#A68B6A]',
      qrContainer: 'bg-white border border-[#F5E6CC]',
      instruction: 'text-[#8C765E]',
      logoFallback: 'text-[#3D2B1F]',
    },
  }

  const t = templates[template] || templates.minimal

  return (
    <div className="w-full flex justify-center p-4 sm:p-6">

      {/* =========================
          TARJETA
      ========================== */}
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

          {/* =========================
              LOGO / NOMBRE
          ========================== */}
          <div
            className="
              flex
              justify-center
              items-center
              px-4
              min-h-[60px]
            "
          >

            {logo ? (

              /* LOGO */
              <img
                src={logo}
                alt={name}
                className="
                  max-w-[180px]
                  max-h-[65px]
                  w-auto
                  h-auto
                  object-contain
                  select-none
                "
                draggable="false"
              />

            ) : (

              /* NOMBRE SI NO HAY LOGO */
              <div
                className={`
                  max-w-full
                  text-center
                  text-sm
                  sm:text-base
                  font-bold
                  tracking-[0.08em]
                  leading-tight
                  break-words
                  ${t.logoFallback}
                `}
              >
                {name}
              </div>

            )}

          </div>


          {/* =========================
              CTA
          ========================== */}
          <h2
            className="
              mt-4
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
            QR + GOOGLE
        ========================== */}
        <div
          className="
            w-full
            flex
            flex-col
            justify-center
            items-center
            my-5
          "
        >

          {/* QR */}
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


          {/* =========================
              GOOGLE REVIEWS
          ========================== */}
          <div
            className="
              flex
              justify-center
              items-center
              mt-1
              -mb-3
            "
          >

            <img
              src="/google.png"
              alt="Google Reviews - 5 estrellas"
              className="
                w-[105px]
                sm:w-[140px]
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