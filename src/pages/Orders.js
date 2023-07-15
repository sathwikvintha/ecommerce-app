/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getorderedProduct?.orders
  );
  console.log(orderState);

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <>
      <BreadCrumb title="My Orders" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>Order Id</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount After Discount</h5>
              </div>
              <div className="col-3">
                <h5>Status</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            {orderState?.length > 0 ? (
              orderState?.map((item, index) => {
                return (
                  <div
                    style={{ backgroundColor: "grey" }}
                    className="row pt-3 my-3"
                    key={index}
                  >
                    <div className="col-3">
                      <p>{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPrice}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.orderStatus}</p>
                    </div>
                    <div className="col-12">
                      <div
                        className="row py-3"
                        style={{ backgroundColor: "#add8e6" }}
                      >
                        <div className="col-3">
                          <h6 className="text-black">Product Name</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-black">Quantity</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-black">Price</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-black">Color</h6>
                        </div>
                        {item?.orderItems.map((i, index) => {
                          return (
                            <div className="col-12" key={index}>
                              <div className="row p-3">
                                <div className="col-3">
                                  <p className="text-black">
                                    {i?.product?.title}
                                  </p>
                                </div>
                                <div className="col-3">
                                  <p className="text-black">{i?.quantity}</p>
                                </div>
                                <div className="col-3">
                                  <p className="text-black">{i?.price}</p>
                                </div>
                                <div className="col-3">
                                  <ul className="colors ps-0 ms-2">
                                    <li
                                      style={{
                                        backgroundColor: i?.color?.title,
                                      }}
                                    ></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="fs-3 text-center text-secondary">No Order</p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
