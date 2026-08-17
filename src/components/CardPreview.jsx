import { QRCodeSVG } from 'qrcode.react'

export default function CardPreview({ data, template, cardRef }) {
  const styles = {
    minimal: 'bg-white text-zinc-900',
    bold: 'bg-zinc-900 text-white border- border-yellow-400',
    cafe: 'bg-[#FFF8ED] text-[#3d2b1f] border border-orange-200'
  }

  const safeLink = data.link || 'https://google.com'
  const name = data.name || 'TU COMERCIO'
  const cta = data.cta || '¿Te gustó? ¡Dejanos 5 estrellas!'

  return (
    <div className="w-full flex justify-center">
      <div
        ref={cardRef}
        className={`w- aspect-[1/1.414] rounded- p-8 flex flex-col justify-between shadow-2xl ${styles[template]}`}
      >
        <div className="text-center">
          <div className="w-full flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 text- font-bold tracking-widest uppercase">
              {name}
            </div>
          </div>
          <h2 className="mt-6 text-[46px] leading-[0.95] font-black tracking-tight break-words">
            {cta}
          </h2>
          <div className="flex justify-center gap-1 mt-3 text-yellow-400 text-xl">★★★★★</div>
        </div>

        <div className="w-full flex justify-center">
          <div className="bg-white rounded-xl p-2 shadow-inner flex justify-center items-center w-fit h-fit">
            <QRCodeSVG
              value={safeLink}
              size={300}
              level="H"
            />
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text- font-bold tracking-widest uppercase opacity-60">
            ESCANEÁ Y DEJÁ TU RESEÑA EN 10 SEGUNDOS
          </p>
          <p className="text-[12px] opacity-40">Desarrollado por Studioveco.netlify.app</p>
        </div>
      </div>
    </div>
  )
}