import React from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from '../svg/IconSvg';

const Modal = ({ children, handleCLoseModal,btnClose = false, ...props }) => {

    // const { handleCLoseModal } = useModal();  // chú ý lỗi ở đây khi sử dụng hook
    // khi sử dụng handleCloseModal ở đây thì state isShow vẫn không thay đổi ở component header
    // khi đó chỉ duy nhất component modal cập nhật còn compoent header sẽ không rerender lại

    return (
        <div className="modal-wrapper">
            <div className="modal-overlay" onClick={handleCLoseModal}></div>
            <div className="modal-content">
                {children}
                {btnClose && (
                    <span className="modal-close" onClick={handleCLoseModal}>
                        <CloseIcon />
                    </span>
                )}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    btnClose: PropTypes.bool,
    handleCLoseModal: PropTypes.func.isRequired,
};

export default Modal;
