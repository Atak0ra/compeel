import Image from 'next/image'
import { clients } from '@/lib/clients'

export default function TrustedBy() {
  return (
    <section id="references" aria-labelledby="references-heading" className="scroll-mt-36 bg-surface">
      <div className="page-shell grid gap-10 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12 lg:py-32">
        <div><p className="mb-5 font-mono text-sm text-metal">01 / Références</p><h2 id="references-heading" className="font-sans text-3xl font-normal">La confiance<br />se construit.</h2></div>
        <div>
          <p className="max-w-xl text-base leading-relaxed text-muted">Des missions d&apos;ingénierie livrées pour VersusFinance et Crpay. Des contextes fintech exigeants — et le carburant qui finance la recherche.</p>
          <div role="group" aria-label="Références clients : VersusFinance et Crpay" className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {clients.map(client => (
            <div key={client.name} className="flex min-h-28 items-center py-6">
            {client.logo ? (
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-auto w-48 max-w-full rounded bg-white p-3 shadow-subtle"
              />
            ) : (
              <span className="text-3xl font-semibold text-foreground">{client.name}</span>
            )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
