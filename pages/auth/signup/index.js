import styles from '../login.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
const icon = <FontAwesomeIcon icon={faLinkedinIn} />
const icon2 = <FontAwesomeIcon icon={faGoogle} />

const signup = () =>{
    const getPass=()=>{
        var a = document.getElementById('name').value
        var b = document.getElementById('email').value
        var c = document.getElementById('pass').value
        var d = document.getElementById('confirmPass').value

        if(c!=d){
            alert('Password donot Match')
        }
        else{
            localStorage.setItem('email',b)
            localStorage.setItem('password',c)
            alert('Id Is Created')
        }
    }
    

    return(
        <>
     <div className={styles.authBody}> 
   
       <div className={`${styles.authCard2} align-self-center`}>
           <div className={'text-center'}>
               
                 <Image alt="resume-logo" height='108' width='140' src='/resume.png'></Image>
           </div>
           <div className={'text-center'}> 
               <h3 >Create an Account</h3>
           </div>
           <form>

           
           <div className={'text-center px-2 py-2 '}>
               <input id='name' required minLength='3' type="text" className='form-control  mw-100 he-25' placeholder='Full Name' />
           </div>
           <div className={'text-center px-2 py-2'}>
               <input  id='email' type="email"   pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" title='Please enter correct email address'  required  className='form-control  mw-100 he-25' placeholder='Email'/>
           </div>
           <div className={'text-center px-2 py-2'}>
               <input  id='pass' type="password"  pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$" title='Password should contain minimum 6 characrters,1 capital letter and 1 symbol' required className='form-control  mw-100 he-25' placeholder='Password'/>
           </div>
           <div className={'text-center px-2 py-2'}>
               <input  id='confirmPass' type="password"  className='form-control  mw-100 he-25' placeholder='Confirm Password'/>
           </div>
           <div>
              <button onClick={()=>getPass()}  className={'button my-2 mx-4 p-2 w-88'}>Sign up</button>
           </div>
           </form>
           <div className={'text-center'}>
               <p className={'color-d mt-1'}>Sign up with</p>
                <a href='#'>
                <span className={styles.social}>
                <span className={styles.icon}>{icon2} </span>
                   <span className={styles.title}>Google</span>
                </span>
                </a>
                <a href='#'>
                <span className={styles.social}>
               <span className={styles.icon}>{icon} </span>
                <span className={styles.title}>Linkedin</span>
                </span>
                </a>
           </div>
              <div className={styles.footer}>
               <p>
               Already have an account?
               <Link href='/auth/login'>
               Sign in   
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
export default signup;