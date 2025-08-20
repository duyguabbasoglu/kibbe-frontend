import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kibbe – Stil Tipini Keşfet</title>
        <meta name="description" content="Kibbe sistemiyle stil tipini keşfet. Kibbe nedir, kullanıcı profilin ve sepetin tek yerde." />
      </Head>

      <header>
        <div className="logo">
          <img src="/images/kibbe-logo.svg"/>
        </div>

        <ul className="menu">
          <li><a href="/kibbe-nedir">Kibbe Nedir?</a></li>
          <li><a href="/profil">Kullanıcı Adı</a></li>
          <li>
            <a href="/sepet" className="cart">
              <img src="/images/cart.svg" alt="" aria-hidden="true" />
              <span className="count">2</span>
              <span className="cart-label">Sepet</span>
            </a>
          </li>
        </ul>

        <ul className="menu">
          <li><a href="/login">Giriş Yap</a></li>
          <li><a href="/register" id="signup">Kayıt Ol</a></li>
        </ul>

        <div className="menu-icon" aria-hidden="true">
          <img src="/images/menu-icon.svg" alt="" />
        </div>
      </header>

      <main className="container">
        <section>
          <div className="left">
            <h1>Kibbe stil tipini</h1>
            <h1>kolayca öğren.</h1>
            <p>
              Kibbe sistemine dayalı kısa bir anketle vücut çizgilerini tanı.
              Uygun siluet, kumaş ve detay önerilerini profilinde gör.
            </p>
          </div>

          <div className="right">
            <img src="/images/kibbe-illustration.svg" id="window" alt="Kibbe özet illüstrasyon" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
