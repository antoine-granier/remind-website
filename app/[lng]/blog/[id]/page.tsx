"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

// Article data with full content
const ARTICLES_CONTENT = {
  "1": {
    id: 1,
    title: "Comprendre et réduire la charge mentale au quotidien",
    excerpt:
      "La charge mentale est ce poids invisible qui pèse sur nous lorsque nous devons penser à tout, tout le temps. Découvrez des stratégies concrètes pour l'alléger.",
    category: "Bien-être",
    date: "21 Nov 2024",
    readTime: "5 min",
    image: "🧠",
    content: {
      intro: "La charge mentale n'est pas qu'un simple stress. C'est une fatigue invisible qui s'accumule jour après jour, transformant chaque tâche simple en montagne à gravir. Vous connaissez cette sensation ? Celle de devoir tout gérer, tout anticiper, tout organiser dans votre tête ?",
      sections: [
        {
          heading: "Qu'est-ce que la charge mentale ?",
          text: "La charge mentale, c'est ce travail invisible de gestion, d'organisation et d'anticipation que nous effectuons constamment. C'est penser aux courses en travaillant, aux rendez-vous médicaux en faisant la vaisselle, aux anniversaires en conduisant. C'est cette liste mentale interminable qui ne s'arrête jamais."
        },
        {
          heading: "Les symptômes d'une charge mentale excessive",
          text: "Comment savoir si votre charge mentale est trop lourde ? Voici les signaux d'alerte : fatigue chronique même après le repos, difficultés de concentration, irritabilité accrue, sentiment d'être constamment débordé, troubles du sommeil liés aux ruminations, et cette impression que vous ne pouvez jamais vraiment décrocher."
        },
        {
          heading: "Stratégies pour alléger la charge",
          text: "La première étape est de reconnaître le problème. Ensuite, apprenez à externaliser : utilisez des outils comme Re:mind pour déléguer à la technologie ce que votre cerveau n'a pas besoin de porter. Pratiquez le refus bienveillant : vous n'êtes pas obligé de tout gérer. Déléguez réellement (pas juste organiser pour que quelqu'un d'autre exécute). Et surtout, accordez-vous de vraies pauses mentales."
        }
      ],
      keyTakeaways: [
        "La charge mentale est un travail invisible mais épuisant",
        "Externaliser grâce aux outils numériques libère l'esprit",
        "Apprendre à dire non est une compétence essentielle",
        "Les pauses mentales ne sont pas un luxe, mais une nécessité"
      ],
      conclusion: "Réduire votre charge mentale n'est pas égoïste, c'est vital. En libérant votre esprit des tâches de gestion quotidienne, vous retrouvez de l'énergie pour ce qui compte vraiment : votre créativité, vos relations, votre bien-être."
    }
  },
  "2": {
    id: 2,
    title: "5 astuces pour ne plus jamais oublier ses médicaments",
    excerpt:
      "Entre les horaires décalés et les oublis, suivre un traitement peut être un défi. Voici nos meilleures astuces pour être régulier sans stress.",
    category: "Santé",
    date: "18 Nov 2024",
    readTime: "3 min",
    image: "💊",
    content: {
      intro: "Oublier de prendre ses médicaments est plus courant qu'on ne le pense. Que ce soit pour un traitement chronique ou ponctuel, la régularité est souvent la clé de l'efficacité. Voici cinq stratégies éprouvées pour ne plus jamais manquer une prise.",
      sections: [
        {
          heading: "1. Ancrez vos prises à des rituels existants",
          text: "Associez chaque prise de médicament à un geste quotidien automatique : café du matin, brossage de dents, repas du soir. Le cerveau adore les routines. En créant cette association, vous transformez un effort conscient en automatisme."
        },
        {
          heading: "2. Utilisez la technologie intelligemment",
          text: "Les applications comme Re:mind ne se contentent pas de sonner : elles s'adaptent à votre vie. Snooze intelligent, rappels contextuels, suivi de l'historique... La technologie devient votre mémoire externe, sans la culpabilité de l'oubli."
        },
        {
          heading: "3. Préparez vos doses à l'avance",
          text: "Les piluliers hebdomadaires ne sont pas réservés aux seniors. Préparer vos doses le dimanche soir pour toute la semaine élimine le moment de décision quotidien et vous permet de vérifier d'un coup d'œil si vous avez pris votre traitement."
        },
        {
          heading: "4. Rendez vos médicaments visibles",
          text: "Loin des yeux, loin du cœur. Placez vos médicaments là où vous les verrez naturellement au bon moment : près de la cafetière pour ceux du matin, sur la table de nuit pour ceux du soir."
        },
        {
          heading: "5. Impliquez votre entourage",
          text: "Pour les traitements critiques, informez un proche de confiance. Ce n'est pas de la dépendance, c'est du bon sens. Un simple 'tu as pensé à tes médicaments ?' peut faire toute la différence."
        }
      ],
      keyTakeaways: [
        "Ancrez vos prises à des rituels quotidiens existants",
        "Exploitez la technologie pour en faire votre alliée",
        "Préparez vos doses à l'avance pour éliminer l'effort de décision",
        "La visibilité et l'entourage sont vos meilleurs soutiens"
      ],
      conclusion: "La régularité médicamenteuse n'est pas une question de volonté, mais d'organisation. En mettant en place ces systèmes simples, vous transformez une contrainte en automatisme."
    }
  },
  "3": {
    id: 3,
    title: "L'importance du sommeil sur votre mémoire",
    excerpt:
      "Bien dormir n'est pas un luxe, c'est une nécessité biologique pour consolider vos souvenirs et nettoyer votre cerveau des toxines.",
    category: "Science",
    date: "15 Nov 2024",
    readTime: "7 min",
    image: "🌙",
    content: {
      intro: "Et si je vous disais que chaque heure de sommeil perdue vous fait perdre bien plus que de l'énergie ? Pendant que vous dormez, votre cerveau travaille activement à consolider vos souvenirs et à éliminer les déchets métaboliques. Le sommeil n'est pas une pause, c'est une maintenance essentielle.",
      sections: [
        {
          heading: "La consolidation mémorielle nocturne",
          text: "Pendant le sommeil profond et le sommeil paradoxal, votre cerveau rejoue les événements de la journée. Il trie, classe, et intègre les nouvelles informations à vos connaissances existantes. C'est ce processus qui transforme l'apprentissage temporaire en mémoire à long terme. Sans sommeil suffisant, vos efforts d'apprentissage sont littéralement effacés."
        },
        {
          heading: "Le système glymphatique : le nettoyage nocturne",
          text: "Découvert récemment, le système glymphatique est l'équivalent cérébral de votre service de nettoyage. Il s'active principalement pendant le sommeil profond pour éliminer les protéines toxiques, dont la bêta-amyloïde associée à Alzheimer. C'est comme si votre cerveau se lavait pendant que vous dormez."
        },
        {
          heading: "Sommeil et créativité",
          text: "Le sommeil paradoxal, celui où vous rêvez, joue un rôle crucial dans la créativité et la résolution de problèmes. Il permet des connexions inattendues entre des idées apparemment sans rapport. C'est pourquoi les solutions viennent souvent 'dans la nuit'."
        },
        {
          heading: "Combien d'heures vraiment ?",
          text: "La plupart des adultes ont besoin de 7 à 9 heures. Pas 6, pas 5. Les 'petits dormeurs' naturels sont rares. Si vous avez besoin d'un réveil pour vous réveiller, vous manquez probablement de sommeil. Le vrai test : pouvez-vous vous réveiller naturellement et vous sentir reposé ?"
        }
      ],
      keyTakeaways: [
        "Le sommeil consolide activement vos souvenirs",
        "Le système glymphatique nettoie votre cerveau pendant la nuit",
        "Le sommeil paradoxal booste la créativité",
        "7 à 9 heures ne sont pas un luxe, c'est un besoin biologique"
      ],
      conclusion: "Prioriser votre sommeil n'est pas paresseux, c'est intelligent. Un cerveau bien reposé apprend mieux, mémorise mieux, et fonctionne mieux. Le sommeil est votre superpouvoir le plus sous-estimé."
    }
  },
  "4": {
    id: 4,
    title: "Digital Detox : reprendre le contrôle de son attention",
    excerpt:
      "Nos téléphones sont des machines à distraction. Apprenez à configurer vos notifications pour qu'elles vous servent au lieu de vous asservir.",
    category: "Productivité",
    date: "10 Nov 2024",
    readTime: "4 min",
    image: "📱",
    content: {
      intro: "Combien de fois avez-vous déverrouillé votre téléphone aujourd'hui ? 50 fois ? 100 fois ? Plus ? Votre téléphone devait être un outil. Il est devenu un tyran qui dicte votre attention. Il est temps de reprendre le pouvoir.",
      sections: [
        {
          heading: "Le coût invisible de l'interruption",
          text: "Chaque notification n'est pas juste une seconde perdue. C'est 23 minutes en moyenne pour retrouver votre concentration profonde selon des études récentes. Une seule interruption peut détruire une heure de travail concentré. Et votre téléphone vous interrompt en moyenne toutes les 12 minutes."
        },
        {
          heading: "L'urgence fabriquée",
          text: "Les notifications créent une fausse urgence. Ce message WhatsApp peut-il vraiment pas attendre 2 heures ? Cette actualité change-t-elle votre vie aujourd'hui ? 99% des notifications ne sont ni urgentes ni importantes. Elles sont juste conçues pour capter votre attention."
        },
        {
          heading: "La méthode du tri radical",
          text: "Allez dans vos paramètres. Désactivez TOUTES les notifications. Oui, toutes. Puis réactivez UNE PAR UNE celles qui sont vraiment essentielles. Appels ? Oui. Messages de votre conjoint ? Peut-être. Likes Instagram ? Absolument pas. Vous serez surpris : la plupart des apps n'ont pas besoin de vous déranger."
        },
        {
          heading: "Créez des temps déconnectés",
          text: "Définissez des créneaux sacrés : pas de téléphone au réveil (1h), pas pendant les repas, pas 1h avant le coucher. Utilisez un vrai réveil. Lisez un livre physique. Parlez vraiment aux gens autour de vous. Votre cerveau vous remerciera."
        }
      ],
      keyTakeaways: [
        "Une interruption = 23 minutes de concentration perdues",
        "99% des notifications ne sont ni urgentes ni importantes",
        "Désactivez tout, puis réactivez au compte-goutte",
        "Créez des zones temporelles 100% tech-free"
      ],
      conclusion: "Votre attention est votre ressource la plus précieuse. Les géants de la tech le savent et ont monétisé chaque seconde. Il est temps de reprendre ce qui vous appartient."
    }
  },
  "5": {
    id: 5,
    title: "Organiser sa vie de famille sans s'épuiser",
    excerpt:
      "Calendriers partagés, délégations, rituels : comment transformer le chaos familial en une mécanique bien huilée.",
    category: "Organisation",
    date: "05 Nov 2024",
    readTime: "6 min",
    image: "🏡",
    content: {
      intro: "Une famille, c'est magnifique. C'est aussi un chaos organisationnel permanent : rendez-vous médicaux, activités extra-scolaires, courses, repas, devoirs... Comment certaines familles semblent tout gérer sans effort pendant que d'autres courent constamment ? Ce n'est pas de la magie, ce sont des systèmes.",
      sections: [
        {
          heading: "Le calendrier familial unique",
          text: "Arrêtez de jongler entre 5 agendas différents. Un seul calendrier partagé (Google, Apple, ou autre) où TOUT apparaît : activités de chacun, rendez-vous, repas prévus, sorties. Couleur par personne pour visualiser d'un coup d'œil. La règle d'or : si ce n'est pas dans le calendrier, ça n'existe pas."
        },
        {
          heading: "La vraie délégation (pas juste l'exécution)",
          text: "Déléguer ce n'est pas dire 'Tu peux faire la vaisselle ?'. C'est donner une responsabilité complète : 'Tu es responsable de la vaisselle cette semaine'. La différence ? Dans le premier cas, vous devez penser à demander. Dans le second, l'autre doit penser à faire. C'est la charge mentale qui change de camp."
        },
        {
          heading: "Les rituels qui simplifient",
          text: "Meeting familial dimanche soir : 15 minutes pour réviser la semaine à venir. Préparation des tenues la veille au soir. Batch cooking le weekend. Ces rituels éliminent les micro-décisions quotidiennes qui épuisent. Moins de décisions = moins de fatigue."
        },
        {
          heading: "L'art du 'assez bien'",
          text: "Le perfectionnisme est l'ennemi de la sérénité familiale. Les enfants peuvent mettre la table même si ce n'est pas aligné au millimètre. Le repas peut être simple. La maison peut être 'vivante' plutôt que 'propre'. Acceptez 80% de perfection pour 100% de santé mentale."
        }
      ],
      keyTakeaways: [
        "Un seul calendrier partagé pour toute la famille",
        "Déléguez la responsabilité, pas juste l'exécution",
        "Les rituels hebdomadaires éliminent les micro-décisions",
        "Visez 'assez bien' plutôt que 'parfait'"
      ],
      conclusion: "Une famille organisée n'est pas une famille militaire. C'est une famille où chacun sait ce qui l'attend, où la charge est partagée, et où les parents peuvent enfin souffler. Ces systèmes simples transforment le chaos en cohabitation sereine."
    }
  },
  "6": {
    id: 6,
    title: "Pourquoi écrire aide à penser plus clairement",
    excerpt:
      "Le journaling n'est pas réservé aux écrivains. C'est un outil puissant pour externaliser ses pensées et réduire l'anxiété.",
    category: "Développement",
    date: "01 Nov 2024",
    readTime: "4 min",
    image: "✍️",
    content: {
      intro: "Votre cerveau est extraordinaire, mais il a un défaut : il n'est pas fait pour stocker, mais pour traiter. Quand vous essayez de 'tout garder en tête', vous saturez votre mémoire de travail et bloquez votre capacité à penser clairement. La solution ? Externaliser sur le papier.",
      sections: [
        {
          heading: "Écrire = Penser à voix haute",
          text: "Quand vous écrivez, vous forcez vos pensées floues à prendre forme. Une idée vague dans votre tête devient soudain concrète sur le papier. C'est souvent en écrivant que vous réalisez : 'Ah, c'est donc ça le problème'. L'écriture révèle ce que vous pensiez déjà sans le savoir."
        },
        {
          heading: "Le journal comme décharge émotionnelle",
          text: "Les pensées anxieuses tournent en boucle dans votre tête. Écrire casse cette boucle. En mettant vos inquiétudes sur papier, vous les sortez de votre système. C'est comme vider un sac trop lourd : instantanément, vous vous sentez plus léger. Et souvent, relire vos inquiétudes écrites les rend moins terrifiantes."
        },
        {
          heading: "Morning pages : la pratique des 3 pages",
          text: "Technique popularisée par Julia Cameron : chaque matin, 3 pages manuscrites, flux de conscience, sans censure ni jugement. Vous videz votre tête de tout ce qui l'encombre. C'est comme défragmenter un disque dur mental. Résultat : une clarté mentale impossible à obtenir autrement."
        },
        {
          heading: "Pas besoin d'être écrivain",
          text: "Oubliez l'orthographe, le style, la beauté. Votre journal n'est pas un roman. C'est un outil. Écrivez comme vous pensez. Utilisez des listes, des tirets, des gribouillis. L'important n'est pas le résultat, c'est le processus d'externalisation."
        }
      ],
      keyTakeaways: [
        "Écrire force vos pensées floues à devenir concrètes",
        "Le journal casse les boucles de pensées anxieuses",
        "Les morning pages débloquent une clarté mentale rare",
        "Pas besoin de 'bien' écrire, juste d'écrire"
      ],
      conclusion: "Votre cerveau est brillant, mais il a besoin d'aide. L'écriture n'est pas une activité créative réservée aux autres. C'est un outil cognitif que tout le monde devrait utiliser. Dix minutes par jour peuvent transformer votre clarté mentale."
    }
  }
};

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const article = ARTICLES_CONTENT[id as keyof typeof ARTICLES_CONTENT];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-secondary group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Retour au blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 text-sm font-medium text-secondary mb-6">
            <span className="bg-action text-primary px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            {article.excerpt}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 w-full h-64 bg-gradient-to-br from-action/20 to-primary/5 rounded-3xl flex items-center justify-center text-8xl"
        >
          {article.image}
        </motion.div>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <p className="text-lg text-primary leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-action first-letter:mr-1 first-letter:float-left">
            {article.content.intro}
          </p>

          {/* Sections */}
          {article.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {section.heading}
              </h2>
              <p className="text-secondary leading-relaxed">{section.text}</p>
            </div>
          ))}

          {/* Key Takeaways */}
          <div className="bg-white/50 backdrop-blur-md border border-action/20 rounded-2xl p-6 my-12">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Points clés à retenir
            </h3>
            <ul className="space-y-2">
              {article.content.keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-secondary">
                  <span className="text-action mt-1 shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-secondary leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-3xl p-8 text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Prêt à simplifier votre quotidien ?
          </h3>
          <p className="text-white/80 mb-6">
            Re:mind vous aide à gérer vos rappels et traitements sans effort.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-xl bg-action text-primary font-bold hover:bg-white transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
          >
            Découvrir Re:mind
          </Link>
        </motion.div>
      </article>
    </div>
  );
}
