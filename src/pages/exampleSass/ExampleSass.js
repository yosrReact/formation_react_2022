// import "./exampleSass.scss"
import "./exampleSass.scss"
function ExampleSass() {
  return (
    <div>
      <header>
        <div id="hgroup">
          <h1>Citron Inc.</h1>
          <p>Votre limonade est notre métier.</p>
        </div>
        <form action="" id="search">
          <input type="search" placeholder="Recherche" />
          <button type="submit">Recherche</button>
        </form>
      </header>
      <section id="presentation">
        <div id="description">
          <h1>Nous produisons la limonade du futur.</h1>
          <p>
            Nous sommes une petite entreprise du Sud-Est de la France
            spécialisée dans la production de{" "}
            <strong>limonade biologique</strong> à travers un circuit court et
            des emplois de proximité. Nous avons reçu le prix{" "}
            <strong>Vitamine C de l'année 2014</strong>.
          </p>
          <figure class="quote">
            <blockquote>
              Un véritable délice, écolo et délicieux à la fois.
            </blockquote>
            <figcaption>AgrumesMag, n°1764 (30 juillet 2016)</figcaption>
          </figure>
        </div>
      </section>
      <section id="produits">
        <h1>Nos produits phares</h1>
        <div class="cards">
          <figure class="product">
            <img src="/img/produit-be-fresh.jpg" alt="Be Fresh" width="180px" />
            <figcaption>
              <h2>Be Fresh</h2>
              <p>
                Une limonade moderne et rafraichissante à emmener pour chacune
                de vos randonnées.
              </p>
            </figcaption>
          </figure>
          <figure class="product">
            <img
              src="/img/produit-originale.jpg"
              alt="L'Originale"
              width="180px"
            />
            <figcaption>
              <h2>L'Originale</h2>
              <p>
                De l'eau minérale, du citron, une pincée de sucre et c'est tout.
                La vraie limonade d'antant !
              </p>
            </figcaption>
          </figure>
          <figure class="product" width="180px">
            <img
              src="/img/produit-spicy-lemon.jpg"
              alt="Spicy Lemon"
              width="180px"
            />
            <figcaption>
              <h2>Spicy Lemon</h2>
              <p>
                Une limonade aux saveurs lointaines qui titillera les papilles
                des plus fins gourmets.
              </p>
            </figcaption>
          </figure>
        </div>
        <a href="#" class="more">
          Tous nos produits
        </a>
      </section>

      <section id="production">
        <h1>Notre circuit de production</h1>
        <p>
          Nous favorisons un circuit court auprès de petits agriculteurs locaux
          afin de protéger l'environnement et de soutenir l'économie locale.
        </p>
        <div class="cards">
          <figure class="step">
            <img
              src="/img/circuit-citron.png"
              alt="Citrons biologiques"
              width="180px"
            />
            <figcaption>
              Des citrons biologiques produits et récoltés par de petits
              agriculteurs du Sud de la France…
            </figcaption>
          </figure>
          <figure class="step">
            <img src="/img/circuit-ane.png" alt="Ânes" width="180px" />
            <figcaption>
              …acheminés jusqu'à nous à dos d'ânes à travers les champs…
            </figcaption>
          </figure>
          <figure class="step">
            <img src="/img/circuit-presse.png" alt="Pressés" width="180px" />
            <figcaption>
              …et pressés dans notre fabrique de manière artisanale.
            </figcaption>
          </figure>
        </div>
        <a href="#" class="more">
          En savoir plus…
        </a>
      </section>
      <section id="clients">
        <h1>Nos clients</h1>
        <div class="cards">
          <figure class="client">
            <img src="/img/client-matouche.png" alt="Be Fresh" width="180px" />
            <figcaption>
              <h2>Café Matouche - Grenoble</h2>
              <blockquote>
                Nous servons des limonades Citron Inc. depuis 10 ans, et nos
                clients n'ont jamais été aussi satisfaits.
              </blockquote>
            </figcaption>
          </figure>
          <figure class="client">
            <img
              src="/img/client-dracula.png"
              alt="Comte Dracula"
              width="180px"
            />
            <figcaption>
              <h2>Comte Dracula</h2>
              <blockquote>
                Depuis que je suis devenu végétalien, je suis accro à la
                limonade Citron Inc. !
              </blockquote>
            </figcaption>
          </figure>
          <figure class="client" width="180px">
            <img src="/img/client-clem.png" alt="Clem" width="180px" />
            <figcaption>
              <h2>Clem'</h2>
              <blockquote>
                Les limonades Citron Inc. sont devenues pour moi une référence
                dans le domaine de la boisson.
              </blockquote>
            </figcaption>
          </figure>
        </div>
        <a href="#" class="more">
          Tous nos clients
        </a>
      </section>
      <section id="contact">
        <h1>Laissez-nous un message</h1>
        <form action="#">
          <label for="email">Votre adresse mail :</label>
          <input type="email" id="email" />
          <label for="content">Votre message :</label>
          <textarea id="content" rows="10"></textarea>
          <br />
          <button type="submit" id="submit-button">
            Envoyer
          </button>
        </form>
      </section>
      <footer>
        <strong>Citron Inc.</strong>
        <br />
        Exemple du tutoriel "Des feuilles de style stylées grâce à Sass et
        Compass" de Matouche sur ZdS.
      </footer>
    </div>
  )
}

export default ExampleSass
