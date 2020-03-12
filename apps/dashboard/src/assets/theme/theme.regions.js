export default {
  container: {
    bg: 'paper',
    color: 'text',
    minHeight: '100vh',
    overflow: 'hidden',
    flex: 1,
  },
  header: {
    bg: 'paper',
    boxShadow: 0,
    color: 'text',
    borderBottom: '1px solid #ececec',
    px: 4,
    py: 2,
    zIndex: 100000,
  },
  aside: {
    bg: '#27359e',
    boxShadow: 1,
    color: 'white',
    flex: [3, 3, 4, 3],
    zIndex: 1000,
  },
  main: {
    flex: 15,
    overflow: 'auto',
    zIndex: 50,
  },
  footer: {
    bg: 'paper',
    color: 'text',
    boxShadow: 0,
    px: 4,
    py: 3,
    zIndex: 100,
  },
};
