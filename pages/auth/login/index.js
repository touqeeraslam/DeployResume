import styles from '../login.module.scss'
import Router, { useRouter } from 'next/router';
import Image from 'next/image';
import { Alert } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
const icon = <FontAwesomeIcon icon={faLinkedinIn} />
const icon2 = <FontAwesomeIcon icon={faGoogle} />
import { useEffect, useState } from 'react';
import axios from 'axios';
const login = () =>{
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show,setShow] = useState(false)
   const getPass = async()=>{
     try{
        await axios.post('http://localhost:8000/users/login',{
            email:email,
            password:password
        }).then((res)=>{
            if(res.data == 'valid'){
                console.log('login valid information')
                router.push('/')
            }
            else{
                 setShow(true)
            }
            console.log(res.data)
        })
    
        
     }catch(e){
        console.log('catch',e)
     }
   }
    return(
        <>
     <div className={styles.authBody}>
       <div className={`${styles.authCard} align-self-center`}>
           <div className='text-center'>
                 <Image alt="resume-logo" height='108' width='140' src='/resume.png'></Image>
           </div>
           <div className={'text-center '}>
               <h3 >Sign-in to Your Account</h3>
              
           </div>
           <div className={'text-center px-2 py-2'}>
               <input id='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="text"   pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" title='Please enter correct email address' required className='form-control  mw-100 he-25' placeholder='Email Address' />
           </div>
           <div className={'text-center px-2 py-2'}>
               <input  id='pass' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className='form-control  mw-100 he-25' placeholder='Password'/>
           </div>
           <Alert  variant="danger" show={show}  onClose={() => setShow(false)} dismissible>
          I'd Not Found!
        </Alert>
           <div>
              <button type='button' onClick={()=>getPass()} className={'button my-2 mx-4 p-2 w-88 '}>Login</button>
           </div>
           <div className={'text-center'}>
               <p className={'color-d mt-1'}>Sign in with</p>
            
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
               <Link href="/auth/forgot">Forgot Your Password?</Link>
               </p>
               <p>
               Don't have an account?
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