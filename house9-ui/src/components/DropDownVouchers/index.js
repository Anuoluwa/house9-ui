import React, { useState, useEffect } from 'react';
import { listVouchers } from '../../services/vouchers';

const DropDownVouchers = () => {
    const [vouchers, setVouchers] = useState([]);

    useEffect(() => {
        const fetchVouchers = async () => {
            const data  = await listVouchers()
            setVouchers(data)
        }
        fetchVouchers();
    }, []);

    return (
        <div>
            render drop downhere
        </div>
    )

}

export default DropDownVouchers;