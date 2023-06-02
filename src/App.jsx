import "./App.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Puppies from "./pages/puppies/Puppies";
import Puppy from "./pages/puppy/Puppy";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Wishlist from "./pages/wishlist/Wishlist";
import Login from "./pages/login/Login";
import NotFoundPage from "./pages/404/NotFound";
import AddPuppy from "./pages/addpuppy/AddPuppy";
import Adoptions from "./pages/adoptions/Adoptions";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import MyPuppies from "./pages/mypuppies/MyPuppies";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/puppies",
          element: <Puppies />,
        },
        {
          path: "/puppies/:breed",
          element: <Puppies />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/add-puppy",
          element: <AddPuppy />,
        },
        {
          path: "/my-adoptions",
          element: <Adoptions />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/my-messages",
          element: <Messages />,
        },
        {
          path: "/my-puppies",
          element: <MyPuppies />,
        },
        {
          path: "/puppy/:id",
          element: <Puppy />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <div className="non-responsive">
        <h1>Hey you!</h1>
        <p>
          This website is not responsive yet because I get lazy when it comes to
          responsivity T-T. Only view on 1440px wide screens.
        </p>
      </div>
    </>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home/>}></Route>
    //     <Route path="/home" element={<Home/>}></Route>
    //     <Route path="/puppies" element={<Puppies/>}></Route>
    //     <Route path="/shop" element={<Shop/>}></Route>
    //     <Route path="/blog" element={<Blog/>}></Route>
    //     <Route path="/about" element={<About/>}></Route>
    //     <Route path="/contact" element={<Contact/>}></Route>
    //     <Route path="/wishlist" element={<Wishlist/>}></Route>
    //     <Route path="/login" element={<Login/>}></Route>
    //     <Route path="/puppies/:id" element={<Puppy/>}></Route>
    //     <Route path="/breed/:breed" element={<Archive/>}></Route>
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
