import React from "react"
import { Link } from "gatsby"
import "../components/i18.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { initReactI18next } from "react-i18next"
import { useEffect, useState } from "react"
import "../styles/index.scss"
import JelessiProducts from "../images/venis-products-jelessi.png"
import DeepDive from "../images/image-deepdive.webp"
import VenisLed from "../images/venis-ledlight.png"
import VenisAnalysis from "../images/venis-analysis.png"
import VenisSkincare from "../images/venis-skincare.png"
import Celestolite from "../images/partner-celestolite.png"
import Elevatione from "../images/partner-elevatione.png"
import Jelessi from "../images/partner-jelessi.png"
import Orogold from "../images/partner-orogold.png"
import Predire from "../images/partner-predire.png"
import ComputerImage from "../images/venis-mockups.webp"
import VenisBenefits from "../images/venis-group-benefits.png"
import VenisBenefitsMobile from "../images/image-benefits-center.png"
import IconLuxury from "../images/icons/icon-luxury.png"
import IconLavish from "../images/icons/icon-cost.png"
import IconService from "../images/icons/icon-service.png"
import IconSolution from "../images/icons/icon-solutions.png"
import ResultOne from "../images/result-1.png"
import ResultTwo from "../images/result-2.png"
import ResultThree from "../images/result-3.png"
import ResultFour from "../images/result-4.png"
import GalleryOne from "../images/galery1.png"
import GalleryTwo from "../images/galery2.png"
import GalleryThree from "../images/galery3.png"
import GalleryFour from "../images/galery4.png"
import GalleryFive from "../images/galery5.png"
import PlusIcon from "../images/icons/plus.png"
import LessIcon from "../images/icons/less.png"
import LogoWhite from "../images/venis-logo-white.png"
import WhatsApp from "../images/icons/icon-wa.png"
import Instagram from "../images/icons/icon-ig.png"
import Facebook from "../images/icons/icon-fb.png"
import Share from "../images/icons/icon-share.png"
import Quotes from "../images/comillas.png"

export default function index() {
  const [windowLoaded, setWindowLoaded] = useState(undefined)
  useEffect(() => {
    if (!windowLoaded) {
      if (typeof window !== "undefined" && window) {
        setWindowLoaded(true)
        i18n.use(initReactI18next).init({
          lng: localStorage.getItem("i18nextLng")
            ? localStorage.getItem("i18nextLng")
            : "en",
        })
      }
    }
  }, [windowLoaded])
  const [t, i18n] = useTranslation()
  function switchLang(lang) {
    i18n.use(initReactI18next).init({ lng: lang })
    localStorage.setItem("i18nextLng", lang)
  }
  function showFaq(id) {
    let firstBlock = document.getElementById("faqOne")
    let firstTitle = document.getElementById("titleOne")
    let secondBlock = document.getElementById("faqTwo")
    let secondTitle = document.getElementById("titleTwo")
    let thirdBlock = document.getElementById("faqThree")
    let thirdTitle = document.getElementById("titleThree")
    let fourBlock = document.getElementById("faqFour")
    let fourTitle = document.getElementById("titleFour")
    firstBlock.classList.remove("active")
    firstTitle.classList.remove("active")
    secondBlock.classList.remove("active")
    secondTitle.classList.remove("active")
    thirdBlock.classList.remove("active")
    thirdTitle.classList.remove("active")
    fourBlock.classList.remove("active")
    fourTitle.classList.remove("active")
    let activeBlock = document.getElementById("faq" + id)
    let activeTitle = document.getElementById("title" + id)
    activeBlock.classList.add("active")
    activeTitle.classList.add("active")
  }
  return (
    <>
      <Layout switchLang={switchLang}>
        <SEO title="Inicio" />
        <section className="hero">
          <div className="fixed">
            <div className="heroText">
              <h1>{t("heroTitle")}</h1>
              <p>{t("heroParagraph")}</p>
              <p>{t("heroParagraphTwo")}</p>
              <span>
                <button className="primaryButton">{t("heroButton")}</button>
              </span>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="fixed">
            <div
              className="contactForm"
              data-sal="zoom-in"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              <h2>{t("contactTitle")}</h2>
              <form action="">
                <span>
                  <article>
                    <label htmlFor="name">{t("contactName")}:</label>
                    <input id="name" type="text" />
                  </article>
                  <article>
                    <label htmlFor="email">{t("contactEmail")}:</label>
                    <input id="email" type="email" />
                  </article>
                  <article>
                    <label htmlFor="phone">{t("contactPhone")}:</label>
                    <input id="tel" type="tel" />
                  </article>
                </span>
                <span>
                  <article className="termsCheck">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">{t("contactTerms")}</label>
                  </article>
                  <article>
                    <button className="secondaryButton">
                      {t("contactSubmit")}
                    </button>
                  </article>
                </span>
              </form>
            </div>
          </div>
        </section>
        <section className="howDo">
          <article>
            <img src={JelessiProducts} alt="Jelessi Products" />
          </article>
          <article>
            <span className="titleShadow">
              <h2 data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                {t("howTitle")}
              </h2>
              <h3>{t("howTitle")}</h3>
            </span>
            <h4>{t("howSubtitle")}</h4>
            <p className="generalParagraph">{t("howParagraph")}</p>
            <p className="generalParagraph">{t("howParagraphTwo")}</p>
          </article>
        </section>
        <section className="deepDive">
          <div className="deepContainer">
            <article>
              <span className="titleShadow">
                <h2>{t("deepTitle")}</h2>
                <h3>{t("deepTitle")}</h3>
              </span>
              <h4>{t("deepSubtitle")}</h4>
              <p className="generalParagraph">{t("deepParagraph")}</p>
              <p className="generalParagraph">{t("deepParagraphTwo")}</p>
              <span className="buttonContainer">
                <button className="primaryButton">{t("deepButton")}</button>
              </span>
            </article>
            <article>
              <img src={DeepDive} alt="Deep Dive" />
            </article>
          </div>
        </section>
        <section className="points">
          <div className="fixed">
            <div className="pointsContainer">
              <article>
                <img src={VenisAnalysis} alt="Digital Analysis Device" />
                <h3>{t("pointsTwo")}</h3>
                <p>{t("pointsTwoP")}</p>
              </article>
              <article>
                <img src={VenisLed} alt="Led Light Therapy" />
                <h3>{t("pointsOne")}</h3>
                <p>{t("pointsOneP")}</p>
              </article>
              <article>
                <img
                  src={VenisSkincare}
                  alt="Ultramodern equipment and Skincare"
                />
                <h3>{t("pointsThree")}</h3>
                <p>{t("pointsThreeP")}</p>
              </article>
            </div>
          </div>
        </section>
        <section className="partners">
          <div className="fixed">
            <div className="partnersContainer">
              <span className="titleShadow">
                <h2 data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                  {t("partnersTitle")}
                </h2>
                <h3>{t("partnersTitle")}</h3>
              </span>
              <h4>{t("partnersSubtitle")}</h4>
              <p>{t("partnersSubtitleTwo")}</p>
              <div className="partnersImage">
                <img src={Celestolite} alt="Celestolite" />
                <img src={Elevatione} alt="Elevatione" />
                <img src={Jelessi} alt="Jelessi" />
                <img src={Orogold} alt="Orogold" />
                <img src={Predire} alt="Predire" />
              </div>
              <div className="computer">
                <h5>{t("partnersParagraph")}</h5>
                <p>{t("partnersParagraphTwo")}</p>
                <p>{t("partnersParagraphThree")}</p>
                <img src={ComputerImage} alt="Computer" />
              </div>
            </div>
          </div>
        </section>
        <section className="ageless">
          <div className="fixed">
            <h2>{t("ageless")}</h2>
            <button className="primaryButton">{t("agelessButton")}</button>
          </div>
        </section>
        <section className="benefits">
          <div className="textBenefits">
            <span className="titleShadow">
              <h2 data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                {t("benefitsTitle")}
              </h2>
              <h3>{t("benefitsTitle")}</h3>
            </span>
            <div className="benefitsContainer">
              <article>
                <h2>
                  <img src={IconLuxury} alt="Luxury" /> {t("benefitsOne")}
                </h2>
                <p>{t("benefitsOneP")}</p>
              </article>
              <article>
                <h2>
                  <img src={IconLavish} alt="Luxury" />
                  {t("benefitsTwo")}
                </h2>
                <p>{t("benefitsTwoP")}</p>
              </article>
              <article>
                <h2>
                  <img src={IconService} alt="Luxury" />
                  {t("benefitsThree")}
                </h2>
                <p>{t("benefitsThreeP")}</p>
              </article>
              <article>
                <h2>
                  <img src={IconSolution} alt="Luxury" />
                  {t("benefitsFour")}
                </h2>
                <p>{t("benefitsFourP")}</p>
              </article>
            </div>
          </div>
          <div className="imageBenefits">
            <img src={VenisBenefits} alt="Beneficios" />
            <img src={VenisBenefitsMobile} alt="Beneficios" />
          </div>
        </section>
        <section className="expert">
          <article></article>
          <article>
            <h2>{t("skincareTitle")}</h2>
            <p>{t("skincareSubtitle")}</p>
            <button className="primaryButton">{t("skincareButton")}</button>
          </article>
        </section>
        <section className="results">
          <div className="fixed">
            <span className="titleShadow">
              <h2 data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                {t("resultsTitle")}
              </h2>
              <h3>{t("resultsTitle")}</h3>
            </span>
            <div className="reviewContainer">
              <article>
                <img className="user" src={ResultOne} alt="Alicia" />
                <h5>Alicia Hernandez</h5>
                <h6>43 Años</h6>
                <span>
                  <img src={Quotes} alt="Comillas" />
                  <p>{t("testimonyOne")}</p>
                </span>
              </article>
              <article>
                <img className="user" src={ResultTwo} alt="Martha" />

                <h5>Martha Muñoz</h5>
                <h6>57 Años</h6>
                <span>
                  <img src={Quotes} alt="Comillas" />
                  <p>{t("testimonyTwo")}</p>
                </span>
              </article>
              <article>
                <img className="user" src={ResultThree} alt="Carlos" />
                <h5>Carlos</h5>
                <h6>25 Años</h6>
                <span>
                  <img src={Quotes} alt="Comillas" />
                  <p>{t("testimonyThree")}</p>
                </span>
              </article>
              <article>
                <img className="user" src={ResultFour} alt="Luz Maria" />
                <h5>Luz Maria</h5>
                <h6>61 Años</h6>
                <span>
                  <img src={Quotes} alt="Comillas" />

                  <p>{t("testimonyFour")}</p>
                </span>
              </article>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="fixed">
            <span className="titleShadow">
              <h2 data-sal="fade" data-sal-delay="500" data-sal-easing="ease">
                {t("gallery")}
              </h2>
              <h3>{t("gallery")}</h3>
            </span>
            <div className="galleryContainer">
              <article>
                <img src={GalleryOne} alt="Galeria" />
              </article>
              <article>
                <img src={GalleryTwo} alt="Galeria" />
              </article>
              <article>
                <img src={GalleryThree} alt="Galeria" />
              </article>
              <article>
                <img src={GalleryFour} alt="Galeria" />
              </article>
              <article>
                <img src={GalleryFive} alt="Galeria" />
              </article>
            </div>
          </div>
        </section>
        <section className="faq">
          <div className="fixed">
            <div className="faqContainer">
              <article>
                <span className="titleShadow">
                  <h2
                    data-sal="fade"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                  >
                    FAQ
                  </h2>
                  <h3>FAQ</h3>
                </span>
              </article>
              <article>
                <div className="faqUnique">
                  <span id="titleOne" onClick={e => showFaq("One")}>
                    <h5>{t("faqOne")}</h5>
                    <img src={PlusIcon} alt="Plus" />
                    <img src={LessIcon} alt="Less" />
                  </span>
                  <p id="faqOne">{t("faqOneP")}</p>
                </div>
                <div className="faqUnique">
                  <span id="titleTwo" onClick={e => showFaq("Two")}>
                    <h5>{t("faqTwo")}</h5>
                    <img src={PlusIcon} alt="Plus" />
                    <img src={LessIcon} alt="Less" />
                  </span>
                  <p id="faqTwo">{t("faqTwoP")}</p>
                </div>
                <div className="faqUnique">
                  <span id="titleThree" onClick={e => showFaq("Three")}>
                    <h5>{t("faqThree")}</h5>
                    <img src={PlusIcon} alt="Plus" />
                    <img src={LessIcon} alt="Less" />
                  </span>
                  <p id="faqThree">{t("faqThreeP")}</p>
                </div>
                <div className="faqUnique">
                  <span id="titleFour" onClick={e => showFaq("Four")}>
                    <h5>{t("faqFour")}</h5>
                    <img src={PlusIcon} alt="Plus" />
                    <img src={LessIcon} alt="Less" />
                  </span>
                  <p id="faqFour">{t("faqFourP")}</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="call">
          <article className="callImage"></article>
          <article className="callForm">
            <h3>{t("call")}</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, beatae numquam repellat consectetur vero voluptatem
              excepturi rem veniam in vel unde ullam.
            </p>
            <form action="">
              <span>
                <article>
                  <label htmlFor="nameFooter">{t("contactName")}:</label>
                  <input id="nameFooter" type="text" />
                </article>
                <article>
                  <label htmlFor="emailFooter">{t("contactEmail")}:</label>
                  <input id="emailFooter" type="email" />
                </article>
                <article>
                  <label htmlFor="phoneFooter">{t("contactPhone")}:</label>
                  <input id="telFooter" type="tel" />
                </article>
              </span>
              <span>
                <article className="termsCheck">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">{t("contactTerms")}</label>
                </article>
                <article>
                  <button className="primaryButton">{t("call")}</button>
                </article>
              </span>
            </form>
          </article>
        </section>
        <footer>
          <div className="fixed">
            <div className="footerContainer">
              <span>
                <img src={LogoWhite} alt="Logo Blanco" />
                <p>Venis © Copyright 2020</p>
              </span>
              <span>
                <ul>
                  <li>
                    <Link to="/#">{t("privacity")}</Link>
                  </li>
                  <li>
                    <Link to="/#">{t("terms")}</Link>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/veniskinmx/?hl=es"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Instagram} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/veniskin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img src={Facebook} alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <img src={WhatsApp} alt="WhatsApp" />
                  </li>
                  <li>
                    <img src={Share} alt="Share" />
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </footer>
      </Layout>
    </>
  )
}
