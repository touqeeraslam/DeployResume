import styles from './template3.module.scss'
import Name from '@/components/name';
import Paragraph from '@/components/paragraph';
import Work from '@/components/WorkwithOneborder';
import Education from '@/components/educationwithOneborder';
import Contact from '@/components/contact2';
import Skill from '@/components/skillOneborderNOmargin';
const template3 = ()=>
{
return(
<>
<div className='font-century'>
<div>
<div className={'he-135 cv-bg py-4 '}>
        <Name />
         </div>
</div>
<div className='d-flex '>
<div className='w-75'>
<Paragraph />
<Work />
<Education />
</div>
<div className='w-25 cv-bg2'>
    
<Contact />
<Skill />
</div>

</div>    
</div>







</>
)

}
export default template3;