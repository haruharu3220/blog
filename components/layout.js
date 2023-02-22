import { Header } from "components/header";
import { Footer } from "components/footer";

export const Layout = ({children}) =>{
    return(
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    )

}