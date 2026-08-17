import { useState, useRef, useMemo } from 'react'
import GeneratorForm from './components/GeneratorForm'
import CardPreview from './components/CardPreview'
import html2canvas from 'html2canvas'

export default function App() {
  const [data, setData] = useState({
    name: 'Studio Veco',
    link: 'https://g.page/r/Cbm3MROSAFqMEAI/review',
    cta: '¿Te gusto? ¡Dejanos 5 estrellas!'
  })
  const [template, setTemplate] = useState('bold')
  const cardRef = useRef(null)

  const linkStatus = useMemo(() => {
    const url = data.link || ''
    if (!url) return { type: 'empty' }
    if (url.includes('writereview') || url.includes('/review') || url.includes('g.page/r')) {
      return { type: 'review', ok: true, label: 'Link de reseña perfecto ✓' }
    }
    if (url.includes('maps.app.goo.gl') || url.includes('goo.gl/maps') || url.includes('google.com/maps') || url.includes('maps/place')) {
      return {
        type: 'location',
        ok: false,
        label: 'Link de ubicación (no directo a reseña)',
        help: 'Google Business → Pedir reseñas → Copiar link'
      }
    }
    return { type: 'unknown', ok: true, label: 'Link personalizado' }
  }, [data.link])

  const handleDownload = async () => {
    if (!cardRef.current) return
    const canvas = await html2canvas(cardRef.current, {
      scale: 3,
      backgroundColor: null,
      useCORS: true
    })
    const a = document.createElement('a')
    a.download = `${data.name}-resenasya.png`
    a.href = canvas.toDataURL('image/png')
    a.click()
  }

  const handleConvertHelp = () => {
    window.open('https://business.google.com/', '_blank')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-yellow-400/20 blur-[120px] rounded-full"></div>
      
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex items-center">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded- bg-[#facc15] flex items-center justify-center">
            <span className="font-black text-black text- leading-none">R</span>
          </div>
          <span className="font-extrabold tracking-[-0.02em] text- text-white leading-none">ReseñasYa</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold">Crea tus propias cartas de reseñas</div>
          <h1 className="mt-6 text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.04em] font-black">Convierte<br/>cada cliente<br/><span className="text-yellow-400">en 5 estrellas.</span></h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-[48ch]">Copiá tu link de reseñas de Google y te generamos la carta QR profesional lista para descargar e imprimir en tu local.</p>
          
          <div className="mt-10 bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-[28px] p-7">
            <GeneratorForm data={data} setData={setData} template={template} setTemplate={setTemplate} />
            
            {/* Status del link */}
            {linkStatus.type !== 'empty' && (
              <div className={`mt-4 p-3 rounded-2xl text-xs flex items-start gap-2 ${linkStatus.ok ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-amber-500/10 border border-amber-500/20 text-amber-300'}`}>
                <span>{linkStatus.ok ? '✓' : '⚠'}</span>
                <div className="flex-1">
                  <div className="font-bold">{linkStatus.label}</div>
                  {linkStatus.help && <div className="mt-1 opacity-80 leading-relaxed">{linkStatus.help}</div>}
                </div>
                {!linkStatus.ok && (
                  <button onClick={handleConvertHelp} className="ml-2 px-3 py-1 bg-white text-black rounded-full font-bold text-[11px]">Cómo conseguirlo</button>
                )}
              </div>
            )}

            <div className="mt-8 grid grid-cols-2 gap-3">
              <button onClick={handleDownload} className="bg-yellow-400 text-black rounded-full py-4 font-black hover:bg-yellow-300 transition">Descargar HD PNG</button>
              <button onClick={()=>downloadImage(getQrUrl(data.link), 'qr.png')} className="bg-zinc-800 text-white rounded-full py-4 font-bold border border-zinc-700">Solo QR</button>
            </div>

            <p className="mt-4 text-[11px] text-zinc-500 text-center">
              Link actual: <span className="text-zinc-300 truncate inline-block max-w-[200px] align-bottom">{data.link || 'sin link'}</span> {linkStatus.type==='location' && '(funciona, pero con 1 click extra)'}
            </p>
          </div>

          <div className="mt-8 flex gap-6 text-xs text-zinc-500"><span>✓ Acepta maps.app.goo.gl</span><span>✓ Sin marca de agua en Pro</span><span>✓ Listo para imprenta</span></div>
        </div>

        <div className="lg:sticky lg:top-10">
          <div className="bg-zinc-900/40 backdrop-blur border border-zinc-800 rounded-[36px] p-6">
            <div className="flex justify-between items-center mb-6"><span className="text-xs tracking-widest uppercase font-bold text-zinc-500">Vista previa en vivo · A5</span><span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">● Live</span></div>
            <CardPreview data={data} template={template} cardRef={cardRef} />
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-zinc-900 rounded-2xl p-3"><div className="text-xl font-black">3.2x</div><div className="text-[10px] text-zinc-500 uppercase">Más reseñas</div></div>
              <div className="bg-zinc-900 rounded-2xl p-3"><div className="text-xl font-black">30s</div><div className="text-[10px] text-zinc-500 uppercase">Para crear</div></div>
              <div className="bg-zinc-900 rounded-2xl p-3"><div className="text-xl font-black">0€</div><div className="text-[10px] text-zinc-500 uppercase">Para empezar</div></div>
            </div>
            {linkStatus.type==='location' && (
              <div className="mt-4 text-[11px] text-amber-300/80 bg-amber-500/10 border border-amber-500/10 rounded-xl p-3">
                <b>Tip:</b> Este QR llevará al perfil del negocio. Para que abra DIRECTO el formulario de 5 estrellas, conseguí el link desde business.google.com &gt; Pedir reseñas.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}