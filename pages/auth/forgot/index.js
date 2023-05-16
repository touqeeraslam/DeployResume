import styles from './forgot.password.module.scss'
import Image from 'next/image';
import Link from 'next/link';
const login = () =>{
    return(
        <>
     <div className={styles.containers}>
       <div className={styles.box1}>
           <div className={styles.logo}>
               
                 <Image height='108' width='140' src='/resume.png'></Image>
           </div>
           <div className={styles.heading}>
               <h3>Can't log in?</h3>
           </div>
           <div className={styles.inputs}>
               <input id='in1' type="text" className='form-control' placeholder='Enter email' />
           </div>
          
           <div>
           <button  className={'button my-2 mx-4 p-2 w-88 font-century'}>Sign up</button>
           </div>
         
              <div className={styles.footer}>
               <p>
               <Link href="/auth/login">Return to log in</Link>
               </p>
               <p>
               Don`t have an account?
               <Link href='/auth/signup'>
               Sign Up   
               </Link>
                         
               </p>
               </div>           

</div>
 
    
   </div>
   <div className={styles.backgound}>
    <div className={styles.leftLarge}>
    <Image className={styles.bgImg} alt='Left Background Image' src='/left-bg.svg' width='400' height='295'></Image>
    </div>
    <div className={styles.rightLarge}>
    <Image src='/right-bg.svg' alt='Right Background Image' width='400'  height='295'></Image>
    </div>
</div> 
        </>
    )
}
export default login;