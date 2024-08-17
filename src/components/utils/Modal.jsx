import '../styles/Modal.css'

const Modal = ({toggleShow,icon,title,message}) => {

  const closeModal = () => {

    toggleShow(false);
    // document.body.style.overflow = "scroll";

  };
 

return (
  <div className="overlay flex items-center justify-center top-0 left-0 w-screen h-screen fixed bg-black bg-opacity-50 z-50">
      <div className="modal w-[400px] h-[400px] max-w-[400px] max-h-[400px] p-11 flex flex-col items-center justify-center bg-[#101112]">
      <div className="modal-header flex flex-col justify-center items-center m-2">
        <div className="modal-icon max-w-24 max-h-24 py-1">
          <img src={icon} alt="email sent" />
        </div>
        <h1 className="modal-title text-center font-extrabold text-3xl text-accent">
          {title}
        </h1>
      </div>

      <div className="message text-center">
        <p>
          {message}
        </p>
      </div>

      <div className="modal-footer flex flex-col justify-center items-center m-3 gap-5">
        <button onClick={closeModal} className="text-lg text-black bg-accent flex justify-center items-center hvr-bounce-to-right w-28 h-8 ">
            OK
        </button>
      </div>
    </div>
  </div>
);


}

export default Modal;