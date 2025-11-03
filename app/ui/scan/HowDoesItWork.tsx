import Image from "next/image";

const HowDoesItWork = () => {
  return (
    <div className="w-full bg-brand-600 rounded-xl shadow-sm p-8">
      <div className="relative mt-12 lg:mt-20">
        <div className="absolute inset-x-0 hidden xl:px-44 top-2 lg:block lg:px-28">
          <Image
            src="/curved-dotted-line.svg"
            alt=""
            width={10}
            height={10}
            className="w-full"
          />
        </div>

        <div className="relative grid grid-cols-1 text-center gap-y-12 lg:grid-cols-3 gap-x-12">
          <div className="group">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-brand-200 rounded-full shadow group-hover:-translate-y-1 group-hover:scale-[1.1] transition-all duration-500">
              <span
                className="text-xl font-semibold text-brand-600"
                aria-label="Étape 1"
              >
                {" "}
                1{" "}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-tight text-white lg:mt-10">
              Scannez un code-barres
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Ouvrez l&apos;appli à la page &laquo;&nbsp;Scan&nbsp;&raquo;, puis
              orientez votre caméra vers le code-barres du produit que vous
              voulez vérifier. Le{" "}
              <strong>
                scanner vegan détecte automatiquement le code-barre et le
                résultat est immédiat
              </strong>
              , même sans connexion internet.
            </p>
          </div>

          <div className="group">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-brand-200 rounded-full shadow group-hover:-translate-y-1 group-hover:scale-[1.1] transition-all duration-500">
              <span
                className="text-xl font-semibold text-brand-600"
                aria-label="Étape 2"
              >
                {" "}
                2{" "}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-tight text-white lg:mt-10">
              Consultez le résultat
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              <strong>Le résultat est immédiat&nbsp;</strong>: si le produit est
              enregisté en base de données,{" "}
              <strong>
                vous pouvez voir en un clin d&apos;œil s&apos;il est végane ou
                non
              </strong>
              . Dans le cas où le produit ne serait pas encore référencé ou que
              le résultat vous paraît erroné, vous pouvez l&apos;ajouter ou le
              signaler.
            </p>
          </div>

          <div className="group">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-brand-200 rounded-full shadow group-hover:-translate-y-1 group-hover:scale-[1.1] transition-all duration-500">
              <span
                className="text-xl font-semibold text-brand-600"
                aria-label="Étape 3"
              >
                {" "}
                3{" "}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-tight text-white lg:mt-10">
              Ajoutez des produits
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Vous pouvez{" "}
              <strong>
                proposer des produits qui ne sont pas encore référencés
              </strong>
              , et{" "}
              <strong>
                suivre l&apos;avancement de leur ajout directement sur
                l&apos;application
              </strong>
              . Ainsi, vous participez à{" "}
              <strong>
                aider la communauté végane à identifier les produits qui sont
                véganes
              </strong>{" "}
              🙌
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
