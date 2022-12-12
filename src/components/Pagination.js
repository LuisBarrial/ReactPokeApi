import React from "react";

const Pagination = (props) =>{

    const onLeftClick=props.onLeftClick;
    const onRightClick=props.onRightClick;
    const page=props.page;
    const totalPages=props.totalPages;
    

    return (
        

        <div className="pagination">

            <button onClick={onLeftClick}>
                <div>{'<'}
                </div>
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div>
                    {'>'}
                </div>
            </button>


        </div>


    );
};

export default Pagination;