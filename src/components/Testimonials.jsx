import { feedback } from "../constant"
import styles,{layout} from "../style"
import FeedbackCard from "../components/FeedbackCard"
 
 const Testimonials = () => {
   return (
     <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient"/>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-10 relative z-[1]">
          <h2 className={styles.heading2}>
           What people are <br className="sm:block hidden" /> saying about us
          </h2>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} max-w-[450px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1]">
            {
              feedback.map(card=>(
                <FeedbackCard key={card.id} {...card}/>
              ))
            }
        </div>
     </section>
   )
 }
 
 export default Testimonials