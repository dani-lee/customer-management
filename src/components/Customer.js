import React from "react";

function Customer(props) {
  return (
    <div>
      <CustomerProfile image={props.image} />
      <CustomerInfo
        name={props.name}
        birthday={props.birthday}
        gender={props.gender}
      />
    </div>
  );
}

function CustomerProfile(props) {
  return (
    <div>
      <img src={props.image} alt="profile" />
    </div>
  );
}

function CustomerInfo(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
    </div>
  );
}

export default Customer;
