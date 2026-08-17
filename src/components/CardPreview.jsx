import { getQrUrl } from '../lib/qr'
export default function CardPreview({ data, template, cardRef }) {
  const qr = getQrUrl(data.link || 'https://google.com')
  const styles = {
    minimal: 'bg-white text-zinc-900',
    bold: 'bg-zinc-900 text-white border-[6px] border-yellow-400',
    cafe: 'bg-[#FFF8ED] text-[#3d2b1f] border border-orange-200'
  }
  return (
    <div className="w-full flex justify-center">
      <div ref={cardRef} className={`w-[340px] aspect-[1/1.41] rounded-[32px] p-8 flex flex-col justify-between shadow-2xl ${styles[template]}`}>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest uppercase">{data.name || 'TU COMERCIO'}</div>
          <h2 className="mt-6 text-[28px] leading-[0.95] font-black tracking-tight">{data.cta || '¿Te gustó?'}</h2>
          <div className="flex justify-center gap-1 mt-3 text-yellow-400 text-xl">★★★★★</div>
        </div>
        <div className="bg-white rounded-[24px] p-4 shadow-inner flex justify-center">
          <img src={qr} alt="QR" className="w-full h-auto rounded-xl" crossOrigin="anonymous" />
        </div>
        <div className="text-center space-y-2">
          <p className="text-[11px] font-bold tracking-widest uppercase opacity-60">Escaneá y dejá tu reseña en 10 segundos</p>
          <p className="text-[10px] opacity-40">Desarrollado por Studioveco.netlify.app</p>
        </div>
      </div>
    </div>
  )
}
