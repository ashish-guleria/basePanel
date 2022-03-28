import toastr from "toastr";
import LoadingOverlay from "react-loading-overlay";
import styled, { css } from "styled-components";
import "toastr/build/toastr.min.css";

const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${(props) =>
    props.disappear &&
    css`
      display: block; /* show */
    `}
`;

toastr.options = {
  closeButton: true,
  debug: true,
  newestOnTop: false,
  progressBar: false,
  preventDuplicates: true,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  showEasing: "swing",
  hideEasing: "linear",
  hideMethod: "fadeOut",
  preventDuplicates: false,
};

export const deliveryStatus = {
  ASSIGNED: "Assigned",
  UNASSIGNED: "Unassigned",
  COMMENCED_PICK_UP: "Commenced pick up",
  PICKED_UP: "Picked up",
  COMMENCED_DROP_OFF: "Commenced drop off",
  DROP_OFF: "Dropped off",
  CANCELLED_BY_CUSTOMER: "Cancelled by customer",
  CANCELLED_BY_ADMIN: "Cancelled by admin",
};

export const toastError = (msg) => {
  toastr.error(msg);
};

export const toastSuccess = (msg) => {
  toastr.success(msg);
};

export const loading = (
  <DarkBackground disappear={!false}>
    <LoadingOverlay
      active={true}
      styles={{
        wrapper: {},
      }}
      spinner
      text="Loading your content..."
    />
  </DarkBackground>
);

export const validatePassword = (p) => {
  console.log("pass texts", p);
  let error = [];

  if (p.length < 8) {
    error.push("Your password must be at least 8 characters");
    console.log("<8......");
  }

  if (p.search(/[A-Z]/) < 0) {
    error.push("Your password must contain at least one upper case letter.");
  }

  if (p.search(/[a-z]/) < 0) {
    error.push("Your password must contain at least one lower case letter.");
  }

  if (p.search(/[0-9]/) < 0) {
    error.push("Your password must contain at least one digit.");
  }

  if (p.search(/[!@#\$%\^&\*_]/) < 0) {
    error.push(
      "Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]"
    );
  }

  return error;
};
