import { useState } from "react";
import { IoIosMan } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import "./Queue.css";

const QueueTracking = () => {
  // Sample slots
  const [slots, setSlots] = useState([
    { id: 1, time: "10:00 AM - 10:30 AM", persons: 5, completed: false },
    { id: 2, time: "11:00 AM - 11:30 AM", persons: 8, completed: false },

  ]);

  // Mark slot as completed
  const completeSlot = (slotId) => {
    setSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === slotId ? { ...slot, completed: true } : slot
      )
    );
  };

  return (
    <div className="queue-tracking p-4         ">
      <h2 className="text-xl font-bold mb-2">Queue Tracking</h2>
      <div className="slots mt-4 grid grid-cols-1 gap-4  ">
        {slots.map((slot) => (
          <div key={slot.id} className="slot-card border rounded-lg p-4 shadow-md "style={{width:'600px ',height:'200px'}}>
            <p className="font-semibold">{slot.time}</p>
            <div className="icons flex flex-wrap justify-center gap-2 mt-2">
              {[...Array(slot.persons)].map((_, i) => (
                slot.completed ? (
                  <FaCheckCircle key={i} className="text-green-500" />
                ) : (
                  <IoIosMan key={i} className="text-green-500" />
                )
              ))}
            </div>
            {!slot.completed && (
              <button
                className="bg-orange-500 text-white font-semibold flex items-center px-2 py-1 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md"
                onClick={() => completeSlot(slot.id)}
              >
                Complete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueueTracking;