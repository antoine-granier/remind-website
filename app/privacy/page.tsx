import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Re:mind",
  description: "Politique de confidentialité de l'application Re:mind",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Dernière mise à jour : Novembre 2025
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            1. Éditeur
          </h2>
          <p className="text-gray-700 leading-relaxed">
            L'application Re:mind est éditée par Antoine Granier, développeur
            indépendant résidant en France.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Contact :{" "}
            <a
              href="mailto:antoine.granier@protonmail.com"
              className="text-blue-600 hover:underline"
            >
              antoine.granier@protonmail.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            2. Collecte de données personnelles
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Re:mind ne collecte aucune donnée personnelle. Aucun nom, adresse
            email, numéro de téléphone ou toute autre information vous
            concernant n'est enregistré, stocké ou transmis à des tiers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            L'application fonctionne exclusivement en local sur votre appareil.
            Toutes les données (rappels, traitements médicaux) restent sur votre
            téléphone et ne sont jamais transmises à des serveurs externes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            L'application propose également des abonnements à renouvellement
            automatique. Pour gérer ces abonnements, certaines informations
            peuvent être recueillies, notamment des identifiants liés aux
            plateformes Apple App Store ou Google Play, sans que les données
            bancaires ne soient stockées localement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les données d'abonnement sont utilisées uniquement pour la gestion
            du service, la facturation et la prévention de la fraude.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vous bénéficiez des droits RGPD relatifs à ces données, notamment
            l'accès, la rectification et la suppression via les plateformes
            concernées.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Toute modification sur la gestion des abonnements fera l'objet d'une
            mise à jour de cette politique.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            3. Géolocalisation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La seule donnée utilisée est la géolocalisation en arrière-plan,
            uniquement si vous activez la fonctionnalité de détection de passage
            au péage.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Cette géolocalisation :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>
              N'est utilisée que pour créer des rappels de paiement de péage
            </li>
            <li>Ne quitte jamais votre appareil</li>
            <li>N'est pas stockée ni partagée avec des tiers</li>
            <li>
              Peut être désactivée à tout moment dans les paramètres de
              l'application ou de votre téléphone
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            4. Services tiers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aucun service tiers (analytics, publicité, API externe,
            notifications push) n'est actuellement intégré à l'application.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Si des services tiers ou de la publicité étaient ajoutés à l'avenir,
            cette politique de confidentialité sera mise à jour et affichée dans
            l'application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            5. Vos droits (RGPD)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification</li>
            <li>Droit de suppression</li>
            <li>Droit d'opposition</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Toutefois, ces droits ne s'appliquent pas dans le cadre de Re:mind
            car aucune donnée personnelle n'est collectée, stockée ou traitée
            par l'éditeur, sauf pour la gestion des abonnements selon les
            modalités décrites.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pour toute question concernant vos données, contactez :{" "}
            <a
              href="mailto:antoine.granier@protonmail.com"
              className="text-blue-600 hover:underline"
            >
              antoine.granier@protonmail.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            6. Durée de conservation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aucune donnée n'est conservée par l'éditeur directement. Toutes les
            informations créées dans l'application (rappels, traitements)
            restent uniquement sur votre appareil jusqu'à ce que vous les
            supprimiez ou désinstalliez l'application.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Les données liées aux abonnements sont conservées selon les règles
            des plateformes Apple et Google.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            7. Modifications
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cette politique de confidentialité peut être modifiée à tout moment.
            Les modifications seront directement visibles dans l'application. Il
            est conseillé de consulter régulièrement cette page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            8. Droit applicable
          </h2>
          <p className="text-gray-700 leading-relaxed">
            La présente politique est soumise au droit français.
          </p>
        </section>
      </div>
    </div>
  );
}
