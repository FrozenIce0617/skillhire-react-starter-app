import { common, grey } from '@material-ui/core/colors'

const mainStyle = (theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: grey[900],
    minHeight: '100vh',
    flexDirection: 'column',
    fontSize: theme.spacing(2),
    color: common.white,
    textAlign: 'center',
  },
  card: {
    backgroundColor: common.white,
    color: grey[900],
    position: 'relative',
    width: '40vw',
    minWidth: '400px',
  },
})

export default mainStyle
