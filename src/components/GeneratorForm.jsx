export default function GeneratorForm({
  data,
  setData,
  template,
  setTemplate,
}) {
  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0]

    if (!file) return

    // Validar tipo
    const allowedTypes = [
      'image/png',
      'image/jpeg',
      'image/webp',
      'image/svg+xml',
    ]

    if (!allowedTypes.includes(file.type)) {
      alert('Por favor, subí un logo PNG, JPG, WEBP o SVG.')
      return
    }

    // Limitar tamaño a 3 MB
    if (file.size > 3 * 1024 * 1024) {
      alert('El logo no puede superar los 3 MB.')
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      setData({
        ...data,
        logo: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  const removeLogo = () => {
    setData({
      ...data,
      logo: null,
    })
  }

  return (
    <div className="space-y-6">

      {/* =========================
          IDENTIDAD DEL COMERCIO
      ========================== */}
      <div>
        <label className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold">
          Nombre del comercio
        </label>

        <input
          value={data.name || ''}
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
          placeholder="Ej: Studio Veco"
          className="
            mt-2
            w-full
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            px-5
            py-4
            text-white
            outline-none
            focus:border-yellow-400
            transition
          "
        />
      </div>


      {/* =========================
          LOGO
      ========================== */}
      <div>

        <label className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold">
          Logo del comercio
        </label>

        {!data.logo ? (
          <label
            className="
              mt-2
              w-full
              min-h-[120px]
              border-2
              border-dashed
              border-zinc-800
              hover:border-yellow-400
              rounded-2xl
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              bg-zinc-900/50
              hover:bg-zinc-900
              transition
              group
            "
          >

            {/* ICONO */}
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-zinc-800
                group-hover:bg-yellow-400
                flex
                items-center
                justify-center
                text-zinc-400
                group-hover:text-zinc-950
                transition
                mb-3
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>

            <span className="text-sm font-bold text-zinc-300">
              Subir logo
            </span>

            <span className="text-xs text-zinc-600 mt-1">
              PNG, JPG, WEBP o SVG · Máx. 3 MB
            </span>

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml"
              onChange={handleLogoUpload}
              className="hidden"
            />

          </label>
        ) : (
          <div
            className="
              mt-2
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              p-4
            "
          >

            {/* PREVIEW */}
            <div
              className="
                w-full
                h-[110px]
                rounded-xl
                bg-white
                flex
                items-center
                justify-center
                overflow-hidden
              "
            >
              <img
                src={data.logo}
                alt="Logo del comercio"
                className="
                  max-w-[220px]
                  max-h-[80px]
                  object-contain
                "
              />
            </div>

            {/* ACCIONES */}
            <div className="flex items-center justify-between mt-3">

              <span className="text-xs text-zinc-500">
                Logo cargado correctamente
              </span>

              <button
                type="button"
                onClick={removeLogo}
                className="
                  text-xs
                  font-bold
                  text-red-400
                  hover:text-red-300
                  transition
                "
              >
                Quitar logo
              </button>

            </div>

          </div>
        )}

        <p className="text-xs text-zinc-500 mt-2">
          Si no subís un logo, se utilizará el nombre del comercio.
        </p>

      </div>


      {/* =========================
          LINK GOOGLE
      ========================== */}
      <div>

        <label className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold">
          Link de reseñas Google
        </label>

        <input
          value={data.link || ''}
          onChange={(e) =>
            setData({
              ...data,
              link: e.target.value,
            })
          }
          placeholder="https://g.page/r/Cbm3MROSAFqMEAI/review"
          className="
            mt-2
            w-full
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            px-5
            py-4
            text-white
            outline-none
            focus:border-yellow-400
            transition
          "
        />

        <p className="text-xs text-zinc-500 mt-2">
          Desde Google Business → Recibe opiniones → Copiar link
        </p>

      </div>


      {/* =========================
          CTA
      ========================== */}
      <div>

        <label className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold">
          Mensaje CTA
        </label>

        <input
          value={data.cta || ''}
          onChange={(e) =>
            setData({
              ...data,
              cta: e.target.value,
            })
          }
          placeholder="¿Te gustó? ¡Dejanos 5 estrellas!"
          className="
            mt-2
            w-full
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            px-5
            py-4
            text-white
            outline-none
            focus:border-yellow-400
            transition
          "
        />

      </div>


      {/* =========================
          PLANTILLAS
      ========================== */}
      <div>

        <label className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold">
          Plantilla
        </label>

        <div className="grid grid-cols-3 gap-3 mt-3">

          {[
            {
              id: 'minimal',
              name: 'Minimal',
              color: 'bg-white',
            },
            {
              id: 'bold',
              name: 'Bold',
              color: 'bg-yellow-400',
            },
            {
              id: 'cafe',
              name: 'Café',
              color: 'bg-orange-200',
            },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTemplate(t.id)}
              className={`
                rounded-2xl
                p-4
                border-2
                text-left
                transition
                ${
                  template === t.id
                    ? 'border-yellow-400 bg-zinc-900'
                    : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                }
              `}
            >

              <div
                className={`
                  w-full
                  h-8
                  rounded-lg
                  ${t.color}
                  mb-2
                `}
              />

              <div className="text-sm font-bold">
                {t.name}
              </div>

            </button>
          ))}

        </div>

      </div>

    </div>
  )
}