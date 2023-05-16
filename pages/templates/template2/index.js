import Name from "@/components/name";
import Contact from "@/components/contact";
import Paragraph from "@/components/paragraph";
import Skill from "@/components/skill";
import styles from './template2.module.scss'
import WorkHistory from "@/components/workhistory";
import Education from "@/components/education";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPuzzlePiece,faBriefcase,faGraduationCap} from '@fortawesome/free-solid-svg-icons'
const icon = <FontAwesomeIcon icon={faPuzzlePiece}  size="lg"/>
const icon2 = <FontAwesomeIcon icon={faBriefcase}  size="lg"/>
const icon3 = <FontAwesomeIcon icon={faGraduationCap} size="lg"/>

const template2 = () =>{
    return(
        <>
        <div className="container font-century">

        <div className={styles.topBar}>
            <div className="py-3">
              <Name />
              <Contact />
            </div>
        </div>
        <div>
            <Paragraph />
            </div >
            <div className={styles.border}>
                <div className={styles.icon}>
                    <span className={styles.iconImg}>
                        {icon}
                    </span>
                </div>
                
            <Skill />
            <div className={styles.icon}>
                    <span className={styles.iconImg}>
                        {icon2}
                    </span>
                </div>
            <WorkHistory />
            <div className={styles.icon}>
                    <span className={styles.iconImg}>
                        {icon3}
                    </span>
                </div>
        <Education />

            </div>
        </div>
        </>
    )
}
export default template2;