import { common, grey } from '@material-ui/core/colors'

const headerStyle = (theme) => ({
  cardHeader: {
    display: 'flex',
    alignItems: 'stretch',
    backgroundColor: common.white,
    boxShadow: '0 2px 4px rgba(10, 10, 10, .1)',
  },
  cardHeaderTitle: {
    display: 'inline',
    alignItems: 'center',
    color: grey[900],
    textAlign: 'center',
    fontSize: theme.spacing(2.5),
    padding: theme.spacing(1.5),
    width: '100%',
  },
})

export default headerStyle
