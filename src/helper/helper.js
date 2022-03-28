export const paginationParams = (params) => {
  const val = Object.values(params).join(',').split('&');

  return {
    page: val[0],
    currPages: val[1],
  }
}

export const main = {
  width: '100%',
  minHeight: 'calc(100vh - 64px)',
  padding: '24px',
  backgroundColor: '#E7EBF0',
};

export const titleCard = {
  boxShadow: ' 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  backgroundColor: '#fff',
  padding: '10px',
  borderRadius: '4px 4px 0 0',
};

export const imgCard = {
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  display: 'block',
  width: '100%',
};

export const skeletonStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '0 0 4px 4px',
};

export const paginationBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0'
};

export const spinnerBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const iconBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '10px',
}

export const imgBox = {
  width: '100%',
  maxWidth: '50%'
}

export const text = {
  color: '#fff',
  fontSize: '20px'
}
