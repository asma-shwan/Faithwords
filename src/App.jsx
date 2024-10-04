import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import './index.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

//pages
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import HomeLayout from "./Pages/HomeLayout";
import Surah from "./Pages/Surah";
import Quran from "./Pages/Quran";
import HadithsCategory from "./Pages/HadithsCategory";
import OneCategory from "./Pages/OneCategory";
import Hadith from "./Pages/Hadith";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route element={<HomeLayout />}>
        <Route path="Quran" element={<Quran />} />
        <Route path="Hadiths" element={<HadithsCategory />} />
      </Route>
        <Route path="Hadiths/Category/" element={<OneCategory />} />
        <Route path="Hadiths/Category/Hadith/" element={<Hadith />} />
        <Route path="Quran/Surah/" element={<Surah />} />
    </Route>
  )
);

function App() {
  return (
    <SkeletonTheme baseColor="#E5E4E2" highlightColor="#D1D1D1" >
    <RouterProvider router={router} />
    </SkeletonTheme>
  );
}

export default App;
