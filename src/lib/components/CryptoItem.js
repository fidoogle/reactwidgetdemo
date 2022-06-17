import React from 'react';

const CryptoItem = (props) => {
  const colors = {
    dark: '#1e2329',
    light: '#fafafa',
    success: '#03a66d',
    danger: '#cf304a'
  }
  const styles = {
    name: {
      color: colors.light,
      fontSize: '16px',
      fontWeight: 600,
    },
    fullname: {
      color: '#b6b6b6',
      fontSize: '14px',
      marginTop: '3px',
      fontWeight: 500,
    },
    item: {
      display: "flex",
      alignItems: "center",
      padding: "12px 0",
      borderBottom: "1px solid #949191",
    },

    container: {
      padding: '5px',
    },
    icon: {
      height: '24px',
      width: '24px',
      marginRight: '14px',
    },
    priceContainer: {
      marginLeft: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    price: {
      fontWeight: 500,
      color: colors.light,
      fontSize: '16px',
    },
    priceChangeDanger: {
      marginTop: '3px',
      color: colors.danger
    },
    priceChangeSuccess: {
      marginTop: '3px',
      color: colors.success
    }
  }

  return (
    <div style={styles.item}>
      <img src={props.ImageUrl} style={styles.icon} alt={props.Name} />
      <div style={styles.container}>
        <div style={styles.name}>{props.Name}</div>
        <div style={styles.fullname}>{props.FullName}</div>
      </div>
      <div style={styles.priceContainer}>
        <div style={styles.price}>{props.Price}</div>
        <div
          style={parseInt(props.Change24hr) < 0 ? styles.priceChangeDanger : styles.priceChangeSuccess}
        >
          {props.Change24hr}
        </div>
      </div>
    </div>
  )
};

export default CryptoItem;