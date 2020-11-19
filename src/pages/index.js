import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/i18.js"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next";
import { initReactI18next } from 'react-i18next'
import { useEffect, useState } from "react";


export default function index() {
  const [windowLoaded, setWindowLoaded] = useState(undefined);
  useEffect(() => {
    if (!windowLoaded) {
      if (typeof window !== 'undefined' && window) {
        setWindowLoaded(true)
        i18n.use(initReactI18next)
          .init({ lng: localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "en" });
      }
    }
  }, [windowLoaded]);
  const [t, i18n] = useTranslation();
  function switchLang(lang) {
    i18n.use(initReactI18next)
      .init({ lng: lang });

    localStorage.setItem("i18nextLng", lang)
  }
  return (
    <>
      <Layout>
        <SEO title="Inicio" />
        <div>
          <p>{t("heading")}</p>
          <button onClick={() => { switchLang("es") }}>Lenguaje</button>
          <p></p>
        </div>
      </Layout>
    </>
  )
}



