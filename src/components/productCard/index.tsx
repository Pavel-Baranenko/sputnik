import { Product } from '../../types'
import styles from './index.module.scss'




function getRegionalPrice(price: number, currency: string) {
  return Intl.NumberFormat("en-EN", { style: "currency", currency: currency }).format(
    price,
  )
}


export default function ProductCard({ title, origin, price, currency, imageUrl }: Omit<Product, 'id'>) {


  return (
    <div className={styles.product}>
      <img src={imageUrl} alt={title} />
      <div className={styles.product__info}>
        <div className={styles.product__title}>{title}</div>
        <div className={styles.product__origin}>{origin}</div>
        <div className={styles.product__bottom}>
          <strong className={styles.product__price}>{getRegionalPrice(price, currency)}</strong>
          <button className={styles.product__btn}>Купить</button>
        </div>
      </div>
    </div>
  )
}
