import toastr from "toastr";
import LoadingOverlay from "react-loading-overlay";

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
};
export const toastError = (msg) => {
  toastr.error(msg);
};
export const toastSuccess = (msg) => {
  toastr.success(msg);
};

export const loading = (
  <LoadingOverlay
    className="container"
    active={true}
    styles={{
      wrapper: {},
    }}
    content
    spinner
    text="Loading your content..."
  />
);
