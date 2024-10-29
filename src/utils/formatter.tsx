export function formatCurrencyToIdr(amount:number):string {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount).replace(/\D00(?=\D*$)/, '');
}
