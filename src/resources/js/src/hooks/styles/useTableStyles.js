import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative'
  },
  actions: {
    textAlign: 'left',
    marginTop: 10
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  searchInput: {
    fontSize: 16,
    width: '100%',
    margin: 0,
    height: 35,
    border: 'none',
    "& input": {
      padding: '0px !important',
      marginTop: '8px',
    },
    "& fieldset": {
      border: 'none !important'
    },
    color: '#515151'
  },
  filters:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    padding: '15px 20px',
    borderBottom: '1px solid #eee',
    transition: '0.3s',
    boxSizing: 'border-box'
  },
  filterSections: {
    display: 'flex',
    justifyContent: 'space-between',

    borderBottom: '1px solid #eee',
    transition: '0.3s',
    boxSizing: 'border-box'
  },
  hide: {
    opacity: 0,
    height: 0,
    padding: '0px 15px',
    position: 'absolute',
    zIndex: 0,
    width: '100%'
  },
  show: {
    opacity: 1,
    padding: '15px 15px',
    position: 'relative'
  },
  filterIcon: {
    fontSize: '20px !important',
    color: '#878787',
    margin: '0px 7px'
  },
  filterButton: {
    width: 50,
    textAlign: 'right'
  },
  input:{
    margin: 0,
  },
  list: {
    width: 550,
    padding: '20px'
  },
  basis: {
    lineHeight: '30px',
    textAlign: 'left',
    padding: '0px',
    minWidth: '20px !important',
    marginRight: 10,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 500,
    color: theme.palette.primary.main
  },
  notFound: {
    height: 500,
    display: 'flex',
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#797979',
    "& h4": {
      color: '#626262',
      margin: 0,
      fontSize: 25,
      fontWeight: 400
    },
    "& span": {
      fontSize: 50
    },
    "& p": {
      marginTop: 7,
      fontSize: 14
    }
  },
  fab: {
    position: 'fixed',
    bottom: '50px',
    right: '50px'
  },
  modal: {
    maxWidth: 'auto'
  },
  topActions: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    '& button': {
      marginRight: 10
    }
  },
  createBtn: {
    '& span.material-icons': {
      fontSize: 16,
      marginRight: 5
    }
  }
}));

const useTableStyles = () => {
  return useStyles();
}

export default useTableStyles;
