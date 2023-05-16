import Name from "@/components/name";
import Paragraph from "@/components/paragraph";
import Work from "@/components/WorkwithOneborder";
import Contact from "@/components/contact2";
import Education from "@/components/educationwithOneborder";
import Skill from "@/components/skillOneborderNOmargin";
import styles from './template6.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPuzzlePiece,faBriefcase,faGraduationCap,faAddressCard} from '@fortawesome/free-solid-svg-icons'
const icon = <FontAwesomeIcon icon={faPuzzlePiece}  size="lg"/>
const icon2 = <FontAwesomeIcon icon={faBriefcase}  size="lg"/>
const icon3 = <FontAwesomeIcon icon={faGraduationCap} size="lg"/>
const icon4 = <FontAwesomeIcon icon={faAddressCard} size="lg"/>
const template6 = ()=>{
    return(
        <>
        <div className="font-century"> 
        <Name />
        <Paragraph />
        <div className="d-flex">
          <div className={`${styles.red} px-4`}>
            <div className={styles.icon}>
              <span className={styles.iconImg}>{icon}</span>
            </div>
            <Work />
            <div className={styles.icon}>
              <span className={styles.iconImg}>{icon3}</span>
            </div>
            <Education />
          </div>
          <div className="py-2">
          <div className={styles.icon2}>
              <span className={styles.iconImg2}>{icon4}</span>
            </div>
            <Contact />
            <div className={styles.icon2}>
              <span className={styles.iconImg2}>{icon2}</span>
            </div>
            <Skill />
          </div>
        </div>
        
        </div>
        </>
    )
}
export default template6;