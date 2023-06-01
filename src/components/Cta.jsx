import styles from "../style"
import Button from "./Button"

const Cta = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}
                        ${styles.marginY} ${styles.paddingX} bg-black-gradient-2 box-shadow
                        sm:flex-row flex-col rounded-[20px] `}>
    
      <div className=" flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div>
        <Button/>
      </div>
  </section>
)

export default Cta