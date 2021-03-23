const cutThousand = (num: number) => Math.floor(num/1000)
const cutThousandWithDot = (num: number) => {
  const thousand = Math.floor(num/1000)
  const rest = String(num / 1000).split('.')[1].charAt(0)
  return `${thousand}.${rest}`
}

export const shortBigNumber = (num: number) => {
  if (num > 2000) return `${cutThousand(num)}K`
  else if (num > 1000) return `${cutThousandWithDot(num)}K`
  else String(num)
}
