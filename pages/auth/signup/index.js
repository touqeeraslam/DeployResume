import styles from '../login.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const icon = <FontAwesomeIcon icon={faLinkedinIn} />
const icon2 = <FontAwesomeIcon icon={faGoogle} />

const signup = () =>{
       const [name,setName] = useState('')
       const [email,setEmail] = useState('')
       const [password,setPassword] = useState('')
       const [cPassword,setCPassword] = useState('')

       const sendData = async() =>{
        try{
            if(password == cPassword){
                await axios.post('http://localhost:8000/users',{
            name:name,
            email:email,
            password:password,
            cPassword:cPassword
           }).then(()=>console.log('Posted')).catch((e)=>console.log('we are in catch error',e));
           setShowAlert(true)
      
            }else{
                setShow(true)
                null
                console.log('Password not match')
            }
        }
        catch(e){
            console.log('we are in catch error',e)
        }
       }
       const [show, setShow] = useState(false);
       const [showAlert, setShowAlert] = useState(false);
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
           <Alert  variant="danger" show={show}  onClose={() => setShow(false)} dismissible>
          Password don't match!
        </Alert>
        <Alert  variant="success" show={showAlert}  onClose={() => setShowAlert(false)} dismissible>
          Id Created Successfully!
        </Alert>
           <div className={'text-center px-2 py-2 '}>
               <input id='name' required minLength='3' type="text" className='form-control  mw-100 he-25' placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} />
           </div>
           <div className={'text-center px-2 py-2'}>
               <input  id='email' type="email"   pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" title='Please enter correct email address'  required  className='form-control  mw-100 he-25' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div className={'text-center px-2 py-2'}>
               <input  id='pass' type="password"  pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$" title='Password should contain minimum 6 characrters,1 capital letter and 1 symbol' required className='form-control  mw-100 he-25' placeholder='Password'
               value={password} onChange={(e)=>setPassword(e.target.value)}
               />
           </div>
           <div className={'text-center px-2 py-2'}>
               <input  id='confirmPass' type="password"  className='form-control  mw-100 he-25' placeholder='Confirm Password'
               value={cPassword} onChange={(e)=>setCPassword(e.target.value)}/>
           </div>
           <div>
              <button type='button' onClick={()=>sendData()}  className={'button my-2 mx-4 p-2 w-88'}>Sign up</button>
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