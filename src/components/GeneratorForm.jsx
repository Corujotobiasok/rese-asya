export default function GeneratorForm({ data, setData, template, setTemplate }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold">Nombre del comercio</label>
        <input value={data.name} onChange={e=>setData({...data, name:e.target.value})} placeholder="Ej: Studio Veco" className="mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 transition" />
      </div>
      <div>
        <label className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold">Link de reseñas Google</label>
        <input value={data.link} onChange={e=>setData({...data, link:e.target.value})} placeholder="https://g.page/r/Cbm3MROSAFqMEAI/review" className="mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 transition" />
        <p className="text-xs text-zinc-500 mt-2">Desde Google Business → Recibe opiniones → Copiar link</p>
      </div>
      <div>
        <label className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold">Mensaje CTA</label>
        <input value={data.cta} onChange={e=>setData({...data, cta:e.target.value})} className="mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 transition" />
      </div>
      <div>
        <label className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold">Plantilla</label>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {[
            {id:'minimal', name:'Minimal', color:'bg-white'},
            {id:'bold', name:'Bold', color:'bg-yellow-400'},
            {id:'cafe', name:'Café', color:'bg-orange-200'}
          ].map(t=>(
            <button key={t.id} onClick={()=>setTemplate(t.id)} className={`rounded-2xl p-4 border-2 text-left transition ${template===t.id?'border-yellow-400 bg-zinc-900':'border-zinc-800 bg-zinc-900/50'}`}>
              <div className={`w-full h-8 rounded-lg ${t.color} mb-2`}></div>
              <div className="text-sm font-bold">{t.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}