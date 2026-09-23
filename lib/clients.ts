export type Client = {
  name: string
  logo: string | null
  width: number
  height: number
}

export const clients: Client[] = [
  {
    name: 'Versus Finances Tech',
    logo: '/logos/versus-finances-tech.png',
    width: 640,
    height: 181,
  },
  {
    name: 'Crpay',
    logo: null,
    width: 640,
    height: 181,
  },
]
