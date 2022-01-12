import { createTheme, globalCss } from '@nextui-org/react'

const theme = createTheme({
  type: "light",
  theme: {
    fonts: {
      sans: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
    }
  }
})

const globalStyles = globalCss({
  main: {
    minHeight: "90vh",
    padding: "4rem 0",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  footer: {
    minHeight: "10vh",
    display: "flex",
    flex: 1,
    padding: "1rem 3rem",
    borderTop: "1px solid",
    borderColor: "$blue100",
    justifyContent: "space-between",
    alignItems: "center"
  }
})



export { theme, globalStyles }