import React from "react";

const InvoiceDetails = () => {
    return (
        <>
            <div className="container">
                <div className="brand-section">
                    <div className="row bg-dark">
                        <div className="col-6 ">
                            <h1 className="text-white pt-3">INVOICE</h1>
                        </div>
                        <div className="col-6">
                            <div className="company-details text-end">
                                <p className="text-white ">Vishal Kumar patel</p>
                                <p className="text-white ">+91 639765XXXX</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body-section">
                    <div className="row">
                        <div className="col-6 ">
                            <h2 className="heading">Invoice No.: 001</h2>
                            <p className="sub-heading">Tracking No. fabcart2025 </p>
                            <p className="sub-heading">Order Date: 07-02-2023 </p>
                            <p className="sub-heading">Email Address:vishal@gmail.com </p>
                        </div>
                        <div className="col-6 d-grid justify-content-end ">
                            <p className="sub-heading">Full Name:vishal kumar patel  </p>
                            <p className="sub-heading">Address:noida sector-59 </p>
                            <p className="sub-heading">Phone Number: 6397656332 </p>
                            <p className="sub-heading"> Address:noida,Utter Pradesh,110001  </p>
                        </div>
                    </div>
                </div>
                <div className="body-section">
                    <h3 className="heading">Ordered Items</h3>
                    <br />
                    <table className="table-bordered">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th className="w-20">Price</th>
                                <th className="w-20">Quantity</th>
                                <th className="w-20">Grandtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Product Name</td>
                                <td>10</td>
                                <td>1</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td colspan="3" className="text-right">Sub Total</td>
                                <td> 10.XX</td>
                            </tr>
                            <tr>
                                <td colspan="3" className="text-right">Tax Total %1X</td>
                                <td> 2</td>
                            </tr>
                            <tr>
                                <td colspan="3" className="text-right">Grand Total</td>
                                <td> 12.XX</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <h3 className="heading">Payment Status: Paid</h3>
                    <h3 className="heading">Payment Mode: Cash on Delivery</h3>
                </div>
            </div>

        </>
    )
}

export default InvoiceDetails;