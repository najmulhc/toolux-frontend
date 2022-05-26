import React from "react";

const DeleteModal = ({ product, setTime }) => {
    const deleteProduct = (item) => {
        fetch(`https://hilly-view.herokuapp.com/product/${item._id}`, {
            method: "DELETE", 
            headers: {
                "content-type":"application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTime(12)
                return <></>
        })
    }
   return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">
                        Are you sure?
                    </h3>
                    <p className="py-4">
                        It seems you are going to delete <span className="font-semibold">{product.name}</span> from your inventory. Be sure before clicking the delete button because you can not undone this task.
                    </p>
                    <button className="btn btn-error" type="button" onClick={()=> deleteProduct(product)}>Delete</button>
                </div>
            </div>
        </div>
    );
}
export default DeleteModal;
