const formatCurrency = (value) => {
  const formatter = Intl.NumberFormat('USD', {
    style: 'decimal',
    currency: 'USD',
  })

  return !!value ? formatter.format(value) : null
}

export { formatCurrency }
