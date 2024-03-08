function Modal({children}){
    return(
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-outline btn-ghost absolute right-2 top-2"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
    </form>
     {children}
  </div>
</dialog>
    )
}

 {/* You can open the modal using document.getElementById('ID').showModal() method */}

 export default Modal;