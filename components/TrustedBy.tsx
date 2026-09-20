import Image from 'next/image'
import { clients } from '@/lib/clients'

export default function TrustedBy() {
  return (
    <section className="section-space border-t border-border">
      <div className="flex flex-wrap items-center justify-between gap-10">
        <h2 className="font-serif text-3xl sm:text-4xl">Ils nous ont fait confiance.</h2>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          {clients.map(client => (
            <Image
              key={client.name}
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="h-12 w-auto sm:h-14"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
