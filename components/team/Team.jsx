import { useEffect, useState, memo, Fragment } from "react";
import styles from './Team.module.scss';
import QuoteSVG from './QuoteSVG';
import PhotoTeam from './PhotoTeam';
import { Tooltip, TooltipReference, useTooltipState } from "reakit/Tooltip";
import { Chauve, Blague, MaryPopins, Attentione, Coralie1, Coralie2, Camille1, Camille2, Amelie1, Amelie2, Nathan1, Nathan2, Amandine1, Amandine2 } from './Icons';

const TooltipTeam = ({ member, name, age, desc, quote, icon1, icon2 }) => {
  const tooltip = useTooltipState({ animated: 250, placement: "bottom" });

  return (
    <>
      <TooltipReference {...tooltip}>
        <PhotoTeam member={member} name={name} />
      </TooltipReference>
      <Tooltip {...tooltip}>
        <div className={styles.tooltip}>
          <div className={styles.title}>{name}</div>
          <div className={styles.age}>{age}</div>
          <div className={styles.desc}>{desc}</div>
          <div className={styles.icons}>
            {icon1}
            {icon2}
          </div>
          <div className={styles.quoteContainer}>
            <div>
              <QuoteSVG />
            </div>
            <div className={styles.quote}>{quote}</div>
            <div style={{
              alignSelf: "flex-end",
            }}>
              <QuoteSVG style={{
                transform: "rotate(180deg)",
              }}/>
            </div>
          </div>
        </div>
      </Tooltip>
    </>
  )
};

const Bruno = (
  <TooltipTeam
    key="bruno"
    member="equip-bruno"
    name="Bruno"
    age="54 ans"
    desc="Né dans le Morbihan d’une famille bretonne & Ingénieur territorial"
    quote="Je suis impliqué dans ce projet Polheim parce que c’est une très belle aventure et parce que j’ai envie d’aider mon fils à accomplir son rêve."
    icon1={<Chauve />}
    icon2={<Blague />}
  />
)

const Vero = (
  <TooltipTeam
    key="vero"
    member="equip-veronique"
    name="Véronique"
    age="56 ans"
    desc="Bretonne d’adoption depuis 53 ans & Responsable de projet HLM"
    quote="On pense tout d’abord que c’est une performance individuelle mais c’est en fait un vrai travail d’équipe où vont se mêler famille, amis mais aussi professionnels et partenaires. Une magnifique aventure humaine !"
    icon1={<MaryPopins />}
    icon2={<Attentione />}
  />
)

const Coralie = (
  <TooltipTeam
    key="coralie"
    member="equip-coralie"
    name="Coralie"
    age="31 ans"
    desc="Originaire de Fougères et in love du beurre salé. Diététicienne nutritionniste, spécialisée en nutrition du sport, et prochainement en nutrition froid-extrême."
    quote="Mon père est un aventurier, je dois l’être dans l’âme également. Je souhaite que ce projet fasse progresser les connaissances dans le domaine de la nutrition du sportif et montrer / valoriser le travail des diététiciens."
    icon1={<Coralie1 />}
    icon2={<Coralie2 />}
  />
)

const Camille = (
  <TooltipTeam
    key="camille"
    member="equip-camille"
    name="Camille"
    age="26 ans"
    desc="Née à Rennes, mon écusson breton ne me quitte même pas lors de mes voyages & Psychomotricienne en Italie."
    quote="Le défi physique et psychologique de Pierre ainsi que sa détermination m’impressionnent. Je supporte les valeurs qu’il veut transmettre et je souhaite m’investir et participer à la réalisation de ce projet fou. Son défi est devenu en quelque sorte mon défi."
    icon1={<Camille1 />}
    icon2={<Camille2 />}
  />
)

const Amelie = (
  <TooltipTeam
    key="amelie"
    member="equip-amelie"
    name="Amélie"
    age="23 ans"
    desc="Bretonne pur beurre depuis la nuit des temps & étudiante en 5ème année de médecine."
    quote="Je pense que ce projet peut m’apprendre à collaborer sainement en équipe, à développer mes compétences en coaching, en créativité, en synthèse et clarté d’expression de mes idées."
    icon1={<Amelie1 />}
    icon2={<Amelie2 />}
  />
)

const Nathan = (
  <TooltipTeam
    key="nathan"
    member="equip-nathan"
    name="Nathan"
    age="23 ans"
    desc="Enfant du pays de la Bretagne & étudiant en master énergie renouvelable."
    quote="Pierre est mon “pote d’enfance”, j’ai envie de le soutenir dans son projet le plus fou, mais c’est aussi l’occasion pour moi de me replonger dans le monde associatif comme j’ai pu le faire en école d’ingénieurs."
    icon1={<Nathan1 />}
    icon2={<Nathan2 />}
  />
)

const Amandine = (
  <TooltipTeam
    key="amandine"
    member="equip-amandine-08"
    name="Amandine"
    age="23 ans"
    desc="Bretonne dans l’âme, malgré les kilomètres qui me séparent de ma terre natale. & étudiante en Bachelor Design graphique et digital."
    quote="C’est pour moi un honneur de suivre Pierre dans son projet aussi fou qu’ambitieux, c’est un travail collectif qui permet de concentrer beaucoup de domaines différents en un seul projet. C’est un défi et une belle opportunité."
    icon1={<Amandine1 />}
    icon2={<Amandine2 />}
  />
)

const Team = () => {
  let [useless_, setRerender] = useState(false);
  useEffect(() => {
    setRerender(true);
  });

  return (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>LA <b>TEAM POLHEIM</b></h3>
        </div>
        <div className={styles.paragraph}>
          <p>
            L’association Expédition Polheim a vu le jour à l’été 2021. Une étape importante qui officialise le travail d’une équipe motivée. Une expérience personnelle et/ou professionnelle pour toute l’équipe. <br /><b>Tous différents mais tournés vers un objectif commun</b>: construire ensemble cette expédition et aller au bout de cette aventure.
          </p>
        </div>
      </div>
      {process.browser && (
      <div className={styles.team}>
        {Bruno}
        {Vero}
        {Coralie}
        {Camille}
        {Amelie}
        {Nathan}
        {Amandine}
        <a href="mailto:expeditionpolheim@gmail.com">
        <PhotoTeam key="vous" member="equip-picto" name="Et pourquoi pas vous ?" />
        </a>
      </div>
      ) }
    </div>
  </div>
);
}

export default Team;
