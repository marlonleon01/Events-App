import Footer from "../Footer/footer";
import Header from "../Header/header";

export default function MainLayout({children}) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}