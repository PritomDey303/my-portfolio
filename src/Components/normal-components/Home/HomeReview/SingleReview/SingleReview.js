import Rating from "@material-ui/lab/Rating";
import React from "react";
import Comma from "../../../../../images/comma-updated.png";

export default function SingleReview(props) {
  const { name, email, description, rating, img } = props.review;
  return (
    <div className="text-center">
      <img src={Comma} alt="" className="mx-auto" style={{ width: "8%" }} />

      <p className="w-75 mx-auto my-2">{description}</p>
      <h3 className="my-4">
        <Rating name="read-only" value={rating} readOnly />{" "}
      </h3>
      <img
        src={img}
        alt=""
        className="rounded-circle mx-auto my-3"
        style={{ width: "80px", height: "80px" }}
      />

      <h5>{name}</h5>
      <h5>{email}</h5>
    </div>
  );
}
