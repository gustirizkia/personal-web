import React from "react";
import IMG1 from "../../assets/bookstore.png";
import IMG2 from "../../assets/gudangin.png";
import IMG3 from "../../assets/bkpi.png";
import IMG4 from "../../assets/warisan.png";
import IMG5 from "../../assets/taco.png";
import IMG6 from "../../assets/detakpolitika.png";
import IMG7 from "../../assets/filterpedia.png";
import IMG8 from "../../assets/hmi.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Belanja Warisan",
      img: IMG1,
      description:
        "Belanja warisan website untuk member warisan melakukan repeat order",
      technologies: "Laravel | Bootstrap | Jquery",
      link: "https://belanja.warisan.co.id",
      github: "https://belanja.warisan.co.id",
    },
    {
      id: 2,
      title: "Warisan",
      img: IMG4,
      description:
        "Warisan platform dropshiper untuk mencari produk dari perusahaan",
      technologies: "Laravel | Bootstrap | Jquery",
      link: "https://warisan.co.id/",
      github: "https://warisan.co.id",
    },
    {
      id: 3,
      title: "Gudangin",
      img: IMG2,
      description:
        "manajemen gudang penyimpanan dan quality controlnya, packing, pengiriman, manajemen stok barang, apapun jenis dan besarnya usahamu. Jadi kamu bisa fokus ke pengembangan bisnis dan inovasi produk",
      technologies: "Laravel | Bootstrap | Jquery",
      link: "https://gudangin.id/",
      github: "https://gudangin.id/",
    },
    {
      id: 4,
      title: "BKPI",
      img: IMG3,
      description:
        "BKPI digunakan oleh Care Plus Indonesia untuk melakukan pelatihan psikologi karyawan",
      technologies: "Reactjs | Bootstrap | Laravel",
      link: "https://oke.link",
      github: "https://oke.link",
    },
    {
      id: 5,
      title: "TACO Visualizer",
      img: IMG5,
      description:
        "Digunakan untuk melakukan visulisasi rumah user dengan lantai taco",
      technologies: "Reactjs | CSS | Laravel | Flask",
      link: "https://dev-eza.yokesen.com/",
      github: "https://dev-eza.yokesen.com",
    },
    {
      id: 6,
      title: "Detakpolitika",
      img: IMG6,
      description:
        "Detakpolitika portal berita milik Persatuan Wartawan Indonesia",
      technologies: "Nextjs | Tailwindcss | Laravel",
      link: "https://detak-politika.vercel.app/",
      github: "https://github.com/gustirizkia/detak-politika-nextjs",
    },
    {
      id: 6,
      title: "Filterpedia",
      img: IMG7,
      description:
        "Filterpedia Ecommerce milik PT. Cipta Aneka Air saya sebagai Frontend Developer",
      technologies: "Nuxtjs | Tailwindcss | Laravel",
      link: "https://filterpedia.co.id/",
      github: "https://github.com/gustirizkia/frontend-filterpedia-v-2",
    },
    {
      id: 6,
      title: "HMI Komfaktek",
      img: IMG8,
      description:
        "Website Organisasi saya untuk melakukan perekrutan anggota baru",
      technologies: "Nuxtjs | Tailwindcss | Laravel",
      link: "https://hmi-komfaktek.vercel.app/",
      github: "https://github.com/gustirizkia/projek-nuxtjs-ssr",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
