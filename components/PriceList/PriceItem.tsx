import React from 'react';

import { PriceItemProps } from '@/components/PriceList/price-list.props';
import styles from './PriceList.module.css';
import { isNumber } from 'util';

const PriceItem: React.FC<PriceItemProps> = ({ isPrice, data }) => {
  return (
    <div className={styles.priceItem}>
      <div className={styles.priceItemHeader}>
        <div className={styles.priceItemTitle}>{data.title}</div>
        {isPrice && <div className={styles.priceItemTitle}>Price</div>}
      </div>
      {data && data.list.map((price: any) => {
        return (
          <React.Fragment key={price.name}>
            <div className={styles.data}>
              <div className={styles.dataText}>{price.name}</div>
              <div className={styles.dataText}>{Number(price.price) ? `${price.price} ₴` : price.price}</div>
            </div>
            {!!price.subName.length && (
              <ul className={styles.subNameList}>
                {price.subName.map((item: any) => (
                  <li className={styles.data} key={item.name}>
                    <div className={styles.dataText}>{item.name}</div>
                    <div className={styles.dataText}>{Number(item.price) ? `${item.price} ₴` : item.price}</div>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        )
      })}
    </div>
  );
};

export default PriceItem;
