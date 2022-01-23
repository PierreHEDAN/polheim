import { useEffect, useState, memo, Fragment } from "react";
import styles from './Team.module.scss';
import QuoteSVG from './QuoteSVG';
import PhotoTeam from './PhotoTeam';
import { Tooltip, TooltipReference, useTooltipState } from "reakit/Tooltip";
import { Chauve, Blague } from './Icons';

const TooltipTeam = ({ member, name, age, desc, quote, icon1, icon2 }) => {
  const tooltip = useTooltipState({ animated: 250, placement: "right" });

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
    icon1={<Chauve />}
    icon2={<Blague />}
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
    icon1={<Chauve />}
    icon2={<Blague />}
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
        <PhotoTeam key="camille" member="equip-camille" name="Camille" />
        <PhotoTeam key="amelie" member="equip-amelie" name="Amélie" />
        <PhotoTeam key="nathan" member="equip-nathan" name="Nathan" />
        <PhotoTeam key="amandine" member="equip-amandine-08" name="Amandine" />
        <PhotoTeam key="vous" member="equip-picto" name="Et pourquoi pas vous ?" />
      </div>
      ) }
    </div>
  </div>
);
}

export default Team;
