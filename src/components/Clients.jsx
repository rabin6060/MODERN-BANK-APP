import styles from "../style"
import { clients } from "../constant"

const Clients = () => (
  <section className={`${styles.flexCenter}`}>
    <div className="flex justify-center items-center flex-wrap w-full">
      {
        clients.map(client=>(
          <div key={client.id} className={`flex-1 flex justify-center
          items-center sm:min-w-[192px] min-w-[120px]
          `}>
            <img src={client.logo} alt="all" className="sm:w-[192px]
                w-[100px] object-contain sm:mb-5 mb-0"/>
          </div>
        ))
      }
    </div>
  </section>
)

export default Clients