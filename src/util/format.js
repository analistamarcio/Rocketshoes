/**
export const format = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format();

or...
 */

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
