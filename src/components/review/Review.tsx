import { motion } from "motion/react";
import React from "react";
import Customer1 from "../../assets/image/customers/customer1.jpg";
import Customer2 from "../../assets/image/customers/customer2.jpg";
import Customer3 from "../../assets/image/customers/customer3.jpg";
import Chat from "../chat/Chat";

function Review() {
  return (
    <React.Fragment>
      <motion.div
        className="chat chat-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Chat
          key="ოლენა"
          username="ოლენა კოვალენკო"
          date="10 აგვისტო, 2025"
          image={Customer1}
          message="Отличный сервис. Нужно было сделать химчистку салона. Рекомендую!"
        />
      </motion.div>

      <motion.div
        className="chat chat-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Chat
          key="მაკო"
          username="მაკო ბურჯანაძე"
          image={Customer2}
          date="17 სექტემბერი, 2025"
          message="მადლობა 🙌🏻❤️"
        />
      </motion.div>

      <motion.div
        className="chat chat-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Chat
          key="თეა"
          username="თეა როსტომაშვილი"
          image={Customer3}
          date="5 ივლისი, 2025"
          message="100 %-ით ვუწევ რეკომენდაციას. სუპერ პროფესიონალი ტექნიკური პერსონალი!"
        />
      </motion.div>
    </React.Fragment>
  );
}

export default Review;
