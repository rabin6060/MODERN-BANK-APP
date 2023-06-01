import { stats } from "../constant"
import styles from "../style"

const Stats = () => (
      <section className={`${styles.flexCenter}
        flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map(stat=>(
              <div key={stat.id} className={`flex-1 flex justify-start
                items-center xs:flex-col flex-row xs:mr-0 mr-1`}>
                <h4 className="font-poppins font-semibold
                  text-white xs:text-[40px] text-[30px] xs:leading-[53px]
                   leading-[43px]">{stat.value}</h4>
                <p className="font-poppins font-normal
                  text-gradient xs:text-[20px] text-[15px] xs:leading-[26px]
                   leading-[21px] uppercase ml-3">{stat.title}</p>
              </div>
            ))}
      </section>
)
export default Stats