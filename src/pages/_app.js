import "@/styles/globals.css";
import {createTheme, MantineProvider} from "@mantine/core";

export default function App({Component, pageProps}) {
	const theme = createTheme({})
	
	return <MantineProvider theme={theme}>
		<Component {...pageProps} />
	</MantineProvider>
}
