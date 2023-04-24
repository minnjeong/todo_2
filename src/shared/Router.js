import { BrowserRouter, Route, Routes } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Home />}/>
                <Route path ="page" element={<Page />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;